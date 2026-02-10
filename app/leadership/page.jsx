"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Users,
  Globe,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  Heart,
} from "lucide-react";

// Leadership Team Data
const EXECUTIVE_LEADERSHIP = {
  ceo: {
    name: "Muhammad Monir Hossain",
    title: "Founder & CEO",
    image: "/ceo.webp",
    mandate:
      "Architect the digital and physical economies of Asia through relentless innovation.",
    bio: "With over 25 years of technology leadership, Dr. Rahman has built Betopia Group into Asia's largest AI powerhouse, transforming industries and pioneering breakthrough solutions.",
  },
};

const EXECUTIVE_COUNCIL = [
  {
    name: "Rakibul Islam",
    title: "Chief Technology Officer (CTO)",
    image: "/10021.png",
    description:
      "Leading innovation in AI, cloud architecture, and emerging technologies.",
  },
  {
    name: "Michael Thompson",
    title: "Chief Operating Officer (COO)",
    image: "/10018.png",
    description:
      "Orchestrating global delivery and operational excellence across 50+ countries.",
  },
  {
    name: "Priya Sharma",
    title: "Chief Financial Officer (CFO)",
    image: "/10015.jpg",
    description:
      "Driving financial strategy and sustainable growth across the ecosystem.",
  },
  {
    name: "David Park",
    title: "Chief Strategy Officer (CSO)",
    image: "/10012.jpg",
    description:
      "Shaping long-term vision and strategic partnerships across industries.",
  },
];

const LEADERSHIP_TEAM = {
  "Strategic Leadership": [
    {
      name: "Emily Zhang",
      title: "VP of Strategy",
      image: "/10013.jpg",
    },
    {
      name: "Lisa Anderson",
      title: "VP of Marketing",
      image: "/10015.jpg",
    },
    {
      name: "Robert Kim",
      title: "VP of Sales",
      image: "/10012.jpg",
    },
    {
      name: "Anna Williams",
      title: "VP of HR",
      image: "/10014.jpg",
    },
  ],
  "Business Unit Leaders": [
    {
      name: "Thomas Lee",
      title: "Director, AI Solutions",
      image: "/10013.jpg",
    },
    {
      name: "Maria Garcia",
      title: "Director, AgriTech",
      image: "/10014.jpg",
    },
    {
      name: "Alex Johnson",
      title: "Director, Infrastructure",
      image: "/10015.jpg",
    },
    {
      name: "Nina Patel",
      title: "Director, FinTech",
      image: "/10012.jpg",
    },
  ],
  "Innovation Leaders": [
    {
      name: "Chris Taylor",
      title: "Head of R&D",
      image: "/10013.jpg",
    },
    {
      name: "Jennifer Wu",
      title: "Head of Product",
      image: "/10014.jpg",
    },
  ],
};

const FEATURED_LEADERS = [
  {
    name: "Kamrujjaman",
    title: "Managing Director",
    image: "/10012.jpg",
  },
  {
    name: "Tauhid Bin",
    title: "Director",
    image: "/10013.jpg",
  },
  {
    name: "Farzana Akter",
    title: "Executive Director",
    image: "/10014.jpg",
  },
];

const LEADERSHIP_VALUES = [
  {
    icon: Target,
    title: "Vision-Driven",
    description:
      "Setting ambitious goals that inspire transformation across industries.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Embracing cutting-edge solutions to solve complex challenges.",
  },
  {
    icon: Heart,
    title: "People-Centric",
    description:
      "Nurturing talent and fostering a culture of growth and inclusivity.",
  },
];

const DIVERSITY_STATS = [
  { label: "Women in Leadership", value: 42, suffix: "%" },
  { label: "Countries Represented", value: 28, suffix: "+" },
  { label: "Average Tenure", value: 7, suffix: "yrs" },
  { label: "Leadership Programs", value: 15, suffix: "+" },
];

const GLOBAL_OFFICES = [
  { country: "Bangladesh", city: "Dhaka", type: "Headquarters" },
  { country: "USA", city: "New York", type: "Regional HQ" },
  { country: "UK", city: "London", type: "European Office" },
  { country: "UAE", city: "Dubai", type: "Middle East Office" },
];

