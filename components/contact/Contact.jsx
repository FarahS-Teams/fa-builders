"use client";
import React from "react";
import Hero from "../Hero";
import ContactForm from "./ContactForm";
import LeftSide from "./LeftSide";
import Badge from "../Badge";

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        highlight="Us"
        image="/cHeroSection.jpg"
        overlay="bg-black/30"
      />
      <div className="flex items-center justify-center py-12">
        <Badge text="Contact" />
      </div>
      <div className="custom-container">
        <div className="content grid grid-cols-1 md:grid-cols-2 gap-8">
          <LeftSide />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
