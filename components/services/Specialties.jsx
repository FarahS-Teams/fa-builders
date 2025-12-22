"use client";

import React from "react";
import Badge from "../Badge";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";

const Specialties = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }

  const { theme, currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background}  ${currentTheme.text} flex flex-col items-center  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-8 lg:py-9`}
    >
      <Badge text={"Specialties"} />

      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Why <span className="text-orange-500">Choose</span> Us
      </h2>
    </section>
  );
};

export default Specialties;
