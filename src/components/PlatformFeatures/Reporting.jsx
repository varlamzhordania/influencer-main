import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Raleway } from "next/font/google";
const font2 = Raleway({ subsets: ["latin"] });

const Reporting = () => {
  return (
    <div
      className="flex flex-col md:flex-row-reverse justify-start items-center gap-10"
      id="influencer-analysis"
    >
      <div className="flex flex-col gap-3">
        <h1 className={`text-xl md:text-2xl font-[700] md:pr-24`}>
          Insightful Reporting and Analytics
        </h1>
        <p className="text-base leading-8">
          The influencer marketing ecosyastem often grapples with the absence of
          a customized industry-standard framework for meticulous tracking,
          analysis, and reporting on Key Performance Indicators (KPIs).
          Influent.ca steps in to fill this void, offering a robust feature for
          in-depth tracking, analysis, and reporting, tailored to meet the
          nuanced demands of influencer marketing campaigns. Here’s how
          Influent.ca empowers brands with actionable insights and data-driven
          decision-making:
        </p>
        <ul className="list-disc ml-10 text-base flex flex-col space-y-2 leading-8">
          <li>
            <b>Monitoring Campaign KPIs:</b> Keep a pulse on the vital KPIs of
            your campaigns, ensuring your influencer marketing initiatives are
            on the right trajectory towards achieving set goals in Canada.
          </li>
          <li>
            <b>Tracking Campaign Performance:</b> Delve into real-time tracking
            of campaign performance, gauging the effectiveness and reach of your
            influencer partnerships
          </li>
          <li>
            <b>Audience Engagement Insights:</b> Uncover profound insights into
            audience engagement, understanding how your target audience
            interacts with influencer-generated content.
          </li>
          <li>
            <b>Reach Analysis:</b> Evaluate the reach of your campaigns,
            measuring how far your brand message is traveling through influencer
            channels.
          </li>
          <li>
            <b>Comparing Influencer Performance:</b> Benchmark and compare the
            performance of different influencers, aiding in identifying the most
            impactful collaborations for your brand.
          </li>
          <li>
            <b>Optimizing Campaigns:</b> Leverage real-time data to optimize
            campaigns, tweaking strategies for enhanced performance and better
            alignment with your brand objectives.
          </li>
          <li>
            <b>ROI Assessment:</b> Ascertain the Return on Investment (ROI) of
            your influencer marketing campaigns, aligning your investments with
            tangible outcomes.
          </li>
          <li>
            <b>Measuring Total Media Earned:</b>
            Gauge the total media value earned through influencer
            collaborations, understanding the broader impact of your influencer
            marketing strategies.
          </li>
          <li>
            <b>Comparative ROI Analysis:</b> The analysis and reporting feature
            provides a comparative insight into the ROI of influencer marketing
            versus other digital marketing options, enabling an informed
            understanding of influencer marketing's efficacy within your broader
            digital marketing strategy.
          </li>
        </ul>
        <p className="text-base">
          Influent.ca's tracking, analysis, and reporting feature is engineered
          to offer a holistic view of your influencer marketing campaigns in
          Canada. With a wealth of data at your fingertips, navigate through the
          influencer marketing landscape with confidence, making informed
          decisions that propel your brand towards measurable success in the
          Canadian digital domain.
        </p>
      </div>
    </div>
  );
};

export default Reporting;
