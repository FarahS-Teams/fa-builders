"use client";

import { HardHat, Building2, ShieldCheck } from "lucide-react";
import { useContext } from "react";
import { motion } from "framer-motion";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";

const valuesData = [
  {
    title: "Our Mission",
    description:
      "To deliver high-quality, reliable, and modern construction solutions that enhance communities and exceed expectations.",
    icon: HardHat,
  },
  {
    title: "Our Vision",
    description:
      "To become London’s most trusted construction company, known for innovation, sustainability, and craftsmanship.",
    icon: Building2,
  },
  {
    title: "Our Values",
    description:
      "Integrity, safety, transparency, and dedication—our core principles guide every project we build.",
    icon: ShieldCheck,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OurValues = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("Section must be used within ThemeProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
                 w-full relative overflow-hidden
                 px-4 sm:px-6 lg:px-12 py-16 md:py-20`}
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-4">
        <Badge text={"Our Values"} />
        <h2
          className={`${currentTheme.headings}`}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Our <span className="text-[#ff9326]">Values </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        {valuesData.map(({ title, description, icon: Icon }, index) => (
          <motion.div
            key={title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`${currentTheme.card} px-8 py-4 flex-1 flex-col justify-center items-center gap-6 rounded-xl hover:-translate-y-3 transition-all duration-300 ease-in`}
          >
            <Icon size={50} className="text-[#ff9326] mb-4" />
            <h2
              className="text-3xl font-semibold text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {title}
            </h2>
            {/* Content */}
            <p
              className="text-md sm:text-base text-center"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
