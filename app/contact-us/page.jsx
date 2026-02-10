"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe2,
  Building2,
  Landmark,
  ArrowRight,
  MessageSquare,
  Users,
  Handshake,
  Mic2,
} from "lucide-react";
import Footer from "../components/Footer";

const officeHubs = [
  {
    id: 1,
    country: "Bangladesh",
    city: "Dhaka",
    address:
      "Level 6, 59 & 61, South Avenue, Lotus Kamal Tower-2, Gulshan Ave, Dhaka 1212.",
    phone: "+880 2 555 1234",
    email: "bd.office@betopiagroup.com",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: 2,
    country: "USA",
    city: "New York",
    address: "Trump Tower, NY, New York 10022, USA",
    phone: "+1 (212) 555-0199",
    email: "us.office@betopiagroup.com",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e3e9?q=80&w=2070&auto=format&fit=crop",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: 3,
    country: "UAE",
    city: "Dubai",
    address: "Level 42, Burj Daman, DIFC, Dubai, UAE",
    phone: "+971 4 555 6789",
    email: "uae.office@betopiagroup.com",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: 4,
    country: "UK",
    city: "London",
    address: "Level 10, The Shard, 32 London Bridge St, London SE1 9SG",
    phone: "+44 20 555 9012",
    email: "uk.office@betopiagroup.com",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    icon: <Globe2 className="w-6 h-6" />,
  },
];

const inquiryTypes = [
  {
    title: "Global Sales",
    purpose: "Enterprise Solutions & Platforms",
    email: "solutions@betopiagroup.com",
    icon: <Handshake className="text-[#EF8B42]" />,
  },
  {
    title: "Partnerships",
    purpose: "Strategic Ventures & Alliances",
    email: "ventures@betopiagroup.com",
    icon: <Users className="text-[#EF8B42]" />,
  },
  {
    title: "Media Room",
    purpose: "Press & External Communications",
    email: "media@betopiagroup.com",
    icon: <Mic2 className="text-[#EF8B42]" />,
  },
  {
    title: "Support",
    purpose: "Technical & Developer Assistance",
    email: "support@betopiagroup.com",
    icon: <MessageSquare className="text-[#EF8B42]" />,
  },
];

export default function ContactUs() {
  const wrapperRef = useRef(null);
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  const TOTAL_SECTIONS = 5;

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
      {/* SECTION 1: HERO (60vh) */}
      <div className="fullpage-section hero-section pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="self-center md:self-start text-[10px] md:text-xs font-semibold text-gray-400 mb-8 md:mb-12 uppercase tracking-[0.2em]">
            Home / Contact Us
          </div>

          <h1 className="text-4xl md:text-8xl font-bold text-black mb-8 tracking-tighter">
            Let&apos;s Build <br />
            <span className="text-[#EF8B42]">Tomorrow</span> Together.
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-gray-500 leading-relaxed mx-auto font-light">
            Whether you&apos;re looking for enterprise solutions, partnership
            opportunities, or just want to say hello, we&apos;re here to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#EF8B42]/10 flex items-center justify-center">
                <Mail size={18} className="text-[#EF8B42]" />
              </div>
              <span className="text-sm font-bold text-black uppercase tracking-wider">
                hello@betopiagroup.com
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#EF8B42]/10 flex items-center justify-center">
                <Globe2 size={18} className="text-[#EF8B42]" />
              </div>
              <span className="text-sm font-bold text-black uppercase tracking-wider">
                Global Operations 24/7
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 2: CONTACT FORM (100vh) */}
      <div className="fullpage-section bg-gray-50 pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-white border border-gray-100 text-[#EF8B42] text-[10px] font-bold rounded-full mb-8 uppercase tracking-widest shadow-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 tracking-tight">
                Send us a message.
              </h2>
              <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed max-w-lg">
                Our global team of experts is ready to assist you. Fill out the
                form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                {inquiryTypes.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#EF8B42] transition-all group-hover:text-white shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-2 font-light">
                        {item.purpose}
                      </p>
                      <p className="text-[#EF8B42] font-bold text-sm tracking-wide">
                        {item.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-black/5 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#EF8B42]/20 transition-all font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#EF8B42]/20 transition-all font-light"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#EF8B42]/20 transition-all font-light appearance-none">
                    <option>Strategic Partnership</option>
                    <option>Enterprise Solutions</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#EF8B42]/20 transition-all font-light"
                    placeholder="Tell us about your project or goal..."
                  ></textarea>
                </div>
                <button className="w-full bg-black text-white py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#EF8B42] transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: GLOBAL HUBS (100vh) */}
      <div className="fullpage-section bg-white pt-32">
        <section className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1 bg-gray-50 border border-gray-100 text-[#EF8B42] text-[10px] font-bold rounded-full mb-8 uppercase tracking-widest">
                Our Presence
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 tracking-tight">
                Global Headquarters.
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Strategy meets execution across our regional hubs. Visit us or
                reach out locally for regionally tailored solutions.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#EF8B42] transition-colors"
            >
              Explore Sitemap <Globe2 size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeHubs.map((office) => (
              <div
                key={office.id}
                className="group bg-white rounded-xl overflow-hidden border border-black/[0.03] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#EF8B42] shadow-sm">
                      {office.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-black mb-1">
                    {office.city}
                  </h4>
                  <p className="text-[#EF8B42] text-xs font-bold uppercase tracking-widest mb-6">
                    {office.country}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3 text-sm text-gray-500 font-light">
                      <MapPin
                        size={16}
                        className="shrink-0 text-[#EF8B42]/60"
                      />
                      <span className="line-clamp-2">{office.address}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-gray-500 font-light">
                      <Phone size={16} className="shrink-0 text-[#EF8B42]/60" />
                      <span>{office.phone}</span>
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-2xl border border-gray-100 text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2">
                    View on Map <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
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
        .scale-inner {
          animation: pulse-ring 2s infinite;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
