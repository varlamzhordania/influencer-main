import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
const font2 = Raleway({ subsets: ["latin"] });

const ExploreService = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-10">
                    <div className="flex flex-col gap-3 md:w-1/2">
                        <h1 className={`${font2.className} text-[36px] font-[700]`}>
                        Informed Content Creation </h1>
                        <p className={` text-[16px]`}>
                        Inform your content creation process with sentiment analysis insights, crafting messages that align with your audience’s emotional tone, fostering authentic and engaging interactions.
                        </p>

                    </div>
                    <div className="md:w-1/2 flex justify-start">
                        <img src={'/images/reportingnew.png'} alt="" width={800} height={800} className="w-[320px] md:w-[567px]   rounded-[10px]" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default ExploreService;
