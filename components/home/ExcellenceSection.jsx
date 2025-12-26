"use client";

import React from "react";
import { FaHardHat, FaUsers, FaChartLine } from "react-icons/fa";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import Badge from "../Badge";

const ExcellenceSection = () => {
  const stats = [
    {
      icon: <FaHardHat />,
      title: "150+ Projects done",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio excepturi minima, obcaecati in nulla tempore nobis consequuntur quasi explicabo veniam.",
    },
    {
      icon: <FaChartLine />,
      title: "10+ Years Experience",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio excepturi minima, obcaecati in nulla tempore nobis consequuntur quasi explicabo veniam.",
    },
    {
      icon: <FaUsers />,
      title: "100% Client Satisfaction",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio excepturi minima, obcaecati in nulla tempore nobis consequuntur quasi explicabo veniam.",
    },
  ];

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("HeroSection must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div
        className="content flex flex-col items-center 
      px-4 sm:px-6 lg:px-8"
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
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-10">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className={`${currentTheme.card} px-10 py-8 flex flex-col justify-center items-center gap-6 rounded-xl hover:-translate-y-3 transition-all duration-300 ease-in`}
              >
                <div className="text-5xl text-secondary">{item.icon}</div>
                <h2
                  className="text-3xl font-semibold text-center"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-md text-center"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
