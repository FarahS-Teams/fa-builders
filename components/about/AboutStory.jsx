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
    // py-12 md:py-16 lg:py-8
    <section
      className={`${currentTheme.background} ${currentTheme.text}
      custom-container relative w-full overflow-hidden
      px-4 sm:px-6 lg:px-8`}
    >
      <div className="content">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge text="Our Story" />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-16">
          {/* Text Section */}
          <div className="flex flex-col md:w-1/2 text-center md:text-left">
            <h2
              className={`${currentTheme.headings}`}
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              FA Builders <span className="text-secondary">Story</span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed mb-4 md:mb-5 opacity-90"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Since 2025, FA Builders Ltd. has established itself as a trusted
              construction company in London, completing over 100 projects with
              a strong focus on client satisfaction.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed opacity-90"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              We specialize in high-quality, modern, and sustainable building
              solutions, from home renovations and extensions to commercial
              projects. Every project showcases our expert craftsmanship,
              safety, and commitment to timely delivery, helping us build
              lasting relationships and stronger communities across London.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative md:w-1/2 flex justify-center mt-6 md:mt-0">
            {/* Glow */}
            {/* <div className="absolute -inset-6 bg-linear-to-r from-secondary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" /> */}

            {/* Image Card */}
            <div
              className={`relative
              w-full max-w-md
              aspect-square
              rounded-2xl overflow-hidden
              ${currentTheme.card}
              border border-secondary/20
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
        {/* <div className="flex justify-center mt-0 lg:mt-8">
          <Cta text="View Our Projects" path="/projects" variant="secondary" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutStory;
