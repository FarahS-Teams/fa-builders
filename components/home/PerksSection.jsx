"use client";
import React from "react";
import { useContext } from "react";
import { FaHardHat, FaRulerCombined, FaStar } from "react-icons/fa";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";
import SimpleCards from "../SimpleCards";
import { motion } from "framer-motion";

const perksData = [
  {
    icon: <FaHardHat />,
    title: "Expert Team",
    desc: "Skilled professionals delivering reliable construction solutions.",
  },
  {
    icon: <FaRulerCombined />,
    title: "Precision",
    desc: "Careful planning and attention to every construction detail.",
  },
  {
    icon: <FaStar />,
    title: "Quality",
    desc: "High standards in materials, workmanship, and finishes.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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
      <div className="content flex flex-col items-center ">
        <div className="text-center w-full">
          <Badge text={"Why Choose Us"} />
          {/* main heading */}
          <h2
            className={`${currentTheme.headings}`}
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Why <span className="text-secondary">Choose</span> Us{" "}
          </h2>
        </div>

        {/* cards section */}
        <SimpleCards
          content={perksData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`
        ${currentTheme.card}
        flex flex-col justify-center items-center
        gap-4 sm:gap-5
        rounded-xl
        hover:-translate-y-3 hover:shadow-xl
        transition-all duration-300 ease-in
      `}
            >
              <div className="text-3xl text-secondary">{item.icon}</div>

              <h4
                className="font-bold text-lg sm:text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.title}
              </h4>

              <p
                className="text-sm sm:text-base opacity-80 text-center"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        />
      </div>
    </section>
  );
};

export default PerksSection;
