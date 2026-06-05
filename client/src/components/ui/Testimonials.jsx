import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze O.",
    message:
      "The spicy wings from Chikini Monie are absolutely fire! Best chicken I've had in Lagos. My family orders every weekend now.",
  },
  {
    name: "Michael T.",
    message:
      "Fast delivery, amazing customer service, and the meals always taste fresh. Highly recommended!",
  },
  {
    name: "Blessing K.",
    message:
      "Their grilled chicken and fries combo is my favorite. Affordable and super delicious.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Small Heading */}
        <p className="text-red-600 font-semibold uppercase tracking-widest mb-4">
          Testimonials
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl hero-heading font-black text-black mb-16">
          What Our Customers Say
        </h2>

        {/* Testimonial Card */}
        <div className="bg-[#f1f1f1] rounded-3xl p-8 md:p-16 shadow-sm transition-all duration-500">
          {/* Quote */}
          <div className="text-pink-200 text-7xl font-bold mb-6">”</div>

          {/* Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="fill-yellow-400 text-yellow-400 w-6 h-6"
              />
            ))}
          </div>

          {/* Message */}
          <p className="text-gray-700 text-xl hero-paragraph leading-relaxed max-w-4xl mx-auto mb-10">
            "{testimonials[current].message}"
          </p>

          {/* Name */}
          <h4 className="text-1xl font-bold text-black">
            — {testimonials[current].name}
          </h4>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-red-600 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
