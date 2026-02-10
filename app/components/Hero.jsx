"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative h-full min-h-screen flex items-end overflow-hidden bg-black">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/HeroBackground.mp4" type="video/mp4" />
        </video>
        {/* Overlay - only bottom gradient for seamless navbar blend */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 z-10" />
      </div>

      {/* Content Container - positioned at bottom */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 w-full pb-20 md:pb-28">
        <div className="flex flex-col items-start">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] drop-shadow-2xl">
            Limitless, Together
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
