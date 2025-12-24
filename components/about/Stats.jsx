"use client";

import { useEffect, useState, useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";

const statsData = [
  { value: 150, suffix: "+", label: "Completed Projects", delay: 0 },
  { value: 10, suffix: "+", label: "Years Experience", delay: 0.15 },
  { value: 100, suffix: "%", label: "Client Satisfaction", delay: 0.3 },
  { value: 20, suffix: "+", label: "Skilled Team Members", delay: 0.45 },
];

const StatCounter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

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
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="absolute rotate-[-90deg]" width="140" height="140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="#ff9326"
          strokeOpacity="0.15"
          strokeWidth="4"
          fill="transparent"
        />

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

      <h3
        className="text-3xl font-extrabold text-[#ff9326] z-10"
        style={{ fontFamily: "var(--font-Montserrat)" }}
      >
        <StatCounter from={0} to={value} duration={2} />
        {suffix}
      </h3>
    </div>
  );
};

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
  if (!context)
    throw new Error("Stats must be used within ThemeContextProvider");

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
      w-full px-4 sm:px-6 lg:px-12 py-16 md:py-20`}
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <Badge text="Our Stats" />
        <h2
          className={currentTheme.headings}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Our <span className="text-[#ff9326]">Excellence</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {statsData.map(({ value, suffix, label, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay }}
            className={`${currentTheme.card}
              max-w-sm mx-auto w-full
              flex flex-col items-center
              gap-6 py-8 px-6
              rounded-xl
              hover:-translate-y-3 hover:shadow-xl
              transition-all duration-300 ease-out`}
          >
            <ProgressCircle value={value} suffix={suffix} />

            <p
              className="text-sm sm:text-base text-center opacity-90"
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
