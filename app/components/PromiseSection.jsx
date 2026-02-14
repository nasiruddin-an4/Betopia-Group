"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function PromiseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["/10010.jpg", "/10011.jpg"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-black uppercase tracking-wider mb-2 block">
                Our Promise to the Future
              </span>
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black leading-tight">
                Innovating Today
                <br />
                for a Smarter Tomorrow.
              </h2>
            </div>

            <div className="space-y-12 mt-12">
              {/* Item 1 */}
              <div
                onClick={() => setCurrentSlide(0)}
                className={`cursor-pointer transition-opacity duration-300 ${
                  currentSlide === 0 ? "opacity-100" : "opacity-40"
                }`}
              >
                <h3 className="text-2xl font-bold text-black mb-4">
                  Embrace Technology
                </h3>
                <p className="text-black/70 leading-relaxed mb-6 max-w-md">
                  Technology is no longer optional — it&apos;s the foundation of
                  modern business growth.
                </p>
                <a
                  href="#"
                  className={`flex items-center text-black font-medium group text-sm uppercase tracking-wide ${
                    currentSlide === 0
                      ? "pointer-events-auto"
                      : "pointer-events-none"
                  }`}
                >
                  See Details
                  <div className="ml-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight size={14} />
                  </div>
                </a>
              </div>

              <div className="h-px bg-gray-200 w-full" />

              {/* Item 2 */}
              <div
                onClick={() => setCurrentSlide(1)}
                className={`cursor-pointer transition-opacity duration-300 ${
                  currentSlide === 1 ? "opacity-100" : "opacity-40"
                }`}
              >
                <h3 className="text-2xl font-bold text-black mb-4">
                  Sustainability in Mind
                </h3>
                <p className="text-black/70 leading-relaxed mb-6 max-w-md">
                  The future of business belongs to those who build responsibly.
                  Integrating eco-friendly materials, energy-efficient systems.
                </p>
                <a
                  href="#"
                  className={`flex items-center text-black font-medium group text-sm uppercase tracking-wide ${
                    currentSlide === 1
                      ? "pointer-events-auto"
                      : "pointer-events-none"
                  }`}
                >
                  See Details
                  <div className="ml-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight size={14} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden group">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Promise Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Carousel Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all border border-white/30"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all border border-white/30"
                aria-label="Next Slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute top-8 right-8 z-20 flex space-x-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
