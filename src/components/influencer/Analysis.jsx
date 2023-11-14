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
                            Followers Growth and Authenticity Check</h1>
                        <p className={` text-[16px]`}>
                            Examine the authenticity and growth trajectory of an influencer's follower base, filtering out fake engagements to ensure genuine influencer partnerships.
                        </p>  </div>
                    <div className="md:w-1/2 flex justify-start">
                        <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px] md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
                        <img src={'/images/analyze.png'} alt="" width={800} height={800} className="max-w-[320px] md:max-w-[503px] absolute  rounded-[10px]" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Analysis;
