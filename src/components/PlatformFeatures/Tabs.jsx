import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import { RiTeamFill, RiUserSearchFill } from "react-icons/ri";
import { TbCirclesRelation, TbDeviceIpadHorizontalStar } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineInsights } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import InfluencerDiscovery from "./InfluencerDiscovery";
import InfluencerAnalysis from "./InfluencerAnalysis";
import RelationshipManagment from "./RelationshipManagment";
import CampaignManagement from "./CampaignManagement";
import Reporting from "./Reporting";
import CommentsAnalysis from "./CommentsAnalysis";
import DoneForYou from "./DoneForYou";

function TabsComponent({ tab }) {
  const [activeTab, setActiveTab] = useState(
    tab ? tab : "influencer-discovery"
  );

  const tabs = [
    {
      name: "Influencer Discovery",
      icon: <RiUserSearchFill />,
      key: "influencer-discovery",
    },
    {
      name: "Influencer Analysis",
      icon: <IoMdAnalytics />,
      key: "influencer-analysis",
    },
    {
      name: "Influencer Relationship Management",
      icon: <TbCirclesRelation />,
      key: "relationship-management",
    },
    {
      name: "Streamlined Campaign Management",
      icon: <TbDeviceIpadHorizontalStar />,
      key: "campaign-management",
    },
    {
      name: "Insightful Reporting and Analytics",
      icon: <MdOutlineInsights />,
      key: "reporting",
    },
    {
      name: "AI-Powered Comment Analysis",
      icon: <AiOutlineComment />,
      key: "comments-analysis",
    },
    {
      name: "Fully managed influencer marketing",
      icon: <RiTeamFill />,
      key: "fully-managed",
    },
  ];

  return (
    <div>
      <Wrapper>
        <div
          className="w-full flex md:flex-row flex-col mt-5 md:mt-10"
        >
          <ul className="flex flex-col w-full md:w-[40%] space-y-4">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(tab?.key)}
                className={`flex gap-3 items-center pl-4 md:px-7  rounded-md  py-[18px] cursor-pointer ${
                  activeTab === tab?.key
                    ? "bg-gradient-to-r to-[#ff5b84] from-[#4254ff] rounded-md text-white"
                    : "hover:[#AF1FFC]/50 bg-[#AF1FFC]/5 border border-[#af1ffc24] "
                }`}
              >
                <p
                  className={`justify-center  flex items-center align-middle  rounded-full  w-8 h-8 ${
                    activeTab === tab?.key
                      ? "bg-white text-pink-500"
                      : " bg-gradient-to-r from-[#4254FF] text-white to-[#FF5B84]"
                  }`}
                >
                  {tab.icon}
                </p>
                <p className="text-[18px] font-[600]">{tab.name}</p>
              </li>
            ))}
          </ul>
          <div className="w-full md:w-[60%] mt-5 md:mt-0 md:ml-7 py-6 px-4 rounded-[10px] bg-white shadow-sm">
            {activeTab === "influencer-discovery" && <InfluencerDiscovery />}
            {activeTab === "influencer-analysis" && <InfluencerAnalysis />}
            {activeTab === "relationship-management" && (
              <RelationshipManagment />
            )}
            {activeTab === "campaign-management" && <CampaignManagement />}
            {activeTab === "reporting" && <Reporting />}
            {activeTab === "comments-analysis" && <CommentsAnalysis />}
            {activeTab === "fully-managed" && <DoneForYou />}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default TabsComponent;
