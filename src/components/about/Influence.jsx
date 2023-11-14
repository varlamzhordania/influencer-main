import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
import Link from "next/link";
const font2 = Raleway({ subsets: ["latin"] });

const Influence = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex  md:flex-row flex-col justify-start mt-20 items-center gap-10">
          <div className="flex flex-col gap-3 md:w-1/2">
            {/* <h1 className={`${font2.className} text-[32px] md:text-[36px] font-[700]`}>
                            What Makes Influencity Different?

                        </h1>
                        <p className={` text-[16px]`}>
                            Passionate Team of Experts: We strongly believe in our solutions, and we know where we want to go with our business.
                        </p>
                        <p>
                            Transparent and Honest Philosophy: We believe trust is the best way to build business relationships and strive to offer clarity in what we do.
                        </p> */}
            <p className={` text-[16px]`}>
              What sets Infulent apart is our extensive network of Canadian
              influencers spread across the entire country. If your business is
              looking to execute locally targeted marketing campaigns tailored
              to specific demographics, Infulent's AI-powered features make this
              process seamless and efficient. With over 500,000 influencers from
              platforms like Instagram, TikTok, and YouTube, you'll find an
              abundance of options to amplify your brand's message. All the
              influencer profile information you get is based on what each
              influencer shared publicly as their public profile.
              </p>
              <p>
              <br />
              Our platform is designed to be user-friendly, offering
              self-service features that allow you to navigate and manage your
              influencer marketing campaigns with ease. However, if you're
              seeking a hassle-free, fully managed solution, our team is ready
              to step in and handle every aspect of your influencer marketing
              campaign for you.
              </p><p>
              <br />
              Whether you're a seasoned marketer or new to the world of
              influencer marketing, Infulent is here to guide you, provide
              unparalleled access to Canada's influencer community, and help you
              achieve your marketing goals. We're not just a platform; we're
              your partners in connecting your brand with the right influencers
              and audiences.
              <br />
              </p> <p>
              Thank you for choosing Infulent.ca, where innovation, expertise,
              and the Canadian spirit come together to drive meaningful
              connections in the digital era. Get started with us today, and
              let's shape the future of influencer marketing together!
              <br />
              </p><p>
              We welcome your feedback contact as at contact@infulent.ca
            </p>
           
            {/* <button
              style={{
                background:
                  "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
              }}
              onClick={() => router.push("/")}
              className="font-[400] text-[16px] z-20  w-[163px] h-[50px] text-white rounded-full  "
            >
              Post Comment
            </button> */}
          </div>
          <div className="md:w-1/2 flex md:justify-end ">
            <img
              src={"/images/about2.png"}
              alt=""
              width={800}
              height={800}
              className="w-[320px] h-[320px] md:w-[459px] md:h-[459px] object-cover rounded-full"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Influence;
