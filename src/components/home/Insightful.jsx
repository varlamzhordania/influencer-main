import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
const font2 = Raleway({ subsets: ["latin"] });

const Insightfull = () => {
  const router = useRouter();
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col md:flex-row  justify-start mt-52 items-center gap-10">
          <div className="flex flex-col items-center sm:items-start gap-3 md:w-1/2">
            <h1
              className={`${font2.className} text-center sm:text-start text-[32px] md:text-[36px] font-[700]`}
            >
              Insightful Reporting and Analytics
            </h1>
            <p className={` text-[18px] text-center sm:text-start`}>
              The influencer marketing ecosystem often grapples with the absence
              of a customized industry-standard framework for meticulous
              tracking, analysis, and reporting on Key Performance Indicators
              (KPIs). Influent.ca steps in to fill this void, offering a robust
              feature for in-depth tracking, analysis, and reporting, tailored
              to meet the nuanced demands of influencer marketing campaigns
            </p>
            <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() => router.push("/platform-features?tab=reporting#features")}
              className="font-[400] transition-all ease-in duration-300 hover:scale-105 text-[16px] z-20  w-[135px] h-[49px] text-white rounded-full  "
            >
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-start">
            <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px] md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
            <img
              src={"/images/insightful.png"}
              alt=""
              width={800}
              height={800}
              className="w-[340px] md:w-[618px] absolute rounded-[10px]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Insightfull;
