"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const products = [
  // Intelligent Technology
  {
    id: 1,
    title: "AI and Machine Learning Solutions",
    description:
      "Cutting-edge AI integrations that transform data into actionable insights and automate complex workflows.",
    icon: "/10025.png",
    bgColor: "bg-[#F5D6D6]",
    category: "Intelligent Technology",
  },
  {
    id: 2,
    title: "Mobile app development",
    description:
      "Native and cross-platform mobile applications that put your business in the palms of your customers hands.",
    icon: "/10024.png",
    bgColor: "bg-[#D9D9FB]",
    category: "Intelligent Technology",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description:
      "Data-driven forecasting models to anticipate market trends and customer behavior.",
    icon: "/10025.png",
    bgColor: "bg-[#D6F5F0]",
    category: "Intelligent Technology",
  },

  // Smart Infrastructure
  {
    id: 4,
    title: "ERP customization and implementation",
    description:
      "Comprehensive ERP solutions tailored to synchronize your business processes and drive operational efficiency.",
    icon: "/10023.png",
    bgColor: "bg-[#D6F5F0]",
    category: "Smart Infrastructure",
  },
  {
    id: 5,
    title: "Web and eCommerce development",
    description:
      "High-performance eCommerce platforms designed to scale your business and deliver exceptional user experiences.",
    icon: "/10024.png",
    bgColor: "bg-[#FDE7C4]",
    category: "Smart Infrastructure",
  },
  {
    id: 6,
    title: "Cloud Migration Services",
    description:
      "Seamless transition of your legacy systems to secure and scalable cloud environments.",
    icon: "/10023.png",
    bgColor: "bg-[#D9D9FB]",
    category: "Smart Infrastructure",
  },

  // Precision Agriculture
  {
    id: 7,
    title: "Smart Irrigation Systems",
    description:
      "IoT-enabled water management solutions for optimal crop hydration and resource conservation.",
    icon: "/10023.png",
    bgColor: "bg-[#F5D6D6]",
    category: "Precision Agriculture",
  },
  {
    id: 8,
    title: "Drone Field Mapping",
    description:
      "High-resolution aerial imagery for detailed crop health analysis and land usage planning.",
    icon: "/10024.png",
    bgColor: "bg-[#FDE7C4]",
    category: "Precision Agriculture",
  },
  {
    id: 9,
    title: "Automated Harvesting Bots",
    description:
      "Robotic solutions to streamline harvesting processes and increase agricultural yield.",
    icon: "/10025.png",
    bgColor: "bg-[#D6F5F0]",
    category: "Precision Agriculture",
  },
];

const categories = [
  "Intelligent Technology",
  "Smart Infrastructure",
  "Precision Agriculture",
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter products based on active category
  const filteredProducts = React.useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  // For infinite loop logic
  const [currentIndex, setCurrentIndex] = useState(filteredProducts.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemWidth, setItemWidth] = useState(340);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = React.useRef(null);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const newFiltered = products.filter((p) => p.category === cat);
    setIsTransitioning(false);
    setCurrentIndex(newFiltered.length);
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const carouselWidth = containerRef.current.offsetWidth;
        if (window.innerWidth >= 1024) {
          const gap = 32;
          const newWidth = (carouselWidth - gap) / 2;
          setItemWidth(newWidth + gap);
        } else {
          setItemWidth(340);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayProducts = [
    ...filteredProducts,
    ...filteredProducts,
    ...filteredProducts,
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex >= filteredProducts.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(filteredProducts.length);
      }, 700);
      return () => clearTimeout(timer);
    }
    if (currentIndex <= filteredProducts.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(filteredProducts.length * 2 - 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, filteredProducts.length]);

  // Autoplay Logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]); // Reset interval if paused or transitioning

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32 flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/products-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Centered Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-white mb-6">
              Asia&apos;s Leading AI Powerhouse.
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl font-medium mx-auto px-4">
              We are not a conglomerate. We are a convergence. As Asia&apos;s
              rising AI Powerhouse, we fuse deep tech with essential industries
              providing the code behind the crop and the intelligence powering
              the vital needs of humanity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column Categories */}
          <div className="lg:col-span-4 flex flex-col space-y-8 py-10">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-left text-3xl cursor-pointer md:text-4xl font-bold transition-all duration-500 transform hover:translate-x-2 ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-white/20 hover:text-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Column Carousel Area */}
          <div ref={containerRef} className="lg:col-span-8">
            {/* Top-Right Arrows relocated here per request */}
            <div className="flex justify-end mb-8 space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer group backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer group backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={`flex ${
                  isTransitioning
                    ? "transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                    : ""
                } gap-8`}
                style={{
                  transform: `translateX(-${currentIndex * itemWidth}px)`,
                }}
              >
                {displayProducts.map((product, idx) => (
                  <div
                    key={`${product.id}-${idx}`}
                    className="flex-shrink-0 h-[400px] bg-white rounded-3xl flex flex-col relative cursor-pointer overflow-hidden group shadow-2xl transition-all duration-500"
                    style={{ width: itemWidth - 32 }}
                  >
                    {/* Product Image Area - Balanced Vertical Flow */}
                    <div className="relative flex-1 flex items-center justify-center pb-28 z-10 transition-all duration-700 group-hover:-translate-y-12">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={product.icon}
                          alt={product.title}
                          className="w-48 h-48 object-contain transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) group-hover:scale-[0.75] will-change-transform"
                        />
                      </div>
                    </div>

                    {/* Content Stack - Matches Image Layout */}
                    <div className="absolute inset-x-0 bottom-0 p-10 z-10 flex flex-col items-start space-y-4">
                      {/* Title: Stays visible, shifts up slightly on hover */}
                      <h4 className="text-[24px] font-bold text-gray-900 leading-[1.2] transition-transform duration-500 group-hover:-translate-y-20">
                        {product.title}
                      </h4>

                      {/* Revealed Content Container */}
                      <div className="absolute bottom-10 left-10 right-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col items-start space-y-2">
                        <p className="text-gray-800 text-base leading-relaxed font-medium line-clamp-2">
                          {product.description}
                        </p>
                        <button className="flex cursor-pointer items-center space-x-2 text-md font-semibold text-gray-900 group/btn">
                          <span>Know More</span>
                          <svg
                            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Products Button - Relocated to the bottom right */}
        <div className="mt-20 flex justify-center md:justify-end">
          <Link
            href="/products"
            className="group flex items-center space-x-4 px-10 py-4 bg-white/5 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all font-bold backdrop-blur-md"
          >
            <span className="text-sm uppercase tracking-widest">
              View All Products
            </span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
