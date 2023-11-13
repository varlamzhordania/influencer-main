import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const Authentic = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex mt-20 flex-col md:flex-row-reverse  justify-start md:mt-20 items-center gap-10">
          <div className="flex flex-col gap-3 md:w-1/2">
            <h1 className={`${font2.className} text-[32px] md:text-[36px] font-[700] capitalize`}>
              Hashtag Utilization Insight
            </h1>
            <p className={` text-[16px]`}>
              Investigate the hashtags employed by influencers, assessing their relevance and the traction they gain in the influencers community.</p>

          </div>
          <div className="md:w-1/2 flex justify-start">
            <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px] md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
            <Image src={'/images/authentic.png'} alt="" width={800} height={800} className="max-w-[320px] md:max-w-[583px] absolute  rounded-[10px]" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Authentic;