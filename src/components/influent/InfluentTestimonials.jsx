import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
const font2 = Raleway({ subsets: ["latin"] });

const InfluentTestimonials = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex flex-col md:flex-row  justify-start my-28 md:mt-20 md:mb-32 items-center gap-10">
                    <div className="flex flex-col gap-3 md:w-1/2">
                        <p
                            className={`${font2.className} text-[24px] font-[700] bg-clip-text text-transparent bg-gradient-to-r from-[#AF1FFC] to-[#FF5B84]`}
                        >
                            Testimonial management
                        </p>
                        <h1 className={`${font2.className} text-[36px] font-[700]`}>
                            Customer{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AF1FFC] to-[#FF5B84]">
                                Satisfaction
                            </span>{" "}
                            is Our Secret Source Of Success{" "}
                        </h1>
                        <p className={` text-[16px]`}>
                            Master ad Testimonials at all stages. Infulent simplifies
                            planning, organization, and amplification of influencer marketing
                            on social media. Launch Testimonials, monitor real-time success,
                            and access comprehensive reports for valuable insights.{" "}
                        </p>
                        <Image
                            src={"/images/testimonial.png"}
                            alt=""
                            width={800}
                            height={800}
                            className="w-[300px]   mx-auto rounded-[10px]"
                        />
                    </div>
                    <div className="md:w-1/2 flex justify-start">
                        <div
                            className="w-[61px] h-[61px] rounded-full opacity-50 z-1 right-44 md:mt-[-5rem] absolute"
                            style={{
                                background:
                                    "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                            }}
                        ></div>
                        <div
                            className="w-[61px] h-[61px] rounded-full z-1 right-44 mt-[20rem] absolute"
                            style={{
                                background:
                                    "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                            }}
                        ></div>
                        <div
                            className="w-[30px] h-[30px] rounded-full z-1 right-72 mt-[20rem] absolute"
                            style={{
                                background:
                                    "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                            }}
                        ></div>
                        <div className="relative z-[-1] w-[320px] md:w-[387px] md:left-44 md:mt-[-3rem] h-[320px] md:h-[390px] bg-[#F5E3FF] rounded-full"></div>
                        <div
                            className="md:w-[555px] w-[320px]  rounded-[10px] absolute bg-white/40 p-5"
                            style={{
                                boxShadow: " 0px 4px 45px 0px rgba(255, 91, 132, 0.12)",
                            }}
                        >
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris."Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris."Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                            <div className="flex items-start gap-3 mt-5">
                                <Image
                                    src={"/images/man.jpeg"}
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="w-[63px]  h-[63px] rounded-full"
                                />
                                <div className="flex flex-col ">
                                    <h1 className="text-[18px]">James William</h1>
                                    <p className="text-[16px] text-[#777]">Influencer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default InfluentTestimonials