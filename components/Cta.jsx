"use client";

import Link from "next/link";
import React from "react";

const Cta = ({ text, path, className = "", variant = "primary" }) => {
  const variantClasses = {
    primary: `
      px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold
      bg-gradient-to-r from-secondary to-secondary/90
      text-white rounded-lg shadow-lg
      hover:shadow-xl hover:scale-105
      transition-all duration-300 transform
      inline-flex items-center justify-center
    `,
    secondary: `
      px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold
      border-2 border-secondary text-secondary
      hover:bg-secondary hover:text-white
      rounded-lg
      transition-all duration-300
      inline-flex items-center justify-center
    `,
  };

  return (
    <Link
      href={path}
      className={`${variantClasses[variant]} ${className}`}
      style={{ fontFamily: "var(--font-inter)" }}
      aria-label={text}
    >
      {text}
    </Link>
  );
};

export default Cta;
