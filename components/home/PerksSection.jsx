"use client";

import { useContext } from "react";
import { FaHardHat, FaRulerCombined, FaStar } from "react-icons/fa";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";

const perksData = [
  {
    icon: FaHardHat,
    title: "Expert Team",
    desc: "Skilled professionals delivering reliable construction solutions.",
  },
  {
    icon: FaRulerCombined,
    title: "Precision",
    desc: "Careful planning and attention to every construction detail.",
  },
  {
    icon: FaStar,
    title: "Quality",
    desc: "High standards in materials, workmanship, and finishes.",
  },
];

const PerksSection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("PerksSection must be used within ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
      w-full px-4 sm:px-6 lg:px-12 py-16`}
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <Badge text="Why Choose Us" />
        <h2 className={`${currentTheme.headings}`}>
          Why <span className="text-[#ff9326]">Choose</span> Us
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
        {perksData.map(({ icon: Icon, title, desc }, index) => (
          <div
            key={index}
            className={`
              ${currentTheme.card}
              w-full max-w-xs
              h-full min-h-[240px]
              p-6
              flex flex-col items-center justify-center
              text-center
              gap-4
              rounded-xl
              transition-all duration-300
              hover:-translate-y-2
            `}
          >
            {/* Icon */}
            <Icon className="text-4xl text-[#ff9326]" aria-hidden="true" />

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerksSection;
