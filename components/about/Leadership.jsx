"use client";

import Image from "next/image";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";

export default function Leadership() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error(
      "Leadership Section must be used within a ThemeContextProvider",
    );
  }
  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container relative overflow-hidden px-4 sm:px-6 lg:px-8`}
    >
      <div className="content">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <Badge text="Our Leadership" />
          <h2
            className={`${currentTheme.headings}`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            Meet Our <span className="text-secondary">Director</span>
          </h2>
          <p
            className="text-lg md:text-xl mt-3 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            FA Builders Ltd. is led by experienced professionals committed to
            delivering quality, integrity, and reliable construction services
            across London.
          </p>
        </div>

        {/* Director Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-center">
          {/* Director Image */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
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
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Awais Ibrar</h3>
            <p className="text-lg md:text-xl text-secondary">
              Managing Director, FA Builders Ltd.
            </p>
            <p className="italic text-md md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              “At FA Builders, we don’t just construct buildings — we build
              trust, deliver quality, and make sure every project stands the
              test of time.”
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <a
                href="https://www.facebook.com/share/1FeXdKT8s5/?mibextid=wwXIfr"
                target="_blank"
                aria-label="Facebook"
                className="text-white p-3 rounded-full bg-secondary hover:bg-secondary/70 transition shadow-lg"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@fabuildersltd?_r=1&_t=ZN-91vF6beGwBa"
                target="_blank"
                aria-label="TikTok"
                className="text-white p-3 rounded-full bg-secondary hover:bg-secondary/70 transition shadow-lg"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.instagram.com/fabuildersltd?igsh=azg2OGc1MmlvdGZ6&utm_source=qr"
                target="_blank"
                aria-label="Instagram"
                className="text-white p-3 rounded-full bg-secondary hover:bg-secondary/70 transition shadow-lg"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
