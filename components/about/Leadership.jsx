"use client";

import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";

export default function Leadership() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("Hero Section must be used within a ThemeContextProvider");
  }
  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text}  w-full relative overflow-hidden px-4 sm:px-6 lg:px-12 py-16 md:py-20`}
    >
      {/* Section Title */}
      <div className="mb-4 px-2 md:px-0 flex flex-col justify-center items-center text-center md:text-left">
        <Badge text={"Our Leadership"} />
        <h2
          className={currentTheme.headings}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Meet Our <span className="text-[#ff9326]">Director</span>
        </h2>
        <p
          className="text-lg leading-relaxed mb-6 text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          FA Builders Ltd. is led by experienced professionals committed to
          delivering quality, integrity, and reliable construction services
          across London.
        </p>
      </div>

      {/* Director Layout */}
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-6">
        {/* Director Image */}
        <div className="w-full md:w-[40%] max-w-[450px] mx-auto md:mx-0 relative rounded-2xl overflow-hidden">
          <Image
            src="/about-story.jpg"
            alt="Director"
            width={550}
            height={400}
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Director Info */}
        <div className="w-full md:w-[60%] flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-2xl font-bold">Awais Ibrar</h3>

          <p
            className="text-lg leading-relaxed text-[#ff9326]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Managing Director, FA Builders Ltd.
          </p>

          {/* Quote */}
          <p
            className="italic leading-relaxed max-w-xl mx-auto md:mx-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            “At FA Builders, we don’t just construct buildings — we build trust,
            deliver quality, and make sure every project stands the test of
            time.”
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-3">
            <a
              href="https://www.facebook.com/share/1FeXdKT8s5/?mibextid=wwXIfr"
              target="_blank"
              className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@fabuildersltd?_r=1&_t=ZN-91vF6beGwBa"
              target="_blank"
              className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.instagram.com/fabuildersltd?igsh=azg2OGc1MmlvdGZ6&utm_source=qr"
              target="_blank"
              className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
