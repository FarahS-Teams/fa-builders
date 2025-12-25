import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Badge = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff9326]/10 border border-[#ff9326]/20 mb-6">
      <FaCheckCircle className="text-[#ff9326]" />
      <span className="text-sm font-semibold text-[#ff9326]">{text}</span>
    </div>
  );
};

export default Badge;
