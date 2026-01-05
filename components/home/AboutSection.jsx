"use client";

import React from "react";
import Cta from "../Cta";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { FaFireAlt, FaCheckCircle, FaTools, FaAward } from "react-icons/fa";
import Badge from "../Badge";

const AboutSection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("AboutSection must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  const features = [
    {
      icon: <FaFireAlt className="text-3xl" />,
      title: "Gas Safe Practices",
      desc: "All gas work carried out to Gas Safe standards",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Building Regulations",
      desc: "Compliant with UK building control requirements",
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Best Workmanship",
      desc: "High-quality finishes using proven methods",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Trusted Service",
      desc: "Reliable, professional, and customer-focused",
    },
  ];

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div className="content ">
        <div className="text-center mb-12">
          <Badge text={"About us"} />

          <h2 className={`${currentTheme.headings}`}>
            Building <span className="text-secondary">Excellence</span> Since
            2024
          </h2>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            At FA Builders Ltd, we don't just construct buildings—we build
            trust, lasting relationships, and exceptional quality. With over 10
            years of experience delivering new builds, renovations, and
            extensions across London, we turn your visions into remarkable
            realities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-28">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <p
                className="text-lg leading-relaxed mb-6 text-center lg:text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-secondary font-bold">
                  FA Builders Ltd
                </span>{" "}
                is a trusted London construction company, delivering exceptional
                craftsmanship and client-focused results.
              </p>

              <p
                className="text-lg leading-relaxed text-center mb-6 lg:text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Every project reflects our commitment to quality, transparency,
                and timely delivery—creating spaces that inspire and endure.
              </p>
              <p
                className="text-lg leading-relaxed text-center lg:text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                We operate in line with UK building regulations and best
                industry practices, ensuring all work—including gas-related
                installations—is carried out to recognised safety and quality
                standards. Our structured approach, skilled workmanship, and
                attention to detail give clients confidence at every stage of
                the build.
              </p>
            </div>
            <Cta
              text="Our Full Story"
              path="/about"
              variant="secondary"
              className="w-full"
            />
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl flex flex-col justify-center items-center ${currentTheme.small_card} border border-secondary/10 hover:border-secondary/30 transition-all duration-300 group `}
              >
                <div className="text-secondary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-md md:text-xl lg:text-xl mb-1 text-center">
                  {feature.title}
                </h4>
                <p className="text-md opacity-80 text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
