import Image from "next/image";
import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { Crimson_Text } from "next/font/google";

const font = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: false,
});
const Plans = () => {
  const data = [
    {
      id: 1,
      package: "basic",
      price: "$79.99",
      duration: "Per Month",
      features: [
        {
          feature: "Limited marketing & growth hacks",
        },
        { feature: "13 Anylytics campaigns" },
        { feature: "400 Keywords" },
        { feature: "456,000 Crawled pages" },
        { feature: "Unlimited Updates" },
      ],
    },
    {
      id: 2,
      package: "basic",
      price: "$79.99",
      duration: "Per Month",
      features: [
        {
          feature: "Limited marketing & growth hacks",
        },
        { feature: "13 Anylytics campaigns" },
        { feature: "400 Keywords" },
        { feature: "456,000 Crawled pages" },
        { feature: "Unlimited Updates" },
      ],
    },
    {
      id: 3,
      package: "basic",
      price: "$79.99",
      duration: "Per Month",
      features: [
        {
          feature: "Limited marketing & growth hacks",
        },
        { feature: "13 Anylytics campaigns" },
        { feature: "400 Keywords" },
        { feature: "456,000 Crawled pages" },
        { feature: "Unlimited Updates" },
      ],
    },
    {
      id: 4,
      package: "basic",
      price: "$79.99",
      duration: "Per Month",
      features: [
        {
          feature: "Limited marketing & growth hacks",
        },
        { feature: "13 Anylytics campaigns" },
        { feature: "400 Keywords" },
        { feature: "456,000 Crawled pages" },
        { feature: "Unlimited Updates" },
      ],
    },
  ];

  return (
    <div className="flex mt-28 md:mt-20  flex-col justify-center items-center">
      <h1 className="text-[32px] md:text-[40px] font-[700]">Our Plan</h1>
      <p className="max-w-[560px] text-center px-5 md:px-7">
        Are you ready to learn more about what Influencity can do for you? Start
        exploring with a free trial or get a customized demo from our team of
        experts!
      </p>

      <div className=" max-w-screen-xl ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10 mt-10 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="group ease-linear duration-300 transition-all"
              >
                <div className="cursor-pointer hover:bg-white group-hover:transition-all group-hover:ease-in group-hover:duration-300 group-hover:bg-gradient-to-l from-[#FF5B84] to-[#4254FF] md:w-[295px] rounded-[10px] flex flex-col gap-3 items-center py-5 px-5 text-left">
                  <p className="text-[20px] group-hover:text-white text-[#AF1FFC] capitalize">
                    {item.package}
                  </p>
                  <p className="text-[32px] font-[700] group-hover:text-white">
                    {item.price}
                  </p>
                  <span className="text-[20px] group-hover:text-white text-[#AF1FFC] capitalize">
                    {item.duration}
                  </span>
                  <p className="border w-full"></p>
                  {item.features.map((items, i) => (
                    <p key={i} className="text-[16px] group-hover:text-white">
                      {items.feature}
                    </p>
                  ))}
                  <button className="w-[164px] group-hover:text-[#AF1FFC] group-hover:from-[#fff] group-hover:to-[#fff] mt-5 text-white h-[49px] bg-gradient-to-r to-[#FF5B84] from-[#4254FF] rounded-full">
                    Purchase Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
