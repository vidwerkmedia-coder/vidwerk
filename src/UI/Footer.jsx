import { Instagram, Linkedin, MessageSquare } from 'lucide-react'
import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='footer' className="h-fit pb-6 mt-[0rem] ml-[5%] md:max-w-[100vw] lg:max-w-[100vw] overflow-hidden flex flex-col justify-center items-center bg-transparent">
      {/* Large faint title */}
      <h4 className="text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-black font-inter tracking-widest opacity-7 text-[#d9d9d9] text-center leading-none">
        VIDWERK
      </h4>

      {/* Main content */}
      <div className="text-white font-inter flex flex-col md:flex-row flex-wrap justify-between items-start gap-4 md:gap-20 w-full px-6 sm:px-8 md:px-0 mt-6 max-w-[1200px] mx-auto">
        
        {/* Left Section */}
        <div className="flex flex-col justify-start items-start text-center md:text-left max-w-[22rem]">
          <div className="flex flex-row gap-4 items-center mb-2 md:mb-4 justify-center md:justify-start">
            <img src="/Logo.png" alt="Vidwerk logo" className="w-[3rem] sm:w-[3.5rem]" />
            <h2 className="font-inter font-semibold tracking-wide text-[1.4rem] sm:text-[1.6rem] bg-gradient-to-r from-[#8083ff] via-[#d2e3ff] to-[#fff] bg-clip-text text-transparent">
              Vidwerk Media
            </h2>
          </div>
          <p className="text-[#d9d9d9] text-left opacity-80 text-[1rem] leading-relaxed">
            Clean cuts. Smooth flow. Bold impact.
            That’s what defines Vidwerk.
            We shape visuals that speak without words.
            Where simplicity meets cinematic craft.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start text-left">
          <h4 className="text-[1.3rem] text-[#d9d9d9] opacity-100 mt-2 font-medium mb-2">Contact</h4>
          <h4 className="text-[1rem] text-[#d9d9d9] opacity-60 mb-1">Email</h4>
          <a href="mailto:vidwerkmedia@gmail.com" className="font-montserrat underline opacity-80 underline-offset-3 text-sm sm:text-base">
            vidwerkmedia@gmail.com
          </a>

          <h4 className="text-[1rem] text-[#d9d9d9] opacity-60 pt-6 mb-1">Phone Number</h4>
          <a href="https://wa.me/+919389685509" className="font-montserrat underline opacity-80 underline-offset-3 text-sm sm:text-base">
            +919389685509
          </a>

          <div className="flex flex-row justify-center md:justify-start gap-5 pt-6">
            <a href="http://www.linkedin.com/in/vidwerk-media-8364bb389" className="border border-[#353535] bg-zinc-900 p-2 rounded-lg opacity-80 hover:opacity-100 transition">
              <Linkedin size={26} strokeWidth={1} />
            </a>
            <a href="/" className="border border-[#353535] bg-zinc-900 p-2 rounded-lg opacity-80 hover:opacity-100 transition">
              <Instagram size={26} strokeWidth={1} />
            </a>
            <a href="https://wa.me/+919389685509" target='_blank' className="border border-[#353535] bg-zinc-900 p-2 rounded-lg opacity-80 hover:opacity-100 transition">
              <MessageSquare size={26} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col justify-center items-center sm:items-center text-center sm:text-center mt-12 sm:mt-16">
        <p className="text-[#d9d9d9] opacity-80 text-[0.85rem] sm:text-[0.9rem] font-inter flex items-center gap-1 flex-nowrap">
          <span className="text-[1rem] ">©</span> {currentYear} VidWerk Media. All rights reserved.
        </p>
        <p className="text-[#d9d9d9] text-[0.85rem] sm:text-[0.9rem] pt-1 font-inter">
          <span className='opacity-80'>Developed </span> <span className='opacity-80'>by Aditya Jha.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
