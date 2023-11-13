// import Advanced from '@/components/influencer/Advanced'
// import Analysis from '@/components/influencer/Analysis'
// import Authentic from '@/components/influencer/Authentic'
// import Influencer from '@/components/influencer/Influencer'
// import SearchEng from '@/components/influencer/SearchEng'
// import Agency from '@/components/influencer/agency'
// import Ecommerce from '@/components/influencer/ecommerce'
// import InfluencerTestimonials from '@/components/influencer/InfluencerTestimonials'
// import React from 'react'

// const index = () => {
//     return (
//         <div>
//             <Influencer />
//             <Agency />
//             <SearchEng />
//             <Authentic />
//             <Advanced />
//             <InfluencerTestimonials/>
//             <Ecommerce />
//             <Analysis/>
//         </div>
//     )
// }

// export default index

// import Advanced from "@/components/influencer/Advanced";
// import Analysis from "@/components/influencer/Analysis";
// import Authentic from "@/components/influencer/Authentic";
// import Influencer from "@/components/influencer/Influencer";
// import InfluencerTestimonials from "@/components/influencer/InfluencerTestimonials";
// import SearchEng from "@/components/influencer/SearchEng";
// import Agency from "@/components/influencer/agency";
// import Ecommerce from "@/components/influencer/ecommerce";
import Advanced from "@/components/InfluencerNew/Advanced";
import Analysis from "@/components/InfluencerNew/Analysis";
import Authentic from "@/components/InfluencerNew/Authentic";
import Influencer from "@/components/InfluencerNew/Influencer";
import SearchEng from "@/components/InfluencerNew/SearchEng";
import Agency from "@/components/InfluencerNew/agency";
import Ecommerce from "@/components/InfluencerNew/ecommerce";
import React from "react";

const index = () => {
  return (
    <div className="pb-20">
      <Influencer />
      <Agency />
      <SearchEng />
      <Authentic />
      <Advanced />
      <Analysis />
      <Ecommerce />
      {/* <InfluencerTestimonials/> */}
    </div>
  );
};

export default index;
