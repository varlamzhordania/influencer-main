import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { blogsData } from "@/data/blogsData";
import { guide } from "@/data/guide";
const Guide = () => {
  return (
    <div>
      <Wrapper>
        <div
          className="border-[3px] pt-16 border-[#ff5b8454] rounded-[22px] w-full h-[400px] lg:h-[266px] text-center items-center"
          style={{
            background:
              "linear-gradient(271deg, rgba(66, 84, 255, 0.26) 11.34%, rgba(9, 183, 255, 0.26) 46.82%, rgba(255, 91, 132, 0.26) 73.09%, rgba(66, 84, 255, 0.26) 107.54%)",
          }}
        >
          <h1 className="text-[40px] font-[700]">
            Guide to Influencer Marketing
          </h1>
          <h6 className="max-w-4xl text-center mx-auto">
            In the bustling digital realm, creating authentic, meaningful
            connections between brands and consumers has become a paramount
            endeavor. Social Media Influencer Marketing (SMIM) has catapulted to
            the forefront of such innovative strategies, particularly resonating
            within the Canadian market.
          </h6>
        </div>

        <div className="flex justify-center items-center mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-8">
            {guide.map((item, i) => (
              <div key={i} className="shadow-md rounded-[10px] bg-white">
                <Image
                  src={item.image}
                  alt=""
                  width={1080}
                  height={1080}
                  className="rounded-t-[10px] max-w-[320px] md:max-w-[320px] h-[200px] object-cover"
                />
                <div className="flex flex-col p-5 gap-2 max-w-[320px] md:max-w-[320px] ">
                  <div className="flex justify-between items-center ">
                    <p className="text-[16px] text-[#AF1FFC] font-[500]">
                      {item.tips}
                    </p>
                    <p className="text-[#77777778] font-[500] text-[12px]">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-[20px] font-[600]">{item.title}</p>
                  <Link href={`/guide/${item.id}`}>
                    <button className="font-[500] text-[#FF5B84] group flex items-center gap-2">
                      Read more
                      <BsArrowRight
                        size={16}
                        className="group-hover:translate-x-1 ease-in duration-300 transition-all"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Guide;
