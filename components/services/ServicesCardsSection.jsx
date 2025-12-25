"use client";

import React from "react";
import service from "@/app/data/service";
import ServicesCard from "../ServicesCard";
import Badge from "../Badge";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";

const ServicesCardsSection = () => {
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
      <div className="content flex flex-col items-center  py-12 md:py-8 lg:py-9">
        <Badge text={"Services"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {service.map((elem) => {
            return (
              <ServicesCard
                key={elem.slug}
                slug={elem.slug}
                title={elem.title}
                icon={elem.icon}
                description={elem.shortDescription}
                features={elem.specialties} // here is the problem may be
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;
