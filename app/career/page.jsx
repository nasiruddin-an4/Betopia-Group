"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Users,
  Gamepad2,
  Plane,
  Clock,
  Dumbbell,
  Award,
  Hourglass,
  Target,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const OFFERS = [
  {
    title: "Betopians get Buy 1 Get 3 free buffet at 5 Star Hotels",
    image: "/offer_buffet.png",
    alt: "Buffet Offer",
  },
  {
    title: "40% Flat discount on Unilever USHOP",
    image: "/offer_ushop.png",
    alt: "UShop Offer",
    bgClass: "bg-blue-700",
  },
  {
    title: "Avail up to 25% off on select stores",
    image: "/offer_shopping.png",
    alt: "Shopping Offer",
  },
  {
    title: "Exclusive Gym Membership Discounts",
    image: "/offer_buffet.png", // Reusing image as placeholder if needed or use previous logic
    alt: "Gym Offer",
  },
];

const JOB_CATEGORIES = [
  "New",
  "Design",
  "Development",
  "Software Engineer",
  "Marketing",
  "Finance",
];

const JOBS = [
  {
    title: "Senior UI Designer",
    category: "Design",
    location: "Dhaka, Bangladesh",
    description:
      "We are looking for Senior UI Designer to work on our projects...",
    salary: "120k - 140k/month",
    tags: ["Fulltime", "On-site"],
  },
  {
    title: "Junior Product Designer",
    category: "Design",
    location: "Dhaka, Bangladesh",
    description: "We are looking for Junior Product Designer...",
    salary: "120k - 140k/month",
    tags: ["Fulltime", "On-site"],
  },
  {
    title: "Full Stack Developer",
    category: "Development",
    location: "Dhaka, Bangladesh",
    description: "We are looking for Senior Product Designer...",
    salary: "120k - 140k/month",
    tags: ["Fulltime", "On-site"],
  },
  {
    title: "Senior Project Manager",
    category: "Marketing",
    location: "Dhaka, Bangladesh",
    description: "We are looking for Senior Project Manager...",
    salary: "120k - 140k/month",
    tags: ["Fulltime", "On-site"],
  },
  {
    title: "Senior Data Analyst",
    category: "Software Engineer",
    location: "Dhaka, Bangladesh",
    description: "We are looking for Senior Data Analyst...",
    salary: "120k - 140k/month",
    tags: ["Fulltime", "On-site"],
  },
  {
    title: "Senior AI Engineer",
    category: "Software Engineer",
    location: "Dhaka, Bangladesh",
    description: "We are looking for Senior Product Designer...",
    salary: "120k - 140k/month",
    tags: ["Fulltime", "On-site"],
  },
];

const APPLICATION_STEPS = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Upload your resume or build your professional profile in minutes.",
  },
  {
    number: "02",
    title: "Browse opportunities",
    description: "Explore thousands of jobs from various industries.",
  },
  {
    number: "03",
    title: "Apply with one click",
    description: "Send your application for your dream job quickly and easily.",
  },
];

const NEWS_ITEMS = [
  {
    title: "How EDGE Helped Us Build Better People—and a Better Future",
    image: "/10013.jpg", // Placeholder until generation works
  },
  {
    title:
      "Leadership Transformation Program Builds Future Leaders- Its ok Shaping the Future of Tomorrow",
    image: "/10014.jpg", // Placeholder
  },
  {
    title:
      "Betopia Group Sponsors Robotics Club Inaugural Program and WRO Workshop at Dhaka Polytechnic Institute",
    image: "/10012.jpg", // Using an existing image as placeholder
  },
];

