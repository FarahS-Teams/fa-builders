"use client";

import { useContext } from "react";
import { FaHardHat, FaRulerCombined, FaStar } from "react-icons/fa";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";

const perksData = [
  {
    icon: FaHardHat,
    title: "Expert Team",
    desc: "Skilled professionals delivering reliable construction solutions.",
  },
  {
    icon: FaRulerCombined,
    title: "Precision",
    desc: "Careful planning and attention to every construction detail.",
  },
  {
    icon: FaStar,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl">
          {perksData.map((elem, index) => {
            const Icon = elem.icon;
            return (
              <div
                key={index}
                className={`p-4 sm:p-5 lg:p-6 rounded-xl flex flex-col items-center text-center gap-4 sm:gap-5
                ${currentTheme.card} transition-all duration-300 group hover:-translate-y-2`}
              >
                <div className="text-secondary text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <h4
                  className="font-bold text-lg sm:text-xl md:text-2xl"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {elem.title}
                </h4>
                <p
                  className="text-sm sm:text-base opacity-80"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {elem.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
