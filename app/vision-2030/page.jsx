"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import PromiseSection from "../components/PromiseSection";
import Footer from "../components/Footer";

const WORKFORCE_ITEMS = [
  {
    title: "Global Talent",
    description:
      "Sourcing the world's finest minds through a borderless recruitment strategy.",
    image: "/10010.jpg",
  },
  {
    title: "Betopia Academy",
    description:
      "Transforming 5,000+ graduates annually into future-ready industry leaders.",
    image: "/10011.jpg",
  },
  {
    title: "Diversity Core",
    description:
      "Championing inclusivity with a target of 40% female representation in leadership.",
    image: "/10009.jpg",
  },
];

const WorkforceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % WORKFORCE_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + WORKFORCE_ITEMS.length) % WORKFORCE_ITEMS.length,
    );
  };

  return (
    <section className="bg-white h-full flex flex-col justify-center py-10 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-12">
          <div>
            <span className="text-sm font-medium text-black uppercase tracking-wider mb-2 block">
              Innovators by 2030
            </span>
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black leading-tight">
              Building the
              <br />
              Workforce of the Future
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-6 md:mt-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {WORKFORCE_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "bg-[#0B1B32] w-3"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Clickable Items */}
          <div className="space-y-0">
            {WORKFORCE_ITEMS.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => setCurrentSlide(index)}
                  className={`cursor-pointer py-6 transition-opacity duration-300 ${
                    currentSlide === index ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed mb-4 max-w-md text-sm">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className={`flex items-center text-black font-medium group text-sm uppercase tracking-wide ${
                      currentSlide === index
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
                {index < WORKFORCE_ITEMS.length - 1 && (
                  <div className="h-px bg-gray-200 w-full" />
                )}
              </div>
            ))}
          </div>

          {/* Right - Image Carousel */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            {WORKFORCE_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Vision2030Page() {
  const wrapperRef = useRef(null);
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  // Define total sections. Update this if sections are added/removed.
  const TOTAL_SECTIONS = 7;

  // Smooth scroll to a specific section with custom easing
  const smoothScrollTo = useCallback((targetIndex) => {
    const wrapper = wrapperRef.current;
    if (!wrapper || isScrolling.current) return;

    const targetElement = wrapper.children[targetIndex];
    if (!targetElement) return;

    isScrolling.current = true;
    currentSection.current = targetIndex;

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Allow next scroll after animation completes
    setTimeout(() => {
      isScrolling.current = false;
    }, 900);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let lastWheelTime = 0;
    const wheelCooldown = 800; // ms between scroll snaps
    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < wheelCooldown) return;
      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentSection.current + direction, 0),
        TOTAL_SECTIONS - 1,
      );

      if (nextIndex !== currentSection.current) {
        lastWheelTime = now;
        smoothScrollTo(nextIndex);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) < 50) return;
      if (isScrolling.current) return;

      const direction = diff > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentSection.current + direction, 0),
        TOTAL_SECTIONS - 1,
      );
      if (nextIndex !== currentSection.current) {
        smoothScrollTo(nextIndex);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling.current) return;
      let direction = 0;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        direction = 1;
        e.preventDefault();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        direction = -1;
        e.preventDefault();
      } else if (e.key === "Home") {
        e.preventDefault();
        smoothScrollTo(0);
        return;
      } else if (e.key === "End") {
        e.preventDefault();
        smoothScrollTo(TOTAL_SECTIONS - 1);
        return;
      }

      if (direction !== 0) {
        const nextIndex = Math.min(
          Math.max(currentSection.current + direction, 0),
          TOTAL_SECTIONS - 1,
        );
        if (nextIndex !== currentSection.current) {
          smoothScrollTo(nextIndex);
        }
      }
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    wrapper.addEventListener("touchstart", handleTouchStart, { passive: true });
    wrapper.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
      wrapper.removeEventListener("touchstart", handleTouchStart);
      wrapper.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [smoothScrollTo]);

  // Observer for fade-in animations
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { root: wrapper, threshold: 0.15 },
    );
    const sections = wrapper.querySelectorAll(".fullpage-section");
    sections.forEach((section) => observer.observe(section));
    if (sections[0]) sections[0].classList.add("section-visible");
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fullpage-wrapper" ref={wrapperRef}>
      {/* SECTION 1: HERO */}
      <div className="fullpage-section hero-section">
        <section className="bg-white h-full flex flex-col justify-center py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <nav className="text-xs text-gray-500 mb-12 font-medium tracking-wide">
              <Link href="/">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-black">Vision 2030</span>
            </nav>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-[1.5rem] md:text-[3.5rem] font-bold text-black mb-8 leading-[1.1]">
                Vision 2030: The Next Horizon
              </h1>
              <p className="text-[#FF8F3D] text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                We are not just predicting the future; we are engineering it. By
                2030, Betopia Group will evolve from a technology leader into a
                self-sustaining ecosystem of innovation—a physical and digital
                sanctuary for the world&apos;s brightest minds.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 2: VIDEO */}
      <div className="fullpage-section">
        <section className="bg-[#F3F5F9] h-full flex flex-col justify-center py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black text-center mb-6">
              Betopia Tech City
            </h2>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-6">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover max-h-[60vh]"
              >
                <source src="/betopiacity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Imagine a workspace that breathes. Betopia Tech City is our
              proposed smart-campus—a sustainable, AI-integrated metropolis
              designed to nurture creativity. It is more than a headquarters; it
              is a global R&amp;D hub featuring:
            </p>
          </div>
        </section>
      </div>

      {/* SECTION 4: 30,000 MINDS */}
      <div className="fullpage-section">
        <section className="relative h-full flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/10008.jpg" alt="Team" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#0B1B32]/80 z-10" />
          <div className="relative z-20 text-center px-4 md:px-8 py-24 max-w-4xl mx-auto">
            <span className="inline-block border border-white/40 text-white/80 text-sm font-medium px-6 py-2 rounded-full mb-8">
              Innovators by 2030
            </span>
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold text-[#FF8F3D] leading-[1.05] mb-8">
              30,000 Minds.
              <br />
              One Mission.
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              To service the largest economies in Asia, we are scaling our most
              valuable asset: our people. Our goal is to cultivate a workforce
              of 30,000 future-ready professionals across our six industry
              pillars. We are not just hiring employees; we are building an army
              of problem-solvers, engineers, and visionaries ready to tackle the
              challenges of the next decade.
            </p>
          </div>
        </section>
      </div>

      {/* SECTION 5: WORKFORCE */}
      <div className="fullpage-section">
        <WorkforceSection />
      </div>

      {/* SECTION 6: CTA */}
      <div className="fullpage-section">
        <section className="bg-white h-full flex flex-col justify-center py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-8 md:px-16 py-16 md:py-24 shadow-lg">
              <div className="absolute top-0 right-0 w-1/2 h-full z-0">
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#A8E6CF]/40 blur-[100px]" />
                <div className="absolute top-1/3 right-1/6 w-[300px] h-[300px] rounded-full bg-[#7DD3C0]/30 blur-[80px]" />
              </div>
              <div className="relative z-10 max-w-lg">
                <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black leading-tight mb-8">
                  Be part of the history
                  <br />
                  we are writing.
                </h2>
                <Link
                  href="/career"
                  className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Join the Journey to 2030
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 7: FOOTER */}
      <div className="fullpage-section">
        <Footer />
      </div>

      <style jsx>{`
        .fullpage-wrapper {
          height: 100vh;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }
        .fullpage-wrapper::-webkit-scrollbar {
          display: none;
        }
        .fullpage-section {
          min-height: 100vh;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        /* Specific override for the hero section */
        .fullpage-section.hero-section {
          min-height: 60vh;
          height: 60vh;
        }
        .fullpage-section.section-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fullpage-section > * {
          flex: 1;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
