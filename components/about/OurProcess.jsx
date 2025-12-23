"use client";

import { ClipboardCheck, Hammer, Building2, BadgeCheck } from "lucide-react";
import { useContext } from "react";
import { motion } from "framer-motion";
import themeContext from "@/app/context/themeContext";
import Cta from "../Cta";
import Badge from "../Badge";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin by understanding your project needs, goals, and site requirements.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "Our team prepares clear plans, budgets, and timelines tailored to your project.",
    icon: Hammer,
  },
  {
    step: "03",
    title: "Construction & Build",
    description:
      "Skilled builders execute the project with precision and high-quality workmanship.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Completion & Handover",
    description:
      "We inspect every detail and deliver a result that’s completed to perfection.",
    icon: BadgeCheck,
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

const OurProcess = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Use inside ThemeProvider");

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
    w-full relative overflow-hidden px-4 sm:px-6 lg:px-12 py-16 md:py-20`}
    >
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-4">
        <Badge text={"Our Process"} className="mb-12" />
        <h2
          className={`${currentTheme.headings}`}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Checkout Our <span className="text-[#ff9326]">Process</span>
        </h2>
        <p
          className="text-lg leading-relaxed mb-6 text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          We know your time is valuable, We care
        </p>
      </div>

      {/* Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
        {processSteps.map(({ step, title, description, icon: Icon }, index) => (
          <motion.div
            key={step}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`${currentTheme.card}
  relative
  px-5 py-8
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
            {/* Step Number */}
            <div
              className="absolute -top-4 sm:-top-5
                     left-1/2 -translate-x-1/2
                     w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                     flex items-center justify-center
                     bg-[#ff9326] text-white rounded-full
                     text-sm sm:text-lg md:text-xl
                     font-bold shadow-lg"
            >
              {step}
            </div>

            {/* Icon + Title */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <Icon size={28} className="text-[#ff9326] sm:hidden" />
              <Icon size={40} className="text-[#ff9326] hidden sm:block" />
              <h2
                className="text-3xl font-semibold text-center"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {title}
              </h2>
            </div>

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

      {/* CTA */}
      <div className="flex items-center justify-center mt-10">
        <Cta text="Build with us" path="/contact" variant="secondary" />
      </div>
    </section>
  );
};

export default OurProcess;
