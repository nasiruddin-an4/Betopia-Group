"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ProductsSection from "./components/ProductsSection";
import ExperienceSection from "./components/ExperienceSection";
import TechStackSection from "./components/TechStackSection";
import GlobalReachSection from "./components/GlobalReachSection";
import CoArchitectingSection from "./components/CoArchitectingSection";
import CareersSection from "./components/CareersSection";
import NewsroomSection from "./components/NewsroomSection";
import Footer from "./components/Footer";

const SECTIONS = [
  { id: "overview", Component: Hero },
  { id: "stats", Component: StatsSection },
  { id: "products", Component: ProductsSection },
  { id: "experience", Component: ExperienceSection },
  { id: "tech-stack", Component: TechStackSection },
  { id: "global-reach", Component: GlobalReachSection },
  { id: "co-architecting", Component: CoArchitectingSection },
  { id: "careers", Component: CareersSection },
  { id: "newsroom", Component: NewsroomSection },
];

export default function Home() {
  const wrapperRef = useRef(null);
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  const totalSections = SECTIONS.length + 1; // +1 for footer

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
        totalSections - 1,
      );

      if (nextIndex !== currentSection.current) {
        lastWheelTime = now;
        smoothScrollTo(nextIndex);
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) < 50) return; // Ignore small swipes
      if (isScrolling.current) return;

      const direction = diff > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentSection.current + direction, 0),
        totalSections - 1,
      );

      if (nextIndex !== currentSection.current) {
        smoothScrollTo(nextIndex);
      }
    };

    // Keyboard handling
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
        smoothScrollTo(totalSections - 1);
        return;
      }

      if (direction !== 0) {
        const nextIndex = Math.min(
          Math.max(currentSection.current + direction, 0),
          totalSections - 1,
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
  }, [smoothScrollTo, totalSections]);

  // IntersectionObserver for fade-in animations
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
      {
        root: wrapper,
        threshold: 0.15,
      },
    );

    const sections = wrapper.querySelectorAll(".fullpage-section");
    sections.forEach((section) => observer.observe(section));

    // Make the first section visible immediately
    if (sections[0]) sections[0].classList.add("section-visible");

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fullpage-wrapper" ref={wrapperRef}>
      {SECTIONS.map((section) => (
        <div key={section.id} id={section.id} className="fullpage-section">
          <section.Component />
        </div>
      ))}

      {/* Footer as its own snap section */}
      <div id="footer" className="fullpage-section">
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
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
