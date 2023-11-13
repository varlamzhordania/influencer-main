import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const CampaignManagement = () => {
  return (
    <div
      className="flex flex-col md:flex-row-reverse justify-start items-center gap-10"
      id="influencer-analysis"
    >
      <div className="flex flex-col gap-3">
        <h1 className={`text-xl md:text-2xl font-[700] md:pr-24`}>
          Streamlined Campaign Management
        </h1>
        <p className="text-base leading-8">
          Embarking on influencer marketing campaigns in Canada calls for a
          centralized digital workspace that facilitates effortless creation,
          execution, monitoring, and optimization. Influent.ca unveils a robust
          Campaign Management Feature, tailored to streamline your campaign
          orchestration and influencer onboarding process in the Canadian
          digital landscape. Here's how we redefine campaign management and
          influencer collaboration:
        </p>
        <ul className="list-disc ml-10 text-base flex flex-col space-y-2 leading-8">
          <li>
            <b>Campaign Creation:</b> Initiate your influencer marketing
            campaigns seamlessly on Influent.ca, setting a solid foundation for
            your influencer engagements in Canada.
          </li>
          <li>
            <b>Goal Setting:</b> : Carve out clear campaign goals, ensuring
            every influencer activity is aligned towards achieving your brand's
            objectives in the Canadian market.
          </li>
          <li>
            <b>Influencer Onboarding:</b> Simplify the onboarding of Canadian
            influencers with our user-centric interface, fostering smooth
            collaborations from the get-go.
          </li>
          <li>
            <b>Campaign Brief Uploading:</b> Upload your campaign briefs
            effortlessly, providing Canadian influencers with crystal clear
            guidelines and expectations for harmonious campaign execution.
          </li>
          <li>
            <b>Content & Influencer Linking:</b> Seamlessly link content and
            influencers, structuring a well-coordinated campaign framework for
            effective influencer marketing in Canada.
          </li>
          <li>
            <b>Status Updates:</b> Stay updated with real-time status logs,
            ensuring transparency and informed decision-making throughout the
            campaign lifespan.
          </li>
          <li>
            <b>Real-Time Performance Monitoring:</b> Delve into real-time
            performance analytics, gaining immediate insights into your
            campaign's performance in the Canadian influencer market, and
            enabling data-driven optimizations.
          </li>
        </ul>
        <p className="text-base">
          Influent.ca's Campaign Management Feature is your companion in
          navigating the Canadian influencer marketing sphere, providing a
          dedicated digital workspace for orchestrating campaigns and onboarding
          influencers effortlessly. Elevate your influencer marketing strategy
          in Canada with streamlined campaign management on Influent.ca!
        </p>
      </div>
    </div>
  );
};

export default CampaignManagement;
