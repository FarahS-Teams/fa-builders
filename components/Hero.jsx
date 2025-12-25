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
  height = "h-[50vh] md:h-[60vh]",
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
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1
            className={`${currentTheme.headings} text-[#ffffff]`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            {title.replace(highlight, "")}
            <span className="text-[#ff9326]"> {highlight}</span>
          </h1>

          {/* Optional Paragraph */}
          {description && (
            <p
              className="mt-3 sm:mt-4 md:mt-5
                         text-sm sm:text-base md:text-lg lg:text-xl
                         text-gray-200 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {description}
            </p>
          )}

          {/* Optional CTA */}
          {ctaText && ctaPath && (
            <div className="hidden sm:flex mt-5 sm:mt-6 md:mt-8 justify-center">
              <Cta
                text={ctaText}
                path={ctaPath}
                className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base"
              />
            </div>
          )}
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff9326] to-transparent" />
      <div className="absolute top-[4px] left-0 w-full h-[1px] bg-gradient-to-r from-[#ffffff20] to-transparent" />
    </section>
  );
};

export default Hero;
