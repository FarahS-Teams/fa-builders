"use client";

import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { useContext } from "react";
import themeContext from "../app/context/themeContext";
import logo_dark from "../public/icons/logo_dark.png";
import logo_light from "../public/icons/logo_light.png";
import Image from "next/image";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "New Build", href: "/services/new-build-services" },
        { name: "Complete Renovation", href: "/services/renovation-services" },
        { name: "Loft Conversion", href: "/services/loft-conversions" },
        { name: "Extension Services", href: "/services/extension-services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Projects", href: "/projects" },
        { name: "Testimonials", href: "/#testimonials" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      text: "07476555002",
      href: "tel:07476555002",
    },
    {
      icon: FaEnvelope,
      text: "info@fabuliders.com",
      href: "mailto:info@fabuilder.co.uk",
    },
    {
      icon: FaMapMarkerAlt,
      text: "23 flat 2 headcorn road Thornton heath London",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@fabuildersltd?_r=1&_t=ZN-91vF6beGwBa",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/fabuildersltd?igsh=azg2OGc1MmlvdGZ6&utm_source=qr",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1FeXdKT8s5/?mibextid=wwXIfr",
    },
  ];

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Footer must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;

  return (
    <footer
      className={`${currentTheme.background} ${currentTheme.text} custom-container border-t-4 border-secondary`}
    >
      {/* Main Footer Content */}
      <div className="content py-12 lg:py-16">
        {/*Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Company Info*/}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="flex items-start gap-4 mb-6">
              {/* Logo */}
              <div className="shrink-0">
                <Image
                  src={theme === "dark" ? logo_dark : logo_light}
                  alt="FA Builders Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  FA Builders
                </h3>
                <p className="text-secondary text-sm font-semibold tracking-wider uppercase">
                  THE STANDARD OF EXCELLENCE
                </p>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-sm md:w-96">
              Building dreams with precision and excellence. We transform your
              vision into reality with unmatched quality and professional
              craftsmanship in every project.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-start gap-3 hover:text-secondary transition-colors duration-300 group"
                >
                  <item.icon className="text-secondary mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm flex-1">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links  */}
          <div className="col-span-1 md:col-span-7 lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="w-full">
                  <h4 className="text-lg font-bold font-montserrat mb-4 relative pb-2">
                    {section.title}
                    <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></span>
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm -space-x-4 hover:space-x-0 hover:text-secondary transition-all duration-500 flex items-center gap-2 group py-1"
                        >
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shrink-0"></span>
                          <span className="truncate">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Links and Copyright */}
        <div className="pt-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="font-medium text-sm">Follow Us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${currentTheme.small_card} w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300  hover:scale-110`}
                  >
                    <social.icon className="text-lg hover:text-secondary" />
                  </Link>
                ))}
              </div>
            </div>

            {/* our agency name */}
            <div className="flex justify-center items-center gap-2">
              <span className="text-lg text-secondary">
                <GrTechnology />
              </span>
              <span className="text-sm hover:text-secondary transition-colors duration-300 ease-in-out cursor-pointer">
                Developed by Nexora Studio
              </span>
            </div>

            {/* Copyright */}
            <div className="text-sm">
              © {new Date().getFullYear()} FA Builders. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
