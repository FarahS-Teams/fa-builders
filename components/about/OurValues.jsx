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
    throw new Error("Hero Section must be used within ThemeProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
                 w-full relative overflow-hidden
                 px-4 sm:px-6 lg:px-12 py-16 md:py-20`}
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <Badge text="Our Values" />
        <h2 className="text-3xl sm:text-4xl font-bold">Our Values</h2>
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
            className="flex-1 bg-white/10
                         border border-[#ff9326]/40
                         p-6 sm:p-8 rounded-xl shadow-lg
                         backdrop-blur-md
                         hover:scale-105 hover:border-[#ff9326]
                         transition"
          >
            <Icon size={50} className="text-[#ff9326] mb-4" />
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
