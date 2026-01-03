"use client";
import React from "react";
import { useContext } from "react";
import { FaHardHat, FaRulerCombined, FaStar } from "react-icons/fa";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";
import SimpleCards from "../SimpleCards";
const perksData = [
  {
    icon: <FaHardHat />,
    title: "Expert Team",
    desc: "Skilled professionals delivering reliable construction solutions.",
  },
  {
    icon: <FaRulerCombined />,
    title: "Precision",
    desc: "Careful planning and attention to every construction detail.",
  },
  {
    icon: <FaStar />,
    title: "Quality",
    desc: "High standards in materials, workmanship, and finishes.",
  },
];

const PerksSection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("PerksSection must be used within ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div className="content flex flex-col items-center ">
        <Badge text={"Why Choose Us"} />
        {/* main heading */}
        <h2
          className={`${currentTheme.headings} text-center`}
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Why <span className="text-secondary">Choose</span> Us{" "}
        </h2>

        {/* cards section */}
        <SimpleCards
          content={perksData.map((item, index) => (
            <div
              key={index}
              className={`${currentTheme.card} flex flex-col justify-center items-center gap-6 rounded-xl hover:-translate-y-3 transition-all duration-300 ease-in`}
            >
              <div className="text-3xl text-secondary">{item.icon}</div>
              <h4
                className="font-bold text-lg sm:text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm sm:text-base opacity-80"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default PerksSection;
