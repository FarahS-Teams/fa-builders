"use client";

import React from "react";
import Image from "next/image";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Badge from "./Badge";
import certifications from "@/app/data/compliance";

const Certifications = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("Must be used within ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} 
      custom-container w-full relative`}
    >
      <div className="content">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge text="Certifications & Compliance" />
          <h2 className={currentTheme.headings}>
            Fully <span className="text-secondary">Certified & Approved</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-center opacity-90">
            FA Builders Ltd. is a fully certified construction company in
            London, operating in full compliance with UK safety and electrical
            regulations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {certifications.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className={`${currentTheme.card} p-6 rounded-xl border border-secondary/20 shadow-md`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="text-secondary" size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm opacity-90 mt-1">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm opacity-80 mt-6">
          All work is carried out in accordance with UK building regulations and
          safety standards.
        </p>
        {/* 
All work is carried out in line with current UK Building Regulations and safety standards.
Electrical work is carried out by fully qualified and NICEIC-registered partner electricians. 

Why Choose FA Builders Ltd.?
✔ Experienced construction professionals
✔ High-quality workmanship
✔ Fully compliant with UK building standards
✔ Trusted by homeowners across London*/}
      </div>
    </section>
  );
};

export default Certifications;
