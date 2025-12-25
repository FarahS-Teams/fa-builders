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
      <div className="content px-4 sm:px-6 lg:px-8 py-12 md:py-8 lg:py-9">
        <div className="text-center mb-12">
          <Badge text={"About us"} />

          <h2 className={`${currentTheme.headings}`}>
            Building <span className="text-[#ff9326]">Excellence</span> Since
            2008
          </h2>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            At FA Builders, we don't just construct buildings—we build
            relationships, trust, and lasting quality. With over 15 years of
            experience, we transform visions into remarkable realities.
          </p>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-28">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Founded with a commitment to exceptional craftsmanship and
                client satisfaction, FA Builders has grown to become a trusted
                name in construction. Our journey is built on a foundation of
                integrity, innovation, and attention to detail.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Every project we undertake reflects our core values: quality
                workmanship, transparent communication, and timely delivery. We
                believe that great construction is about more than just
                materials—it's about creating spaces that inspire and endure.
              </p>
            </div>

            <Cta text="Our Full Story" path="/about" variant="secondary" />
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl flex flex-col justify-center items-center ${currentTheme.card} border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group `}
              >
                <div className="text-[#ff9326] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-xl mb-1">{feature.title}</h4>
                <p className="text-md opacity-80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
