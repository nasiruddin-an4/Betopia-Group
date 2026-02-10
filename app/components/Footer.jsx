"use client";

import React from "react";
import Link from "next/link";
import { ArrowDownCircle } from "lucide-react";

export default function Footer() {
  const locations = [
    {
      country: "United States",
      address: "16 Cove Road, Mount Arlington, NJ 07856",
    },
    {
      country: "Australia",
      address: "155 Bennett Rd, St Clair NSW 2759",
    },
    {
      country: "South Africa",
      address: "55 Mons Rd, Bellevue East, Johannesburg, 2198",
    },
    {
      country: "Singapore",
      address: "6 Raffles Blvd, Marina Square",
    },
    {
      country: "Italy",
      address: "Via Bari, 9, 03043 Cassino, FR",
    },
    {
      country: "Dubai",
      address: "AlFattan Downtown - 32d St - Al Satwa",
    },
    {
      country: "Cyprus",
      address: "Estias 5, Strovolos 2001",
    },
    {
      country: "Bangladesh",
      address: "Ventura Iconia, Plot 37 Road No. 11, Banani, Dhaka 1213",
    },
  ];

  const linkGroups = [
    {
      title: "Important Links",
      links: [
        { label: "Contact Us", href: "/contact-us" },
        { label: "About Us", href: "/about-us" },
        { label: "Products", href: "/#products" },
        { label: "Industry", href: "/industries" },
        { label: "Blogs", href: "/news-media" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "UI/UX Design", href: "#" },
        { label: "Web Design", href: "#" },
        { label: "Logo & Branding", href: "#" },
        { label: "Webflow Design", href: "#" },
        { label: "Framer Design", href: "#" },
      ],
    },
    {
      title: "Specialized Industry",
      links: [
        { label: "Fintech Industry", href: "#" },
        { label: "Healthcare & Fitness Industry", href: "#" },
        { label: "Edtech Industry", href: "#" },
        { label: "Cybersecurity Industry", href: "#" },
        { label: "Company Deck", href: "#", icon: true },
      ],
    },
    {
      title: "Compare",
      links: [
        { label: "Vs Agencies", href: "#" },
        { label: "Vs Freelancers", href: "#" },
        { label: "Vs Inhouse", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#020617] text-white font-sans overflow-hidden">
      {/* Top Section: Earth Background & Locations */}
      <div className="relative pt-32 pb-20 lg:pb-32 min-h-[800px] flex flex-col justify-end lg:justify-center">
        {/* Earth Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/The planer.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay to fade into black at the bottom */}
          <div className="absolute inset-0 bg-linear-to-b from-[#020617]/30 via-transparent to-[#020617]" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-[#020617] to-transparent" />
        </div>

        {/* Location Cards Grid */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#0f172a]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-[#0f172a]/60 transition-all duration-300 group hover:-translate-y-1 hover:border-white/20"
              >
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#EF8B42] transition-colors">
                  {loc.country}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed px-2 font-light">
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Links */}
      <div className="relative z-10 bg-[#020617] pt-0 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            {linkGroups.map((group, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold mb-8 text-white">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-[#EF8B42] text-sm transition-colors flex items-center gap-2 font-light"
                      >
                        {link.label}
                        {link.icon && (
                          <ArrowDownCircle
                            size={16}
                            className="text-purple-400"
                          />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom: Copyright & Giant Text */}
        <div className="border-t border-white/5 mt-20">
          <div className="container mx-auto px-4 max-w-6xl py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light uppercase tracking-wider">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <div className="text-center">
                © {new Date().getFullYear()}, Betopia Group, All Rights
                Reserved.
              </div>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Giant Logo Text */}
          <div className="w-full flex justify-center overflow-hidden pointer-events-none">
            <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white/10 to-transparent select-none pb-0 -mb-4 md:-mb-10 blur-[2px] opacity-50">
              betopiagroup
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
