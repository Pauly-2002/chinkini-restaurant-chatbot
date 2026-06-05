import React from "react";
import HeroSection from "../ui/HeroSection";
import PopularMeals from "../ui/PopularMeals";
import SpecialOffer from "../ui/SpecialOffer";
import Scrolling from "../ui/Scrolling.jsx";
import WhyUs from "../ui/WhyUs.jsx";
import Testimonials from "../ui/Testimonials.jsx";
import Chatbot from "../ui/Chabot.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Scrolling />
      <PopularMeals />
      <WhyUs />
      <SpecialOffer />
      <Chatbot/>
      <Testimonials/>
      <footer/>
    </div>
  );
};

export default Home;
