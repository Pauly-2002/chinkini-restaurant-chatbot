import React from "react";

const SpecialOffer = () => {
  return (
    <section className="mx-20 my-16 bg-[#cc0000] rounded-3xl p-10 text-white flex flex-col justify-between items-center">
      <div className="flex flex-col items-center gap-5">
        <p className="py-1.5 px-4 rounded-2xl bg-[#D7373D]">🔥 Today's Deal</p>
        <h2 className="text-[48px] font-bold">Family Combo at 20% Off!</h2>

        <p className="text-[18px] text-[#F5CECF]">
          Get a whole grilled chicken, 2 sides, and 4 drinks for just ₦8,000
        </p>
        <button className="bg-white text-[#CC0000] px-6 py-3 rounded-xl font-semibold">
          Grab This Deal
        </button>
      </div>
    </section>
  );
};

export default SpecialOffer;
