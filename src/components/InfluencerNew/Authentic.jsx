import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const Authentic = () => {
  return (
    <div>
      <Wrapper>
        <div
          className="flex mt-20 flex-col md:flex-row-reverse  justify-start md:mt-20 items-center gap-10"
          id="sme"
        >
          <div className="flex flex-col gap-3 md:w-1/2">
            <h1
              className={`${font2.className} text-[32px] md:text-[36px] font-[700] capitalize`}
            >
              SME (Small and Medium Enterprises)
            </h1>
            <ul className="list-disc ml-5 text-lg flex flex-col space-y-1">
              <li>
                Find local influencers who resonate with your target audience.
              </li>
              <li>
                Collaborate seamlessly for campaigns tailored to your business
                needs.
              </li>
              <li>Grow your customer base and enhance brand loyalty.</li>
            </ul>
            <button
                    // onClick={() => handleSubscribe(item)}
                    className="w-[164px] group-hover:text-[#AF1FFC] group-hover:from-[#fff] group-hover:to-[#fff] mt-5 text-white h-[49px] bg-gradient-to-r to-[#FF5B84] from-[#4254FF] rounded-full"
                    style={{
                      opacity: "100%",
                    }}
                    // disabled={loading}
                  >
                    Start For Free
                  </button>
          </div>
          <div className="md:w-1/2 flex justify-start">
            <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px] md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
            <Image
              src={"/images/authentic.png"}
              alt=""
              width={800}
              height={800}
              className="max-w-[320px] md:max-w-[583px] absolute  rounded-[10px]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Authentic;