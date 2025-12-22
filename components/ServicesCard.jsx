"use client";

import React from "react";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import Cta from "./Cta";

const ServicesCard = ({ icon, slug, title, description, features }) => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }

  const { theme, currentTheme } = context;
  return (
    <div
      className={`group relative ${currentTheme.card} p-6 rounded-xl flex flex-col items-start justify-center gap-6 border border-orange-500 transition-all duration-500 hover:-translate-y-2`}
    >
      {/* Icon */}
      <div className="text-orange-500">{icon}</div>

      {/* Content */}
      <div className="relative">
        <h3
          className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {title}
        </h3>

        <p
          className="mb-4 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {description}
        </p>

        {/* Features List */}
        <ul className="mb-6 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <FaTachometerAlt className="text-lg text-orange-500" />
              <span style={{ fontFamily: "var(--font-inter)" }}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <Cta
          text="Explore Service"
          path={`/services/${slug}`}
          variant="secondary"
          className="w-full"
        />
      </div>

      {/* Bottom Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 opacity-30"></div>
    </div>
  );
};

export default ServicesCard;
