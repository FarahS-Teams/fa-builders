"use client";

import React from "react";
import Badge from "../Badge";
import { FaTools, FaTachometerAlt } from "react-icons/fa";
import { MdOutlineAir, MdFoundation } from "react-icons/md";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import Cta from "../Cta";
import SimpleCards from "../SimpleCards";

const ServicesSection = () => {
  const services = [
    {
      icon: <MdFoundation />,
      title: "New Build Services",
      description:
        "Complete residential and commercial construction from ground up. We handle everything from foundation to finishing with precision.",
      features: ["Custom Designs", "Quality Materials", "Timely Delivery"],
      path: "/services/build",
    },
    {
      icon: <FaTools />,
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
      icon: <MdOutlineAir />,
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
      <div className="content flex flex-col items-center">
        {/* Badge */}
        <Badge text={"Our Expertise"} />
        {/* Main Heading */}
        <h2 className={`${currentTheme.headings} text-center`}>
          Expert <span className="text-secondary">Construction Services</span>{" "}
          Across London
        </h2>

        {/* Services section */}
        <SimpleCards
          content={services.map((service, index) => (
            <div
              key={index}
              className={`${currentTheme.card} flex flex-col justify-center items-center gap-6 rounded-xl hover:-translate-y-3 transition-all duration-300 ease-in`}
            >
              {/* Icon */}
              <div className="text-3xl md:text-4xl lg:text-5xl text-secondary">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mb-4 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <FaTachometerAlt className="text-secondary text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Cta
                  text="Explore Service"
                  path="/services"
                  variant="secondary"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
