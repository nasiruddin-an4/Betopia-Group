"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Cpu,
  Sprout,
  Building2,
  ShoppingCart,
  Landmark,
  GraduationCap,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

const STATS = [
  { label: "Enterprises", value: 28, suffix: "+" },
  { label: "Team Members", value: 5000, suffix: "+" },
  { label: "Global Presence", value: 13, suffix: "+" },
  { label: "Lives Impacted", value: 10, suffix: "M+" },
];

const EXCELLENCE_FEATURES = [
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Leveraging advanced analytics and AI to derive actionable insights specific to each industry vertical.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Deep understanding of industry-specific regulations ensuring compliant and secure solutions.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Accelerated implementation methodologies that minimize disruption and maximize ROI.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description:
      "Worldwide presence with local expertise ensuring solutions that work across markets.",
  },
];

const INDUSTRY_SPECTRUM = [
  {
    title: "Aviation & Aerospace",
    description:
      "Redefining flight with AI-driven maintenance and next-gen passenger experiences.",
    image: "/10012.jpg",
    span: "md:col-span-3",
  },
  {
    title: "Automotive & Mobility",
    description:
      "Powering the software-defined vehicle, from cockpit domain controllers to autonomous driving algorithms.",
    image: "/10012.jpg",
    span: "md:col-span-3",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Modernizing legacy cores and building AI-first fintech ecosystems for Asia’s largest banks.",
    image: "/10013.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Consumer Packaged Goods",
    description:
      "Digitizing the shelf and predicting consumer demand with hyper-accurate data analytics.",
    image: "/10014.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Saving lives through IoMT (Internet of Medical Things) and predictive patient care.",
    image: "/10015.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Energy & Utilities",
    description:
      "Accelerating the transition to net-zero with smart grids and renewable energy management.",
    image: "/10001.png",
    span: "md:col-span-4",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Creating omnichannel experiences that merge the physical and digital shopping worlds.",
    image: "/10012.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Insurance (InsurTech)",
    description:
      "Automating claims and personalized risk assessment with cognitive intelligence.",
    image: "/10013.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Global Logistics & Supply Chain",
    description:
      "Building resilient, self-optimizing supply chains that react to market shifts in real-time.",
    image: "/10014.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Advanced Manufacturing",
    description:
      "Turning factories into smart ecosystems with Digital Twins and Industrial IoT.",
    image: "/10015.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Media & Entertainment",
    description:
      "Transforming content delivery and audience engagement with generative AI.",
    image: "/10012.jpg",
    span: "md:col-span-6",
  },
];

const PROVEN_RESULTS = [
  {
    category: "Aviation & Aerospace",
    stat: 40,
    suffix: "%",
    result: "reduction in maintenance costs through predictive AI",
  },
  {
    category: "Banking & Finance",
    stat: 2,
    suffix: "x",
    result: "faster loan processing with intelligent automation",
  },
  {
    category: "Healthcare",
    stat: 99.9,
    suffix: "%",
    result: "accuracy in diagnostic imaging with deep learning",
  },
  {
    category: "Manufacturing",
    stat: 35,
    suffix: "%",
    result: "increase in production efficiency with IoT integration",
  },
  {
    category: "Retail & E-Commerce",
    stat: 3,
    suffix: "x",
    result: "customer engagement through personalized AI",
  },
];

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

      const value = ease * end;
      // Handle decimals if the end value has them
      setCount(end % 1 === 0 ? Math.floor(value) : value.toFixed(1));

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

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <main className="relative w-full h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/10001 (1).png"
            alt="Industries Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
        </div>

        <div className="relative z-20 flex flex-col justify-center h-[60vh] px-4 md:px-8 lg:px-16 pt-24 text-black">
          <span className="text-sm font-semibold uppercase tracking-wider mb-4 block text-black/80">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            Transforming
            <br />
            Key Industries
          </h1>
          <p className="text-black/90 text-lg mb-10 max-w-lg leading-relaxed">
            From rewriting the code of agriculture to engineering the skylines
            of smart cities, we operate at the intersection of innovation and
            impact.
          </p>
        </div>
      </main>

      {/* Stats Section */}
      <section className="bg-black py-16 text-white border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#FF8F3D]">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Spectrum Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-black text-black mb-4">
              The Industry Spectrum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Transforming critical sectors with cutting-edge technology and
              unparalleled expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {INDUSTRY_SPECTRUM.map((item, index) => (
              <div
                key={index}
                className={`relative group h-[320px] rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-x-0 bottom-0 p-8 group-hover:pb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Solutions Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Centered Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-black text-[#0B1B32] mb-4 leading-[1.1] tracking-tight">
              Proven Solutions,
              <br />
              <span className="text-[#FF8F3D] italic">Real Results</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-medium">
              Delivering measurable impact and transformative value across the
              world&apos;s most critical industries.
            </p>
          </div>

          {/* Content: Image + Cards */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left: Image */}
            <div className="w-full lg:w-[38%] relative">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl">
                <Image
                  src="/10012.jpg"
                  alt="Proven Solutions"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative plant element simulation */}
              <div className="absolute -top-4 -left-4 w-8 h-24 bg-linear-to-b from-green-400 to-green-600 rounded-full blur-sm opacity-60 hidden lg:block" />
            </div>

            {/* Right: Results Grid */}
            <div className="w-full lg:w-[62%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {PROVEN_RESULTS.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F8F9FC] rounded-[24px] p-6 hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all duration-400 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FF8F3D] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#FF8F3D]/25">
                        {index + 1}
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-[#FF8F3D] tabular-nums">
                        <Counter end={item.stat} suffix={item.suffix} />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#0B1B32] mb-2 group-hover:text-[#FF8F3D] transition-colors duration-300">
                      {item.category}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Centered CTA Button */}
          <div className="mt-16 flex justify-center">
            <button className="group flex items-center gap-3 bg-[#FF8F3D] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-[#E67A2E] hover:shadow-xl hover:shadow-[#FF8F3D]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Get Industry-Specific Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Industry-Specific Excellence Section */}
      <section className="bg-[#F3F5F9] py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-black text-[#0B1B32] leading-[1.1]">
              Industry-Specific Excellence
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed lg:max-w-xl font-medium">
              We don&apos;t believe in one-size-fits-all solutions. Our approach
              is tailored to the unique challenges and opportunities of each
              industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXCELLENCE_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E8F0FE] flex items-center justify-center mb-6 group-hover:bg-[#FF8F3D] group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-[#3B82F6] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1B32] mb-3 group-hover:text-[#FF8F3D] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
