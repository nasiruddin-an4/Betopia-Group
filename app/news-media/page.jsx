"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Play,
  Calendar,
  Clock,
  Share2,
} from "lucide-react";
import Footer from "../components/Footer";

const newsItems = [
  {
    id: 1,
    category: "Technology",
    title:
      "Betopia Group Unveils Next-Generation AI Ecosystem at Global Tech Summit",
    summary:
      "Leading the charge in Asian AI innovation, Betopia Group presented its 'One Intelligent Ecosystem' strategy, promising seamless integration across 22 business units.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Corporate",
    title: "Global Expansion: New Strategic Hub Opens in Singapore",
    summary:
      "Marking a significant milestone in our international roadmap, the Singapore office will serve as the primary gateway for Southeast Asian operations.",
    image:
      "https://images.unsplash.com/photo-1449156001935-cf2d4099914b?q=80&w=2070&auto=format&fit=crop",
    date: "Sep 28, 2024",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 3,
    category: "Sustainability",
    title: "Green Computing: Our Commitment to Net-Zero Data Centers",
    summary:
      "Betopia is investing $50M into sustainable infrastructure to ensure that the AI of tomorrow doesn't cost the environment of today.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    date: "Sep 15, 2024",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 4,
    category: "Awards",
    title: "Winner: Most Innovative Enterprise in Asia 2024",
    summary:
      "The Asian Tech Excellence Awards recognized Betopia for its groundbreaking work in hyper-automation and cross-industry AI integration.",
    image:
      "https://images.unsplash.com/photo-1579548122020-b3fb416ad74b?q=80&w=2070&auto=format&fit=crop",
    date: "Aug 20, 2024",
    readTime: "2 min read",
  },
  {
    id: 5,
    category: "Ventures",
    title: "Betopia Ventures Reaches $1B in Total Managed Assets",
    summary:
      "Our venture arm continues to fuel the next wave of disruptive startups, focusing on deep-tech and social impact.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    date: "Aug 05, 2024",
    readTime: "6 min read",
  },
  {
    id: 6,
    category: "Innovation",
    title: "Quantum Leap: Exploring the Future of Computation",
    summary:
      "A deep dive into Betopia Labs' research on quantum-resistant cryptography and its implications for global security.",
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
    date: "Jul 18, 2024",
    readTime: "8 min read",
  },
  {
    id: 7,
    category: "Corporate",
    title: "New Talent Drive: Hiring 1000+ Engineers by 2025",
    summary:
      "As we scale our AI infrastructure, we're looking for the brightest minds to join our global mission across Asia and Europe.",
    image:
      "https://images.unsplash.com/photo-1521737706044-c74e1f457c00?q=80&w=2072&auto=format&fit=crop",
    date: "Jun 30, 2024",
    readTime: "4 min read",
  },
];

const mediaItems = [
  {
    id: 1,
    title: "Betopia Tech City 2030 Vision",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    duration: "2:45",
    type: "video",
  },
  {
    id: 2,
    title: "Annual Global Summit Highlights",
    thumbnail:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    duration: "1:30",
    type: "video",
  },
  {
    id: 3,
    title: "The Minds Behind the Tech: CEO Interview",
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    duration: "5:12",
    type: "video",
  },
];

