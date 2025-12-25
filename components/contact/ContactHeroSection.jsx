"use client";

import React from "react";
import Image from "next/image";
import contactHeroSection from "../../public/contactHeroSection.jpg";

const ContactHeroSection = () => {
  return (
    <section className="relative custom-container h-[50vh] md:h-[60vh]">
      <div className="content">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={contactHeroSection}
            alt="Construction site contact"
            fill
            className="object-cover"
            priority
          />
          {/* Light Overlay - Just for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Optional: Gradient for better effect */}
          <div className="absolute inset-0 bg-linear-0-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Contact <span className="text-orange-500">Me</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
