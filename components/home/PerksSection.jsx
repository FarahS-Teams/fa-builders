"use client";
import React from "react";
import Badge from "../Badge";
import { FaHardHat, FaRulerCombined, FaUsers, FaStar } from "react-icons/fa";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
const PerksSection = () => {
  const perks = [
    {
      icon: <FaHardHat className="text-3xl" />,
      title: "Expert Team",
      desc: "Skilled professionals",
    },
    {
      icon: <FaRulerCombined className="text-3xl" />,
      title: "Precision",
      desc: "Attention to detail",
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Quality",
      desc: "Highest standards",
    },
  ];

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("HeroSection must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;
  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} flex flex-col items-center max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-8 lg:py-9`}
    >
      <Badge text={"Why Choose Us"} />

      {/* main heading */}

      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Why <span className="text-orange-500">Choose</span> Us{" "}
      </h2>

      {/* cards section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {perks.map((elem, index) => (
          <div
            key={index}
            className={`p-4 md:p-6 rounded-xl flex flex-col items-center text-center gap-4 ${currentTheme.card} transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2`}
          >
            {/* Icon */}
            <div className="text-3xl md:text-4xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
              {elem.icon}
            </div>

            {/* Title */}
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {elem.title}
            </h4>

            {/* Description */}
            <p className="text-sm md:text-base">{elem.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerksSection;
