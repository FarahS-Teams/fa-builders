"use client";

import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";
import { useRef } from "react";
import { useInView } from "framer-motion";

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

export default function Stats() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("Stats must be used within ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section className={`${currentTheme.background} ${currentTheme.text}`}>
      <div className="w-full flex flex-col gap-12 px-6 mb-20 mt-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center">
          <Badge text="Our Stats" />
          <h2 className="text-3xl md:text-4xl font-bold">Our Excellence</h2>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row gap-8 px-6">
          {statsData.map(({ value, suffix, label, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay }}
              className="flex-1 min-w-[220px] max-w-[300px]
             p-8 bg-white/10
             border-t-4 border-r-2 border-b-2 border-l-2 border-[#ff9326]
             rounded-xl shadow-lg
             backdrop-blur-md
             hover:scale-105 transition
             basis-full sm:basis-1/2 md:basis-1/2"
            >
              <h2 className="text-4xl font-extrabold text-[#ff9326]">
                <StatCounter from={0} to={value} duration={2} />
                {suffix}
              </h2>
              <p className="mt-2 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
