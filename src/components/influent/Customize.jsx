import React from "react";
import Wrapper from "../shared/Wrapper";

const Customize = () => {
  const data = [
    {
      id: 1,
      title: "Customized your plan with ads-ons",
      price: "$200",
      package: "Per Influencer",
      desc: "Boost your campaign reach through influencer posting on Instagram or TikTok, and a whitelisting license for Meta or an authorization code for TikTok Spark Ads.",
      buttonText: "Book Demo",
    },
    {
      id: 1,
      title: "Customized your plan with ads-ons",
      price: "$200",
      package: "Per Influencer",
      desc: "Boost your campaign reach through influencer posting on Instagram or TikTok, and a whitelisting license for Meta or an authorization code for TikTok Spark Ads.",
      buttonText: "Book Demo",
    },
  ];
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col justify-center items-center mt-20 ">
          <div className="max-w-[582px] text-center">
            <h1 className="text-[32px] md:text-[40px] font-[700] ">
              Customized your plan with add-ons
            </h1>
            <p>
              Are you ready to learn more about what Influencity can do for you?
              Start exploring with a free trial or get a customized demo from
              our team of experts!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="md:w-[370px] border border-transparent ease-in transition-all duration-300 rounded-[10px] hover:border-[#AF1FFC] p-5 flex flex-col gap-3 justify-start items-start"
              >
                <h1 className="text-[24px] font-[700] ">{item.title}</h1>
                <p className="text-[14px] font-[400]">
                  <span className="text-[24px] font-[700]">{item.price} </span>
                  {item.package}
                </p>
                <p>{item.desc}</p>
                <button className="w-full mt-5 text-white h-[49px] bg-gradient-to-r to-[#FF5B84] from-[#4254FF] rounded-full">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Customize;
