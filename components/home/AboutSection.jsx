"use client";

import React from "react";
import Cta from "../Cta";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { FaHardHat, FaRulerCombined, FaUsers, FaStar } from "react-icons/fa";
import Badge from "../Badge";

const AboutSection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("AboutSection must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  const features = [
    {
      icon: <FaHardHat className="text-3xl" />,
      title: "Expert Team",
      desc: "Skilled professionals",
    },
    {
      icon: <FaRulerCombined className="text-3xl" />,
      title: "Precision",
      desc: "Attention to detail",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Client Focused",
      desc: "Your vision, our mission",
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Quality",
      desc: "Highest standards",
    },
  ];

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div className="content px-4 sm:px-6 lg:px-8 ">
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
                FA Builders Ltd is a trusted London construction company,
                delivering exceptional craftsmanship and client-focused results.
              </p>

              <p
                className="text-lg leading-relaxed text-center lg:text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Every project reflects our commitment to quality, transparency,
                and timely delivery—creating spaces that inspire and endure.
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
          <div className="grid grid-cols-2 gap-4 overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl flex flex-col justify-center items-center ${currentTheme.card} border border-secondary/10 hover:border-secondary/30 transition-all duration-300 group `}
              >
                <div className="text-secondary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-xl mb-1 text-center">
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
