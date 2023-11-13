import Image from "next/image";
import React from "react";
import Wrapper from "../shared/Wrapper";
import { BsArrowRight } from "react-icons/bs";
import { Raleway } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";
const font2 = Raleway({ subsets: ["latin"] });

const font = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: false,
});
const ManagedService = () => {
  return (
    <Wrapper>
      <div
        className="flex flex-col md:flex-row-reverse justify-start mt-20 items-center gap-10 mb-20"
        id="managed-service"
      >
        <div className="flex flex-col items-center sm:items-start gap-3 md:w-1/2">
          <h1
            className={`${font2.className} text-center sm:text-start text-[32px] md:text-[36px] font-[700]`}
          >
            Done For You
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
              {" "}
              Solution{" "}
            </span>{" "}
          </h1>
          <p className={` text-[18px] text-center sm:text-start`}>
            Our team does the discovery, analysis, outreach, campaign creation,
            campaign tracking and reporting. Influencer contracting and price
            negotiation is the responsibility of the customer.
          </p>
          <Link
            style={{
              background:
                "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
              boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
            }}
            // onClick={() => router.push("/contact-us")}
            className="font-[400] transition-all ease-in duration-300 hover:scale-105 text-[16px] z-20  w-[135px] h-[49px] text-white rounded-full flex items-center justify-center "
            href="/contact-us"
          >
            <span className="text-center">Contact us </span>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-start">
          <div className="relative z-[-1] w-[320px] h-[320px] md:w-[387px]md:h-[390px] bg-[#F5E3FF] rounded-full "></div>
          <Image
            src={"/images/explore.png"}
            alt=""
            width={800}
            height={800}
            className="w-[320px] md:w-[567px] absolute md:mt-[-3rem] rounded-[10px]"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ManagedService;
