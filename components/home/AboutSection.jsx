"use client";

import React from "react";
import Cta from "../Cta";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { FaFireAlt, FaCheckCircle, FaTools, FaAward } from "react-icons/fa";
import Badge from "../Badge";
import { motion } from "framer-motion";

const AboutSection = () => {

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
    throw new Error("AboutSection must be used within a ThemeContextProvider");
  }
  const { theme, currentTheme } = context;

  const features = [
    {
      icon: <FaFireAlt className="text-3xl" />,
      title: "Gas Safe Practices",
      desc: "All gas work carried out to Gas Safe standards",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Building Regulations",
      desc: "Compliant with UK building control requirements",
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Best Workmanship",
      desc: "High-quality finishes using proven methods",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Trusted Service",
      desc: "Reliable, professional, and customer-focused",
    },
  ];

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div className="content ">
        <div className="text-left sm:text-center mb-6 sm:mb-12 ">
          <Badge text={"About us"} />

          <h2 className={`${currentTheme.headings}`}>
            FA Builders <span className="text-secondary">Excellence</span>
          </h2>

          <p
            className="text-md md:text-lg max-w-3xl lg:mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            With over 10 years of experience delivering new builds, renovations, and
            extensions across London, we turn your visions into remarkable realities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Content */}
          <div>
            <div className="mb-8 text-left text-md md:text-lg ">
              <p
                className="leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-secondary font-bold">
                  FA Builders Ltd
                </span>{" "}
                is a trusted London construction company, delivering exceptional
                craftsmanship and client-focused results.
              </p>

              <p
                className="leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Every project reflects our commitment to quality, transparency,
                and timely delivery—creating spaces that inspire and endure.
              </p>
              <p
                className="leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                We operate in line with UK building regulations and best
                industry practices, ensuring all work—including gas-related
                installations—is carried out to recognised safety and quality
                standards. Our structured approach, skilled workmanship, and
                attention to detail give clients confidence at every stage of
                the build.
              </p>
            </div>
            <Cta
              text="Our Full Story"
              path="/about"
              variant="secondary"
              className="w-full"
            />
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`
        rounded-xl
        flex flex-col items-center text-center
        ${currentTheme.small_card}
        border border-secondary/10 hover:border-secondary/30
        transition-all duration-300
        group
        h-full min-h-[200px] md:min-h-60
      `}
              >
                {/* Icon */}
                <div className="text-secondary mt-2 mb-3 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h4 className="font-bold text-base md:text-lg lg:text-xl mb-2">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-sm md:text-base opacity-80">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
