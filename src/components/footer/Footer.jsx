import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Link from "next/link";
const font2 = Raleway({ subsets: ["latin"] });
const Footer = () => {
  return (
    <div className="pt-20 mt-15 w-100vw">
      <Wrapper className="flex flex-col items-center">
        <div className="sm:flex grid grid-cols-2 sm:flex-col md:flex-row justify-between items-between  gap-10 md:gap-24 w-[100%]">
          <div className="flex flex-col justify-start items-start gap-3">
            <h1 className={`text-[24px] font-[600] ${font2.className}`}>
              Who we serve
            </h1>
            <ul className="flex flex-col gap-3">
              <Link href={"/influencer/#agencies"}>
                <li className="font-[500]">Agencies</li>
              </Link>
              <Link href={"/influencer/#brands"}>
                <li className="font-[500]">Brands</li>
              </Link>
              <Link href={"/influencer/#non-profit"}>
                <li className="font-[500]">Non-Profit</li>
              </Link>
              <Link href={"/influencer/#sme"}>
                <li className="font-[500]">SME</li>
              </Link>
              <Link href={"/influencer/#ecommerce"}>
                <li className="font-[500]">Ecommerce</li>
              </Link>
              <Link href={"/influencer/#creators"}>
                <li className="font-[500]">Creators</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h1 className={`text-[24px] font-[600] ${font2.className}`}>
              Features
            </h1>
            <ul className="flex flex-col gap-3">
              <Link
                href={"/platform-features?tab=influencer-discovery#features"}
              >
                <li className="font-[500]">Influencer Discovery</li>
              </Link>
              <Link
                href={"/platform-features?tab=influencer-analysis#features"}
              >
                <li className="font-[500]">Analyze Influencers</li>
              </Link>
              <Link
                href={"/platform-features?tab=relationship-management#features"}
              >
                <li className="font-[500]">Relationship Management</li>
              </Link>
              <Link href={"/platform-features?tab=comments-analysis#features"}>
                <li className="font-[500]">Sentiment Analysis</li>
              </Link>
              <Link
                href={"/platform-features?tab=campaign-management#features"}
              >
                <li className="font-[500]">Manage Compaigns</li>
              </Link>
              <Link href={"/platform-features?tab=fully-managed#features"}>
                <li className="font-[500]">Fully Managed Service</li>
              </Link>
              <Link href={"/platform-features?tab=reporting#features"}>
                <li className="font-[500]">Reporting & Analytics</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-start gap-3">
            <h1 className={`text-[24px] font-[600] ${font2.className}`}>
              About
            </h1>
            <ul className="flex flex-col gap-3">
              <Link href={"/about-us"}>
                <li className="font-[500]">About us</li>
              </Link>

              <Link href={"/contact-us"}>
                <li className="font-[500]">Contact us</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h1 className={`text-[24px] font-[600] ${font2.className}`}>
              Resources
            </h1>
            <ul className="flex flex-col gap-3">
              <Link href={"/guide"}>
                <li className="font-[500]">Marketing Guide</li>
              </Link>
              <Link href={"/toolkit"}>
                <li className="font-[500]">Marketing Tool</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center py-10 w-[100%]">
          <div className="flex items-center gap-5">
            {" "}
            <p>
              <a href="/terms" className="text-sm md:text-base">Terms of Service</a>
            </p>
            <p>
              {" "}
              <a href="/privacy-policy" className="text-sm md:text-base">Privacy policy</a>
            </p>
          </div>
          {/*<p className="text-sm md:text-base">*/}
          {/*  Design & Developed by{" "}*/}
          {/*  <a href="https://zysoftec.com/" className="text-[#AF1FFC]">*/}
          {/*    {" "}*/}
          {/*    Zysoftec*/}
          {/*  </a>*/}
          {/*</p>*/}
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
