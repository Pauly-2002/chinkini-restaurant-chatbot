import React from "react";

const Scrolling = () => {
  const items = [
    "❤️ MADE WITH LOVE",
    "🚚 FREE DELIVERY ON ORDERS ABOVE ₦5,000",
    "🍗 FRESH DAILY",
    "🔥 SPICED TO PERFECTION",
  ];

  return (
    <div className="flex w-full bg-[#CC0000] text-white mt-10 overflow-hidden whitespace-nowrap py-3 font-bold">
      <div className="flex w-max gap-30 items-center  justify-center animate-scroll">
        {[...items, ...items].map((item, index) => (
          <div
            className="flex items-center margin-right: 60px; gap: 10px; text-[15px] after:content-['•'] after:ml-10"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrolling;
