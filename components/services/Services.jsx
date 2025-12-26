import React from "react";
import ServicesCardsSection from "./ServicesCardsSection";
import CTASection from "../home/CTASection";
import Hero from "../Hero";

const Services = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      <Hero title="Our" highlight="Services" image="/about-story.jpg" />
      <ServicesCardsSection />
      <CTASection />
    </div>
  );
};

export default Services;
