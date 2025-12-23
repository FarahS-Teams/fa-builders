"use client";
import React from "react";
import Hero from "../Hero";
import ContactForm from "./ContactForm";
import LeftSide from "./LeftSide";

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        highlight="Us"
        image="/contactHeroSection.jpg"
        overlay="bg-black/30"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LeftSide />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
