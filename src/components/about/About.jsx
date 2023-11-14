import React from 'react'
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
const font2 = Raleway({ subsets: ["latin"] });

const About = () => {
    return (
        <div>
            <Wrapper>
            <div className='border-[3px] border-[#ff5b8454] rounded-[22px] w-full h-[266px] flex justify-center items-center' style={{ background: "linear-gradient(271deg, rgba(66, 84, 255, 0.26) 11.34%, rgba(9, 183, 255, 0.26) 46.82%, rgba(255, 91, 132, 0.26) 73.09%, rgba(66, 84, 255, 0.26) 107.54%)" }}>
                    <h1 className='text-[40px] font-[700]'>
                        About us
                    </h1>
                </div>
                <div className="flex  md:flex-row-reverse flex-col justify-start mt-20 items-center gap-10">
                    <div className="flex flex-col gap-3 md:w-1/2">
                        {/* <p className={`${font2.className} text-[24px] font-[700]`}>
                            Why Choose Us
                        </p>
                        <h1 className={`${font2.className} text-[32px] md:text-[36px] font-[700]`}>
                            Find Out Why 2,000 Users
                            Choose Influencity
                        </h1> */}
                       <p className={` text-[16px]`}>  Welcome to Infulent.ca - Canada's Leading Influencer Marketing Cloud-Based Platform!</p> 
                        <p className={` text-[16px]`}>
                        In today's fast-paced digital world, traditional advertising methods are experiencing fatigue, and print media advertising and flyer distribution are on the decline. Recognizing this shift in the marketing landscape, we at Infulent have set out to bridge the gap by providing a technology-backed solution that connects businesses and non-profits to their target audiences and customers. Our headquarters are proudly situated in the heart of Canada, allowing us to intimately understand the unique context, culture, and market dynamics of this diverse and vibrant nation.
                         </p>
                         <p className={` text-[16px]`}>In Canada, influencers and content creators have become pivotal in establishing authentic connections between brands and their followers. This holds true for businesses of all sizes and types, whether they are eCommerce ventures or brick-and-mortar establishments. At Infulent, we empower these enterprises to harness the power of influencer marketing to its fullest potential.</p>
                    </div>
                    <div className="md:w-1/2 flex md:justify-start">
                        <img src={'/images/about1.png'} alt="" width={800} height={800} className="w-[320px] h-[320px] md:w-[459px] md:h-[459px] object-cover rounded-full" />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default About