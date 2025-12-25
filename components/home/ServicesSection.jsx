"use client";

import React from "react";
import Badge from "../Badge";
import { FaTools, FaTachometerAlt } from "react-icons/fa";
import { MdOutlineAir, MdFoundation } from "react-icons/md";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import Cta from "../Cta";

const ServicesSection = () => {
  const services = [
    {
      icon: <MdFoundation className="text-3xl" />,
      title: "New Build Construction",
      description:
        "Complete residential and commercial construction from ground up. We handle everything from foundation to finishing with precision.",
      features: ["Custom Designs", "Quality Materials", "Timely Delivery"],
      path: "/services/build",
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Complete Renovations",
      description:
        "Transform your existing space with our comprehensive renovation services. Modernize, expand, or completely redesign your property.",
      features: [
        "Space Optimization",
        "Modern Upgrades",
        "Structural Integrity",
      ],
      path: "/services/renovations",
    },
    {
      icon: <MdOutlineAir className="text-3xl" />,
      title: "HVAC & AC Installation",
      description:
        "Professional heating, ventilation, and air conditioning solutions for optimal comfort and energy efficiency in your space.",
      features: [
        "Energy Efficient",
        "Professional Installation",
        "Maintenance",
      ],
      path: "/services/hvac",
    },
  ];

  const context = useContext(themeContext);

  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }

  const { theme, currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div className="content flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-8 lg:py-9">
        {/* Badge */}
        <Badge text={"Our Expertise"} />

        {/* Main Heading */}
        <h2 className={`${currentTheme.headings}`}>
          Comprehensive <span className="text-[#ff9326]">Construction</span>{" "}
          Services
        </h2>

        {/* Services section */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${currentTheme.card} p-6 rounded-xl flex flex-col items-start justify-center gap-6 border border-orange-500 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="text-[#ff9326]">{service.icon}</div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff9326] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mb-4 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <FaTachometerAlt className="text-[#ff9326] text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Cta
                  text="Explore Service"
                  path={service.path}
                  variant="secondary"
                  className="w-full"
                />
              </div>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff9326] opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
