import Link from "next/link";
import React from "react";

const Cta = ({ text, path, className = "", variant = "primary" }) => {
  const variantClasses = {
    primary:
      "px-4 py-2 font-semibold bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
    secondary:
      "px-8 py-4  font-semibold border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition-all duration-300",
  };

  return (
    <Link
      href={path}
      className={`inline-flex items-center justify-center px-4 py-2 font-medium tracking-wide  ${variantClasses[variant]} ${className}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {text}
    </Link>
  );
};

export default Cta;
