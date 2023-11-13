import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
const font2 = Raleway({ subsets: ["latin"] });

const Streamline = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-10">
                    <div className="flex flex-col gap-3 md:w-1/2">
                        <h1 className={`${font2.className} text-[36px] font-[700]`}>
                            Campaign Creation           </h1>
                        <p className={` text-[16px]`}>
                            Initiate your influencer marketing campaigns seamlessly on Influent.ca, setting a solid foundation for your influencer engagements in Canada.                    </p>

                    </div>
                    <div className="md:w-1/2 flex justify-start">
                        <Image src={'/images/campaign.png'} alt="" width={800} height={800} className="w-[320px] md:w-[567px]   rounded-[10px]" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Streamline;
