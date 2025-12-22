"use client";
import { useState } from "react";
import CategorySelect from "./CategorySelect";

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
      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        {/* CATEGORY SELECT */}
        <CategorySelect
          options={categories}
          value={activeCategory}
          onChange={(cat) => applyFilter(cat, activeService)}
        />

        {/* SERVICES PILLS */}
        <div className="flex flex-wrap gap-3 justify-center">
          {services.map((serv) => (
            <button
              key={serv}
              onClick={() => applyFilter(activeCategory, serv)}
              className={`px-4 py-1.5 text-sm rounded-full transition border
                ${
                  activeService === serv
                    ? "bg-[#ff9326] text-white border-[#ff9326]"
                    : "border-gray-300 hover:border-[#ff9326] hover:text-[#ff9326]"
                }`}
            >
              {serv}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
