"use client";

import React from "react";

const stats = [
  {
    id: 1,
    stat: "5,000+",
    label: "Associates",
    description:
      "Our dedicated professionals working together across various sectors to deliver excellence and innovation.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-cyan-500/80 to-blue-500/80",
  },
  {
    id: 2,
    stat: "28+",
    label: "Strategic Business Units",
    description:
      "A diverse portfolio of specialized enterprises driving industrial growth and technological advancement.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    gradient: "from-orange-400/80 to-red-500/80",
  },
  {
    id: 3,
    stat: "10M+",
    label: "Lives Touched",
    description:
      "Making a significant social impact through our commitment to sustainable development and community welfare.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-teal-400/80 to-emerald-500/80",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-24 text-black overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between text-center md:items-start mb-16 gap-6">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold tracking-tight">
            Intelligence at Scale.
          </h2>
          <p className="max-w-xs text-right text-gray-800 text-xl leading-relaxed font-medium">
            5,000+ Minds. 28 Enterprises. One Mission: Engineering the future of
            Bangladesh for the World.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group relative h-[480px] rounded-4xl overflow-hidden transition-all duration-800 cubic-bezier(0.23, 1, 0.32, 1) hover:-translate-y-3 hover:shadow-xl bg-gray-900"
            >
              {/* Background Image - Parallax scale */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1200 cubic-bezier(0.23, 1, 0.32, 1) group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              {/* Gradient Overlay: Deep Bottom-to-Top with premium blend */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${item.gradient} via-black/40 to-transparent opacity-80 transition-all duration-800 cubic-bezier(0.23, 1, 0.32, 1) group-hover:opacity-100`}
              />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                {/* Top Icon - Floating effect */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-800 cubic-bezier(0.23, 1, 0.32, 1) group-hover:scale-110">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-600"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>

                {/* Bottom Content - Staggered reveal */}
                <div className="text-white">
                  <div className="transition-transform duration-800 cubic-bezier(0.23, 1, 0.32, 1) group-hover:-translate-y-2">
                    <h3 className="text-5xl font-bold mb-1">{item.stat}</h3>
                    <p className="text-2xl font-bold opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                      {item.label}
                    </p>
                  </div>

                  {/* Reveal on Hover - Fluid sliding motion */}
                  <div className="grid transition-all duration-800 cubic-bezier(0.23, 1, 0.32, 1) grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <div className="pt-2">
                        <p className="text-base leading-relaxed mb-2 font-medium text-white/80 line-clamp-2 max-w-[95%]">
                          {item.description}
                        </p>
                        <button className="group/btn flex items-center space-x-3 text-sm font-bold text-white transition-all hover:tracking-wider cursor-pointer">
                          <span className="relative">
                            Learn More
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/btn:w-full"></span>
                          </span>
                          <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-[40px] border border-white/10 group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
