"use client";

import React from "react";
import { useState, useEffect, useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import themeContext from "@/app/context/themeContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const context = useContext(themeContext);
  if (!context) {
    throw new Error("ScrollToTop must be used within a ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-8 right-4 z-50 p-3 rounded-full shadow-lg bg-secondary ${currentTheme.text} hover:bg-secondary/90 transition-all duration-300 text-white`}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
