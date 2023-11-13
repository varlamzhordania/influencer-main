import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
  const data = [
    {
      id: 1,
      img: "/images/animal.webp",
      title: "Animals and pet",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 2,
      img: "/images/category2.png",
      title: "Beauty",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 3,
      img: "/images/category3.png",
      title: "Travel Influncer",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 4,
      img: "/images/category4.png",
      title: "Fashion",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 5,
      img: "/images/food.webp",
      title: "Food",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 6,
      img: "/images/category3.png",
      title: "Lifestyle",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 7,
      img: "/images/health.webp",
      title: "Health and fitness",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 8,
      img: "/images/sport.jpg",
      title: "Sport",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 9,
      img: "/images/gadgets.jpeg",
      title: "Entertainment and gadgets",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 10,
      img: "/images/category4.png",
      title: "DIY",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 11,
      img: "/images/garden.jpg",
      title: "Home and garden",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 12,
      img: "/images/parenting.webp",
      title: "Parenting",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 13,
      img: "/images/category4.png",
      title: "Social",
      cat: "Toronto , Montreal, Vancouver, Calgary, Edmonton, Ottawa, Quebec, Mississauga, Hamilton, London, and more",
      text: 'More than 2000 influncers "Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];
  const settings = {
    dots: false,
    dotsClass: "slick-dots line-indicator",
    infinite: true,
    speed: 300,
    slidesToShow: 4,
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
        <div className="flex flex-col mt-20 justify-center items-center ">
          <div>
            <h1
              className={`${font.className} text-[32px] md:text-[40px] font-[700]`}
            >
              Influencer Category
            </h1>
          </div>
          <Slider {...settings} className="w-full  ">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-5"
              >
                <div className="bg-white flex flex-col mx-auto gap-2 p-3 w-[270px] rounded-[10px]">
                  <Image
                    src={item.img}
                    alt=""
                    width={800}
                    height={800}
                    className="w-[266px] h-[192px] object-cover rounded-[10px]"
                  />
                  <h1
                    className={`text-[#AF1FFC] font-[600] text-[18px] ${font.className}`}
                  >
                    {item.title}
                  </h1>
                  <p className={`text-[18px] text-[#3d3c3c]`}>{item.cat}</p>
                  {/* <p className=''>
                                        {item.text}
                                    </p> */}
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
