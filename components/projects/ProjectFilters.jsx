"use client";
import { useState } from "react";

const categories = ["All", "Residential", "Commercial"];
const services = [
  "All",
  "New Build",
  "Extension",
  "Loft Conversion",
  "Renovation",
];

export default function ProjectFilters({ onFilter }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeService, setActiveService] = useState("All");

  const applyFilter = (cat, serv) => {
    setActiveCategory(cat);
    setActiveService(serv);
    onFilter(cat, serv);
  };

  return (
    <div className="flex flex-col gap-6 mb-12">
      {/* CATEGORY TABS */}
      <div className="flex gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => applyFilter(cat, activeService)}
            className={`px-6 py-2 rounded-full border transition
              ${
                activeCategory === cat
                  ? "bg-[#ff9326] text-white border-[#ff9326]"
                  : "border-[#ff9326]/50 hover:bg-[#ff9326]/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SERVICE PILLS */}
      <div className="flex flex-wrap gap-3 justify-center">
        {services.map((serv) => (
          <button
            key={serv}
            onClick={() => applyFilter(activeCategory, serv)}
            className={`px-4 py-1 text-sm rounded-full border transition
              ${
                activeService === serv
                  ? "bg-[#ff9326] text-white border-[#ff9326]"
                  : "border-white/20 hover:border-[#ff9326]"
              }`}
          >
            {serv}
          </button>
        ))}
      </div>
    </div>
  );
}
