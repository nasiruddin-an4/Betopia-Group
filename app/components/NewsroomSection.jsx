"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Sustainability Meets Technology in New Green Initiative",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Global Expansion: Betopia Opens New Office in Singapore",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2340&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Award Winning: Recognized as Top Tech Innovator 2024",
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2340&auto=format&fit=crop",
    link: "#",
  },
];

const NewsroomSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section
      className="bg-white py-24 min-h-screen flex flex-col justify-center"
      id="newsroom"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-12">
          The Newsroom.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Card - Featured Story */}
          <div className="lg:col-span-8 bg-[#BCC6A8] rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 h-[450px] md:h-[500px] overflow-hidden">
            {/* Image Side */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative shrink-0">
              <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-white/20">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                  alt="CEO Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
              <h3 className="text-2xl md:text-3xl font-medium text-black mb-4 leading-tight">
                Started with Tk 500,000, now pays Tk 80m per month...
              </h3>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                The journey of the technology firm Bdcalling IT began in 2017
                with an investment of just Tk 500,000...
              </p>
              <button className="bg-black cursor-pointer text-white px-6 py-2.5 rounded-full w-max text-sm font-medium hover:bg-gray-800 transition-colors">
                See Details
              </button>
            </div>
          </div>

          {/* Right Card - Carousel */}
          <div
            className="lg:col-span-4 rounded-[2.5rem] overflow-hidden relative h-[450px] md:h-[500px] group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slides */}
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20 bg-linear-to-t from-black/80 to-transparent pt-20">
                  <h3 className="text-white text-2xl md:text-3xl font-medium mb-6 leading-snug max-w-lg">
                    {item.title}
                  </h3>
                  <button className="bg-black/80 cursor-pointer backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors border border-white/10">
                    See Details
                  </button>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-white transition-all shadow-lg pointer-events-auto cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-white transition-all shadow-lg pointer-events-auto cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 right-10 z-30 flex gap-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="group inline-flex items-center px-8 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-lg">
            View All
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsroomSection;
