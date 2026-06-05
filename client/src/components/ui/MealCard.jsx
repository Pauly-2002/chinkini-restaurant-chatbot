import React from "react";
import { FaPlus } from "react-icons/fa";

const MealCard = ({ image, title, price, description, icon }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300">
      <div className="flex flex-col relative items-end ">
        <img
          src={image}
          alt={title}
          className="w-full h-62 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-90"
        ></img>
        <button className=" flex items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute bottom-4 right-4 justify-center opacity-0 translate-y-3 w-10 h-10 bg-[#CC0000] rounded-full text-white text-2xl">
          +
        </button>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-[14px] text-[#0b0505]">{description}</p>
        </div>

        <p className="text-[#CC0000] font-bold text-xl">₦{price}</p>
      </div>
    </div>
  );
};

export default MealCard;
