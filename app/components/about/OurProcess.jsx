"use client";

import { ClipboardCheck, Hammer, Building2, BadgeCheck } from "lucide-react";
import Cta from "../Cta";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";

const OurProcess = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Hero Section must be used within a ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section className={`${currentTheme.background} ${currentTheme.text}`}>
      <div className="w-full flex flex-col justify-evenly gap-12 px-6 md:px-10 mb-20 mt-10 ">
        {/* Section Title */}
        <div className="mb-4 flex flex-col md:w-1/2 text-center md:text-left">
          <p className="text-[#ff9326] mb-2">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Checkout How We Work
          </h2>
          <div className="w-24 h-[2px] bg-[#ff9326] mt-3 mx-auto md:mx-0 rounded-full"></div>

          <p className="mt-4 max-w-xl">We know your time is valuable</p>
        </div>

        {/* Process Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
          {/* Step 1 */}
          <div className="relative flex-1 bg-white/10 border border-white/20 p-8 pt-12 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center
                         bg-[#ff9326] text-white rounded-full text-xl font-bold shadow-lg"
            >
              01
            </div>

            <ClipboardCheck size={50} className="text-[#ff9326] mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Consultation</h3>
            <p>
              We begin by understanding your project needs, goals, and site
              requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex-1 bg-white/10 border border-white/20 p-8 pt-12 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center
                         bg-[#ff9326] text-white rounded-full text-xl font-bold shadow-lg"
            >
              02
            </div>

            <Hammer size={50} className="text-[#ff9326] mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Planning & Design</h3>
            <p>
              Our team prepares clear plans, budgets, and timelines tailored to
              your project.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex-1 bg-white/10 border border-white/20 p-8 pt-12 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center
                         bg-[#ff9326] text-white rounded-full text-xl font-bold shadow-lg"
            >
              03
            </div>

            <Building2 size={50} className="text-[#ff9326] mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Construction</h3>
            <p>
              Skilled builders execute the project with precision and
              high-quality workmanship.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative flex-1 bg-white/10 border border-white/20 p-8 pt-12 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition">
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center
                         bg-[#ff9326] text-white rounded-full text-xl font-bold shadow-lg"
            >
              04
            </div>

            <BadgeCheck size={50} className="text-[#ff9326] mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Final Handover</h3>
            <p>
              We inspect every detail and deliver a result that’s completed to
              perfection.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center mt-4">
          <Cta text={"Build with us"} path={"/contact"} variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
