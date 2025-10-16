import { RainbowButton } from '@/components/ui/rainbow-button'
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import { Moon } from 'lucide-react';

function Header() {
  const[hamburger, setHamburger] = useState(false);
    return (
        <div>
            {/* NAVBAR */}
            <nav className='hidden md:flex fixed flex-row justify-evenly items-center bg-[rgba(0, 0, 0, .9)] backdrop-blur-xl text-[#f9f9f9] h-[8vh] w-[100vw] md:w-[100%] px-0 z-50'>
                <a href="/" id='logo'><img className='h-[4rem]' src="/Logo.png" alt="" /></a>
                <div className='flex flex-row justify-evenly items-center w-[50%]'>
                <li className='list-none text-[#d0d0d0] text-[15px] font-montserrat tracking-tight cursor-pointer font-normal hover:bg-[rgba(255,255,255,0.15)] hover:rounded-lg px-4 py-2'><a href="#features">Features</a></li>
                <li className='list-none text-[#d0d0d0] text-[15px] font-montserrat tracking-tight cursor-pointer font-normal hover:bg-[rgba(255,255,255,0.15)] hover:rounded-lg px-4 py-2'><a href="#pricing">Pricing</a></li>
                <li className='list-none text-[#d0d0d0] text-[15px] font-montserrat tracking-tight cursor-pointer font-normal hover:bg-[rgba(255,255,255,0.15)] hover:rounded-lg px-4 py-2'><a href="#work">Work</a></li>
                <li className='list-none text-[#d0d0d0] text-[15px] font-montserrat tracking-tight cursor-pointer font-normal hover:bg-[rgba(255,255,255,0.15)] hover:rounded-lg px-4 py-2'><a href="#reviews">Testimonials</a></li>
                </div>
                <RainbowButton className='bg-white text-black px-4 py-1 rounded-xl text-[16px] tracking-tight'><a href="#contact">Contact Us</a></RainbowButton>
            </nav>
            {/* MOBILE NAVBAR */}
            <div className='fixed py-[1vh] w-full md:hidden px-4 bg-[rgba(0, 0, 0, .9)] backdrop-blur-2xl flex flex-row justify-between items-center z-50'>
              <img className='h-[58px]' src="/Logo.png" alt="" />
              <div className='flex flex-nowrap justify-center items-center gap-6'>
              {/* <Moon size={26} color='white' strokeWidth={2} /> */}
              <div className='hamburger md:hidden block'>
                <Hamburger size={26} color='white' toggled={hamburger} toggle={setHamburger}/>
                </div>
              </div>
            </div>
            {/* HAMBURGER EXPANDED */}
            <div className={`fixed w-[100%] py-8  md:hidden flex justify-center items-center flex-col mt-18 z-50 bg-[rgba(0, 0, 0, .9)] backdrop-blur-2xl text-white text-[18px] shadow-lg rounded-b-[20px] transition-all duration-300 ease-in-out origin-top
               ${hamburger ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
             `}> <ul className='w-[100%] flex justify-center px-4  flex-col gap-5 font-montserrat'>
                       <a onClick={() => setHamburger(false)}  href="#features" className='ml-2.5'>
                       Features</a>
                       <a onClick={() => setHamburger(false)}  href="#pricing" className='ml-2.5'>
                       Pricing</a>
                       <a onClick={() => setHamburger(false)}  href="#work" className='ml-2.5'>
                       Work</a>
                       <a onClick={() => setHamburger(false)}  href="#reviews" className='ml-2.5'>
                       Testimonials</a>
                       <RainbowButton  className='ml-2.5 text-black w-fit text-[16px] rounded-xl py-2'>
                       <a onClick={() => setHamburger(false)}  href="#contact">
                       Contact Us</a></RainbowButton>
                </ul>
            </div>
        </div>
    )
}

export default Header
