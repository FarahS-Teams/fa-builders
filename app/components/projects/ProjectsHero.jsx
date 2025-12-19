"use client";

import Image from "next/image";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Cta from "../Cta";

const ProjectsHero = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Use inside ThemeProvider");

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} relative h-[60vh] sm:h-[70vh] md:h-[80vh]`}
    >
      <Image
        src="/projects-hero.jpg"
        alt="Our Projects"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-[#ff9326]">Projects</span>
        </h1>

        <p className="mt-4 max-w-2xl text-gray-200 text-base sm:text-lg">
          A showcase of our completed and ongoing construction projects across
          London.
        </p>

        <div className="mt-4">
          <Cta text={"Check Out Our Services"} path={"/services"} />
        </div>
      </div>
      {/* London Minimal Double Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff9326] to-transparent"></div>
      <div className="absolute top-[4px] left-0 w-full h-[1px] bg-gradient-to-r from-[#ffffff20] to-transparent"></div>
    </section>
  );
};

export default ProjectsHero;
