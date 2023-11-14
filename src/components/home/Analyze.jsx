import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { useRouter } from "next/router";
const font2 = Raleway({ subsets: ["latin"] });

const Analyze = () => {
  const router = useRouter();
  return (
    <div>
      <Wrapper>
        <div className="flex mt-80 flex-col md:flex-row-reverse  justify-start md:mt-20 items-center gap-10">
          <div className="flex flex-col items-center sm:items-start gap-3 md:w-1/2">
            <p className={`${font2.className} text-center sm:text-start text-[24px] font-[700]`}>
              Influencer Analysis
            </p>
            <h1 className={`${font2.className} text-center sm:text-start text-[36px] font-[700]`}>
              Avoid guessing, make{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
                informed decisions
              </span>
            </h1>
            <p className={`text-[18px] text-center sm:text-start`}>
              In the thriving ecosystem of influencer marketing, the success of
              your campaigns hinges on partnering with the right influencers.
              The traditional approach often entails a game of guesswork which
              can be both time-consuming and resource-draining. Transition from
              guesswork to informed decision-making with Influent.ca. Our
              platform is meticulously crafted to provide you with in-depth
              insights into influencer profiles, enabling a data-driven approach
              to influencer partnerships.
            </p>
            <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() =>
                router.push(
                  "/platform-features?tab=influencer-analysis#features"
                )
              }
              className="font-[400] text-[16px] z-20 transition-all ease-in duration-300 hover:scale-105 w-[135px] h-[49px] text-white rounded-full"
            >
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="416"
              height="392"
              viewBox="0 0 416 392"
              fill="none"
              className="w-[320px] h-[320px] md:w-[416px] md:h-[392px]"
            >
              <path
                d="M341.594 22.9572C377.457 48.2471 391.557 93.2318 403.723 135.423C415.366 175.802 421.488 218.024 409.449 258.286C397.332 298.809 371.512 334.211 336.988 358.603C303.102 382.544 261.732 392.816 220.265 391.95C179.866 391.105 142.713 375.04 108.311 353.822C71.7714 331.286 35.1217 306.11 17.5401 266.918C-1.02776 225.528 -6.8361 176.539 9.85724 134.356C26.0292 93.4909 67.528 71.0723 104.456 47.2901C138.728 25.2177 174.385 6.44752 214.926 2.28760C258.55 -2.18874 305.743 -2.32388 341.594 22.9572Z"
                fill="#8373EE"
                fillOpacity="0.31"
              />
            </svg>
            <img
              src={"/images/analyze.png"}
              alt=""
              width={800}
              height={800}
              className="max-w-[320px] md:max-w-[503px] absolute  rounded-[10px]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Analyze;
