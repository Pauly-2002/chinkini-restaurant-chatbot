import React from "react";
import HeroButton from "./HeroButton";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../../assets/Hero_Image.png";

const HeroSection = () => {
  return (
    <div className="md:flex gap-40 md:items-center pt-25 md:justify-center mb-14 md:h-150  md:m-0 w-full bg-gradient-to-r from-[#FCF4F4] to-[#FFFFFF]">
      <div className="md:hidden flex justify-center items-center pt-10">
        <img
          src={HeroImage}
          alt="hero_image"
          className="w-100 h-95 rounded-3xl"
        />
      </div>

      {/* first column */}
      <div className="flex text-center md:text-left flex-col gap-5">
        <button>
          <span className="md:hidden">#1 Chicken Spot in Lagos</span>
        </button>
        <h1 className="hero-heading">
          Finger-Lickin'
          <br /> Chicken,
          <br />
          <span className="hero-heading2">
            Delivered to <br /> You!
          </span>
        </h1>
        <p className="hero-paragraph">
          Bold flavors, crispy perfection, and love in every <br /> bite. Order
          now and taste the difference.
        </p>
        {/* Div for Buttons */}
        <div className="flex gap-4 md:justify-start items-center justify-center">
          <HeroButton
            className="flex items-center gap-2 py-3 px-7 bg-[#CC0000] rounded-3xl text-white font-bold"
            name="Order Now"
            icons={<FaArrowRight className="h-4 w-4" />}
          />
          <HeroButton
            className="flex items-center gap-2 py-3 px-7 bg-[#FFFFFF] border border-[#CC0000] rounded-3xl text-[#CC0000] font-bold"
            name="See Our Menu"
          />
        </div>
      </div>

      {/* Second Column */}
      <div className="hidden md:block">
        <img
          src={HeroImage}
          alt="hero_image"
          className="w-130 h-95 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
