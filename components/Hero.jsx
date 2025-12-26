"use client";

import Image from "next/image";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Cta from "./Cta";

const Hero = ({
  title = "Our Projects",
  highlight = "Projects",
  description,
  image = "/projects-hero.jpg",
  ctaText,
  ctaPath,
  overlay = "bg-black/50",
  height = "h-[60vh] sm:h-[70vh] md:h-[80vh]",
}) => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Use inside ThemeProvider");

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} relative ${height}`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center pt-20  md:12 px-4 sm:px-6 md:px-10">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1
            className={`${currentTheme.headings} text-[#ffffff]`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            {title.replace(highlight, "")}
            <span className="text-secondary"> {highlight}</span>
          </h1>

          {/* Optional Paragraph */}
          {description && (
            <p
              className="hidden sm:flex 
                         text-sm sm:text-base md:text-lg lg:text-xl
                         text-gray-200 leading-relaxed "
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {description}
            </p>
          )}

          {/* Optional CTA */}
          {ctaText && ctaPath && (
            <div className="hidden sm:flex justify-center pt-4">
              <Cta text={ctaText} path={ctaPath} />
            </div>
          )}
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-0-to-r from-secondary to-transparent" />
      <div className="absolute top-1 left-0 w-full h-px bg-linear-0-to-r from-secondary to-transparent" />
    </section>
  );
};

export default Hero;
