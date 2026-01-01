"use client";

import React from "react";
import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import themeContext from "../app/context/themeContext";

const ThemeToggleButton = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error(
      "ThemeToggleButton must be used within a ThemeContextProvider",
    );
  }

  const { theme, toggleTheme } = context;

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      <span>
        {theme === "dark" ? (
          <FiMoon className="text-gray-200 text-lg" />
        ) : (
          <FiSun className="text-secondary text-lg" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
