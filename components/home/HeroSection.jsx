"use client";

import React from "react";
import Cta from "../Cta";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Image from "next/image";
import hero from "../../public/hero.jpg";

import { FaToolbox, FaAward } from "react-icons/fa";
import Badge from "../Badge";

const HeroSection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("HeroSection must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div className="content px-4 sm:px-6 lg:px-8 py-12 md:py-8 lg:py-9">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
          {/* Left Side text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <Badge text={"TRUSTED CONTRACTORS"} />

            {/* Main Heading */}
            <h2 className={`${currentTheme.headings}`}>
              Building Your <span className="text-secondary">Dreams</span> With{" "}
              Precision & Excellence.
            </h2>

            {/* description */}
            <p className="text-lg md:text-lg mb-8 leading-relaxed max-w-2xl">
              We transform your vision into reality with{" "}
              <span className="font-semibold text-secondary">
                unmatched quality
              </span>{" "}
              and professional craftsmanship. From concept to completion, we
              deliver excellence in every project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 mb-12">
              <Cta
                text="Get Free Consultation"
                path="/contact"
                variant="primary"
              />
              <Cta
                text="View Our Projects"
                path="/projects"
                variant="secondary"
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 relative h-full">
            {/* Main Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-secondary/20 to-secondary/20 rounded-3xl blur-xl opacity-50"></div>
              <div
                className={`relative rounded-2xl overflow-hidden ${currentTheme.card} border-2 border-secondary shadow-2xl`}
              >
                <Image
                  src={hero}
                  alt="FA Builders Construction Project"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Card 1 */}
            <div
              className={`absolute -bottom-6 -left-2 md:-left-6 ${currentTheme.card} p-3 md:p-4 rounded-xl shadow-xl border border-secondary max-w-xs`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <FaToolbox className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">Expert Team</h4>
                  <p className="text-sm opacity-80">Skilled professionals</p>
                </div>
              </div>
            </div>

            {/*Card 2 */}
            <div
              className={`absolute -top-8 -right-2 md:-right-6 ${currentTheme.card} p-3 md:p-4 rounded-xl shadow-xl border border-secondary/20 max-w-xs`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">Quality Guarantee</h4>
                  <p className="text-sm opacity-80">5-year warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
