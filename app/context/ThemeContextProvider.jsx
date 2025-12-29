"use client";

import { useState } from "react";
import themeContext from "./themeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const themeStyles = {
    dark: {
      background: "bg-[#0e152b]", //primary (dark blue)
      card: "bg-[#101629]/50 border-1 border-[#f7922c] shadow-[0_0_10px_rgba(255,107,53,0.25)] hover:shadow-[inset_0_0_15px_rgba(255,107,53,0.1)] backdrop-blur-sm", //(border orange aye ga) (and card ka bg dark blue ka koi shade aye ga)
      headings:
        "text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#f3f3f3]",
      text: "text-[#f3f3f3]",
    },
    light: {
      background: "bg-[#F1F5F9]",
      card: "bg-[#e3ebf3]/20 backdrop-blur-sm border-1 border-[#f7922c] hadow-[0_0_25px_rgba(255,107,53,0.25)] hover:shadow-[inset_0_0_15px_rgba(255,107,53,0.1)]",
      headings:
        "text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#0e152b]",
      text: "text-[#0e152b]", // (primary color dark blue )
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <themeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      <div
        className={`min-h-screen ${currentTheme.background} ${currentTheme.text} transition-colors duration-300`}
      >
        {children}
      </div>
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
