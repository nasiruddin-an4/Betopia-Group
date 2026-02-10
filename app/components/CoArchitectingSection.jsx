"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  {
    id: 1,
    name: "RICHARD KOH",
    title:
      "Chief Technology Officer (Microsoft ASEAN & Global Partner Solutions)",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop", // Placeholder: Corporate man
  },
  {
    id: 2,
    name: "WOUTER VAN WERSCH",
    title: "Executive Vice President International",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Airbus_Logo_2017.svg",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop", // Placeholder: Corporate man
  },
  {
    id: 3,
    name: "VALENE NEOH",
    title: "Partner Sales Manager at Adobe",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Adobe_Corporate_Logo.png", // Using PNG for Adobe usually safer or SVG
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop", // Placeholder: Corporate woman
  },
  {
    id: 4,
    name: "JENNIFER WU",
    title: "Head of Digital Innovation",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "ALEX CHEN",
    title: "Director of AI Research",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
  },
];

const CoArchitectingSection = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  // We clone the list 3 times: [Set1 (Pre), Set2 (Main), Set3 (Post)]
  // This allows scrolling seamlessly in both directions.
  const extendedPartners = [...partners, ...partners, ...partners];
  const totalRealSlides = partners.length;

  // Start at the beginning of the middle set (Set2)
  const [currentIndex, setCurrentIndex] = useState(totalRealSlides);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle the seamless loop reset when transition ends
  const handleTransitionEnd = () => {
    // If we've scrolled past the middle set into Set3
    if (currentIndex >= totalRealSlides * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalRealSlides);
    }
    // If we've scrolled back into Set1
    else if (currentIndex < totalRealSlides) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalRealSlides);
    }
  };

  // Re-enable transition after an instant jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioning && !document.hidden) {
        setCurrentIndex((prev) => {
          // Safety fallback: prevent running off the end if transitionEnd misses
          if (prev >= extendedPartners.length - 1) {
            return totalRealSlides;
          }
          return prev + 1;
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToSlide = (realIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(totalRealSlides + realIndex);
  };

  const activeDotIndex = currentIndex % totalRealSlides;

  return (
    <section className="bg-white py-24 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-6">
            Co-Architecting the Future Together
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            We don&apos;t just sign contracts; we forge strategic synergies.
            From Silicon Valley giants to European tech innovators, we integrate
            our intelligence with their reach to solve planetary-scale problems.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto group">
          {/* Slides Wrapper */}
          <div className="overflow-hidden mb-12">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : "duration-0"
              }`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="shrink-0 px-4"
                  style={{ width: `calc(100% / ${itemsToShow})` }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 h-full flex flex-col group/card cursor-pointer">
                    {/* Image */}
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col items-start border-t border-gray-50">
                      {/* Logo */}
                      <div className="h-8 mb-6 relative w-full flex justify-start">
                        <img
                          src={partner.companyLogo}
                          alt="logo"
                          className="h-full object-contain object-left"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 uppercase mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed">
                        {partner.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Moved to Bottom) */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-gray-600 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-3">
              {partners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeDotIndex
                      ? "bg-black w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-gray-600 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoArchitectingSection;
