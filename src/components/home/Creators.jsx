import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
const font2 = Raleway({ subsets: ["latin"] });

const Creators = () => {
  const router = useRouter();
  return (
    <div>
      <Wrapper>
        <div className="flex md:flex-row flex-col h-[80vh] justify-start mt-[5rem] mb-[5rem] items-center gap-10">
          <div className="flex flex-col items-center sm:items-start gap-3 md:w-1/2">
            <p className={`${font2.className} text-center sm:text-start text-[24px] font-[700]`}>
              {/* Influencer Analysis */}
              Influencer Discovery : Find your best match
            </p>
            <h1 className={`${font2.className} text-center sm:text-start text-[36px] font-[700]`}>
              Advanced &nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
                Filtering &nbsp;System
              </span>
            </h1>
            <p className={` text-[18px]`}></p>
            <ul>
              <li className={` text-[18px] text-center sm:text-start`}>
                Use 35+ built-in filters to narrow down the best influencers for
                your needs.
              </li>
              <li className={` text-[18px] text-center sm:text-start`}>
                Target influencers based on size, location, niche, and more.
              </li>
            </ul>
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
              <b className={` text-[18px]`}> How It Works:</b>
            </span>
            <p className={` text-[18px]`}>
              <b>Platform Selection: </b> Choose among platforms: YouTube,
              TikTok, or Instagram.
            </p>
            <p className={` text-[18px]`}>
              <b> Audience Insights: </b> Dive deep into influencer audience
              size, demographics, location, and interests.
            </p>
            <p className={` text-[18px]`}>
              <b> Performance Metrics: </b> Gauge influencer performance and
              authenticity metrics. Access engagement rate, follower growth,
              like growth, and percentage of authentic followers.
            </p>
            <p className={` text-[18px]`}>
              <b> Content Insights:</b> Analyze content performance metrics:
              hashtags, sponsored posts, and original content.
            </p>
            <p className={` text-[18px]`}>
              <b>Brand Affinity:</b> Understand what brands an influencer has an
              affinity for or has worked with.
            </p>
            <p className={` text-[18px]`}>
              <b>Lookalike Influencers:</b>Discover influencers with similar
              interests and audience profiles 
            </p> */}
            <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() =>
                router.push(
                  "/platform-features?tab=influencer-discovery#features"
                )
              }
              className="font-[400] text-[16px] z-20  w-[135px] h-[49px] text-white rounded-full  "
            >
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex md:justify-end">
            {/* <div className="relative z-[-1] md:w-[387px] h-[390px] rounded-full md:left-[-20%]"></div> */}
            <img
              src={"/images/influencer-discovery.png"}
              alt=""
              width={1000}
              height={1000}
              // className="w-[320px] md:w-[500px] rounded-[10px]"
            />
            {/* <img
              src={"/images/creators2.png"}
              alt=""
              width={800}
              height={800}
              className="w-[201px] absolute md:left-[58%] mt-[10rem] shadow-md display-none"
            /> */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Creators;
