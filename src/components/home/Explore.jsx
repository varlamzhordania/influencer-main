import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
const font2 = Raleway({ subsets: ["latin"] });

const Explore = () => {
  const router = useRouter();
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col md:flex-row-reverse  justify-start mt-20 md:mt-52 items-center gap-10">
          <div className="flex flex-col items-center sm:items-start gap-3 md:w-1/2">
            <h1
              className={`${font2.className} text-center sm:text-start text-[32px] md:text-[36px] font-[700]`}
            >
              Done for you fully managed{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
                influencer marketing{" "}
              </span>{" "}
            </h1>
            <p className={` text-[18px] text-center sm:text-start`}>
              In the bustling digital marketing landscape, engaging in
              influencer marketing holds paramount potential to elevate your
              brand’s visibility and engagement. However, the intricacies of
              orchestrating influencer campaigns can be daunting, especially
              without a dedicated in-house team. This is where our Done-for-You
              Fully Managed Influencer Marketing Service steps in, offering a
              bridge to effortless influencer marketing while you maintain
              direct communication with the creators.{" "}
            </p>
            <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() =>
                router.push("/platform-features?tab=fully-managed#features")
              }
              className="font-[400] transition-all ease-in duration-300 hover:scale-105 text-[16px] z-20  w-[135px] h-[49px] text-white rounded-full"
            >
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-start">
            <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px]md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
            <img
              src={"/images/explore.png"}
              alt=""
              width={800}
              height={800}
              className="w-[320px] md:w-[567px] absolute md:mt-[-3rem] rounded-[10px]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Explore;
