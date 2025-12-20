import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExcellenceSection from "./ExcellenceSection";
import PerksSection from "./PerksSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import ServicesSection from "./ServicesSection";

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
