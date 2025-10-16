import { RainbowButton } from '@/components/ui/rainbow-button'
import React from 'react'

function Form() {
    return (
        <form action="https://formspree.io/f/mjkalggz" method='POST' id='contact' className='text-white font-inter flex flex-col justify-center items-center mb-[5rem]'>
        <h2 className='font-inter text-[2.2rem] md:text-[3rem]'>Contact Us</h2>
        <p className="text-[16px] font-montserrat font-normal text-[#ccc] opacity-90">Our team will contact you in 24hours.</p>
        <input type="text" id="name" required name="name" placeholder="Your Name" className='border border-[#656565] md:w-[25vw] w-[80%] py-4 px-2 rounded-xl mt-[2rem] mb-4 text-[#d9d9d9] outline-none'/>
        <input type="email" id="email" required name="email" placeholder="Your Email" className='border border-[#656565] md:w-[25vw] w-[80%] py-4 px-2 rounded-xl  mb-4 text-[#d9d9d9] outline-none'/>
        <textarea type="text" id="message" name="message" placeholder="Your Message" className=' border border-[#656565] md:w-[25vw] w-[80%] py-4 px-2 rounded-xl mb-4 h-30 text-[#d9d9d9] outline-none'/>
        <RainbowButton  className='md:w-[25vw] w-[80%] py-4 px-2 rounded-xl text-black font-inter font-medium h-[3rem] text-[17px]'><button type='submit' >Send Message</button>
        </RainbowButton>
        </form>
    )
}

export default Form
