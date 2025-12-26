"use client";
import React from "react";
import Hero from "../Hero";
import ContactForm from "./ContactForm";
import LeftSide from "./LeftSide";
import Badge from "../Badge";

const Contact = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <Hero
        title="Contact Us"
        highlight="Us"
        image="/cHeroSection.jpg"
        overlay="bg-black/30"
      />

      <div className="custom-container flex flex-col items-center justify-center pb-8 sm:pb-12">
        <div>
          <Badge text="Contact" />
        </div>
        <div className="content grid grid-cols-1 md:grid-cols-2">
          <LeftSide />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
