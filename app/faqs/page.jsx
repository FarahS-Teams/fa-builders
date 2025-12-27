"use client";

import Badge from "@/components/Badge";
import themeContext from "../context/themeContext";
import React, { useState, useContext } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("CTA must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  const questions = [
    {
      q: "What types of construction projects do you handle?",
      a: "We handle residential and commercial projects, including new builds, complete renovations, loft conversions, extensions, basements, bathrooms, kitchens, and more across London.",
    },
    {
      q: "Do you offer home renovation services?",
      a: "Yes! We provide full residential renovation services, covering both interior and exterior refurbishments to transform your living space.",
    },
    {
      q: "Can you help with loft conversions and extensions?",
      a: "Absolutely. Our team specializes in maximizing space with loft conversions and seamless property extensions for homes and commercial buildings.",
    },
    {
      q: "Are your gas and electrical works certified?",
      a: "Yes, all gas work is Gas Safe Registered, and all electrical work is completed by NICEIC-certified professionals.",
    },
    {
      q: "Do you install heating and air conditioning systems?",
      a: "Yes, we offer central heating, boiler installation, underfloor heating, and professional air conditioning installation for homes and businesses.",
    },
    {
      q: "Do you provide kitchen and bathroom construction or refurbishment?",
      a: "Yes, we design, build, and refurbish kitchens and bathrooms tailored to your style and functional needs.",
    },
    {
      q: "Do you offer basement construction services?",
      a: "Yes, we specialize in creating functional basements, from extra living space to home offices or entertainment areas.",
    },
    {
      q: "How can I get a quote for my project?",
      a: "Contact us via our website or phone to schedule a consultation. We provide free, no-obligation quotes and can design customized solutions based on your specific requirements.",
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary depending on the scope and complexity. We provide a detailed schedule during the planning phase to keep you informed.",
    },
    {
      q: "Do you offer sustainable or energy-efficient construction options?",
      a: "Yes, we integrate eco-friendly materials, energy-efficient heating, and modern building practices wherever possible to reduce environmental impact.",
    },
  ];

  return (
    <main
      className={`${currentTheme.background} ${currentTheme.text} min-h-screen lex flex-col gap-16 lg:gap-24`}
    >
      {/* Hero Section */}
      <section className="px-4 pt-12 md:pt-16 lg:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Badge text={"FAQs"} />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h1>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our construction services
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 py-4 md:py-8 cursor-pointer">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {questions.map((item, index) => (
              <div key={index} className=" rounded-xl border overflow-hidden">
                {/* Question - Clickable Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between transition-colors duration-500"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-secondary text-xl">
                      <FaQuestionCircle />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{item.q}</h3>
                  </div>

                  {/* down arrow Icon */}
                  <div className="text-secondary ml-4">
                    {openIndex === index ? (
                      <FaChevronUp className="transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Answer - Animated Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-2 border-t border-gray-200">
                    <div className="pl-10">
                      <p className="">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQsPage;
