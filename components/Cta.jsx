import Link from "next/link";
import React from "react";

const Cta = ({ text, path, className = "", variant = "primary" }) => {
  const variantClasses = {
    primary:
      "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base font-semibold \
   bg-linear-to-r from-[#ff9326] to-amber-500 \
   hover:from-[#ff9326] hover:to-amber-600 \
   text-white rounded-lg shadow-lg hover:shadow-xl \
   transition-all duration-300 transform hover:scale-105",

    secondary:
      "px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-base font-semibold \
   border-2 border-[#ff9326] text-[#ff9326] \
   hover:bg-[#ff9326] hover:text-white \
   rounded-lg transition-all duration-300",
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
