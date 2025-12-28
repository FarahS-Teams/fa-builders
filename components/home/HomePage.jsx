import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExcellenceSection from "./ExcellenceSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import ServicesSection from "./ServicesSection";
import PerksSection from "./PerksSection";
import ProjectSection from "./ProjectSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      <HeroSection />
      <AboutSection />
      <ExcellenceSection />
      <ServicesSection />
      <ProjectSection />
      <PerksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
