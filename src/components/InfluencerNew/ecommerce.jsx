import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const Ecommerce = () => {
  return (
    <div>
      <Wrapper>
        <div
          className="flex mt-20 flex-col md:flex-row-reverse  justify-start md:mt-20 items-center gap-10"
          id="ecommerce"
        >
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
          <div className="flex flex-col gap-3 md:w-1/2">
            <h1
              className={`${font2.className} text-[32px] md:text-[36px] font-[700] capitalize`}
            >
              E-Commerce
            </h1>

            <ul className="list-disc ml-5 text-lg flex flex-col space-y-1">
              <li>
                Connect with influencers to showcase your products and boost
                sales.
              </li>
              <li>
                Employ tools designed for tracking sales, referrals, and
                engagement.
              </li>
              <li>Grow your online presence and customer engagement.</li>
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
        </div>
      </Wrapper>
    </div>
  );
};

export default Ecommerce;
