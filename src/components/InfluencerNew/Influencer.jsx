import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/image";
const font = Nunito_Sans({ subsets: ["latin"] });
const font2 = Raleway({ subsets: ["latin"] });

const Influencer = () => {
  return (
    <div className={font2.className} id="influencer">
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
            <h1 className="text-[32px] md:text-[40px] font-[700] text-center md:text-left tracking-tight  md:pr-10">
              Find the influencers who truly fit your marketing campaigns
            </h1>
            <p
              className={`pt-4 text-lg ${font.className}  text-center md:text-left`}
            >
              Get access to 300,000+ Influencers across Canada. Experience the
              pinnacle of influencer marketing with our AI-driven solution,
              leveraging expansive reach and precision targeting. Captivate your
              desired audience across diverse niches on social media and brace
              yourself for extraordinary results that redefine success.
            </p>
            <div className="flex mt-7 justify-center items-center gap-3 md:gap-5  flex-row w-full sm:w-fit">
              <button
                style={{
                  background:
                    "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                  boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                }}
                onClick={() => router.push("/")}
                className="font-[400] text-[14px] md:text-[18px] z-20 w-[150px] md:w-[181px] h-[49px] text-white rounded-full  "
              >
                Get a Free demo
              </button>
              <button
                onClick={() => router.push("/")}
                className="font-[400] text-[14px] md:text-[18px] pl-2 md:pl-4 z-20 w-[150px] md:w-[181px] h-[49px] bg-white text-[#AF1FFC] border border-[#AF1FFC] rounded-full  flex gap-5 items-center justify-center"
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
            {/* <img
              src={"/images/vector1.png"}
              alt=""
              width={600}
              height={600}
              className="w-[60px] md:w-[80px]  relative md:left-[-3rem] top-[-9rem]"
            /> */}
            {/* <div className="absolute md:top-[-7rem] h-[400px]">
              <img
                src={"/images/hero-bg.png"}
                alt=""
                width={1080}
                height={1080}
                className="md:w-[600px] z-5 "
              />
            </div> */}
            <div className="md:absolute md:top-[-10rem] md:h-[400px]">
              <img
                src={"/images/home-banner.png"}
                alt=""
                width={1080}
                height={1080}
                className="w-full md:w-[1000px] z-5"
              />
            </div>
            {/* <img
              src={"/images/vvector2.png"}
              alt=""
              width={600}
              height={600}
              className=" w-[60px] md:w-[80px] relative top-48 md:left-[29rem] z-[-1]"
            />
            <img
              src={"/images/hero-bg2.png"}
              alt=""
              width={500}
              height={500}
              className="w-[178.718px] absolute top-52 left-[-3rem]"
            /> */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Influencer;
