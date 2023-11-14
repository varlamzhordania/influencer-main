import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
const font = Raleway({ subsets: ["latin"] });

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        background: "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
      }}
      className={`cursor-pointer  absolute top-[50%] -right-3  md:-right-[9px]   p-1 rounded-full`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={25} className="text-white " />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        background: "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
      }}
      className={`cursor-pointer z-50 absolute top-[50%] -left-2 md:-left-[13px]  p-1 rounded-full `}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={25} className="text-white " />
    </div>
  );
}
const Category = () => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      bg: "#4254FF",
      img: "/images/get-icon2.png",
      title: "Inflencer Discovery",
      text: "Access a database of over 300,000 influencers with 40+ filters for precise targeting.",
      details: [
        {
          detail: "300k influencers",
        },
        {
          detail: "40+ filters",
        },
        {
          detail: "Data analysis by AI",
        },
      ],
      save: "Saves 6 hours a day",
      buttonText: "Get Started",
      link: "https://app.infulent.io/signup",
    },
    {
      id: 2,
      bg: "#4254FF",
      img: "/images/get-icon3.png",
      title: "Influencers Relationship Management",
      text: "Efficiently manage creators' databases, shortlist, outreach, hire, and update",
      details: [
        {
          detail: "Workspace",
        },
        {
          detail: "Tracking",
        },
        {
          detail: "Communication",
        },
      ],
      save: "Saves 6 hours a day",
      buttonText: "Get Started",
      link: "https://app.infulent.io/signup",
    },
    {
      id: 3,
      bg: "#4254FF",
      img: "/images/get-icon4.png",
      title: "Campaign Management",
      text: "Seamlessly link campaign content with creator profiles and automate tracking for easy management.",
      details: [
        {
          detail: "Real time  tracking",
        },
        {
          detail: "Optimisation",
        },
        {
          detail: "Report",
        },
      ],
      save: "Saves 6 hours a day",
      buttonText: "Get Started",
      link: "https://app.infulent.io/signup",
    },
    {
      id: 5,
      bg: "#4254FF",
      img: "/images/get-icon1.png",
      title: "Performance Analytics",
      text: "Monitor campaign performance, including sentiment analysis of social media post engagement, for data-driven optimizations.",
      details: [
        {
          detail: "300k influencers",
        },
        {
          detail: "40+ filters",
        },
        {
          detail: "Data analysis by AI",
        },
      ],
      save: "Saves 6 hours a day",
      buttonText: "Get Started",
      link: "https://app.infulent.io/signup",
    },
    {
      id: 6,
      bg: "#4254FF",
      img: "/images/get-icon1.png",
      title: "Tracking, Reporting, Analytics",
      text: "Generate comprehensive reports using key performance indicators (KPIs) to inform your decisions.",
      details: [
        {
          detail: "300k influencers",
        },
        {
          detail: "40+ filters",
        },
        {
          detail: "Data analysis by AI",
        },
      ],
      save: "Saves 6 hours a day",
      buttonText: "Get Started",
      link: "https://app.infulent.io/signup",
    },
    {
      id: 7,
      bg: "#4254FF",
      img: "/images/get-icon1.png",
      title: "Social Media Sentiment Analysis",
      text: "Gain emotional sentiment insights related to your brand's social media engagement.",
      details: [
        {
          detail: "Know your Followers",
        },
        {
          detail: "Get informed",
        },
        {
          detail: "Engage",
        },
      ],
      save: "Saves 6 hours a day",
      buttonText: "Get Started",
      link: "https://app.infulent.io/signup",
    },
    {
      id: 8,
      bg: "#4254FF",
      img: "/images/get-icon1.png",
      title: "Influencer Analytics",
      text: "Utilize AI-powered analytics with 30+ metrics to select the right creators for your campaigns.",
      details: [
        {
          detail: "Audience",
        },
        {
          detail: "Performance",
        },
        {
          detail: "Reputation",
        },
      ],
      save: "Saves 6 hours a day",
      buttonText: "Get Started",
      link: "https://app.infulent.io/signup",
    },
  ];
  const settings = {
    dots: false,
    dotsClass: "slick-dots line-indicator",
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Wrapper>
        <div className="flex flex-col mt-20 justify-center items-center">
          <div>
            <h1 className={`${font.className} text-[40px] font-[700]`}>
              What you Get
            </h1>
          </div>
          <Slider {...settings} className="w-full">
            {data.map((item, index) => (
              <div key={index} className="flex justify-center items-center p-5">
                <div
                  className="bg-white flex flex-col gap-2 p-3 mx-auto w-[270px] md:w-[350px] rounded-[10px] items-center justify-center"
                  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                  <div
                    className="w-[61px] h-[61px] rounded-md flex items-center justify-center mt-4"
                    style={{ backgroundColor: item.bg }}
                  >
                    <Image
                      src={item.img}
                      alt=""
                      width={100}
                      height={100}
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                  <p className="text-[22px] font-[700] pt-4 text-center">
                    {item.title}
                  </p>
                  <p className="text-center">{item.text}</p>
                  <div className="text-center">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <AiOutlineCheckCircle
                          size={20}
                          className="text-[#4254FF]"
                        />
                        {detail.detail}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{ background: "rgba(175, 31, 252, 0.22)" }}
                    className="rounded-md mt-2 w-[203px] h-[30px] flex justify-center items-center text-center font-[500] text-[#AF1FFC]"
                  >
                    {item.save}
                  </div>
                  <button
                    style={{
                      background:
                        "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={() => router.push(item.link)}
                    className="font-[400] text-[16px] z-20 mt-6 w-64 md:w-64 h-[49px] text-white rounded-md"
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
