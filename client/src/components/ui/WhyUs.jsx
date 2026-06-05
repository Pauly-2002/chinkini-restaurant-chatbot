// WhyUs.jsx
import React from "react";
import WhyCard from "./WhyCard";

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center gap-5 px-4 sm:px-10 md:px-20 py-16 sm:py-20 md:py-24 bg-[#FAFAFA]">
      <div className="text-center">
        <h3 className="text-[14px] font-medium text-[#CC0000]">
          WHY CHOOSE US
        </h3>
        <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold">
          Why Chikini Monie?
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
        <WhyCard
          title="Fresh Daily"
          description="Never frozen — our chicken arrives fresh every morning"
        />
        <WhyCard
          title="Spiced Right"
          description="Our secret blend of 12 spices hits different every time"
        />
        <WhyCard
          title="Fast Delivery"
          description="Hot and crispy at your door in 30–45 minutes"
        />
        <WhyCard
          title="Made with Love"
          description="Every piece is prepared with passion and care"
        />
      </div>
    </div>
  );
};

export default WhyUs;
