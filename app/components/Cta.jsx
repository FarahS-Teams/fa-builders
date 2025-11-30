import Link from "next/link";
import React from "react";

const Cta = ({ text, path, className = "", variant = "primary" }) => {
  const variantClasses = {
    primary:
      "bg-[#ff9326] text-white hover:bg-[#e9821f] rounded-md transition-all duration-500 ease-out transform hover:-translate-y-2 ",
    secondary:
      "border border-[#ff9326] text-[#ff9326] rounded-md drop-shadow-lg drop-shadow-orange-500/50 transition-all duration-500 ease-out hover:bg-[#ff9326] hover:text-white",
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
