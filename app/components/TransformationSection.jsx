import React from "react";
import { ArrowRight } from "lucide-react";

export default function TransformationSection() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative bg-[#F4FAFA] rounded-[40px] p-12 md:p-24 overflow-hidden">
          {/* Background Gradient Blur */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#2DD4BF]/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black leading-tight mb-8">
              Let’s Bridge the Gap
              <br />
              Between Potential and
              <br />
              Reality.
            </h2>
            <p className="text-black/60 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
              We have the technology, the talent, and the vision. All we are
              missing is your challenge. Let’s build the extraordinary together.
            </p>

            <a
              href="#"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