export default function CareerPage() {
  const scrollContainerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("New");

  const filteredJobs =
    activeCategory === "New"
      ? JOBS
      : JOBS.filter((job) => job.category === activeCategory);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust scroll amount as needed
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="pt-20 md:pt-32">
      <main className="relative w-full h-[70vh] md:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/10001.png"
            alt="Career Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center h-[60vh] px-4 md:px-8 lg:px-16 pt-16 md:pt-24 text-black">
          <span className="text-sm font-semibold uppercase tracking-wider mb-4 block">
            Career at Betopia
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            We don&apos;t fill positions.
            <br />
            We fuel ambitions.
          </h1>
          <p className="text-black/90 text-sm md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
            Connect your intelligence to a network of 5,000+ pioneers. From
            optimizing national food chains to engineering smart cities, build
            what matters.
          </p>

          <a
            href="#openJobs"
            className="inline-flex items-center justify-between px-6 py-4 md:px-8 bg-white text-black border border-black rounded-full font-medium hover:bg-black hover:text-white transition-all group mb-8 md:mb-10 w-full md:w-fit md:min-w-[280px]"
          >
            View Open Positions
            <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-6 text-black/80">
            <a href="#" className="hover:text-black transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </main>

      {/* Life at Betopia Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-8">
              Life at Betopia
            </h2>
            <p className="text-black/80 text-lg leading-relaxed font-medium">
              We don&apos;t believe in &apos;work-life balance&apos; we believe
              in work-life integration. We work with intensity because we are
              building the future, but we celebrate with equal passion. Whether
              it&apos;s 48-hour hackathons that birth new subsidiaries or luxury
              retreats that refresh our perspective, every moment at Betopia is
              engineered to elevate your potential.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Image 1: Meeting */}
            <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden md:col-span-8">
              <Image
                src="/10012.jpg"
                alt="Team Meeting"
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>

            {/* Image 2: Ping Pong */}
            <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden md:col-span-4">
              <Image
                src="/10013.jpg"
                alt="Recreation"
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>

            {/* Image 3: Event */}
            <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden md:col-span-4">
              <Image
                src="/10014.jpg"
                alt="Corporate Event"
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>

            {/* Image 4: Casual */}
            <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden md:col-span-8">
              <Image
                src="/10015.jpg"
                alt="Office Lounge"
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F4FAFA] py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black">
              Benefits
            </h2>
            <p className="text-black/80 text-lg leading-relaxed font-medium max-w-xl md:text-right">
              Optimizing your life so you can optimize the world. A 360° support
              system for the high-performance mind.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Collaborative Ecosystem */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Collaborative Ecosystem (Culture)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Zero politics, 100% impact. We operate on a flat hierarchy where
                the best idea wins—whether it comes from an intern or the CEO.
              </p>
            </div>

            {/* Card 2: Decompression Zone */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Gamepad2 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Decompression Zone (Relax & Sports)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                From intense table tennis matches to quiet zones. We believe
                that to code hard, you need to disconnect harder.
              </p>
            </div>

            {/* Card 3: Annual Pleasure Tour */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Plane className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Annual Pleasure Tour
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We shut down the servers to recharge the humans. A fully
                sponsored, luxury offsite retreat to bond, breathe, and reset.
              </p>
            </div>

            {/* Card 4: Time-Value Liquidity */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Time-Value Liquidity (Leave Encashment)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your time is currency. At Betopia, unused leave days don&apos;t
                expire—they convert directly into cash at the end of the year.
              </p>
            </div>

            {/* Card 5: Gym Facilities */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Dumbbell className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Gym Facilities
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Keep the hardware (body) as sharp as the software. A fully
                equipped fitness center right inside the HQ.
              </p>
            </div>

            {/* Card 6: Loyalty Bonus */}
            <div className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Award className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Loyalty Bonus
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Commitment pays compound interest. We unlock special financial
                milestones and rewards for our 3, 5, and 10-year veterans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black max-w-2xl leading-tight">
              Offers designed to cater to your lifestyle needs.
            </h2>
            <div className="flex flex-col items-end gap-8">
              <p className="text-black/80 text-lg leading-relaxed font-medium max-w-sm md:text-right">
                We don&apos;t just hold memberships; we hold leadership
                positions. Driving the narrative for Tech, Agro, and
                Infrastructure in Bangladesh.
              </p>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scroll("left")}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Offers Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {OFFERS.map((offer, index) => (
              <div
                key={index}
                className="group cursor-pointer min-w-[300px] md:min-w-[400px] snap-start"
              >
                <div
                  className={`relative h-[300px] mb-6 overflow-hidden ${
                    offer.bgClass || ""
                  }`}
                >
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-black group-hover:underline decoration-1 underline-offset-4">
                  {offer.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Code Section */}
      <section className="bg-gradient-to-b from-[#CCFBF1] to-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-4 md:mb-0 text-center md:text-left">
              Our Cultural Code
            </h2>
            <p className="text-black/70 max-w-xl text-lg font-medium text-center md:text-right">
              5,000+ Minds. 28 Enterprises. One Mission: Engineering the future
              of Bangladesh for the World.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Integrity */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <Hourglass className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">INTEGRITY</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Instant analysis offers valuable insights for swift
                  decision-making. Companies track metrics.
                </p>
              </div>

              {/* Grit */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">GRIT</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Predictive analytics uses historical data and algorithms to
                  forecast outcomes.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center h-full">
              <div className="relative w-full h-[500px] md:h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/10001.gif"
                  alt="Cultural Code"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Collaboration */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <ClipboardCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  COLLABORATION
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Real-time reporting provides insights for quick decisions.
                  Organizations monitor key metrics.
                </p>
              </div>

              {/* Intelligence */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  INTELLIGENCE
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Integrations enhance collaboration. Teams access insights and
                  streamline workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section id="openJobs" className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#FF8F3D] text-white rounded-full text-sm font-medium mb-6">
              Explore Jobs
            </span>
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-12">
              Discover Job Opportunities
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              {JOB_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#3D3D3D] text-white border-[#3D3D3D]"
                      : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-[#FAFAFA] p-8 rounded-[32px] hover:shadow-lg transition-shadow group h-full flex flex-col"
                >
                  <h3 className="text-xl font-bold text-black mb-3">
                    {job.title}
                  </h3>

                  <div className="flex items-center text-gray-400 text-xs mb-6">
                    <MapPin className="w-3 h-3 mr-1" />
                    {job.location}
                  </div>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex items-center text-gray-600 text-sm font-medium mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-[#EBEBEB] text-black text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center text-[#FF8F3D] font-bold text-sm hover:underline decoration-2 underline-offset-4"
                    >
                      Apply Now
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-10">
                <p className="text-gray-500 text-lg font-medium">
                  No jobs available in this category.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Please check back later for new opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-white mb-6 leading-tight">
                Easy Ways to Launch Your Career
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-12 max-w-md">
                Kickstart your career with just a few easy steps and apply
                seamlessly
              </p>

              <div className="space-y-8 md:space-y-10">
                {APPLICATION_STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-4 md:gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center text-white font-medium text-sm">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[400px] lg:min-h-full order-1 lg:order-2">
              <Image
                src="/10012.jpg"
                alt="Working at Betopia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsroom Section */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black">
              The Newsroom.
            </h2>
            <a
              href="#"
              className="px-6 py-2 border border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors flex items-center group"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[240px] mb-6 rounded-[24px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-black leading-snug group-hover:underline decoration-1 underline-offset-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
