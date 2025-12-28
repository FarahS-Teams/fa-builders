"use client";

import React from "react";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import { FaTachometerAlt } from "react-icons/fa";
import Cta from "./Cta";

const ServicesCard = ({ icon, slug, title, description, features }) => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("ServicesCard must be used within a ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <article
      className={`group relative ${currentTheme.card} p-6 rounded-xl flex flex-col items-start justify-start gap-6 border border-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-lg`}
      aria-labelledby={`service-${slug}`}
    >
      {/* Icon */}
      <div className="text-secondary text-3xl">{icon}</div>

      {/* Content */}
      <div className="relative w-full">
        <h3
          id={`service-${slug}`}
          className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300"
        >
          {title}
        </h3>

        <p className="mb-4 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        {/* Features List */}
        {features?.length > 0 && (
          <ul className="mb-6 space-y-2 list-disc list-inside">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <FaTachometerAlt className="text-secondary w-4 h-4 flex-shrink-0" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Link */}
        <Cta
          text="Explore Service"
          path={`/services/${slug}`}
          variant="secondary"
          className="w-full text-center sm:text-left"
        />
      </div>
    </article>
  );
};

export default ServicesCard;
