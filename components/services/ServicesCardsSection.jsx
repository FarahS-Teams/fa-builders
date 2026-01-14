"use client";

import React from "react";
import service from "@/app/data/service";
import Badge from "../Badge";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import Cta from "../Cta";
import SimpleCards from "../SimpleCards";

const ServicesCardsSection = () => {

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

  const context = useContext(themeContext);
  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }

  const { theme, currentTheme } = context;
  return (
    <section
      className={`${currentTheme.background}  ${currentTheme.text} custom-container`}
    >
      <div className="content flex flex-col items-center">
        {/* HEADER */}
        <div className="text-center mb-10">
          <Badge text="Our Services" />

          <h2
            className={currentTheme.headings}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            Our <span className="text-secondary">Services</span>
          </h2>

          <p
            className={`text-lg leading-relaxed ${currentTheme.text} max-w-2xl mx-auto text-justify sm:text-left`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Discover our comprehensive construction services across London,
            including new builds, renovations, loft and basement conversions,
            and extensions. Each service is delivered with precision, expertise,
            and a commitment to quality and client satisfaction.
          </p>
        </div>


        {/* Services section */}
        <SimpleCards
          content={service.map((ser, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`
        ${currentTheme.card}
        flex flex-col gap-4 h-full p-6
        rounded-xl
        hover:-translate-y-3 hover:shadow-xl
        transition-all duration-300 ease-in
      `}
            >
              {/* Icon */}
              <div className="text-3xl text-secondary">
                {ser.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">
                  {ser.title}
                </h3>

                <p className="mb-4 leading-relaxed text-sm md:text-base">
                  {ser.shortDescription}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {ser.specialties.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-secondary text-xs">
                        {feature.icon}
                      </span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA pinned to bottom */}
                <div className="mt-auto">
                  <Cta
                    text="Explore Service"
                    path={`/services/${ser.slug}`}
                    variant="secondary"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        />

      </div>
    </section>
  );
};

export default ServicesCardsSection;
