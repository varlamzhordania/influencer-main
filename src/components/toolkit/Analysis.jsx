import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font = Raleway({ subsets: ["latin"] });

const Analysis = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex mt-20 flex-col md:flex-row-reverse  justify-start md:mt-20 items-center gap-10">
                    <div className="flex flex-col gap-3 md:w-1/2">

                        <h1 className={`${font.className} text-[32px] md:text-[36px] font-[700]`}>
                            Deepening Your Understanding of Your Audience and Industry                 </h1>
                        <p className={` text-[16px]`}>
                            The inaugural phase of a successful influencer marketing campaign revolves around comprehensive research. This entails gaining a profound understanding of your target audience and the industry you operate in. Begin by dissecting the demographics of your social media followers and those of your competitors. Immerse yourself in the realm of prevalent hashtags and explore the leading influencers within your niche. Leverage tools like Sprout's Advanced Listening to pinpoint critical conversations and influencers discussing your brand, product, or industry. This step lays the solid groundwork for your campaign's success.                   </p>
                    </div>
                    <div className="md:w-1/2 flex justify-start">
                        <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px] md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
                        <Image src={'/images/analyze.png'} alt="" width={800} height={800} className="max-w-[320px] md:max-w-[503px] absolute  rounded-[10px]" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Analysis;
