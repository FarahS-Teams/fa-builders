"use client";
import React from "react";
import { useEffect, useState, useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import themeContext from "@/app/context/themeContext";

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
  const context = useContext(themeContext);
  if (!context) throw new Error("Must be used within ThemeContextProvider");
  const { currentTheme } = context;

  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text} relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center`}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#f7922c"
          strokeOpacity="0.15"
          strokeWidth="4"
          fill="transparent"
        />

        {/* Animated progress */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#f7922c"
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

      {/* Center number */}
      <h3
        className="text-2xl sm:text-3xl font-extrabold z-10"
        style={{ fontFamily: "var(--font-Montserrat)" }}
      >
        <StatCounter from={0} to={value} duration={2} />
        {suffix}
      </h3>
    </div>
  );
};

export default ProgressCircle;
