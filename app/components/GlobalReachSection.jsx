import React from "react";
import { ChevronRight } from "lucide-react";

const stats = [
  {
    value: "13+",
    label: "Years of Excellence...",
  },
  {
    value: "85k+",
    label: "Successful Project Delivered...",
  },
  {
    value: "05+",
    label: "Countries are Located in...",
  },
  {
    value: "80+",
    label: "Countries Served Across the world...",
  },
];

const GlobalReachSection = () => {
  return (
    <section className="relative bg-linear-to-b from-[#E0F7FA] to-[#F1F8E9] py-24 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        {/* Replace this src with your actual world map illustration asset */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full h-full object-cover object-center md:object-contain opacity-20"
        />
        {/* Gradient Overlay to fade the map edges */}
        <div className="absolute inset-0 bg-linear-to-b from-[#E0F7FA]/80 via-transparent to-[#F1F8E9]/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-6 tracking-tight">
            From Bangladesh to the World
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
            We are the vanguard of Bangladesh&apos;s technological renaissance.
            <br className="hidden md:block" />
            We define what &apos;Made in Bangladesh&apos; means for the 21st
            century: High Tech. High Value. High Impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 max-w-6xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-gray-300/50"
                  : ""
              }`}
            >
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-medium text-lg leading-snug max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#FF8A4C] hover:bg-[#ff7a33] text-white text-lg font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 cursor-pointer group">
            <span>Book a Consultation</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
