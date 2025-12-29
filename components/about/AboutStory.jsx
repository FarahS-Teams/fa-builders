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
      custom-container relative
      `}
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
              className="text-base sm:text-md leading-relaxed mb-2 md:mb-4 opacity-90"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Founded in 2024, FA Builders Ltd is a trusted London construction
              company with over 50 successful projects. We specialize in new
              builds, renovations, loft conversions, extensions, basements, and
              underfloor heating.
            </p>

            <p
              className="text-base sm:text-md leading-relaxed mb-2 md:mb-4 opacity-90"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our experienced team deliver high-quality, safe, and sustainable
              solutions. All work is carried out by certified professionals,
              including Gas Safe registered and NICEIC-approved contractors.
            </p>

            <p
              className="text-base sm:text-md leading-relaxed opacity-90"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              With a focus on clear communication, timely delivery, and client
              satisfaction, FA Builders Ltd has built lasting relationships
              across London. Every project reflects our commitment to
              excellence, craftsmanship, and trust.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
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
                alt="FA Builders construction project in London"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw max-w-lg lg:max-w-xl"
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
