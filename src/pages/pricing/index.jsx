import Advantage from "@/components/influent/Advantage";
import Customize from "@/components/influent/Customize";
import Influent from "@/components/influent/Influent";
import InfluentTestimonials from "@/components/influent/InfluentTestimonials";
import Plans from "@/components/influent/Plan";
import React from "react";

const index = () => {
  return (
    <div>
      <Influent />
      <Advantage />
      <Plans />
      <Customize />
      <InfluentTestimonials />
    </div>
  );
};

export default index;
