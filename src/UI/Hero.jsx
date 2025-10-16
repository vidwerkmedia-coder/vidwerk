import { motion } from 'framer-motion'
import BlurText from '@/components/BlurText'
import Calendar from '@/assets/calendaricon.svg';
import { RainbowButton } from '@/components/ui/rainbow-button';
import React from 'react'
import { ChevronRight } from 'lucide-react';
import DarkVeil from './DarkVeil';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Hero() {
    return (
        <div id='home' className='pt-36 pl-[5%] md:pl-[10%] relative overflow-hidden w-full h-fit pb-[5rem]'>
            {/* Background */}
            <DarkVeil />
            {/* HERO AVAILABLE */}
            <BlurText text='⦿&nbsp; VidWerk - Video Production Agency' delay={100}
            animateBy='words' direction='top'
            className='text-[#d9d9d9] shadow-xl font-montserrat font-light text-[14px] border border-[#685c83] bg-[rgb(255, 255, 255, 0.4)] w-fit px-4 py-1 rounded-3xl backdrop-blur-3xl'
            />
            {/* HERO HEADING */}
            <BlurText text="Transform your videos into passive income" delay={100} 
            animateBy="words" direction="top" 
            className="mt-3 mb-3 md:mb-6 text-white text-[2.4rem] md:text-[3.7rem] font-inter font-normal w-[90%] md:w-[50%] capitalize tracking-normal md:tracking-tighter"/>
            {/* HERO DESCRIPTION */}
            <BlurText text="We produce high-retention videos designed to engage audiences and drive lasting revenue." delay={100} 
            animateBy="words" direction="top" 
            className="mt-0 mb-2 md:mb-8 text-[#d9d9d9] md:text-white text-[16px] font-montserrat font-normal w-[80%] md:w-[55%]"/>
            {/* HERO BUTTONS */}
            <motion.div className='flex flex-row flex-wrap gap-x-6 md:gap-x-10 gap-y-4'
               initial={{ opacity: 0, filter: 'blur(10px)', y: 0 }}
               animate={{ opacity: 1, filter: 'blur(0px)', y: 20 }}
               transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}>
               <RainbowButton className='text-black rounded-xl font-inter tracking-tight text-[16px] px-4 py-1 h-11'>
                 <a href="https://wa.me/+919389685509" target='_blank' className='flex flex-row flex-nowrap gap-2 items-center font-medium'>
                   <img src={Calendar} className='calendar h-[22px]' alt="Calendar" />
                   Book an Intro Call
                 </a>
               </RainbowButton>
                <RainbowButton variant="dark" className='text-[#f0f0f0] rounded-xl font-inter tracking-tight text-[16px] px-4 py-1 h-11'>
                 <a href="#work" className='flex flex-row flex-nowrap gap-2 items-center font-medium'>
                   View Work<ChevronRight />
                 </a>
               </RainbowButton>
             </motion.div>
        </div>
    )
}

export default Hero
