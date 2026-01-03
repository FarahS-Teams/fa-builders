"use client";

import React, { useContext } from "react";
import { FaHardHat, FaUsers, FaChartLine } from "react-icons/fa";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";
import SimpleCards from "../SimpleCards";

const ExcellenceSection = () => {
  const stats = [
    {
      icon: <FaHardHat />,
      title: "50+ Projects Completed",
      description:
        "From new builds to renovations and extensions, we have successfully delivered over 50 projects across London, maintaining the highest standards of quality and craftsmanship.",
    },
    {
      icon: <FaChartLine />,
      title: "10+ Years Experience",
      description:
        "With more than a decade of experience in the construction industry, our expert team ensures every project is planned and executed to perfection, delivering reliable results every time.",
    },
    {
      icon: <FaUsers />,
      title: "100% Client Satisfaction",
      description:
        "Our clients are at the heart of everything we do. We are proud to have a track record of complete client satisfaction, consistently exceeding expectations on every project.",
    },
  ];

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Section must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div
        className="content flex flex-col items-center 
      "
      >
        <Badge text={"Cool Numbers"} className="" />

        {/* Main heading */}
        <h2
          className={`${currentTheme.headings} text-center`}
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          By The <span className="text-secondary">Numbers</span>
        </h2>

        {/* cards */}
        <SimpleCards
          content={stats.map((item, index) => (
            <div
              key={index}
              className={`${currentTheme.card} flex flex-col justify-center items-center gap-6 rounded-xl hover:-translate-y-3 transition-all duration-300 ease-in`}
            >
              <div className="text-5xl text-secondary">{item.icon}</div>
              <h2
                className="text-3xl font-semibold text-center lg:text-left"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {item.title}
              </h2>
              <p
                className="text-md text-center lg:text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default ExcellenceSection;
