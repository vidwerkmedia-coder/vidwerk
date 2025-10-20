import { RainbowButton } from '@/components/ui/rainbow-button'
import { CircleCheckBig } from 'lucide-react'
import React from 'react'

function LongPricing() {
    return (
        <div>
            {/* PRICING CARD PARENT */}
            <div className='pt-4 h-fit md:w-[80%] lg:w-full relative flex flex-row flex-wrap gap-8 md:gap-20 justify-center items-center text-white'>
                {/* PRICING CARD */}
                <div className='border border-gray-800 h-fit w-[20rem] rounded-xl  font-inter text-[16px] p-4 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"'>
                        {/* PRICING-PRICE */}
                        <h2 className='opacity-80 font-light'>Starter package</h2>
                        <h2 className=' text-[36px] pt-2 pb-6 font-medium'>$35 <span className='text-[16px] opacity-80 font-light'>/video</span> </h2>
                        <RainbowButton variant="dark" className='text-center hover:scale-102 w-full border px-24 py-2 font-medium rounded-lg text-[16px]' ><a href="https://wa.me/+919389685509">Get Started</a></RainbowButton>
                        <hr className='opacity-40 mt-8 mb-3' />
                        {/* FEATURES */}
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 8min video length</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Topic research</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 1,300 word script</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Professional voice over</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Basic editing</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 2 thumbnail concepts</h2>
                </div>
                {/* PRICING CARD */}
                <div className='border border-gray-800 overflow-hidden relative h-fit scale-105 w-[20rem] rounded-xl font-inter text-[16px] p-4 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"'>
                        <div className='h-[4rem] w-[6rem] bg-[#8083ff] absolute left-30 top-[-5%] blur-[70px]'></div>
                        {/* PRICING-PRICE */}
                        <h2 className='opacity-80 font-light'>Professional package</h2>
                        <h2 className=' text-[36px] pt-2 pb-6 font-medium'>$55 <span className='text-[16px] opacity-80 font-light'>/video</span> </h2>
                        <RainbowButton className='text-center hover:scale-102 w-full border text-black px-24 py-2 font-medium rounded-lg text-[16px]' ><a href="https://wa.me/+919389685509">Get Started</a></RainbowButton>
                        <hr className='opacity-40 mt-8 mb-3' />
                        {/* FEATURES */}
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 15min video length</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Advanced research</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 2,400 words script</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Premium voice over</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Motion graphics</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 3 thumbnail concepts</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 3 revisions</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Youtube SEO</h2>
                </div>
                {/* PRICING CARD */}
                <div className='border border-gray-800 h-fit w-[20rem] rounded-xl scale-95 font-inter text-[16px] p-4 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"'>
                        {/* PRICING-PRICE */}
                        <h2 className='opacity-80 font-light'>Enterprise package</h2>
                        <h2 className=' text-[36px] pt-2 pb-6 font-medium'>$80 <span className='text-[16px] opacity-80 font-light'>/video</span> </h2>
                        <RainbowButton variant="dark" className='text-center hover:scale-102 w-full border px-24 py-2 font-medium rounded-lg text-[16px]' ><a href="https://wa.me/+919389685509">Get Started</a></RainbowButton>
                        <hr className='opacity-40 mt-8 mb-3' />
                        {/* FEATURES */}
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 25min video length</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Comprehensive research</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 4,000 words script</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Elite voice over</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Cinematic editing</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 4 thumbnail concepts</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Unlimited revisions</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Full SEO package</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> 3 social media clips</h2>
                </div>
            </div>  
        </div>
    )
}

export default LongPricing
