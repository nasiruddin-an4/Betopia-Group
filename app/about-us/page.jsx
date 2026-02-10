"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  ShieldCheck,
  Box,
  Flag,
  Hourglass,
  Target,
  ClipboardCheck,
  Sparkles,
  ArrowRight,
  Trophy,
} from "lucide-react";
import LogoMarqueeSection from "../components/LogoMarqueeSection";
import PromiseSection from "../components/PromiseSection";
import TransformationSection from "../components/TransformationSection";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutUs() {
  const wrapperRef = useRef(null);
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  // Define total sections.
  const TOTAL_SECTIONS = 10;

  // Smooth scroll to a specific section
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

    setTimeout(() => {
      isScrolling.current = false;
    }, 900);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let lastWheelTime = 0;
    const wheelCooldown = 800;
    const handleWheel = (e) => {
      if (window.innerWidth < 1024) return;
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
      if (window.innerWidth < 1024) return;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (window.innerWidth < 1024) return;
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
      if (window.innerWidth < 1024) return;
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
      { root: null, threshold: 0.15 },
    );
    const sections = wrapper.querySelectorAll(".fullpage-section");
    sections.forEach((section) => observer.observe(section));
    if (sections[0]) sections[0].classList.add("section-visible");
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fullpage-wrapper" ref={wrapperRef}>
      {/* SECTION 1: HERO (60vh) */}
      <div className="fullpage-section hero-section pt-32 py-16">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center text-center">
          {/* Breadcrumb - Moved slightly up via margin or flex adjustment if needed */}
          <div className="self-center md:self-start text-xs font-medium text-gray-500 mb-8 md:mb-12 uppercase tracking-wider">
            Home / About Betopia
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Asia’s Largest AI Powerhouse.
          </h1>
          <h2 className="text-xl md:text-[2.5rem] font-medium text-[#EF8B42] mb-8 leading-tight">
            Limitless Solutions. One Intelligent Ecosystem.
          </h2>

          {/* Video Container */}
          <div className="w-full max-w-5xl h-[40vh] md:h-[50vh] rounded-[30px] overflow-hidden relative mb-6 shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/AboutIntroBG.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl md:text-5xl font-bold tracking-tight">
                We are limitless...
              </h3>
            </div>
          </div>

          <p className="max-w-4xl text-base md:text-lg text-black/80 leading-relaxed font-medium mx-auto">
            We are the convergence of 4,000+ minds, 14+ years of innovation, and
            a global network spanning the USA, UK, UAE, Philippines, and
            Bangladesh.
          </p>
        </section>
      </div>

      {/* SECTION 2: INDUSTRY */}
      <div className="fullpage-section">
        <section className="bg-slate-50 h-full flex flex-col justify-center py-10 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32 items-start">
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-black leading-tight">
                Any Industry.
                <br />
                Any Challenge.
                <br />
                Solved.
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed pt-2">
                We operate as a &quot;Universal Solution Architect.&quot; Our
                22+ Strategic Business Units do not operate in silos; they
                function as a connected hive mind. When you partner with
                Betopia, you gain access to a 360-degree technology stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-start md:border-r border-gray-200 md:pr-8">
                <LayoutGrid
                  className="w-10 h-10 md:w-12 md:h-12 text-black mb-4 md:mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">
                  We Build.
                </h3>
                <p className="text-black/70 leading-relaxed text-sm">
                  The Architecture of Innovation. We don&apos;t just develop
                  applications; we construct digital ecosystems that power
                  nations and economies.
                </p>
              </div>

              <div className="flex flex-col items-start md:border-r border-gray-200 md:pr-8">
                <ShieldCheck
                  className="w-10 h-10 md:w-12 md:h-12 text-black mb-4 md:mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">
                  We Secure.
                </h3>
                <p className="text-black/70 leading-relaxed text-sm">
                  The Governance of Trust. In an era of digital volatility, we
                  provide the fortress. Our cybersecurity division doesn&apos;t
                  just patch vulnerabilities; we engineer resilience.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Box
                  className="w-10 h-10 md:w-12 md:h-12 text-black mb-4 md:mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">
                  We Optimize.
                </h3>
                <p className="text-black/70 leading-relaxed text-sm">
                  The Intelligence of AI. This is the engine of the powerhouse.
                  We replace guesswork with calculation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: ECOSYSTEM & PARTNERS */}
      <div className="fullpage-section">
        <section className="bg-white h-full flex flex-col justify-center py-10 pt-32">
          {/* Ecosystem Content */}
          <div className="container mx-auto px-4 md:px-0 text-center mb-0 md:mb-8 flex-1 flex flex-col justify-center">
            <div className="z-10 relative">
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-black mb-4">
                Our Businesses Ecosystem
              </h2>
              <p className="text-base md:text-lg text-black/60 mb-6 font-medium">
                22+ Units. 4 Core Dimensions. One Intelligent Ecosystem.
              </p>
            </div>
            <div className="w-full max-w-5xl mx-auto z-0 overflow-hidden rounded-xl h-[30vh] md:h-[40vh] flex items-center justify-center relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain pointer-events-none"
              >
                <source src="/Ecosystem.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Partners Marquee */}
          <div className="flex-none">
            <LogoMarqueeSection />
          </div>
        </section>
      </div>

      {/* SECTION 4: WHAT DRIVES US */}
      <div className="fullpage-section">
        <section className="bg-gray-100 h-full flex flex-col justify-center py-10 md:py-20">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start max-w-lg">
              <Flag
                className="w-12 h-12 md:w-18 md:h-18 text-black mb-6"
                strokeWidth={1.5}
              />
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-black mb-6">
                What Drives Us
              </h2>
              <p className="text-base md:text-xl text-black/70 leading-relaxed">
                In a world full of talent, we bridge the disconnect between
                ambition and achievement. At Betopia Group, we drive growth by
                empowering you to unleash your brilliance and build a better
                future.
              </p>
            </div>
            <div className="w-full h-[40vh] md:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/AboutUsDrivesUsSectionImage.webp"
                alt="What Drives Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 5: CULTURAL CODE */}
      <div className="fullpage-section">
        <section className="bg-gradient-to-b from-[#CCFBF1] to-white h-full flex flex-col justify-center py-10 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-black mb-4 md:mb-0">
                Our Cultural Code
              </h2>
              <p className="text-black/70 max-w-xl text-base md:text-lg font-medium text-left md:text-right">
                5,000+ Minds. 28 Enterprises. One Mission: Engineering the
                future of Bangladesh for the World.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Hourglass className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">
                    INTEGRITY
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Instant analysis offers valuable insights for swift
                    decision-making. Companies track metrics.
                  </p>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">
                    GRIT
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Predictive analytics uses historical data and algorithms to
                    forecast outcomes.
                  </p>
                </div>
              </div>

              <div className="flex justify-center h-full">
                <div className="relative w-full h-[300px] md:h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/10001.gif"
                    alt="Cultural Code"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <ClipboardCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">
                    COLLABORATION
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Real-time reporting provides insights for quick decisions.
                    Organizations monitor key metrics.
                  </p>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">
                    INTELLIGENCE
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Integrations enhance collaboration. Teams access insights
                    and streamline workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 6: LEADERSHIP */}
      <div className="fullpage-section pt-32">
        <section className="bg-white h-full flex flex-col justify-center py-10 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-8 md:mb-16 max-w-4xl mx-auto">
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-black mb-6">
                Visionary Leadership
              </h2>
              <p className="text-black/70 text-base md:text-lg leading-relaxed">
                Great innovation requires steady hands and bold vision. Our
                leadership team combines decades of industry expertise with a
                relentless drive to reshape the digital landscape of Asia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative group rounded-2xl overflow-hidden h-[40vh] md:h-[60vh] max-h-[700px]">
                <Image
                  src="/chairman.webp"
                  alt="Sabina Akter"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                  <p className="text-base md:text-lg font-medium mb-4 leading-snug opacity-90">
                    True prosperity begins when we unlock potential and grow
                    limitless, together.
                  </p>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">
                      Sabina Akter
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                      Chairman, Betopia Group
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden h-[40vh] md:h-[60vh] max-h-[700px]">
                <Image
                  src="/ceo.webp"
                  alt="Executive Leader"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                  <p className="text-base md:text-lg font-medium mb-4 leading-snug opacity-90">
                    Empowering people is not just our path to progress -
                    it&apos;s how we stay limitless, together.
                  </p>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">
                      Muhammad Monir Hossain
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                      CEO, Betopia Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 7: PROMISE */}
      <div className="fullpage-section pt-32">
        <PromiseSection />
      </div>

      {/* SECTION 8: AWARDS */}
      <div className="fullpage-section">
        <section className="bg-white h-full flex flex-col justify-center py-10 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-black text-center mb-10 md:mb-16">
              Our Awards & Recognition
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="#"
                className="bg-[#F0FDF4] p-8 rounded-2xl relative group hover:shadow-lg transition-shadow block h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Creatio Studio
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-auto">
                  Tech Idea Careers is a modern job platform that connects
                  ambitious professionals with trusted employers in the tech and
                  business world.
                </p>
                <div className="mt-8 self-end w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="#"
                className="bg-[#F0FDF4] p-8 rounded-2xl relative group hover:shadow-lg transition-shadow block h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Prime Logic
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-auto">
                  Our platform features verified listings from top companies,
                  personalized career recommendations.
                </p>
                <div className="mt-8 self-end w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="#"
                className="bg-[#F0FDF4] p-8 rounded-2xl relative group hover:shadow-lg transition-shadow block h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Bit Verse</h3>
                <p className="text-black/60 text-sm leading-relaxed mb-auto">
                  Tech Idea Network bridges the gap between great talent and
                  great organizations.
                </p>
                <div className="mt-8 self-end w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 9: TRANSFORMATION */}
      <div className="fullpage-section pt-32">
        <TransformationSection />
      </div>

      {/* SECTION 10: FOOTER */}
      <div className="fullpage-section pt-32">
        <Footer />
      </div>

      <style jsx>{`
        .fullpage-wrapper {
          width: 100%;
          overflow-x: hidden;
        }

        .fullpage-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Mobile specific overrides to ensure visibility and flow */
        @media (max-width: 1023px) {
          .fullpage-section {
            opacity: 1 !important;
            transform: none !important;
            overflow: visible;
            height: auto !important;
          }
          /* Allow hero to be natural height on mobile */
          .fullpage-section.hero-section {
            min-height: auto;
            height: auto;
            padding-top: 80px; /* Space for navbar */
          }
        }

        @media (min-width: 1024px) {
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
            height: 100vh;
            overflow: hidden;
            opacity: 0;
            transform: translateY(30px);
            transition:
              opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .fullpage-section.hero-section {
            min-height: 80vh;
            height: 80vh;
          }

          .fullpage-section.section-visible {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fullpage-section > * {
          flex: 1;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
