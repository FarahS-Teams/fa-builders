"use client";
import React from "react";
import { HardHat, Building2, ShieldCheck } from "lucide-react";
import { useContext } from "react";
import { motion } from "framer-motion";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";
import SimpleCards from "../SimpleCards";

const valuesData = [
  {
    title: "Our Mission",
    description:
      "To deliver high-quality, reliable, and modern construction solutions across London, exceeding client expectations through expert craftsmanship and professionalism.",
    icon: HardHat,
  },
  {
    title: "Our Vision",
    description:
      "To become one of London’s most trusted construction companies, recognised for innovation, sustainability, and exceptional building standards.",
    icon: Building2,
  },
  {
    title: "Our Values",
    description:
      "Integrity, safety, transparency, and dedication guide every project we undertake, ensuring quality results and long-term client trust.",
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
      custom-container w-full relative`}
    >
      <div className="content flex flex-col items-center">
       
        <div className="text-left sm:text-center w-full">
          <Badge text={"Our Values"} className="" />

          {/* Main heading */}
          <h2
            className={`${currentTheme.headings}`}
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our <span className="text-secondary">Values</span>
          </h2>
          </div>

          {/* Cards */}
          <SimpleCards
            content={valuesData.map(
              ({ title, description, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`
                ${currentTheme.card}
                flex-1 mx-auto md:mx-0
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
              ),
            )}
          />
        </div>
    </section>
  );
};

export default OurValues;
