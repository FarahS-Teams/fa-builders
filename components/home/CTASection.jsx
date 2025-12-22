"use client";
import React from "react";
import Cta from "../Cta";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import { FaCheckCircle, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import Badge from "../Badge";

const CTASection = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("CTA must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  const benefits = [
    { icon: <FaCheckCircle />, text: "Free Site Visit & Quote" },
    { icon: <FaCalendarAlt />, text: "Flexible Scheduling" },
    { icon: <FaPhoneAlt />, text: "24/7 Support" },
  ];

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} w-full`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Main CTA Card */}
        <div
          className={`${currentTheme.card} rounded-2xl p-8 md:p-12 text-center relative overflow-hidden`}
        >
          {/* Badge */}
          <Badge text={"Limited Slots Avaiable"} />

          {/* Main Heading */}
          <h2 className={`${currentTheme.headings}`}>
            Ready to Build Your <span className="text-[#ff9326">Dream</span>{" "}
            Space?
          </h2>

          {/* Subheading */}
          <p
            className={`${currentTheme.text} text-lg md:text-xl max-w-2xl mx-auto mb-8`}
          >
            Get a{" "}
            <span className="font-bold text-[#ff9326]">free consultation</span>{" "}
            and detailed quote. No obligation, just expert advice from London's
            top construction team.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-[#ff9326]">{benefit.icon}</span>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Cta
              text="Get Free Consultation Now"
              path="/contact"
              variant="primary"
            />
            <Cta
              text="Call: 07476555002"
              path="tel:07476555002"
              variant="secondary"
            />
          </div>

          {/* Guarantee */}
          <div className="text-sm">
            ⭐ 100% Satisfaction Guarantee | ⏱️ Response within 24 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
