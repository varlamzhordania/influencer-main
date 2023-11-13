import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const InfluencerAnalysis = () => {
  return (
    <div
      className="flex flex-col md:flex-row-reverse justify-start items-center gap-10"
      id="influencer-analysis"
    >
      <div className="flex flex-col gap-3">
        <h1 className={`text-xl md:text-2xl font-[700] md:pr-24`}>
          Influencer Analysis: Avoid guessing, make informed-decision
        </h1>
        <p className="text-base leading-8">
          In the thriving ecosystem of influencer marketing, the success of your
          campaigns hinges on partnering with the right influencers. The
          traditional approach often entails a game of guesswork which can be
          both time-consuming and resource-draining. Transition from guesswork
          to informed decision-making with Influent.ca. Our platform is
          meticulously crafted to provide you with in-depth insights into
          influencer profiles, enabling a data-driven approach to influencer
          partnerships. Here's how Influent.ca empowers your influencer analysis
          journey:
        </p>
        <ul className="list-disc ml-10 text-base flex flex-col space-y-2 leading-8">
          <li>
            <b>Holistic Profile Insight:</b> Delve deep into influencer
            profiles, exploring crucial metrics like age, gender, ensuring a
            harmonious alignment with your brand's persona.
          </li>
          <li>
            <b>Audience Demographics Analysis:</b> Navigate through detailed
            audience demographics of potential influencers, covering aspects
            like age, gender, location, language, and ethnicity, to target the
            most receptive market segments.
          </li>
          <li>
            <b>Followers Growth and Authenticity Check:</b> Examine the
            authenticity and growth trajectory of an influencer's follower base,
            filtering out fake engagements to ensure genuine influencer
            partnerships.
          </li>
          <li>
            <b>Brand Affinity Exploration:</b> Understand an influencer's brand
            affinity and interests, assessing how well they resonate with your
            brand values for meaningful collaborations.
          </li>
          <li>
            <b>Content Resonance Assessment:</b> Evaluate the resonance of the
            content posted by influencers, its alignment with your brand
            messaging, and the engagement it attracts.
          </li>
          <li>
            <b>Engagement Metrics Unveiled:</b> Analyze engagement levels,
            trends, and the overall influence an influencer commands, to
            envision the potential reach and interaction of your campaigns.
          </li>
          <li>
            <b>Hashtag Utilization Insight:</b> Investigate the hashtags
            employed by influencers, assessing their relevance and the traction
            they gain in the influencer's community.
          </li>
          <li>
            <b>Similar Creators Discovery:</b> Uncover similar creators within
            an influencer's network, broadening your horizon for potential
            influencer partnerships.
          </li>
        </ul>
        <p className="text-base">
          With Influent.ca, say goodbye to the era of guesswork and usher in a
          new age of informed, data-driven influencer marketing strategy. Your
          pathway towards making informed decisions in influencer partnerships
          begins here!
        </p>
      </div>
    </div>
  );
};

export default InfluencerAnalysis;
