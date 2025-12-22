import React from "react";
import ServicesHeroSecrtion from "./ServicesHeroSecrtion";
import ServicesCardsSection from "./ServicesCardsSection";
import Specialties from "./Specialties";
import CTASection from "../home/CTASection";

const Services = () => {
  return (
    <div>
      <ServicesHeroSecrtion />
      <ServicesCardsSection />
      {/* <Specialties /> */}
      <CTASection />
    </div>
  );
};

export default Services;
