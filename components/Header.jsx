"use client";

import React from "react";
import service from "@/app/data/service";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import ThemeToggleButton from "./ThemeToggleButton";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Cta from "./Cta";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContext } from "react";
import themeContext from "../app/context/themeContext";
import logo_dark from "../public/icons/logo_dark.png";
import logo_light from "../public/icons/logo_light.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const pathName = usePathname();

  const isActivePath = (path) => {
    if (path === "/") {
      return pathName === "/";
    }
    return pathName.startsWith(path);
  };

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Header must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <header
      className={`${currentTheme.background} ${currentTheme.text} custom-container py-2  fixed top-0 left-0 right-0 border-b border-gray-200/50 dark:border-slate-700/40 z-50 shadow-sm`}
    >
      <div className="content flex items-center justify-between">
        {/* Logo  */}
        <Link className="flex items-center gap-3" href={"/"}>
          <div className="flex items-center gap-3">
            <Image
              src={theme === "dark" ? logo_dark : logo_light}
              alt="FA Builders Logo"
              width={70}
              height={10}
            />
            {/* line*/}
            <div className="h-8 w-0.5 bg-secondary/40"></div>
          </div>

          {/* Tagline */}
          <div>
            <p
              className="text-xs text-secondary tracking-widest uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The Standard of
            </p>
            <p className="text-sm font-bold">EXCELLENCE.</p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8 px-8 py-3">
          {navItems.map((elem, index) => {
            // SERVICES DROPDOWN
            if (elem.name === "Services") {
              return (
                <div key={index} className="relative group">
                  {/* Services link */}
                  <Link
                    href="/services"
                    className={`flex items-center gap-1 ${
                      isActivePath("/services")
                        ? "text-secondary border-b-2 border-secondary"
                        : "hover:text-secondary"
                    } transition-all duration-300`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Services
                    {/* Arrow icon */}
                    <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div
                      className={`${currentTheme.card} rounded-xl shadow-lg border border-secondary/30 p-4`}
                    >
                      <ul className="flex flex-col gap-3">
                        {service.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/services/${item.slug}`}
                              className="block text-sm hover:text-secondary transition"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }

            // NORMAL LINKS
            return (
              <Link
                key={index}
                href={elem.path}
                className={`${
                  isActivePath(elem.path)
                    ? "text-secondary border-b-2 border-secondary"
                    : "relative group hover:text-secondary"
                } transition-all duration-300`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {elem.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section - Theme Toggle and CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggleButton />

          {/* Cta*/}
          <div className="relative group">
            <Cta
              text={"Get Consultation"}
              path={"/contact"}
              variant="primary"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggleButton />

          <Sheet>
            <SheetTrigger className="p-2 rounded-lg">
              <FaBars className="text-xl" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className={`w-80 px-6 py-8 ${currentTheme.background} ${currentTheme.text} border-l `}
            >
              {/* mobile logo and tagline */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b ">
                <Image
                  src={theme === "dark" ? logo_dark : logo_light}
                  alt="FA Builders Logo"
                  width={120}
                  height={40}
                />
                <div>
                  <p
                    className="text-xs text-secondary tracking-widest"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    The Standard of
                  </p>
                  <p className="text-sm font-bold">EXCELLENCE.</p>
                </div>
              </div>

              {/* Mobile menu */}
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
                <div className="pt-4 mt-4 border-t border-gray-200/50">
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
