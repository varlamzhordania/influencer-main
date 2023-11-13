import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
const font2 = Raleway({ subsets: ["latin"] });

const Influencer = () => {
  const router = useRouter();
  return (
    <div>
      <Wrapper>
        <div className="flex  md:flex-row flex-col justify-start mt-52 items-center gap-10">
          <div className="flex flex-col items-center sm:items-start gap-3 md:w-1/2">
            <p className={`${font2.className} text-center sm:text-start text-[24px] font-[700]`}>
              Influencer Relationship Management (IRM) :
            </p>
            <h1
              className={`${font2.className} text-center sm:text-start text-[24px] md:text-[36px] font-[700]`}
            >
              Foster Lasting Influencer Partnerships with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
                Relationship Management{" "}
              </span>
            </h1>
            <p className={` text-[18px] text-center sm:text-start`}>
              In the digital marketing frontier, influencer marketing has
              emerged as a cornerstone for brand amplification. However,
              navigating through the maze of influencer relationship management
              can often be a cumbersome endeavour. Influent.ca, your
              Canada-based influencer management platform, redefines this
              narrative by offering a seamless Influencer Relationship
              Management (IRM) feature.{" "}
            </p>
            <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() =>
                router.push(
                  "/platform-features?tab=relationship-management#features"
                )
              }
              className="font-[400] transition-all ease-in duration-300 hover:scale-105 text-[16px] z-20  w-[135px] h-[49px] text-white rounded-full  "
            >
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex md:justify-start">
            <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px] md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
            <Image
              src={"/images/influence.png"}
              alt=""
              width={800}
              height={800}
              className="w-[320px] md:w-[618px] mt-[3rem] md:mt-0 absolute rounded-[10px]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Influencer;
