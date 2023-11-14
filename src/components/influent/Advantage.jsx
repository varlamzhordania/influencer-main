import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";

const Advantage = () => {
  const data = [
    {
      id: 1,
      img: "/images/adv1.png",
      title: "Fast Turn Arround",
      desc: "From concept creation to briefing creators and delivering ready-to-use ads, we handle it all. Enjoy a fast turnaround of just 14 days and gain valuable time to focus on your core business.",
    },
    {
      id: 2,
      img: "/images/adv2.png",
      title: "Vetted creator community",
      desc: "From concept creation to briefing creators and delivering ready-to-use ads, we handle it all. Enjoy a fast turnaround of just 14 days and gain valuable time to focus on your core business.",
    },
    {
      id: 3,
      img: "/images/adv3.png",
      title: "Proven brand success",
      desc: "From concept creation to briefing creators and delivering ready-to-use ads, we handle it all. Enjoy a fast turnaround of just 14 days and gain valuable time to focus on your core business.",
    },
  ];
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col justify-center mt-10 items-center">
          <h1 className="text-[32px] md:text-[40px] font-[700]">
            Advantages of our managed service
          </h1>
          <div className="flex justify-center items-center mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-14">
              {data.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-3 md:w-[350px] justify-start items-start text-left rounded-[10px] px-6 py-6 border border-transparent transition-all ease-in duration-300 cursor-pointer hover:border-[#AF1FFC]`}
                >
                  <div
                    className={` ${
                      item.id == 2 ? "bg-[#FF5B84]" : "bg-[#AF1FFC]"
                    }  rounded-md w-[84px] h-[84px] flex justify-center items-center`}
                  >
                    <img
                      src={item.img}
                      alt=""
                      width={600}
                      height={600}
                      className="w-[44px]"
                    />
                  </div>
                  <div>
                    <p className="text-[24px] font-[700] py-2">{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Advantage;
