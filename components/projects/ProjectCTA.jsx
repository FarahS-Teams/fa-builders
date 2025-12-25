"use client";

// I will Update it After other Review
import Cta from "../Cta";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";

export default function ProjectCTA() {
  const context = useContext(themeContext);
  if (!context) throw new Error("Theme provider missing");
  const { currentTheme } = context;

  return (
    <section
      className={`
        relative overflow-hidden
        ${currentTheme.text}
        py-20 px-6 text-center
        bg-linear-to-r from-secondary/20 via-secondary/10 to-secondary/5
      `}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className={`${currentTheme.headings} text-3xl sm:text-4xl font-bold`}
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Ready to Build With Us?
        </h2>

        <p
          className="mt-3 text-sm sm:text-base"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Let’s discuss your next project and bring your vision to life.
        </p>

        <div className="mt-8 flex justify-center">
          <Cta
            text="Contact Us Now"
            path="/contact"
            className="
              bg-white text-secondary 
              hover:bg-white/90
              shadow-lg
              border border-white/30
            "
          />
        </div>
      </div>
    </section>
  );
}
