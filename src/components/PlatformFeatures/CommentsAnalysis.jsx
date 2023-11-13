import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const CommentsAnalysis = () => {
  return (
    <div
      className="flex flex-col md:flex-row-reverse justify-start items-center gap-10"
      id="influencer-analysis"
    >
      <div className="flex flex-col gap-3">
        <h1 className={`text-xl md:text-2xl font-[700] md:pr-24`}>
          AI-Powered Comment Analysis for Social Media Sentiment Analysis
        </h1>
        <p className="text-base leading-8">
          Harness the prowess of Influent.ca's AI-Powered Comment Analysis to
          traverse the dynamic realm of social media sentiment. Understanding
          the sentiment and emotional tone embedded in your brand's social media
          engagements is pivotal for refining your campaign strategy. Our Social
          Media Sentiment Analysis service at Influent.ca is tailored to delve
          deep into the emotional fabric of social media interactions concerning
          your brand. Here's how we propel your social media strategy forward:
        </p>
        <ul className="list-disc ml-10 text-base flex flex-col space-y-2 leading-8">
          <li>
            <b>Real-Time Sentiment Monitoring:</b> Engage with real-time
            sentiment analysis, capturing the pulse of public sentiment as it
            unfolds. Stay ahead of the curve by understanding how your audience
            feels about your brand at any given moment.
          </li>
          <li>
            <b>Emotional Tone Analysis:</b> Delve beyond mere likes and shares;
            unravel the emotional tone embedded in social media engagements.
            Whether it's excitement, appreciation, or discontent, gauge the
            emotions driving the interactions.
          </li>
          <li>
            <b>Tailored Campaign Strategy:</b> Leverage the insights gleaned
            from sentiment analysis to tailor your campaign strategy. Align your
            messaging with the prevailing sentiment, ensuring resonant and
            impactful communication.
          </li>
          <li>
            <b>Competitor Sentiment Benchmarking:</b> Compare the sentiment
            surrounding your brand against competitors, identifying your brand's
            strengths and areas of improvement in the social media landscape.
          </li>
          <li>
            <b>Enhanced Engagement Understanding:</b> Foster a deeper
            understanding of your audience's engagement, identifying sentiment
            trends over time. Utilize this knowledge to create more emotionally
            resonant campaigns.
          </li>
          <li>
            <b>Informed Content Creation:</b> Inform your content creation
            process with sentiment analysis insights, crafting messages that
            align with your audience's emotional tone, fostering authentic and
            engaging interactions.
          </li>
          <li>
            <b>Impactful Crisis Management:</b> In times of crisis, timely
            sentiment analysis can be pivotal. Assess the sentiment landscape
            and adapt your communication strategy swiftly to mitigate negative
            impacts and maintain brand trust.
          </li>
        </ul>
        <p className="text-base">
          Influent.ca's Social Media Sentiment Analysis service, powered by
          advanced AI-driven comment analysis, is your conduit to not just
          understanding, but empathizing with your audience. This creates a
          foundation for more meaningful and effective social media campaigns.
          Gain a nuanced understanding of the sentiment landscape, and harness
          this knowledge to elevate your brand's social media strategy to new
          heights.
        </p>
      </div>
    </div>
  );
};

export default CommentsAnalysis;
