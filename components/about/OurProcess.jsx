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
    title: "Construction",
    description:
      "Skilled builders execute the project with precision and high-quality workmanship.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Final Handover",
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
    <section className={`${currentTheme.background} ${currentTheme.text}`}>
      <div className="w-full flex flex-col gap-12 px-6 md:px-10 mb-20 mt-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center">
          <Badge text="Our Process" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Checkout How We Work
          </h2>
          <p className="mt-4 max-w-xl">We know your time is valuable</p>
        </div>

        {/* Process Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {processSteps.map(
            ({ step, title, description, icon: Icon }, index) => (
              <motion.div
                key={step}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex-1 bg-white/10
                           border border-[#ff9326]/40
                           p-8 pt-12 rounded-xl
                           shadow-lg backdrop-blur-md
                           hover:scale-105 hover:border-[#ff9326]
                           transition"
              >
                {/* Step Number */}
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2
                             w-14 h-14 flex items-center justify-center
                             bg-[#ff9326] text-white rounded-full
                             text-xl font-bold shadow-lg"
                >
                  {step}
                </div>

                {/* Icon */}
                <Icon size={50} className="text-[#ff9326] mb-4" />

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p>{description}</p>
              </motion.div>
            ),
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-4">
          <Cta text="Build with us" path="/contact" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
