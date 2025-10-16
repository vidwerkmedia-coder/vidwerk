import React, { useState } from 'react';
import {
  ChartLine,
  ChevronRight,
  Clapperboard,
  ImagePlay,
  Mic,
  ScrollText,
  SquareLibrary,
} from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

const projectData = [
  {
    icon: <SquareLibrary size={28} strokeWidth={1} />,
    title: 'Strategic Research',
    desc: 'Data-driven topic selection and competitor analysis to ensure your content performs',
  },
  {
    icon: <ScrollText size={28} strokeWidth={1} />,
    title: 'Script Writing',
    desc: 'Retention-optimized scripts designed to keep viewers watching until the end',
  },
  {
    icon: <Mic size={28} strokeWidth={1} />,
    title: 'Voice Over',
    desc: 'Professional voice artists that build trust and authority with your audience',
  },
  {
    icon: <Clapperboard size={28} strokeWidth={1} />,
    title: 'Video Editing',
    desc: 'Dynamic editing with custom graphics and sound design for maximum watch time',
  },
  {
    icon: <ImagePlay size={28} strokeWidth={1} />,
    title: 'Thumbnail Design',
    desc: 'Psychology-driven thumbnails proven to achieve high click-through rates and views.',
  },
  {
    icon: <ChartLine size={28} strokeWidth={1} />,
    title: 'SEO Optimization',
    desc: 'Complete YouTube SEO package including titles, descriptions, and tags',
  },
];

function Features() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="features"
      className="features mt-[5rem] md:pt-[10rem] h-fit sm:w-[80vw] md:w-[100%] relative flex flex-col justify-center items-center font-inter text-[#f0f0f0]"
    >
      <h2 className="text-[2.2rem] md:text-[3rem] font-normal tracking-wide">
        What We Offer
      </h2>

      <div className="py-12 flex flex-wrap gap-6 md:gap-16 w-[80vw] justify-center items-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            onClick={() => toggleActive(index)} // ✅ works on mobile Safari
            className="group relative h-fit w-[20rem] font-inter rounded-xl bg-zinc-950 p-4 flex flex-col text-left shadow-3xl border border-gray-800 cursor-pointer select-none"
          >
            <div className="flex gap-3 md:gap-4 justify-center flex-col text-left">
              <span className="opacity-50 border border-[#353535] flex justify-center items-center bg-zinc-900 w-fit p-2 rounded-lg">
                {project.icon}
              </span>
              <h2 className="text-[18px] font-medium tracking-tight font-montserrat">
                {project.title}
              </h2>
              <p className="font-light text-[16px] text-[#ccc] capitalize opacity-70">
                {project.desc}
              </p>
            </div>

            {/* ✅ BorderBeam works on hover (desktop) and tap (mobile) */}
            <BorderBeam
              duration={5}
              size={100}
              className={`
                absolute inset-0 rounded-xl pointer-events-none
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100
                ${activeIndex === index ? 'opacity-100' : ''}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
