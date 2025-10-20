import { CircleCheck, Film, PenLine, SearchCheck } from 'lucide-react'
import React from 'react'
import Graphic01 from '@/assets/graphic-01.jpg';

function Process() {
    return (
        <div id='process' className='mt-[5rem] h-fit pl-[5%] lg:pl-[9%] md:pl-[12%] md:w-[90%] relative flex flex-col justify-center lg:ml-[5rem] md:ml-[0%] font-inter text-[#f0f0f0]'>
            <h2 className='text-[2.2rem] md:text-[3rem] font-normal tracking-wide capitalize'>process</h2>
            <p className="text-[16px] font-montserrat font-normal text-[#ccc] capitalize opacity-90">our simple process to your growth</p>
            {/* STEPPER */}
        <div className='flex justify-start gap-y-10 gap-x-0 md:gap-x-30 md:gap-y-20 flex-wrap items-center'>
        <ol class=" overflow-hidden space-y-8 mt-8">
          <li class="relative px-0 md:px-4 flex-1 pt-6 ">
              <a  href="#" class="flex items-center font-medium w-full hover:scale-105 transition-all duration-350">
                  <span class="w-12 h-12 md:w-16 md:h-16 z-20 bg-zinc-950 border-2 border-[#353535] rounded-full flex justify-center items-center mr-3 text-white">
                      <SearchCheck size={28} strokeWidth={1.2} className='opacity-70'/>
                  </span>
                  <div class="block w-[80%]">
                      <h4 class="text-[16px] text-[#fff] opacity-95 font-inter font-medium">Strategy & Research</h4>
                      <span class="text-[15px] font-light opacity-65">We analyze your niche and identify high-potential topics</span>
                  </div>
              </a>
          </li>
          <li class="relative px-0 md:px-4 flex-1 pt-6 after:content-[''] ">
              <a href='#' class="flex items-center font-medium w-full hover:scale-105 transition-all duration-350  ">
                  <span class="w-12 h-12 md:w-16 md:h-16 z-20 bg-zinc-950  border-2 border-[#353535] rounded-full flex justify-center items-center mr-3 text-[16px] text-white">                      
                    <PenLine size={22} strokeWidth={1.2} className='opacity-70'/>
                  </span>
                  <div class="block w-[80%]">
                      <h4 class="text-[16px]  text-[#fff] opacity-95 font-inter font-medium">Script Writing</h4>
                      <span class="text-[15px] font-light opacity-65">Crafting retention-optimized scripts that convert viewers</span>
                  </div>
              </a>
          </li>
          <li class="relative px-0 md:px-4 flex-1 pt-6 after:content-[''] ">
              <a href='#' class="flex items-center font-medium w-full hover:scale-105 transition-all duration-350  ">
                  <span class="w-12 h-12 md:w-16 md:h-16 z-20 bg-zinc-950  border-2 border-[#353535] rounded-full flex justify-center items-center mr-3 text-[16px] text-white">
                      <Film size={24} strokeWidth={1.2} className='opacity-70'/>
                  </span>
                  <div class="block w-[80%]">
                      <h4 class="text-[16px]  text-[#fff] opacity-95 font-inter font-medium">Production</h4>
                      <span class="text-[15px] font-light opacity-65">Professional voice over and dynamic video editing</span>
                  </div>
              </a>
          </li>
          <li class="relative px-0 md:px-4 flex-1 pt-6">
              <a href='#' class="flex items-center font-medium w-full hover:scale-105 transition-all duration-350  ">
                  <span class="w-12 h-12 md:w-16 md:h-16 bg-zinc-950 z-20  border-2 border-[#353535] text-white rounded-full flex justify-center items-center mr-3 text-[16px] ">
                      <CircleCheck size={28} strokeWidth={1.2} className='opacity-70'/>
                  </span>
                  <div class="block w-[80%]">
                      <h4 class="text-[16px]  text-[#fff] opacity-95 font-inter font-medium">Delivery & Optimization</h4>
                      <span class="text-[15px] font-light opacity-65">Final delivery with SEO optimization for maximum reach</span>
                  </div>
              </a>
          </li>
        </ol>
        {/* <img src={Graphic01} alt="" className='w-[20rem] md:w-[30rem] rounded-xl border opacity-70 md:opacity-90 border-[#353535]' /> */}
        </div>
        </div>
    )
}

export default Process
