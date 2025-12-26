"use client";

import React, { useState, useEffect, useContext } from "react";
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

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const context = useContext(themeContext);

  if (!context) {
    throw new Error("button must be used within a ThemeContextProvider");
  }

  const { theme, currentTheme } = context;
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`${currentTheme.text} bg-secondary fixed bottom-8 right-4 z-50 p-3  rounded-full shadow-lg hover:bg-secondary/70 transition-all duration-500"
          aria-label="Scroll to top`}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
