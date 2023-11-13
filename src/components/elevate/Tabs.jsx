import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { BsFillShareFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { TbDeviceIpadHorizontalStar } from "react-icons/tb";
function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "National campaigns",
      icon: <VscTypeHierarchySub />,
    },
    {
      name: "With our fully managed solutions",
      icon: <BsFillShareFill />,
    },
    {
      name: "Monitor campaigns effortlessly",
      icon: <RiTeamFill />,
    },
    {
      name: "Generate comprehensive campaign reports",
      icon: <TbDeviceIpadHorizontalStar />,
    },
    {
      name: "Immerse yourself in sentiment analysis",
      icon: <RiTeamFill />,
    },
  ];

  const tabContents = [
    "we take charge of contacting, hiring, and connecting you with influencers. Leverage our influencer marketplace seamlessly.",
    "Content for With our fully managed solutions we take charge of contacting, hiring, and connecting you with influencers. Leverage our influencer marketplace seamlessly.",
    "With potential influencers identified and initial connections established, it's time to delve into the specifics. Develop a comprehensive campaign plan, especially if you're partnering with multiple influencers. Consider implementing a common hashtag, like Trello's #ReadySetGoal campaign, to unify the campaign's elements. When determining your budget, bear in mind that influencers can deliver high-quality leads, which may justify a higher cost compared to generic advertising. Precisely define your goals, key performance indicators (KPIs), and any legal prerequisites. Ensure your goals are SMART (Specific, Measurable, Attainable, Realistic, and Time-bound). Lastly, create a contract that outlines deliverables, compensation terms, payment schedules, and brand guidelines.",
    "Content for Generate comprehensive campaign reports",
    "Content for Immerse yourself in sentiment analysis",
  ];

  return (
    <div>
      <Wrapper>
        <div className="w-full flex md:flex-row flex-col mt-20  md:mt-10">
          <ul className="flex flex-col w-full md:w-[40%] space-y-4">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex gap-3 items-center pl-4 md:px-7  rounded-md  py-[18px] cursor-pointer ${
                  activeTab === index
                    ? "bg-gradient-to-r to-[#ff5b84] from-[#4254ff] rounded-md text-white"
                    : "hover:[#AF1FFC]/50 bg-[#AF1FFC]/5 border border-[#af1ffc24] "
                }`}
              >
                <p
                  className={`justify-center  flex items-center align-middle  rounded-full  w-8 h-8 ${
                    activeTab === index
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
          <div className="w-full md:w-[60%] mt-5 md:mt-0 md:ml-7 py-6 px-4 rounded-[10px] bg-white h-[130px] max-h-[500px] shadow-sm">
            {tabContents[activeTab]}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default TabsComponent;
