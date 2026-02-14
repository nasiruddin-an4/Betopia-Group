import { Send } from "lucide-react";
import React from "react";

const ExperienceSection = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-6 tracking-tight">
            Experience Betopia Intelligence.
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just browse interact. Our AI assistant is trained to
            guide you through our ecosystem, from enterprise solutions to career
            paths. Ask away.
          </p>
        </div>

        {/* Main Black Card */}
        <div className="bg-black rounded-[2rem] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 shadow-2xl">
          {/* Left Side: Visual / Video Placeholder */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Aspect container for the visual */}
            <div className="relative w-full aspect-video max-w-lg bg-black rounded-lg overflow-hidden flex items-center justify-center">
              {/* Abstract Wave Background Effect - Simulated with gradients/shapes */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-orange-500/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-orange-500/20 rounded-full transform rotate-12"></div>
              </div>

              {/* Logo / Play Icon */}
              <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full border border-orange-100/30 flex items-center justify-center bg-white/5 backdrop-blur-sm group cursor-pointer hover:border-orange-100/50 transition-all">
                <span className="text-6xl md:text-7xl font-light text-white group-hover:scale-105 transition-transform duration-500">
                  b
                </span>
                <div className="absolute inset-0 rounded-full border border-orange-400/20 animate-spin-slow"></div>
              </div>

              <div className="absolute bottom-4 right-4 text-white/40 text-sm font-medium tracking-widest">
                Veo
              </div>
            </div>
          </div>

          {/* Right Side: Chat Interface */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end space-y-8">
            {/* Chat Message Box */}
            <div className="bg-linear-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 md:p-10 w-full max-w-md backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:border-orange-500/50">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                Welcome to Betopia AI. Ask me anything about our ecosystem,
                solutions, or opportunities.
              </p>
            </div>

            {/* Ask Button */}
            <div className="w-full max-w-md flex justify-end">
              <button className="flex items-center cursor-pointer space-x-3 bg-black border border-white/20 rounded-full px-8 py-4 text-white transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:border-orange-500/50">
                <span className="text-lg font-medium ">Ask Anything</span>
                <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
