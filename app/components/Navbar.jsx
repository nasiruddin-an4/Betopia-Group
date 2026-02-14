"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      // Check window scroll for normal pages
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // For the fullpage scroll-snap wrapper on homepage
    const handleWrapperScroll = (e) => {
      if (e.target.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Also listen on the fullpage-wrapper if present
    const wrapper = document.querySelector(".fullpage-wrapper");
    if (wrapper) {
      wrapper.addEventListener("scroll", handleWrapperScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (wrapper) {
        wrapper.removeEventListener("scroll", handleWrapperScroll);
      }
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const topLinks = ["Procurement", "News & Media", "Contact Us", "Sitemap"];
  const mainLinks = [
    "Vision 2030",
    "About Us",
    "Leadership",
    "Ventures",
    "Industries",
  ];

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
        isScrolled ? "py-4 shadow-2xl" : "py-6"
      } ${isOpen || !isHome || isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="group relative z-50">
            <div className="relative w-32 h-10 md:w-48 md:h-16 transition-all duration-300">
              <Image
                src="/betopia-logo.svg"
                alt="Betopia Group Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Section */}
          <div className="hidden lg:flex flex-col items-end flex-1">
            {/* Top Hierarchy Container - Smooth collapse */}
            <div
              className={`w-full flex flex-col items-end transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"}`}
            >
              <div className="flex items-center space-x-6 mb-4">
                {topLinks.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="text-[14px] font-medium tracking-tight text-white/70 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              {/* Divider Line - Explicit full width */}
              <div className="w-[80%] h-px bg-white/20 mb-4"></div>
            </div>

            {/* Main Hierarchy - Size remains constant */}
            <div className="flex items-center space-x-10">
              {mainLinks.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[15px] font-medium tracking-wide text-white/90 hover:text-white transition-all whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/career"
                className="bg-[#EF8B42] text-white px-10 py-3 rounded-full text-sm font-bold hover:bg-[#d67a3a] transition-all whitespace-nowrap"
              >
                Career
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#EF8B42] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden border-l border-white/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-[#EF8B42] transition-colors focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col h-full overflow-y-auto px-6 py-24 space-y-8">
          {/* Main Links */}
          <div className="flex flex-col space-y-6">
            {mainLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-2xl font-bold text-white hover:text-[#EF8B42] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Top Links */}
          <div className="flex flex-col space-y-4">
            {topLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="text-base text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/career"
              className="inline-block w-full text-center bg-[#EF8B42] text-white px-6 py-4 rounded-full text-lg font-bold hover:bg-[#d67a3a] transition-all"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
