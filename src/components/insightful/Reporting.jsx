import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
const font2 = Raleway({ subsets: ["latin"] });

const Reporting = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex flex-col md:flex-row-reverse  justify-start items-center gap-10">
                    <div className="flex flex-col gap-3 md:w-1/2">
                        <h1 className={`${font2.className} text-[36px] font-[700]`}>
                            Monitoring Campaign KPIs         </h1>
                        <p className={` text-[16px]`}>
                            Keep a pulse on the vital KPIs of your campaigns, ensuring your influencer marketing initiatives are on the right trajectory towards achieving set goals in Canada.               </p>

                    </div>
                    <div className="md:w-1/2 flex justify-start">
                        <Image src={'/images/reportingnew.png'} alt="" width={800} height={800} className="w-[320px] md:w-[567px]   rounded-[10px]" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Reporting;
