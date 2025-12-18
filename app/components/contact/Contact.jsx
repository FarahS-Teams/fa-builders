import React from "react";
import ContactHeroSection from "./ContactHeroSection";
import ContactForm from "./ContactForm";
import LeftSide from "./LeftSide";

const Contact = () => {
  return (
    <div>
      <ContactHeroSection />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <LeftSide />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
