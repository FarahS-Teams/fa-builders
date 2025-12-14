import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Badge = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
      <FaCheckCircle className="text-orange-500" />
      <span className="text-sm font-semibold text-orange-500">{text}</span>
    </div>
  );
};

export default Badge;
