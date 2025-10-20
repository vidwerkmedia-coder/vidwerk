import { RainbowButton } from '@/components/ui/rainbow-button'
import { CircleCheckBig } from 'lucide-react'
import React from 'react'

function ShortPricing() {
    return (
        <div>
            {/* PRICING CARD PARENT */}
            <div className='pt-4 h-fit w-full relative flex flex-row flex-wrap gap-8 md:gap-20 justify-center items-center text-white'>
                {/* PRICING CARD */}
                <div className='border border-gray-800 h-fit w-[20rem] rounded-xl font-inter text-[16px] p-4 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"'>
                        {/* PRICING-PRICE */}
                        <h2 className='opacity-80 font-light'>Starter package</h2>
                        <h2 className=' text-[36px] pt-2 font-medium'>$25 <span className='text-[16px] opacity-80 font-light'>/video</span> </h2>
                        <p className='text-[14px] pt-2 pb-6 opacity-60 font-montserrat font-regular'>Best for creators, short-form content, reels, tiktoks</p>
                        <RainbowButton variant="dark" className='text-center hover:scale-102 w-full border px-24 py-2 font-medium rounded-lg text-[16px]' ><a href="https://wa.me/+919389685509">Get Started</a></RainbowButton>
                        <hr className='opacity-40 mt-8 mb-3' />
                        {/* FEATURES */}
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> $250/month for up to 12 reels (upto 60 sec)</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Basic cutting & pacing</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Transitions & text animation</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Colour correction</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Background music & SFX</h2>
                </div>
                {/* PRICING CARD */}
                <div className='border border-gray-800 overflow-hidden relative scale-105 h-fit w-[20rem] rounded-xl font-inter text-[16px] p-4 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"'>
                        <div className='h-[4rem] w-[6rem] bg-[#8083ff] absolute left-30 top-[-5%] blur-[70px]'></div>
                        {/* PRICING-PRICE */}
                        <h2 className='opacity-80 font-light'>Professional package</h2>
                        <h2 className=' text-[36px] pt-2 font-medium'>$60 <span className='text-[16px] opacity-80 font-light'>/video</span> </h2>
                        <p className='text-[14px] pt-2 pb-6 opacity-60 font-montserrat font-regular'>Best for youtube videos, brand promos, podcasts</p>
                        <RainbowButton className='text-center hover:scale-102 w-full border text-black px-24 py-2 font-medium rounded-lg text-[16px]' ><a href="https://wa.me/+919389685509">Get Started</a></RainbowButton>
                        <hr className='opacity-40 mt-8 mb-3' />
                        {/* FEATURES */}
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> $500/month for 8–10 videos (upto 60 sec)</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Dynamic editing & pacing</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Advanced transitions & motion graphics</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Sound design + color grading</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Subtitles + Thumbnail design</h2>
                </div>
                {/* PRICING CARD */}
                <div className='border border-gray-800 h-fit w-[20rem] rounded-xl scale-98 font-inter text-[16px] p-4 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"'>
                        {/* PRICING-PRICE */}
                        <h2 className='opacity-80 font-light'>Agency/Premium package</h2>
                        <h2 className=' text-[36px] pt-2 font-medium'>$900 <span className='text-[16px] opacity-80 font-light'>/month</span> </h2>
                        <p className='text-[14px] pt-2 pb-6 opacity-60 font-montserrat font-regular'>Best for brands, agencies & influencers with recurring work</p>
                        <RainbowButton variant="dark" className='text-center hover:scale-102 w-full border px-24 py-2 font-medium rounded-lg text-[16px]' ><a href="https://wa.me/+919389685509">Get Started</a></RainbowButton>
                        <hr className='opacity-40 mt-8 mb-3' />
                        {/* FEATURES */}
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Custom quote available for volume projects</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> End-to-end editing workflow</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Script polishing + stock footage</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Multi-platform export (YT, IG, TikTok)</h2>
                        <h2 className='opacity-60 font-light flex flex-row gap-2 pt-3 items-center'><CircleCheckBig size={20} /> Dedicated project manager & fast</h2>
                </div>
            </div>
        </div>
    )
}

export default ShortPricing
