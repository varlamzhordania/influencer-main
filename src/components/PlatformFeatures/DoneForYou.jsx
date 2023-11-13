import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const DoneForYou = () => {
  return (
    <div
      className="flex flex-col md:flex-row-reverse justify-start items-center gap-10"
      id="influencer-analysis"
    >
      <div className="flex flex-col gap-3">
        <h1 className={`text-xl md:text-2xl font-[700] md:pr-24`}>
          Done for you fully managed influencer marketing
        </h1>
        <p className="text-base leading-8">
          In the bustling digital marketing landscape, engaging in influencer
          marketing holds paramount potential to elevate your brand’s visibility
          and engagement. However, the intricacies of orchestrating influencer
          campaigns can be daunting, especially without a dedicated in-house
          team. This is where our Done-for-You Fully Managed Influencer
          Marketing Service steps in, offering a bridge to effortless influencer
          marketing while you maintain direct communication with the creators.
          Here’s a glimpse into the seamless journey awaiting you:
        </p>
        <ul className="list-disc ml-10 text-base flex flex-col space-y-2 leading-8">
          <li>
            <b>Expertly Managed:</b> Entrust your influencer marketing campaigns
            to our seasoned in-house social media marketing experts, who carry
            the torch from conception to execution, ensuring each campaign
            resonates with your brand ethos and reaches your target audience
            effectively.
          </li>
          <li>
            <b>Ideal Creator Matchmaking:</b> We dive into our extensive network
            to match you with the ideal creators whose audience and content
            align with your brand, ensuring authentic and engaging
            collaborations.
          </li>
          <li>
            <b>Outreach and Communication:</b> Say goodbye to the tedious task
            of outreach and communication. We handle it all – from initial
            contact and hiring to ongoing communication, ensuring a smooth
            collaboration with influencers.
          </li>
          <li>
            <b>Performance Tracking:</b> Stay informed on the progress of your
            campaigns with meticulous performance tracking. We monitor key
            metrics to gauge the effectiveness and reach of your influencer
            partnerships.
          </li>
          <li>
            <b>Comprehensive Reporting:</b> : Receive detailed reports
            encapsulating the performance and ROI of your campaigns, granting
            you insightful data to evaluate the success and learnings from each
            influencer collaboration.
          </li>
          <li>
            <b>Hassle-free Payments:</b> We manage the payment process with
            influencers on your behalf, ensuring timely and accurate payments,
            alleviating administrative burdens from your end.
          </li>
          <li>
            <b>Remarkable Results, Less Complexities:</b> Immerse in the
            remarkable results of well-executed influencer marketing campaigns,
            sans the complexities and time-consuming tasks, all while enjoying
            the convenience of direct communication with influencers.
          </li>
        </ul>
        <p className="text-base">
          Our Done-for-You Fully Managed Influencer Marketing Service is
          designed to unlock the potential of influencer marketing for your
          brand, sans the hassle. Dive into a hassle-free influencer marketing
          experience, watching your brand thrive in the digital realm, all under
          the meticulous care of our seasoned experts.
        </p>
      </div>
    </div>
  );
};

export default DoneForYou;
