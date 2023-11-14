import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";
import VideoModal from "./VideoModal";
const font = Nunito_Sans({ subsets: ["latin"] });
const font2 = Raleway({ subsets: ["latin"] });

const Hero = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  return (
    <div className={font2.className}>
      <div
        className="w-[38px] hidden top-96 left-10 absolute h-[38px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(66, 84, 255, 0.12) 0%, rgba(255, 91, 132, 0.12) 45.31%, rgba(9, 183, 255, 0.12) 89.06%)",
        }}
      ></div>
      <div
        className="w-[22px] hidden top-32 left-44 absolute h-[22px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(66, 84, 255, 0.12) 0%, rgba(255, 91, 132, 0.12) 45.31%, rgba(9, 183, 255, 0.12) 89.06%)",
        }}
      ></div>
      <div
        className="w-[38px] hidden top-32 left-[40rem] absolute h-[38px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(66, 84, 255, 0.12) 0%, rgba(255, 91, 132, 0.12) 45.31%, rgba(9, 183, 255, 0.12) 89.06%)",
        }}
      ></div>
      <Wrapper>
        <div className="flex flex-col-reverse mb-8 lg:h-[80vh] md:h-[80vh] sm:flex-col md:flex-col xl:flex-row 2xl:flex-row items-center justify-start">
          <div className="flex flex-col basis-[50%] justify-start items-start">
            <h1 className="text-[30px] md:text-[38px] font-[700] text-center md:text-left tracking-tight md:pt-0 md:pr-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4255ff] to-[#AF1FFC]">
              Connect with Canada social media influencers across all niches
              {/* Canada's Leading */}
              <br />
              <span className="bg-clip-text text-[#AF1FFC] text-[30px] md:text-[34px]">
                {/* Influencer Marketing Platform. */}
                and platforms for seamless, impactful collaborations
              </span>
            </h1>
            {/* <p
              className={`pt-4 ${font.className}  text-center md:text-left lg:pr-6 text-[18px]`}
            >
              Discover any social media influencer from coast to coast. Harness
              the power of our AI-powered search engine and vast database. With
              infulent.ca, success in your campaign and marketing is just a
              click away.
            </p> */}
            <div className="flex mt-7 justify-center items-center gap-3 md:gap-5  flex-row w-full sm:w-fit">
              <button
                style={{
                  background:
                    "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                  boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                }}
                onClick={() =>
                  router.push(
                    "https://app.infulent.io/signup"
                  )
                }
                className="font-[400] text-[14px] md:text-[16px] z-20 w-[150px] md:w-[181px] h-[49px] text-white rounded-full hover:scale-105 transition-all ease-in duration-300 "
              >
                Start for free
              </button>
              <button
                onClick={() => setModal(true)}
                className="font-[400] text-[14px] md:text-[16px] pl-2 md:pl-4 z-20 w-[150px] md:w-[181px] h-[49px] bg-white hover:scale-105 transition-all ease-in duration-300  text-[#AF1FFC] border border-[#AF1FFC] rounded-full  flex gap-5 items-center justify-center"
              >
                Watch video
                <div
                  style={{
                    background:
                      "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                  }}
                  className="w-[30px] h-[30px] md:w-[39px] md:h-[39px] flex justify-center items-center rounded-full"
                >
                  <BsFillPlayFill className="text-white md:w-[20px] w-[18px]" />
                </div>
              </button>
            </div>
          </div>
          <div className="flex basis-[50%] justify-start items-start relative md:mt-[-5rem]">
            {/* <Image
              src={"/images/vector1.png"}
              alt=""
              width={600}
              height={600}
              className="w-[60px] md:w-[80px]  relative md:left-[-3rem] top-[-9rem]"
            /> */}
            <div className="md:absolute md:top-[-10rem] md:h-[400px]">
              <Image
                src={"/images/home-banner.png"}
                alt=""
                width={1080}
                height={1080}
                className="w-full md:w-[1000px] z-5"
              />
            </div>
            {/* <Image
              src={"/images/vvector2.png"}
              alt=""
              width={600}
              height={600}
              className=" w-[60px] md:w-[80px] relative top-48 md:left-[29rem] z-[-1]"
            />
            <Image
              src={"/images/hero-bg2.png"}
              alt=""
              width={500}
              height={500}
              className="w-[178.718px] absolute top-52 left-[-3rem]"
            /> */}
          </div>
        </div>
        {modal && <VideoModal modal={modal} setModal={setModal} />}
      </Wrapper>
    </div>
  );
};

export default Hero;
