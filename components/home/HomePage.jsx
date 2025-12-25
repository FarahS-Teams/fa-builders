import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExcellenceSection from "./ExcellenceSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import ServicesSection from "./ServicesSection";
import PerksSection from "./PerksSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExcellenceSection />
      <ServicesSection />
      <PerksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
