"use client";

import React from "react";
import Image from "next/image";
import Badge from "@/components/Badge";
import { useState, useContext } from "react";
import themeContext from "@/app/context/themeContext";
import compliance from "@/app/data/compliance";

const ServiceInfoSection = ({ service }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("ServiceSection must be used within ThemeContextProvider");
  }
  const { currentTheme } = context;

  const card = compliance.find((c) => c.service === service.title);
  if (!card) return null; // Don't render if no matching card
  const Icon = card.icon;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
      custom-container relative
      `}
    >
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-16">
        {/* Text Section */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <div>
            <Badge text={service.title} />
          </div>

          <h2
            className={currentTheme.headings}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            {service.title}
          </h2>

          <p
            className="text-base sm:text-md leading-relaxed mb-2 md:mb-4 opacity-90"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {service.detailedDescription}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div
            className={`relative w-full aspect-4/3 lg:aspect-12/9 rounded-2xl overflow-hidden border border-secondary/20 shadow-xl transition-transform duration-300 hover:scale-[1.02]`}
          >
            {/* Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-300/30 dark:bg-gray-700/30" />
            )}
            <Image
              src={service.bannerImage}
              alt={`${service.title} by FA Builders Ltd`}
              fill
              onLoad={() => setImageLoaded(true)}
              className={`object-cover w-full h-auto ${imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              priority
            />
          </div>

          {/* Floating Card */}
          <div
            className={`absolute -bottom-6 -left-2 md:-left-4 ${currentTheme.small_card} p-2 md:p-4 rounded-xl shadow-xl border border-secondary max-w-xs`}
          >
            <div className="flex items-center gap-1 md:gap-4 lg:gap-4">
              <div className="p-1 md:p-2 lg:p-2 bg-secondary rounded-lg">
                <Icon className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold">{card.title}</h4>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfoSection;
