"use client";

import React from "react";
import Image from "next/image";
import { useState, useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Cta from "./Cta";

const Hero = ({
  title = "",
  highlight = "",
  description,
  image = "/projects-hero.jpg",
  ctaText,
  ctaPath,
  overlay = "bg-black/50",
  height = "h-[60vh] sm:h-[70vh] md:h-[80vh]",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const context = useContext(themeContext);
  if (!context) throw new Error("Use inside ThemeProvider");
  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} relative ${height}`}
      aria-label={title}
    >
      {/* Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300/30 dark:bg-gray-700/30" />
      )}

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        onLoad={() => setImageLoaded(true)}
        className={`object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center pt-20  md:12 px-4 sm:px-6 md:px-10">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1
            className={`${currentTheme.headings} text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            {title.replace(highlight, "")}
            <span className="text-secondary"> {highlight}</span>
          </h1>

          {/* Optional Paragraph */}
          {description && (
            <p
              className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {description}
            </p>
          )}

          {/* Optional CTA */}
          {ctaText && ctaPath && (
            <div className="hidden sm:flex justify-center">
              <Cta text={ctaText} path={ctaPath} />
            </div>
          )}
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent" />
      <div className="absolute top-1 left-0 w-full h-px bg-gradient-to-r from-secondary to-transparent" />
    </section>
  );
};

export default Hero;
