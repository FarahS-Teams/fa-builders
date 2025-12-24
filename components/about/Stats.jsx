"use client";

import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Globe, Rocket, Briefcase, Smartphone } from "lucide-react";

const statsData = [
  {
    value: 150,
    suffix: "+",
    label: "Completed Projects",
    delay: 0,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    delay: 0.2,
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    delay: 0.4,
  },
  {
    value: 20,
    suffix: "+",
    label: "Skilled Team Members",
    delay: 0.6,
  },
];

const StatCounter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return; // Only start when in view

    const start = performance.now();
    const animate = (time) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const ProgressCircle = ({ value, suffix }) => {
  const radius = 62;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg
        className="absolute rotate-[-90deg] mx-auto block"
        width="140"
        height="140"
      >
        {/* Background circle */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#ff9326"
          strokeOpacity="0.2"
          strokeWidth="4"
          fill="transparent"
        />

        {/* Animated progress circle */}
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#ff9326"
          strokeWidth="4"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Number inside */}
      <h2
        className="text-3xl font-extrabold text-[#ff9326] z-10"
        style={{ fontFamily: "var(--font-Montserrat)" }}
      >
        <StatCounter from={0} to={value} duration={2} />
        {suffix}
      </h2>
    </div>
  );
};

export default function Stats() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("Stats must be used within ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}  w-full relative overflow-hidden
                 px-4 sm:px-6 lg:px-12 py-16 md:py-20`}
    >
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-4">
        <Badge text={"Our Stats"} className="mb-12" />
        <h2
          className={`${currentTheme.headings}`}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Our <span className="text-[#ff9326]">Excellence </span>
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
        {statsData.map(({ value, suffix, label, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay }}
            className={`${currentTheme.card} relative
  px-2 py-2
  sm:px-6 sm:py-9
  md:px-8 md:py-10
  flex flex-col
  items-center
  justify-between
  gap-4 sm:gap-5 md:gap-6
  rounded-xl
  h-full
  w-full
  hover:-translate-y-3
  transition-all duration-300 ease-in`}
          >
            {/* Animated Circle */}
            <div className="flex items-center justify-center w-full">
              <ProgressCircle value={value} suffix={suffix} />
            </div>

            {/* Label */}
            <p
              className="text-md sm:text-base text-center"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
