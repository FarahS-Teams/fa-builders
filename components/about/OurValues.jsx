"use client";

import { HardHat, Building2, ShieldCheck } from "lucide-react";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";

const OurValues = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Hero Section must be used within a ThemeContextProvider");
  }
  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} w-full relative overflow-hidden px-4 sm:px-6 lg:px-12 py-16 md:py-20`}
    >
      {/* Section Header */}
      <div className="flex flex-col md:w-1/2 text-center md:text-left mb-12 mx-auto md:mx-0">
        <p className="text-secondary mb-2 tracking-wider text-sm sm:text-base">
          Values
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">Our Values</h2>
        <div className="w-24 h-0.5 bg-secondary mt-3 mx-auto md:mx-0 rounded-full"></div>
      </div>

      {/* Cards Wrapper */}
      <div
        className="
                flex flex-col md:flex-row 
                justify-between items-stretch 
                gap-8 md:gap-10
            "
      >
        {/* Mission Card */}
        <div
          className="
                    flex-1 bg-white/10 border border-white/20 
                    p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-md 
                    hover:scale-105 transition-transform duration-300
                "
        >
          <HardHat size={50} className="text-[#ff9326] mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>

          <p className="text-base sm:text-lg leading-relaxed">
            To deliver high-quality, reliable, and modern construction solutions
            that enhance communities and exceed expectations.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="
                    flex-1 bg-white/10 border border-white/20 
                    p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-md 
                    hover:scale-105 transition-transform duration-300
                "
        >
          <Building2 size={50} className="text-[#ff9326] mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>

          <p className="text-base sm:text-lg leading-relaxed">
            To become London’s most trusted construction company, known for
            innovation, sustainability, and craftsmanship.
          </p>
        </div>

        {/* Values Card */}
        <div
          className="
                    flex-1 bg-white/10 border border-white/20 
                    p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-md 
                    hover:scale-105 transition-transform duration-300
                "
        >
          <ShieldCheck size={50} className="text-[#ff9326] mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Values</h3>

          <p className="text-base sm:text-lg leading-relaxed">
            Integrity, safety, transparency, and dedication—our core principles
            guide every project we build.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
