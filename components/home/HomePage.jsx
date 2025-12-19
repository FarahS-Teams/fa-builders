import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExcellenceSection from "./ExcellenceSection";
import ServicesSection from "./ServicesSection";
import ProjectSection from "./ProjectSection";
import PerksSection from "./PerksSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExcellenceSection />
      <ServicesSection />
      {/* <ProjectSection/> */}
      <PerksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