export default function NewsMedia() {
  const wrapperRef = useRef(null);
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  const TOTAL_SECTIONS = 5;
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const featuredStories = newsItems.filter((item) => item.featured);

  const nextFeatured = useCallback(() => {
    setCurrentFeatured((prev) => (prev + 1) % featuredStories.length);
  }, [featuredStories.length]);

  const prevFeatured = useCallback(() => {
    setCurrentFeatured(
      (prev) => (prev - 1 + featuredStories.length) % featuredStories.length,
    );
  }, [featuredStories.length]);

  // Auto-play for featured carousel
  useEffect(() => {
    const timer = setInterval(nextFeatured, 6000);
    return () => clearInterval(timer);
  }, [nextFeatured]);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Technology",
    "Corporate",
    "Sustainability",
    "Awards",
    "Ventures",
    "Innovation",
  ];

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

  // Intersection Observer for fade-in animations
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
      {/* SECTION 1: HERO (60vh) */}
      <div className="fullpage-section hero-section pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="self-center md:self-start text-[10px] md:text-xs font-semibold text-gray-400 mb-8 md:mb-12 uppercase tracking-[0.2em]">
            Home / News & Media
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            The Newsroom.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed mx-auto font-light">
            Stay updated with the latest breakthroughs, global milestones, and
            the visionary narrative of Betopia Group.
          </p>

          {/* Search bar mock */}
          <div className="mt-12 w-full max-w-xl relative group">
            <input
              type="text"
              placeholder="Search news, articles, or videos..."
              className="w-full bg-gray-50 border border-gray-100 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all pl-14"
            />
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors"
              size={20}
            />
          </div>
        </section>
      </div>

      {/* SECTION 2: FEATURED STORY (100vh) */}
      <div className="fullpage-section bg-white pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="flex items-center justify-between mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              Featured News
            </h2>
            <div className="hidden md:flex gap-4">
              <button
                onClick={prevFeatured}
                className="p-3 rounded-full border border-gray-100 hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextFeatured}
                className="p-3 rounded-full border border-gray-100 hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative w-full h-[60vh] md:h-[65vh] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl">
            {featuredStories.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentFeatured
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-20 scale-105 pointer-events-none"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                  <span className="inline-block px-4 py-1 bg-[#EF8B42] text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-white/80 text-lg mb-8 line-clamp-2 md:line-clamp-none font-light leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-6">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#EF8B42] hover:text-white transition-all shadow-xl"
                    >
                      Read Full Story <ArrowRight size={20} />
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-2 font-medium">
                        <Calendar size={16} className="text-[#EF8B42]" />{" "}
                        {item.date}
                      </span>
                      <span className="flex items-center gap-2 font-medium">
                        <Clock size={16} className="text-[#EF8B42]" />{" "}
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute top-10 right-10 flex gap-2 z-20">
              {featuredStories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentFeatured(idx);
                  }}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    idx === currentFeatured
                      ? "w-8 bg-[#EF8B42]"
                      : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: RECENT UPDATES (100vh) */}
      <div className="fullpage-section bg-gray-50 pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center pb-20 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
                Latest Updates
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                      activeCategory === cat
                        ? "bg-black text-white shadow-xl"
                        : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <button className="inline-flex items-center gap-2 text-black font-bold group">
              View All Archive{" "}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden h-full">
            {newsItems.slice(1, 7).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 border border-black/[0.03]"
              >
                <div className="relative h-40 md:h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-white/90 backdrop-blur-md text-black text-[9px] font-bold rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[9px] font-bold text-gray-400 mb-3 uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} className="text-[#EF8B42]" />{" "}
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} className="text-[#EF8B42]" />{" "}
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 leading-tight tracking-tight group-hover:text-[#EF8B42] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4 line-clamp-2 font-light leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-black hover:text-[#EF8B42] transition-colors"
                    >
                      Read Story <ArrowRight size={12} />
                    </Link>
                    <button className="text-gray-300 hover:text-black transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* SECTION 4: MEDIA LIBRARY (100vh) */}
      <div className="fullpage-section bg-black pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="lg:col-span-5 text-white">
              <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md text-[#EF8B42] text-xs font-bold rounded-full mb-8 uppercase tracking-widest">
                Media Library
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-none">
                Experience the <br />{" "}
                <span className="text-[#EF8B42]">Digital</span> Pulse.
              </h2>
              <p className="text-white/60 text-lg mb-12 font-light leading-relaxed max-w-lg">
                Explore our curated collection of visionary videos,
                behind-the-scenes insights, and the visual journey of our path
                to 2030.
              </p>

              <div className="space-y-6">
                {mediaItems.map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play size={16} className="text-white opacity-80" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold group-hover:text-[#EF8B42] transition-colors">
                        {video.title}
                      </h4>
                      <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-12 inline-flex items-center gap-4 text-[#EF8B42] font-bold group">
                Enter Full Gallery{" "}
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-[#EF8B42]/10">
                <Image
                  src={mediaItems[0].thumbnail}
                  alt="Main Media"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#EF8B42] flex items-center justify-center text-white shadow-3xl hover:scale-110 transition-transform duration-500 hover:shadow-[#EF8B42]/40">
                    <Play size={32} fill="currentColor" />
                  </button>
                </div>
                <div className="absolute bottom-10 left-10 p-4 border-l-2 border-[#EF8B42] bg-black/40 backdrop-blur-md">
                  <p className="text-white text-xs font-bold uppercase tracking-[0.3em]">
                    Now Playing
                  </p>
                  <p className="text-white text-xl font-bold tracking-tight">
                    {mediaItems[0].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 5: FOOTER */}
      <div className="fullpage-section pt-32">
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
