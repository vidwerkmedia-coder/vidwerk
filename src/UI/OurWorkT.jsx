import { ChevronLeftCircle, ChevronRight, ChevronRightCircle } from 'lucide-react';
import React, { useRef } from 'react';
import thumbnail01 from '@/assets/thumbnail01.jpg';
import thumbnail02 from '@/assets/thumbnail02.jpg';
import thumbnail03 from '@/assets/thumbnail03.jpg';
import thumbnail04 from '@/assets/thumbnail04.jpg';
import thumbnail05 from '@/assets/thumbnail05.jpg';
import thumbnail06 from '@/assets/thumbnail06.jpg';
import thumbnail07 from '@/assets/thumbnail07.png';
import thumbnail08 from '@/assets/thumbnail08.jpg';
import thumbnail09 from '@/assets/thumbnail09.jpg';

function OurWorkT() {
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const thumbnails = [
    thumbnail01,
    thumbnail09,
    thumbnail03,
    thumbnail04,
    thumbnail05,
    thumbnail06,
    thumbnail08,
    thumbnail02,
  ];

  return (
    <div className="flex flex-col gap-6 text-white font-inter pl-[5%] lg:pl-0 md:ml-[2%] md:w-[90vw] mt-[1rem]">
      {/* Section Title */}
      <h2 className='text-[17px] font-montserrat font-normal tracking-wide capitalize flex flex-row justify-start items-center gap-2 opacity-90 text-[#d9d9d9] mt-[1rem] lg:ml-[5rem]'>
          Thumbnails <ChevronRight color='#d9d9d9' />
      </h2> 

      {/* Scroll Buttons */}
      <div className='relative max-w-[90vw] md:max-w-[90vw] lg:ml-[5rem]'>
      <button
        onClick={() => scrollByAmount(-400)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full z-10 transition"
      >
        <ChevronLeftCircle size={28} />
      </button>

      <button
        onClick={() => scrollByAmount(400)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full z-10 transition"
      >
        <ChevronRightCircle size={28} />
      </button>

      {/* Thumbnails Container */}
      <div
        ref={scrollRef}
        className="flex flex-row gap-4 overflow-x-scroll pb-6 pl-[5%] md:pl-0 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >
        {thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className="border border-[#353535] rounded-2xl snap-center 
                       w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[37%] 
                       aspect-[16/9] object-contain hover:scale-[1.02] transition-transform duration-300"
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default OurWorkT;
