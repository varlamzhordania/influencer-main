import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
const font2 = Raleway({ subsets: ["latin"] });

const Influent = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex md:flex-row flex-col  justify-start mt-10 md:mt-20 items-center gap-10">
          <div className="flex flex-col gap-3 md:w-1/2">
            <h1 className={`${font2.className} text-[36px] font-[700]`}>
              Elevate Your Campaigns with Infulent's Power
            </h1>
            <p className={` text-[16px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>
            <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() => router.push("/")}
              className="font-[400] text-[14px] md:text-[16px] mt-5 z-20 w-[150px] md:w-[181px] h-[49px] text-white rounded-full  "
            >
              Get a Free demo
            </button>
          </div>
          <div className="md:w-1/2 flex md:justify-end  md:ml-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="416"
              height="392"
              viewBox="0 0 416 392"
              fill="none"
              className="w-[320px] h-[320px] md:w-[416px] md:h-[392px]"
            >
              <path
                d="M341.594 22.9572C377.457 48.2471 391.557 93.2318 403.723 135.423C415.366 175.802 421.488 218.024 409.449 258.286C397.332 298.809 371.512 334.211 336.988 358.603C303.102 382.544 261.732 392.816 220.265 391.95C179.866 391.105 142.713 375.04 108.311 353.822C71.7714 331.286 35.1217 306.11 17.5401 266.918C-1.02776 225.528 -6.8361 176.539 9.85724 134.356C26.0292 93.4909 67.528 71.0723 104.456 47.2901C138.728 25.2177 174.385 6.44752 214.926 2.2876C258.55 -2.18874 305.743 -2.32388 341.594 22.9572Z"
                fill="#8373EE"
                fillOpacity="0.31"
              />
            </svg>
            {/* <Image src={'/images/vector-creat.png'} alt="" width={100} height={100} className="-rotate-45   mt-[-5rem]  "/> */}
            <Image
              src={"/images/searcheng1.png"}
              alt=""
              width={800}
              height={800}
              className="w-[320px] md:w-[400px] absolute mt-[3rem]  rounded-[10px]"
            />
            <Image
              src={"/images/searcheng2.png"}
              alt=""
              width={800}
              height={800}
              className="w-[201px] absolute md:left-[58%] mt-[10rem] "
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Influent;