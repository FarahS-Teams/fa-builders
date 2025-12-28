"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";
import ProgressCircle from "./ProgressCircle";
import { FaBuilding, FaBriefcase, FaSmileBeam, FaUsers } from "react-icons/fa";

const statsData = [
  {
    value: 150,
    suffix: "+",
    label: "Completed Projects",
    icon: FaBuilding,
    delay: 0,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: FaBriefcase,
    delay: 0.15,
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    icon: FaSmileBeam,
    delay: 0.3,
  },
  {
    value: 20,
    suffix: "+",
    label: "Skilled Team Members",
    icon: FaUsers,
    delay: 0.45,
  },
];

export default function Stats() {
  const context = useContext(themeContext);
  if (!context)
    throw new Error("Stats must be used within ThemeContextProvider");
  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} 
      custom-container`}
    >
      <div className="content">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Badge text="Our Stats" />
          <h2
            className={`${currentTheme.headings}`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            Our <span className="text-secondary">Excellence</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {statsData.map(({ value, suffix, label, delay, icon: Icon }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay }}
              className={`${currentTheme.card} 
                max-w-sm mx-auto w-full
                flex flex-col items-center
                gap-4 sm:gap-6
                py-2 sm:py-6 px-4 sm:px-6
                rounded-xl
                hover:-translate-y-3 hover:shadow-xl
                transition-all duration-300 ease-out`}
            >
              <Icon size={36} className="text-secondary" />
              <ProgressCircle value={value} suffix={suffix} />

              <h3
                className="text-lg sm:text-xl md:text-2xl font-semibold text-center opacity-90"
                style={{ fontFamily: "var(--font-Montserrat)" }}
              >
                {label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
