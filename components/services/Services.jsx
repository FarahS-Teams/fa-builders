import React from "react";
import ServicesCardsSection from "./ServicesCardsSection";
import CTASection from "../home/CTASection";
import Hero from "../Hero";

const Services = () => {
  return (
    <div>
      <Hero
        title="Our"
        highlight="Services"
        image="/about-story.jpg"
        height="h-[50vh] sm:h-[60vh] md:h-[70vh]"
      />
      <ServicesCardsSection />
      <CTASection />
    </div>
  );
};

export default Services;
