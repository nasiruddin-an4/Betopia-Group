"use client";

import React from "react";
import {
  BrainCircuit,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Laptop,
  LayoutGrid,
  Network,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const LogoMarqueeSection = () => {
  // Data for the cards: Logo, Title, Description
  const partners = [
    {
      id: 1,
      icon: <BrainCircuit className="w-12 h-12 text-blue-600" />,
      title: "AI Solutions",
      description: "Intelligent automation for modern business.",
    },
    {
      id: 2,
      icon: <CloudCog className="w-12 h-12 text-purple-600" />,
      title: "Cloud Native",
      description: "Scalable infrastructure for global reach.",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
      title: "Cyber Security",
      description: "Protecting data with advanced protocols.",
    },
    {
      id: 4,
      icon: <Database className="w-12 h-12 text-orange-600" />,
      title: "Big Data",
      description: "Insights driven by massive datasets.",
    },
    {
      id: 5,
      icon: <Code2 className="w-12 h-12 text-indigo-600" />,
      title: "Custom Dev",
      description: "Tailored software for unique needs.",
    },
    {
      id: 6,
      icon: <Network className="w-12 h-12 text-cyan-600" />,
      title: "IoT Systems",
      description: "Connecting devices for smarter operations.",
    },
    {
      id: 7,
      icon: <Smartphone className="w-12 h-12 text-pink-600" />,
      title: "Mobile Apps",
      description: "Engaging experiences on every device.",
    },
    {
      id: 8,
      icon: <Cpu className="w-12 h-12 text-red-600" />,
      title: "Robotics",
      description: "Automation precision for manufacturing.",
    },
  ];

  // Duplicate items to ensure seamless infinite scroll
  // We need enough items to fill the screen width multiple times
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="bg-white py-16 overflow-hidden border-t border-gray-100">
      <div className="relative w-full mx-auto overflow-hidden">
        {/* Gradient Masks for a fading effect on edges */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex w-max items-center animate-scroll hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-4 w-[280px] h-[180px] flex-shrink-0 group"
            >
              <div className="w-full h-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col items-start text-left justify-center cursor-default">
                {/* Logo / Icon */}
                <div className="mb-4 p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -33.33%
            ); /* Move by 1/3 since we have 3 sets */
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoMarqueeSection;
