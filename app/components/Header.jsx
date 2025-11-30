"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import ThemeToggleButton from "./ThemeToggleButton";
import Link from "next/link";
import Cta from "./Cta";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import logo_dark from "../../public/logo_dark.png";
import logo_light from "../../public/logo_light.png";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Header must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <header className="w-full py-4 px-6 md:px-12 fixed top-0 left-0 right-0 border-b border-gray-200/50 dark:border-slate-700/40 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo  */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={theme === "dark" ? logo_dark : logo_light}
              alt="FA Builders Logo"
              width={120}
              height={30}
            />
            {/* line*/}
            <div className="h-8 w-0.5 bg-orange-500/40 hidden sm:block"></div>
          </div>

          {/* Tagline */}
          <div className="hidden sm:block">
            <p
              className="text-xs text-[#ff9326] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The Standard of
            </p>
            <p className="text-sm font-bold">EXCELLENCE.</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-2xl border border-slate-600/50 shadow-sm">
          {navItems.map((elem, index) => (
            <Link
              key={index}
              href={elem.path}
              className="relative group hover:text-[#ff9326] transition-all duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {elem.name}

              {/* Hover Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ff9326] group-hover:w-full transition-all duration-300 ease-out"></span>

              {/* Subtle background glow hover */}
              <span className="absolute inset-0 rounded-lg group-hover:bg-[orange-500/2 ]transition-all duration-300 -z-10"></span>
            </Link>
          ))}
        </nav>

        {/* Right Section - Theme Toggle and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggleButton />

          {/* Cta*/}
          <div className="relative group">
            <Cta text={"Get Consultation"} path={"/contact"} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggleButton />

          <Sheet>
            <SheetTrigger className="p-2 rounded-lg">
              <FaBars className="text-xl" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className={`w-80 px-6 py-8 ${currentTheme.background} ${currentTheme.text} border-l `}
            >
              {/* Mobile Logo & Tagline */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b ">
                <Image
                  src={theme === "dark" ? logo_dark : logo_light}
                  alt="FA Builders Logo"
                  width={120}
                  height={40}
                />
                <div>
                  <p
                    className="text-xs text-[#ff9326] tracking-widest"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    The Standard of
                  </p>
                  <p className="text-sm font-bold">EXCELLENCE.</p>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex flex-col gap-6">
                {navItems.map((elem, index) => (
                  <Link
                    key={index}
                    href={elem.path}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="relative">
                      {elem.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-gray-200/50 dark:border-slate-600/50">
                  <Cta text={"Get Consultation"} path={"/contact"} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
