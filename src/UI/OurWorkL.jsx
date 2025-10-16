import { ChevronRight, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'
import React, { useRef, useEffect, useState, useCallback } from 'react'
import YouTube from "react-youtube";

function OurWorkL() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const playersRef = useRef([]);
    const [loaded, setLoaded] = useState({ 0: true });
    const [activeIndex, setActiveIndex] = useState(0);

    const videoIds = [
        "PQ9m-__Ha-s",
        "1zU1t139Dew",
        "wnrEfTC1-E8",
        "NWV4CIhY39k",
        "Wt78yQIHw2A",
        "qW2vmH06tcw",
        "6h6IOLdOnZA",
        "n1cDIZUuOtg"
    ];

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            disablekb: 1,
            iv_load_policy: 3,
            mute: 0,
            playsinline: 1,
            enablejsapi: 1,
            loop: 0,
        },
    };

    const onReady = (event, index) => {
        playersRef.current[index] = event.target;
    };

    // Lazy load videos
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = parseInt(entry.target.dataset.index, 10);
                if (entry.isIntersecting) setLoaded(prev => ({ ...prev, [index]: true }));
            });
        }, { rootMargin: "800px 0px" });

        const elements = document.querySelectorAll(".video-container");
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Play the most visible video
    const playMostVisibleVideo = useCallback(() => {
        if (!containerRef.current) return;

        const children = Array.from(containerRef.current.children);
        let maxVisibleRatio = 0;
        let mostVisibleIndex = activeIndex;

        children.forEach((child, index) => {
            const rect = child.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
            const ratio = Math.max(0, visibleWidth / rect.width);
            if (ratio > maxVisibleRatio) {
                maxVisibleRatio = ratio;
                mostVisibleIndex = index;
            }
        });

        if (mostVisibleIndex !== activeIndex) {
            setActiveIndex(mostVisibleIndex);
            playersRef.current.forEach((player, i) => {
                if (!player) return;
                if (i === mostVisibleIndex) player.playVideo();
                else player.pauseVideo();
            });
        }
    }, [activeIndex]);

    // Scroll / swipe event for carousel
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isDragging = false;

        const handleScroll = () => {
            if (!isDragging) playMostVisibleVideo();
        };

        const handleTouchStart = () => { isDragging = true; };
        const handleTouchEnd = () => {
            isDragging = false;
            playMostVisibleVideo();
        };

        container.addEventListener('scroll', handleScroll);
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [playMostVisibleVideo]);

    // Scroll to section -> autoplay first video, leave section -> pause all
    useEffect(() => {
        const handleSectionVisibility = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible && playersRef.current[0]) {
                playersRef.current[0].playVideo();
                setActiveIndex(0);
            } else {
                playersRef.current.forEach(player => player?.pauseVideo());
            }
        };

        window.addEventListener('scroll', handleSectionVisibility, { passive: true });
        // Run on mount in case section already visible
        handleSectionVisibility();

        return () => window.removeEventListener('scroll', handleSectionVisibility);
    }, []);

    // Carousel buttons
    const scrollByAmount = useCallback((amount) => {
        if (!containerRef.current) return;
        containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        setTimeout(() => playMostVisibleVideo(), 300);
    }, [playMostVisibleVideo]);

    return (
        <div ref={sectionRef} className='flex flex-col gap-6 text-white font-inter pl-[5%] lg:pl-0 md:ml-[2%] md:w-[90vw]'>
            <h2 className='text-[17px] font-montserrat font-normal tracking-wide capitalize flex flex-row justify-start items-center gap-2 opacity-90 text-[#d9d9d9] mt-[1rem] lg:ml-[5rem]'>
                Long Videos <ChevronRight color='#d9d9d9' />
            </h2> 

            <div className='relative max-w-[90vw] md:max-w-[90vw] lg:ml-[5rem]'>
                <button
                    onClick={() => scrollByAmount(-400)}
                    className='absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full z-10'
                >
                    <ChevronLeftCircle size={24} />
                </button>
                <button
                    onClick={() => scrollByAmount(400)}
                    className='absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full z-10'
                >
                    <ChevronRightCircle size={24} />
                </button>

                <div
                    ref={containerRef}
                    className='flex flex-row gap-4 overflow-x-scroll pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth'
                >
                    {videoIds.map((id, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className='video-container border-1 border-[#353535] relative rounded-2xl overflow-hidden flex-shrink-0 object-contain snap-center w-full md:w-[560px] aspect-video bg-black'
                        >
                            {loaded[index] ? (
                                <YouTube
                                    videoId={id}
                                    opts={opts}
                                    className="w-full h-full"
                                    onReady={(event) => onReady(event, index)}
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center text-gray-400 text-sm">
                                    Loading video...
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurWorkL;
