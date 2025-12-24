"use client";
import Image from "next/image";
import { useContext } from "react";
import themeContext from "../../app/context/themeContext";
import Cta from "../Cta";
import Badge from "../Badge";

const AboutStory = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("AboutSection must be used within ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
      relative w-full overflow-hidden
      px-4 sm:px-6 lg:px-12
      py-16 md:py-20`}
    >
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <Badge text="Our Story" />
      </div>

      {/* Content Wrapper */}
      <div
        className="
        max-w-7xl mx-auto
        flex flex-col md:flex-row
        items-center md:items-start
        gap-10 md:gap-12 lg:gap-16
      "
      >
        {/* Text Section */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left">
          <h2
            className={`${currentTheme.headings} mb-4`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            FA Builders <span className="text-[#ff9326]">Story</span>
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed mb-5 opacity-90"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Founded in 2025, FA Builders Ltd. has grown from a small
            construction firm into one of London’s most trusted building
            companies. We specialize in creating modern, sustainable, and
            high-quality spaces.
          </p>

          <p
            className="text-base sm:text-lg leading-relaxed opacity-90"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every project reflects our commitment to craftsmanship, safety, and
            client satisfaction—building trust and shaping communities across
            London.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 flex justify-center">
          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-50" />

          {/* Image Card */}
          <div
            className={`relative
              w-full max-w-md
              aspect-square
              rounded-2xl overflow-hidden
              ${currentTheme.card}
              border border-orange-500/20
              shadow-xl
              transition-transform duration-300
              hover:scale-[1.02]`}
          >
            <Image
              src="/about-story.jpg"
              alt="FA Builders Construction Project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <Cta text="View Our Projects" path="/projects" variant="secondary" />
      </div>
    </section>
  );
};

export default AboutStory;
