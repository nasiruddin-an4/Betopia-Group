"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Compass,
  Map,
  ChevronRight,
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  FileText,
  HelpCircle,
  Building2,
  Users,
  Lightbulb,
  Rocket,
  Briefcase,
  Megaphone,
  Phone,
  LayoutGrid,
} from "lucide-react";
import Footer from "../components/Footer";

const sitemapData = [
  {
    category: "Main Ecosystem",
    icon: <Globe2 className="text-[#EF8B42]" />,
    links: [
      {
        name: "Home",
        href: "/",
        description: "The heart of Betopia Group ecosystem.",
      },
      {
        name: "Vision 2030",
        href: "/vision-2030",
        description: "Our roadmap for a smarter, sustainable future.",
      },
      {
        name: "About Us",
        href: "/about-us",
        description: "Our story, values, and driving purpose.",
      },
      {
        name: "Visionary Leadership",
        href: "/leadership",
        description: "The minds shaping our global strategy.",
      },
      {
        name: "Ventures",
        href: "/ventures",
        description: "Strategic investments in disruptive tech.",
      },
      {
        name: "Industries",
        href: "/industries",
        description: "Cross-sector impact and implementation.",
      },
    ],
  },
  {
    category: "Corporate & Media",
    icon: <Megaphone className="text-[#EF8B42]" />,
    links: [
      {
        name: "Newsroom",
        href: "/news-media",
        description: "Latest breakthroughs and global milestones.",
      },
      {
        name: "Career",
        href: "/career",
        description: "Join the most innovative workplace in Asia.",
      },
      {
        name: "Contact Us",
        href: "/contact-us",
        description: "Global hubs and specialized inquiry channels.",
      },
      {
        name: "Procurement",
        href: "/procurement",
        description: "Partnering with global vendors and suppliers.",
      },
    ],
  },
  {
    category: "Legal & Support",
    icon: <ShieldCheck className="text-[#EF8B42]" />,
    links: [
      {
        name: "Sitemap",
        href: "/sitemap",
        description: "Comprehensive map of our digital ecosystem.",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
        description: "Commitment to data security and privacy.",
      },
      {
        name: "Terms of Use",
        href: "/terms",
        description: "Guidelines for interacting with our platforms.",
      },
      {
        name: "Support Center",
        href: "/support",
        description: "Technical and technical assistance.",
      },
    ],
  },
];

export default function Sitemap() {
  const wrapperRef = useRef(null);
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  const TOTAL_SECTIONS = 3;

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
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [smoothScrollTo]);

  // Intersection Observer for animations
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
    <div className="fullpage-wrapper bg-white" ref={wrapperRef}>
      {/* SECTION 1: HERO & OVERVIEW (60vh) */}
      <div className="fullpage-section hero-section pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-semibold text-gray-400 mb-8 md:mb-12 uppercase tracking-[0.2em]">
            <Compass size={14} className="text-[#EF8B42]" />
            Home / Sitemap
          </div>

          <h1 className="text-5xl md:text-8xl font-bold text-black mb-8 tracking-tighter">
            Digital <span className="text-[#EF8B42]">Atlas</span>.
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-gray-500 leading-relaxed mx-auto font-light">
            Navigate through our interconnected ecosystem of innovation,
            ventures, and global impact.
          </p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center gap-3 group hover:bg-black transition-all">
              <Globe2
                className="text-[#EF8B42] group-hover:text-white"
                size={24}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-white">
                Global Reach
              </span>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center gap-3 group hover:bg-black transition-all">
              <Rocket
                className="text-[#EF8B42] group-hover:text-white"
                size={24}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-white">
                Future Tech
              </span>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center gap-3 group hover:bg-black transition-all">
              <Briefcase
                className="text-[#EF8B42] group-hover:text-white"
                size={24}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-white">
                Ventures
              </span>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center gap-3 group hover:bg-black transition-all">
              <LayoutGrid
                className="text-[#EF8B42] group-hover:text-white"
                size={24}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-white">
                22+ Units
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 2: THE MAP (100vh) */}
      <div className="fullpage-section bg-gray-50 pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {sitemapData.map((group, idx) => (
              <div key={idx} className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    {group.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-black tracking-tight uppercase tracking-wider">
                    {group.category}
                  </h2>
                </div>

                <div className="space-y-2">
                  {group.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      href={link.href}
                      className="flex items-start justify-between group p-6 rounded-xl hover:bg-white transition-all border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-black/5"
                    >
                      <div className="max-w-[85%]">
                        <h4 className="text-lg font-bold text-black mb-1 group-hover:text-[#EF8B42] transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                      <div className="mt-1 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                        <ArrowUpRight size={20} className="text-[#EF8B42]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* SECTION 3: FOOTER */}
      <div className="fullpage-section pt-32">
        <Footer />
      </div>

      <style jsx>{`
        .fullpage-wrapper {
          height: 100vh;
          overflow-y: hidden;
          scroll-behavior: smooth;
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
            opacity 0.8s ease,
            transform 0.8s ease;
        }
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
