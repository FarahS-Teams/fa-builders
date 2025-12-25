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
      <div className="content flex flex-col items-center px-4 sm:px-6 lg:px-0 py-12 md:py-8 lg:py-9">
        <Badge text={"Why Choose Us"} />

        {/* main heading */}

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Why <span className="text-orange-500">Choose</span> Us{" "}
        </h2>

        {/* cards section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {perksData.map((elem, index) => {
            const Icon = elem.icon;
            return (
              <div
                key={index}
                className={`p-5 rounded-xl flex flex-col justify-center items-center gap-5 ${currentTheme.card}  transition-all duration-300 group hover:-translate-y-2`}
              >
                <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <h4
                  className="font-bold text-4xl"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {elem.title}
                </h4>
                <p
                  className="text-md"
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
