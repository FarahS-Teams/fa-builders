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
    title: "Free Consultation",
    description:
      "We discuss your construction requirements, budget, and site conditions to fully understand your project goals.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "Our experts create detailed designs, timelines, and cost plans to ensure a smooth and transparent build process.",
    icon: Hammer,
  },
  {
    step: "03",
    title: "Construction & Build",
    description:
      "Our skilled construction team delivers high-quality workmanship using trusted materials and proven techniques.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Final Inspection & Handover",
    description:
      "We carry out thorough quality checks and hand over a completed project that meets the highest standards.",
    icon: BadgeCheck,
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

const OurProcess = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Use inside ThemeProvider");

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}
      custom-container`}
    >
      <div className="content">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Badge text="Our Process" />
          <h2 className={currentTheme.headings}>
            Our <span className="text-secondary">Construction Process</span>
          </h2>

          <p
            className="text-base sm:text-lg max-w-xl mb-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We know your time is valuable — and we respect it at every step.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map(
            ({ step, title, description, icon: Icon }, index) => (
              <motion.div
                key={step}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`${currentTheme.card}
              relative
              max-w-sm mx-auto w-full
              px-6 py-8
              flex flex-col items-center
              gap-5
              rounded-xl
              hover:-translate-y-3 hover:shadow-xl
              transition-all duration-300 ease-out`}
              >
                {/* Step Badge */}
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2
              w-12 h-12 flex items-center justify-center
              rounded-full bg-secondary text-white
              font-bold shadow-lg ring-4 ring-black/10"
                >
                  {step}
                </div>

                {/* Icon */}
                <Icon size={36} className="text-secondary mt-4" />

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-center"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm sm:text-base text-center opacity-90"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {description}
                </p>
              </motion.div>
            ),
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Cta text="Build with us" path="/contact" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
