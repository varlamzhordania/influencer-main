import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
const font2 = Raleway({ subsets: ["latin"] });

const Campaign = () => {
  const router = useRouter();
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col md:flex-row-reverse  justify-start mt-20 md:mt-52 items-center gap-10">
          <div className="flex flex-col items-center sm:items-start gap-3 md:w-1/2">
            <p className={`${font2.className} text-[24px] text-center sm:text-start font-[700]`}>
              Campaign management
            </p>
            <h1 className={`${font2.className} text-center sm:text-start text-[36px] font-[700]`}>
              Streamlined{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
                Campaign Management
              </span>
            </h1>
            <p className={` text-[18px] text-center sm:text-start`}>
              Embarking on influencer marketing campaigns in Canada calls for a
              centralized digital workspace that facilitates effortless
              creation, execution, monitoring, and optimization. Influent.ca
              unveils a robust Campaign Management Feature, tailored to
              streamline your campaign orchestration and influencer onboarding
              process in the Canadian digital landscape.{" "}
            </p>
            <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() =>
                router.push(
                  "/platform-features?tab=campaign-management#features"
                )
              }
              className="font-[400] transition-all ease-in duration-300 hover:scale-105 text-[16px] z-20  w-[135px] h-[49px] text-white rounded-full  "
            >
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-start">
            <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px] md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
            <img
              src={"/images/campaign.png"}
              alt=""
              width={800}
              height={800}
              className="w-[320px] md:w-[567px] absolute md:mt-[-3rem]  rounded-[10px]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Campaign;