// Animated Counter Component
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(ease * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function LeadershipPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/10001.png"
            alt="Leadership Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* White gradient overlay from left */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent z-10" />
        </div>

        <div className="relative z-20 pt-20 container mx-auto px-4 md:px-8  flex flex-col justify-center min-h-[70vh]">
          <span className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">
            Our Leadership
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1B32] mb-6 leading-[1.1] max-w-2xl">
            Visionaries Shaping
            <br />
            the Digital Future
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
            Our leadership team combines decades of industry expertise with a
            passion for innovation. Together, they guide Betopia Group&apos;s
            mission to transform businesses through cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="bg-[#F8F9FC] py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FF8F3D] text-white text-sm font-semibold uppercase tracking-wider px-6 py-2 rounded-full mb-6">
              Our Philosophy
            </span>
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-black text-[#0B1B32] mb-6">
              Leadership That Inspires Excellence
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our leadership philosophy is built on four core pillars that drive
              organizational success
            </p>
          </div>

          {/* Four Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Strategic Vision */}
            <div className="bg-white rounded-[24px] p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF8F3D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B32] mb-3">
                Strategic Vision
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Forward-thinking leadership that anticipates market trends and
                technological disruptions
              </p>
            </div>

            {/* People First */}
            <div className="bg-white rounded-[24px] p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF8F3D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B32] mb-3">
                People First
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Building a culture of excellence through empowerment and
                continuous learning
              </p>
            </div>

            {/* Innovation Driven */}
            <div className="bg-white rounded-[24px] p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF8F3D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B32] mb-3">
                Innovation Driven
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fostering creativity and breakthrough thinking across all levels
                of the organization
              </p>
            </div>

            {/* Results Oriented */}
            <div className="bg-white rounded-[24px] p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF8F3D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B32] mb-3">
                Results Oriented
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Delivering measurable business outcomes through accountable
                leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custodians of the Future */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-black text-[#0B1B32] mb-6">
              Custodians of the Future
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our leadership structure combines visionary foresight with
              operational excellence
            </p>
          </div>

          {/* CEO Feature Card */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-linear-to-r from-[#E8F0FE] to-[#F8F9FC] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40 md:w-48 md:h-58 shrink-0">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={EXECUTIVE_LEADERSHIP.ceo.image}
                    alt={EXECUTIVE_LEADERSHIP.ceo.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-[#0B1B32] mb-2">
                  {EXECUTIVE_LEADERSHIP.ceo.name}
                </h3>
                <span className="text-[#FF8F3D] text-base font-semibold">
                  {EXECUTIVE_LEADERSHIP.ceo.title}
                </span>
                <div className="mt-4">
                  <p className="text-[#0B1B32] font-bold text-sm mb-2">
                    The Mandate:
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {EXECUTIVE_LEADERSHIP.ceo.mandate}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {EXECUTIVE_LEADERSHIP.ceo.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Executive Council */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1B32] mb-10 text-center">
              The Executive Council
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {EXECUTIVE_COUNCIL.map((member, index) => (
                <div key={index} className=" group ">
                  <div className="relative w-full border border-gray-200 aspect-4/5 rounded-md overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-2">
                    <h4 className="text-lg font-bold text-[#0B1B32] mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[#FF8F3D] text-sm font-semibold">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Teams by Department */}
          {Object.entries(LEADERSHIP_TEAM).map(([department, members]) => (
            <div key={department} className="mb-16 last:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1B32] mb-8 text-center">
                {department}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {members.map((member, index) => (
                  <div key={index} className="group">
                    <div className="relative w-full border border-gray-200 aspect-4/5 rounded-md overflow-hidden mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-2">
                      <h4 className="text-lg font-bold text-[#0B1B32] mb-1">
                        {member.name}
                      </h4>
                      <p className="text-[#FF8F3D] text-sm font-semibold">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Building Tomorrow's Leaders Today */}
      <section className="bg-[#0B1B32] py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-black text-white mb-8 leading-[1.1]">
                Building Tomorrow&apos;s
                <br />
                <span className="text-[#FF8F3D]">Leaders Today</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We invest in developing the next generation of leaders through
                mentorship programs, leadership academies, and hands-on
                experience across our global enterprises.
              </p>

              <div className="space-y-6">
                {LEADERSHIP_VALUES.map((value, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FF8F3D]/20 flex items-center justify-center group-hover:bg-[#FF8F3D] transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-[#FF8F3D] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/10015.jpg"
                  alt="Building Tomorrow's Leaders"
                  width={700}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1B32]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strength Through Diversity */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/10013.jpg"
                  alt="Strength Through Diversity"
                  width={700}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-black text-[#0B1B32] mb-6 leading-[1.1]">
                Strength Through
                <br />
                <span className="text-[#FF8F3D]">Diversity</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Our leadership reflects the diverse markets we serve. We believe
                that varied perspectives drive innovation and create more
                resilient organizations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {DIVERSITY_STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#F8F9FC] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-black text-[#FF8F3D] mb-2">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-500 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
