import { RainbowButton } from '@/components/ui/rainbow-button'
import { CircleCheckBig } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Pricing() {
    return (
        <div id='pricing' className='mt-[5rem] mb-[2rem] h-fit sm:w-[80vw] md:w-[100%] relative flex flex-col justify-center items-center font-inter text-[#f0f0f0]'>
            <h2 className='text-[2.2rem] md:text-[3rem] font-normal tracking-wide'>Pricing</h2>
            <p className="text-[16px] font-montserrat font-normal text-[#ccc] capitalize opacity-90">A plan for every need</p>
            <div className='flex justify-center md:justify-start gap-20 w-[100%] pl-[0%] lg:pl-[14%] md:pl-[12%] text-[#fff] font-montserrat tracking-tight pt-12 text-[16px] md:text-[18px]'>
                <NavLink to="/" className={({isActive}) => `cursor-pointer relative inline-block ${isActive ? "after:opacity-100" : "after:opacity-0" } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#fff] after:via-[#d7e2ff] after:to-[#8083ff] after:rounded-full rounded-lg px-4 py-2`}>Long Videos</NavLink>
                <NavLink to="/short" className={({isActive}) => `cursor-pointer relative inline-block ${isActive ? "after:opacity-100" : "after:opacity-0" } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#fff] after:via-[#d2e3ff] after:to-[#8083ff] after:rounded-full rounded-lg px-4 py-2`}>Short Videos</NavLink>
            </div>
        </div>
    )
}

export default Pricing
