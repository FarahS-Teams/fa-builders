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
  if (!context) throw new Error("Section must be used within ThemeProvider");

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} 
      custom-container w-full relative overflow-hidden
      px-4 sm:px-6 lg:px-8`}
    >
      <div className="content">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge text="Our Values" />
          <h2
            className={`${currentTheme.headings}`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            Our <span className="text-secondary">Values</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
          {valuesData.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`
                ${currentTheme.card}
                flex-1 max-w-md mx-auto md:mx-0
                px-6 sm:px-8 py-8 sm:py-10
                rounded-xl
                flex flex-col items-center gap-4 sm:gap-5
                text-center
                hover:-translate-y-3 hover:shadow-xl
                transition-all duration-300 ease-out
              `}
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f7922c]/10 flex items-center justify-center">
                <Icon size={28} sm={36} className="text-secondary" />
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl md:text-2xl font-semibold"
                style={{ fontFamily: "var(--font-Montserrat)" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-base leading-relaxed opacity-90"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
