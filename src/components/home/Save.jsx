import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

const Save = () => {
  return (
    <div>
      <Wrapper>
        <div
          className="w-full h-auto flex md:flex-row flex-col justify-start items-center py-10 rounded-[22px]"
          style={{
            background:
              "linear-gradient(271deg, rgba(66, 84, 255, 0.26) 11.34%, rgba(9, 183, 255, 0.26) 46.82%, rgba(255, 91, 132, 0.26) 73.09%, rgba(66, 84, 255, 0.26) 107.54%)",
            border: "3px solid rgba(255, 91, 132, 0.33)",
          }}
        >
          <div className="flex basis-[30%] pl-10">
            <h1
              className={`text-[32px] md:text-[40px] text-center md:text-left  mb-5 md:mb-0 font-[700] ${font.className}`}
            >
              Save
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
                {" "}
                100+ hours{" "}
              </span>
              <br />
              per month, <br />
              boost ROI
            </h1>
          </div>
          <p className="hidden md:flex mx-5 h-[330px] border-[4px] border-[#4254FF]"></p>
          <div className="flex flex-col gap-5 border-t-[4px] pt-5 border-[#4254FF] md:border-none basis-[60%]">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between w-[100%]">
                <div className="flex flex-col items-center">
                  <h2
                    className={`text-[18px] md:text-[24px] font-[700] text-center sm:text-start ${font.className}`}
                  >
                    AI-Powered Influencer Discovery
                  </h2>
                  <p className="text-[18px] text-center sm:text-start">
                    Find ideal influencers in minutes, saving over 100 hours
                    every month.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3
                    className={`text-[18px] md:text-[24px] font-[700] ${font.className}`}
                  >
                    Instant Influencer Analysis
                  </h3>
                  <p className="text-[18px]">
                    Evaluate influencers with 25+ metrics in a single click.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h2
                    className={`text-[18px] md:text-[24px] font-[700] text-center sm:text-start ${font.className}`}
                  >
                    Effortless Campaign Tracking
                  </h2>
                  <p className="text-[18px] text-center sm:text-start">
                    Monitor and optimize campaigns instantly for higher ROI.
                  </p>
                </div>
              </div>
              {/* <div className='flex flex-col gap-5 w-[100%] md:w-[50%]'>
                <h3 className={`text-[18px] md:text-[24px] font-[700] ${font.className}`}>Space-Saving Operational Efficiency</h3>
                <p className='text-[18px]'>Manage operations without requiring extra workspace.</p>
                <h3 className={`text-[18px] md:text-[24px] font-[700] ${font.className}`}>Automated Efficiency</h3>
                <p className='text-[18px]'>Free up time for strategic tasks with task automation.</p>
                <h2 className={`text-[18px] md:text-[24px] font-[700] ${font.className}`}>Quick Decision-Making</h2>
                <p className='text-[18px]'>Use data-driven insights for rapid decision-making.</p>
              </div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Save;
