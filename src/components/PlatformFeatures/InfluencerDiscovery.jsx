import React from "react";
import Wrapper from "../shared/Wrapper";
import { Raleway } from "next/font/google";
import Image from "next/image";
const font = Raleway({ subsets: ["latin"] });

const InfluencerDiscovery = () => {
  return (
    <div className="flex flex-col space-y-4" id="influencer-discovery">
      <h1 className="text-2xl font-bold md:pr-40">
        Influencer Discovery : Find your best match
      </h1>
      <div className="ml-5 flex flex-col space-y-2">
        <div>
          <h2 className="text-lg font-semibold leading-8">
            Discover New Influencers Efficiently
          </h2>
          <ul className="list-disc ml-10 text-base flex flex-col space-y-1 leading-8">
            <li>
              Bypass the tedious task of manual browsing on social platforms.
            </li>
            <li>
              Move beyond exploring hashtags or connections to find influencers.
            </li>
            <li>Get valuable insights into audiences without wasting time.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold leading-8">
            The largest Database in Canada
          </h2>
          <ul className="list-disc ml-10 text-base flex flex-col space-y-1 leading-8">
            <li>
              Access a vast database of over 300,000 influencer profiles based
              in Canada.
            </li>
            <li>
              Expand your collaborations beyond the usual suspects you've come
              across.
            </li>
            <li>
              Effortlessly search and filter creators across Instagram, YouTube,
              and TikTok.
            </li>
            <li>Nano, micro and macro influencers and creators</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold leading-8">
            Advanced Filtering System
          </h2>
          <ul className="list-disc ml-10 text-base flex flex-col space-y-1 leading-8">
            <li>
              Use 35+ built-in filters to narrow down the best influencers for
              your needs.
            </li>
            <li>
              Target influencers based on size, location, niche, and more.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold leading-8">How It Works?</h2>
          <ul className="list-disc ml-10 text-base flex flex-col space-y-2 leading-8">
            <li>
              <b>Platform Selection:</b> Choose among platforms: YouTube,
              TikTok, or Instagram.
            </li>
            <li>
              <b>Audience Insights:</b> Dive deep into influencer audience size,
              demographics, location, and interests.
            </li>
            <li>
              <b>Performance Metrics:</b> Gauge influencer performance and
              authenticity metrics. Access engagement rate, follower growth,
              like growth, and percentage of authentic followers.
            </li>
            <li>
              <b>Content Insights:</b> Analyze content performance metrics:
              hashtags, sponsored posts, and original content.
            </li>
            <li>
              <b>Brand Affinity:</b> Understand what brands an influencer has an
              affinity for or has worked with.
            </li>
            <li>
              <b>Lookalike Influencers:</b> Discover influencers with similar
              interests and audience profiles.
            </li>
          </ul>
        </div>
        <p className="text-lg leading-8">
          Elevate your influencer marketing campaigns by harnessing the power of
          Influent. Ca's cutting-edge discovery features.
        </p>
      </div>
    </div>
  );
};

export default InfluencerDiscovery;
