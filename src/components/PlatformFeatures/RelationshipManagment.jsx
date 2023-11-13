import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const RelationshipManagment = () => {
  return (
    <div
      className="flex flex-col md:flex-row-reverse justify-start items-center gap-10"
      id="influencer-analysis"
    >
      <div className="flex flex-col gap-3">
        <h1 className={`text-xl md:text-2xl font-[700] md:pr-24`}>
          Influencer Relationship Management
        </h1>
        <p className="text-base leading-8">
          In the digital marketing frontier, influencer marketing has emerged as
          a cornerstone for brand amplification. However, navigating through the
          maze of influencer relationship management can often be a cumbersome
          endeavour. Influent.ca, your Canada-based influencer management
          platform, redefines this narrative by offering a seamless Influencer
          Relationship Management (IRM) feature. Here's how we fine-tune
          influencer relationship management, integrating it as a vital stack in
          your digital marketing toolkit:
        </p>
        <ul className="list-disc ml-10 text-base flex flex-col space-y-2 leading-8">
          <li>
            <b>Long-Term Relationship Building:</b> Transition from one-off
            campaigns to nurturing enduring relationships with influencers,
            embedding influencer marketing as a steadfast stack in your digital
            marketing strategy.
          </li>
          <li>
            <b>Centralized Creators Database:</b> Harness the power of a
            centralized database of creators to bolster your paid media adverts,
            fostering a harmonized influencer-brand synergy right here in
            Canada.
          </li>
          <li>
            <b>Relationship Cultivation:</b> Embark on a journey of cultivating
            meaningful relationships with influencers, laying a robust
            foundation for collaborative marketing success.
          </li>
          <li>
            <b>Outreach Tracking:</b> Effortlessly track your outreach
            initiatives, ensuring timely engagement and follow-ups with
            influencers, simplifying relationship nurturing.
          </li>
          <li>
            <b>Structured Contact Detail Management:</b> Bid adieu to the chaos
            of scattered information; store and manage influencer contact
            details in a structured manner, all under one roof.
          </li>
          <li>
            <b>Real-Time Engagement Status Monitoring:</b> Stay abreast of the
            engagement status with influencers, keeping your influencer
            marketing campaigns well-coordinated and on track.
          </li>
          <li>
            <b>Collaborative Notes Documentation:</b> Document crucial notes and
            insights pertaining to influencers and campaigns, ensuring a
            cohesive understanding among team members.
          </li>
          <li>
            <b>Cloud-Based Database Management:</b> Move beyond the daunting
            realm of spreadsheets; upload or create your cloud-based database of
            influencers on Influent.ca, centralizing all your influencer
            management endeavours.
          </li>
        </ul>
        <p className="text-base">
          With Influent.ca, your influencer relationship management in Canada is
          transformed into an organized, efficient, and impactful venture.
          Elevate your influencer marketing strategy in Canada with streamlined
          relationship management on Influent.ca!
        </p>
      </div>
    </div>
  );
};

export default RelationshipManagment;
