import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Badge = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
      <FaCheckCircle className="text-secondary" />
      <span className="text-sm font-semibold text-secondary">{text}</span>
    </div>
  );
};

export default Badge;
