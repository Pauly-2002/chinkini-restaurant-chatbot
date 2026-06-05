// WhyCard.jsx
import React from "react";

const WhyCard = ({ icon, alt, title, description }) => {
  return (
    <div className="flex text-center flex-col items-center justify-center px-5 rounded-3xl gap-2.5 border bg-white border-[#E6E6E6] py-8 sm:py-6 w-full">
      {icon && (
        <img src={icon} alt={alt} className="w-10 h-10 object-contain" />
      )}
      <h3 className="font-bold text-base sm:text-[18px]">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-snug">
        {description}
      </p>
    </div>
  );
};

export default WhyCard;
