"use client";

import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
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
        { name: "AC Installation", href: "/services/ac-installation" },
        { name: "Basement Conversion", href: "/services/basement-conversions" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Projects", href: "/projects" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      text: "+44 74 765 55002",
      href: "tel:+447476555002",
    },
    {
      icon: FaEnvelope,
      text: "info@fabuilder.co.uk",
      href: "mailto:info@fabuilder.co.uk",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Flat 2, 23 Headcorn Road, Thornton Heath, London, CR7 6JR, United Kingdom",
      href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.6635293291583!2d-0.0874558!3d51.4659985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603c467a3b499%3A0xc34b72e5a7b8e5d!2s23%20Headcorn%20Rd%2C%20London%20SE15%203ND%2C%20UK!5e0!3m2!1sen!2sus!4v1703692800000!5m2!1sen!2sus",
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-6 lg:gap-x-8 mb-12">

          {/* Company Info*/}
          <div className="md:col-span-4">
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

            <p className="mb-10 leading-relaxed text-sm max-w-lg">
              Building dreams with precision and excellence. We transform your
              vision into reality with unmatched quality and professional
              craftsmanship in every project.
            </p>

            {/* Social Links */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-4">
              {/* Label */}
              <span className="font-medium text-sm md:mr-2 mb-1 md:mb-0">
                Follow Us:
              </span>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8
                      bg-gray-100 dark:bg-gray-800 
                      flex items-center justify-center rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-secondary`}
                  >
                    <social.icon className="text-gray-200 hover:text-white text-lg" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Links  */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
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

          {/* Contact Info (3rd column desktop / 3rd row mobile) */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold font-montserrat mb-4 relative pb-2">
              Contact
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-secondary"></span>
            </h4>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-start gap-3 hover:text-secondary transition-colors duration-300 group"
                >
                  <item.icon className="text-secondary mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>


        </div>

        {/* Bottom Section - Social Links and Copyright */}
        <div className="pt-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

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
