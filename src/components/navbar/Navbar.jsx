"use client";
import React, { useEffect, useRef } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const { user } = useAuth();
  const platformFeatures = [
    [
      {
        icon: "/images/platform-icon1.png",
        title: "Influencer discovery",
        description: "Find your best match",
        link: "/platform-features",
        tab: "influencer-discovery",
      },
      {
        id: 2,
        icon: "/images/platform-icon2.png",
        title: "Influencer Relationship Management",
        description: "Use Tools that grow with your brand",
        link: "/platform-features",
        tab: "relationship-management",
      },
      {
        icon: "/images/platform-icon3.png",
        title: "Sentiment Analysis",
        description: "AI-Powered Comment Analysis",
        link: "/platform-features",
        tab: "comments-analysis",
      },
      {
        icon: "/images/platform-icon6.png",
        title: "Insightful Reporting and Analytics",
        description: "Use Tools that grow with your brand",
        link: "/platform-features",
        tab: "reporting",
      },
    ],
    [
      {
        icon: "/images/platform-icon7.png",
        title: "Done-for-You Fully Managed Service",
        description: "Use Tools that grow with your brand",
        link: "/platform-features",
        tab: "fully-managed",
      },
      {
        icon: "/images/platform-icon4.png",
        title: "Influencer Analysis",
        description: "Avoid guessing, make informed-decision",
        link: "/platform-features",
        tab: "influencer-analysis",
      },
      {
        icon: "/images/platform-icon5.png",
        title: "Campaign management",
        description: "Use Tools that grow with your brand",
        link: "/platform-features",
        tab: "campaign-management",
      },
    ],
  ];
  const resources = [
    [
      {
        icon: "/images/resource-icon1.png",
        title: "Influencer Marketing Guide",
        description: "Use Tools that grow with your brand",
        link: "/guide",
      },
      // {
      //     id: 2,
      //     icon: '/images/resource-icon2.png',
      //     title: 'Be ahead of the curve',
      //     description: 'Use Tools that grow with your brand',
      //     link: '/',
      // },
      // {
      //     icon: '/images/resource-icon3.png',
      //     title: 'Blog',
      //     description: 'Use Tools that grow with your brand',
      //     link: '/blogs',
      // },
    ],
    [
      // {
      //     icon: '/images/resource-icon4.png',
      //     title: 'The basic trends',
      //     description: 'Use Tools that grow with your brnd',
      //     link: '/',
      // },
      {
        icon: "/images/resource-icon5.png",
        title: "Influencer Marketing Toolkit",
        description: "Use Tools that grow with your brand",
        link: "/toolkit",
      },
    ],
  ];
  const serve = [
    [
      {
        icon: "/images/resource-icon5.png",
        title: "Agencies",
        description:
          "Discover a diverse pool of influencers to match client requirements",
        link: "/influencer/#agencies",
      },
      {
        icon: "/images/resource-icon1.png",
        title: "Brands",
        description: `Leverage tools for brand's reach and recognition`,
        link: "/influencer/#brands",
      },
      {
        id: 2,
        icon: "/images/resource-icon2.png",
        title: "SME",
        description: "Connect with your local influencer to grow your business",
        link: "/influencer/#sme",
      },
      {
        icon: "/images/resource-icon3.png",
        title: "Creators",
        description: "Professionalize your creative journey",
        link: "/influencer#creators",
      },
    ],
    [
      {
        icon: "/images/resource-icon4.png",
        title: "Non-Profit",
        description: `Employ tools that advance with your mission's impact`,
        link: "/influencer/#non-profit",
      },
      {
        icon: "/images/resource-icon5.png",
        title: "E-Commerce",
        description:
          "Harness tools that grow with your online sales and engagement",
        link: "/influencer/#ecommerce",
      },
    ],
  ];
  const pricing = [
    {
      title: "Self service",
      link: "/#pricing",
    },
    {
      title: "Managed",
      link: "/#managed-service",
    },
  ];

  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };
  const closeDropdown = () => {
    setOpenDropdown(null);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null); // Close the dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup - remove the listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-3 sticky w-full top-0 z-50 ${
        isScrolled ? "bg-white shadow-lg" : "bg-opacity-0"
      }`}
    >
      <Wrapper>
        <div className="flex justify-between items-center bg-transparent">
          {/* left  */}
          <div className="flex items-center gap-24 z-20">
            {/* logo  */}
            <Link href={"/"}>
              <img
                className="ml-[-8px] mt-2"
                src="/images/logo.png"
                height={90}
                width={190}
                alt=""
              />
            </Link>
            <div>
              <ul
                ref={dropdownRef}
                className="hidden md:flex space-x-12 text-base text-black font-[600] text-[18px]"
              >
                <li className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === "serve" ? null : "serve")
                    }
                    className="focus:outline-none flex items-center gap-3"
                  >
                    Who We Serve
                    <IoIosArrowDown
                      size={14}
                      className={`${
                        openDropdown === "serve" ? "transform rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  </button>
                  {openDropdown === "serve" && (
                    <ul className="absolute left-0 mt-5 p-5 rounded-[10px] w-[550px]  bg-white text-black shadow-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {serve.map((columnFeatures, columnIndex) => (
                          <div
                            key={columnIndex}
                            className="flex flex-col space-y-2"
                          >
                            {columnFeatures.map((feature, featureIndex) => (
                              <Link
                                onClick={closeDropdown}
                                key={featureIndex}
                                href={feature.link}
                                className={`flex gap-3`}
                              >
                                <div
                                  className={`bg-[#EECDFF] w-[25px] h-[25px] rounded-full p-2 relative flex items-center justify-center`}
                                >
                                  <Image
                                    src={feature.icon}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-[13px] h-[13px]"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <p className="text-[16px] font-[400]">
                                    {feature.title}
                                  </p>
                                  <p className="text-[12px] font-[400]">
                                    {feature.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "platforms" ? null : "platforms"
                      )
                    }
                    className="focus:outline-none flex items-center gap-3"
                  >
                    Platforms Features
                    <IoIosArrowDown
                      size={14}
                      className={`${
                        openDropdown === "platforms"
                          ? "transform rotate-180"
                          : ""
                      } transition-transform duration-300`}
                    />
                  </button>
                  {openDropdown === "platforms" && (
                    <ul className="absolute left-0 mt-5 rounded-[10px] w-[550px] bg-white text-black shadow-lg p-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {platformFeatures.map((columnFeatures, columnIndex) => (
                          <div
                            key={columnIndex}
                            className="flex flex-col space-y-2"
                          >
                            {columnFeatures.map((feature, featureIndex) => (
                              <Link
                                onClick={closeDropdown}
                                key={featureIndex}
                                href={`${feature?.link}?tab=${feature?.tab}#features`}
                                className={`flex gap-3 `}
                              >
                                <div
                                  className={`bg-[#EECDFF] w-[25px] h-[25px] rounded-full flex items-center justify-center`}
                                >
                                  <Image
                                    src={feature.icon}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-[13px]"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <p className="text-[16px] font-[400]">
                                    {feature.title}
                                  </p>
                                  <p className="text-[12px] font-[400]">
                                    {feature.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "resources" ? null : "resources"
                      )
                    }
                    className="focus:outline-none flex items-center gap-3"
                  >
                    Resources
                    <IoIosArrowDown
                      size={14}
                      className={`${
                        openDropdown === "resources"
                          ? "transform rotate-180"
                          : ""
                      } transition-transform duration-300`}
                    />
                  </button>
                  {openDropdown === "resources" && (
                    <ul className="absolute left-0 mt-5  rounded-[10px] w-[550px]  bg-white text-black shadow-lg ">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5  py-5">
                        {resources.map((columnFeatures, columnIndex) => (
                          <div
                            key={columnIndex}
                            className="flex flex-col gap-5"
                          >
                            {columnFeatures.map((feature, featureIndex) => (
                              <Link
                                onClick={closeDropdown}
                                key={featureIndex}
                                href={feature.link}
                                className={`flex justify-center items-center gap-3 `}
                              >
                                <div
                                  className={`bg-[#EECDFF] w-[25px] h-[25px] rounded-full flex items-center justify-center`}
                                >
                                  <Image
                                    src={feature.icon}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-[13px]"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <p className="text-[16px] font-[400]">
                                    {feature.title}
                                  </p>
                                  <p className="text-[12px] font-[400]">
                                    {feature.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "pricing" ? null : "pricing"
                      )
                    }
                    className="focus:outline-none flex items-center gap-3"
                  >
                    Pricing
                    <IoIosArrowDown
                      size={14}
                      className={`${
                        openDropdown === "pricing" ? "transform rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  </button>
                  {openDropdown === "pricing" && (
                    <ul className="absolute left-0 mt-5  rounded-[10px] w-[140px]  bg-white text-black shadow-lg ">
                      <div className="py-3">
                        {pricing.map((columnFeatures, columnIndex) => (
                          <div
                            key={columnIndex}
                            className="flex flex-col gap-5 justify-start items-start pl-3"
                          >
                            <a
                              onClick={closeDropdown}
                              href={columnFeatures.link}
                              className={`flex justify-center items-center gap-3 `}
                            >
                              <div className="flex flex-col  text-left">
                                <p className="text-[16px] py-1 font-[400]">
                                  {columnFeatures.title}
                                </p>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* right */}
          {user ? (
            <Link
              href={"https://app.infulent.io"}
              className="font-[500] text-[18px]  text-black"
            >
              Go to dashboard
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-10">
              {/* sign in */}
              <div className="flex  items-center space-x-2 pl-2  rounded-md">
                <Link
                  // onClick={() => router.push("/login")}
                  href={"/contact-us"}
                  className="font-[500] text-[18px]  text-black"
                >
                  Contact us
                </Link>
              </div>
              {/* start a project  */}
              <button
                onClick={() => router.push("https://app.infulent.io/signup")}
                style={{
                  background:
                    "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                  boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                }}
                className="font-[400] text-[16px] z-20  w-[181px] h-[49px] text-white rounded-full  "
              >
                Start for free
              </button>
            </div>
          )}

          {/* mobile menu  */}
          <div
            onClick={handleNavbar}
            className="sm:block md:hidden flex items-center z-50"
          >
            {nav ? (
              <RxCross1
                size={35}
                className="text-black z-50 right-5 cursor-pointer"
              />
            ) : (
              <LuMenu size={35} className=" text-black cursor-pointer" />
            )}
          </div>
          <div
            ref={dropdownRef}
            className={
              nav
                ? "md:hidden z-40 fixed top-0 right-0 shadow-md bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen dark:bg-primary-dark bg-white text-black text-right ease-linear duration-200 transform translate-x-0"
                : "md:hidden z-40 fixed top-0 right-0 shadow-md bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen dark:bg-primary-dark bg-white text-black text-right ease-linear duration-200  transform translate-x-full"
            }
          >
            <div className="absolute mt-[-3.5rem] z-50">
              <Link href={"/"}>
                <img
                  className="ml-[-8px]"
                  src="/images/logo.png"
                  height={90}
                  width={190}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex flex-col justify-between mt-5">
              <div className="flex flex-col basis-[50%]">
                <ul className="flex flex-col justify-start items-start gap-5  text-[18px] font-bold">
                  <li className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "serve" ? null : "serve"
                        )
                      }
                      className="focus:outline-none flex items-center gap-3"
                    >
                      Who We Serve
                      <IoIosArrowDown
                        size={14}
                        className={`${
                          openDropdown === "serve" ? "transform rotate-180" : ""
                        } transition-transform duration-300`}
                      />
                    </button>
                    {openDropdown === "serve" && (
                      <ul className="transition-all duration-200 ease-linear md:mt-5 z-40 rounded-[10px] md:w-[980px] bg-white text-black shadow-lg p-2">
                        <div className="flex flex-col space-y-2">
                          {serve.map((columnFeatures, columnIndex) => (
                            <div
                              onClick={closeMenu}
                              key={columnIndex}
                              className="flex flex-col space-y-2"
                            >
                              {columnFeatures.map((feature, featureIndex) => (
                                <Link
                                  onClick={closeDropdown}
                                  key={featureIndex}
                                  href={feature.link}
                                  className={`flex space-x-3`}
                                >
                                  <div
                                    className={`bg-[#EECDFF] w-[25px] h-[25px] rounded-full flex items-center justify-center`}
                                  >
                                    <Image
                                      src={feature.icon}
                                      alt=""
                                      width={300}
                                      height={300}
                                      className="w-[13px]"
                                    />
                                  </div>
                                  <div className="flex flex-col text-left">
                                    <p className="text-[14px] font-[400]">
                                      {feature.title}
                                    </p>
                                    <p className="text-[12px] font-[400]">
                                      {feature.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                  <li className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "platforms" ? null : "platforms"
                        )
                      }
                      className="focus:outline-none flex items-center gap-3"
                    >
                      Platforms Features
                      <IoIosArrowDown
                        size={14}
                        className={`${
                          openDropdown === "platforms"
                            ? "transform rotate-180"
                            : ""
                        } transition-transform duration-300`}
                      />
                    </button>
                    {openDropdown === "platforms" && (
                      <ul className="transition-all duration-200 ease-linear md:mt-5 z-40 rounded-[10px] md:w-[980px] bg-white text-black shadow-lg p-2">
                        <div className="flex flex-col space-y-2">
                          {platformFeatures.map(
                            (columnFeatures, columnIndex) => (
                              <div
                                onClick={closeMenu}
                                key={columnIndex}
                                className="flex flex-col space-y-2"
                              >
                                {columnFeatures.map((feature, featureIndex) => (
                                  <Link
                                    onClick={closeDropdown}
                                    key={featureIndex}
                                    href={feature.link}
                                    className={`flex gap-3 ${
                                      feature.id == 2 ? "" : ""
                                    }`}
                                  >
                                    <div
                                      className={`bg-[#EECDFF] w-[25px] h-[25px] rounded-full flex items-center justify-center`}
                                    >
                                      <Image
                                        src={feature.icon}
                                        alt=""
                                        width={300}
                                        height={300}
                                        className="w-[13px]"
                                      />
                                    </div>
                                    <div className="flex flex-col text-left">
                                      <p className="text-[14px] font-[400]">
                                        {feature.title}
                                      </p>
                                      <p className="text-[12px] font-[400]">
                                        {feature.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )
                          )}
                        </div>
                      </ul>
                    )}
                  </li>

                  <li className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "resources" ? null : "resources"
                        )
                      }
                      className="focus:outline-none flex items-center gap-3"
                    >
                      Resources
                      <IoIosArrowDown
                        size={14}
                        className={`${
                          openDropdown === "resources"
                            ? "transform rotate-180"
                            : ""
                        } transition-transform duration-300`}
                      />
                    </button>
                    {openDropdown === "resources" && (
                      <ul className=" rounded-[10px]   bg-white text-black shadow-lg ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5  py-5">
                          {resources.map((columnFeatures, columnIndex) => (
                            <div
                              onClick={closeMenu}
                              key={columnIndex}
                              className="flex flex-col gap-5"
                            >
                              {columnFeatures.map((feature, featureIndex) => (
                                <a
                                  onClick={closeDropdown}
                                  key={featureIndex}
                                  href={feature.link}
                                  className={`flex justify-center items-center gap-3 `}
                                >
                                  <div
                                    className={`bg-[#EECDFF] w-[25px] h-[25px] rounded-full flex items-center justify-center`}
                                  >
                                    <Image
                                      src={feature.icon}
                                      alt=""
                                      width={300}
                                      height={300}
                                      className="w-[13px]"
                                    />
                                  </div>
                                  <div className="flex flex-col text-left">
                                    <p className="text-[14px] font-[400]">
                                      {feature.title}
                                    </p>
                                    <p className="text-[12px] font-[400]">
                                      {feature.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                  <li className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "pricing" ? null : "pricing"
                        )
                      }
                      className="focus:outline-none flex items-center gap-3"
                    >
                      Pricing
                      <IoIosArrowDown
                        size={14}
                        className={`${
                          openDropdown === "pricing"
                            ? "transform rotate-180"
                            : ""
                        } transition-transform duration-300`}
                      />
                    </button>
                    {openDropdown === "pricing" && (
                      <ul className="absolute left-0 mt-5  rounded-[10px] w-[140px]  bg-white text-black shadow-lg ">
                        <div className="py-3">
                          {pricing.map((columnFeatures, columnIndex) => (
                            <div
                              onClick={closeMenu}
                              key={columnIndex}
                              className="flex flex-col gap-5 justify-start items-start pl-3"
                            >
                              <a
                                onClick={closeDropdown}
                                href={columnFeatures.link}
                                className={`flex justify-center items-center gap-3 `}
                              >
                                <div className="flex flex-col  text-left">
                                  <p className="text-[16px] py-1 font-[400]">
                                    {columnFeatures.title}
                                  </p>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                </ul>
                <div className="flex flex-col justify-start items-start mt-10 gap-10">
                  {/* sign in */}
                  <div className="flex  items-center space-x-2 pl-2  rounded-md">
                    <button
                      onClick={() => router.push("https://app.infulent.io/signup")}
                      className="font-[500] text-[18px]  text-black"
                    >
                      Log in
                    </button>
                  </div>
                  {/* start a project  */}
                  <button
                    style={{
                      background:
                        "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                      boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                    }}
                    onClick={() => router.push("https://app.infulent.io/signup")}
                    className="font-[400] text-[16px] z-20  w-[181px] h-[49px] text-white rounded-full  "
                  >
                    Start with free trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
