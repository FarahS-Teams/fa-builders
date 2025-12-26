"use client";
import { useState, useEffect, useContext } from "react";
import CategorySelect from "./CategorySelect";

const categories = ["All", "Residential", "Commercial"];
const services = [
  "All",
  "New Builds",
  "Renovations",
  "Loft Conversions",
  "Extensions",
  "Basement Conversions",
  "Underfloor Heating",
];

export default function ProjectFilters({
  onFilter,
  activeCategory: externalCategory,
  activeService: externalService,
}) {
  // Use external props if provided, otherwise use internal state
  const [internalCategory, setInternalCategory] = useState("All");
  const [internalService, setInternalService] = useState("All");

  // Determine which state to use
  const activeCategory =
    externalCategory !== undefined ? externalCategory : internalCategory;
  const activeService =
    externalService !== undefined ? externalService : internalService;

  // Update internal state when external props change
  useEffect(() => {
    if (externalCategory !== undefined) {
      setInternalCategory(externalCategory);
    }
    if (externalService !== undefined) {
      setInternalService(externalService);
    }
  }, [externalCategory, externalService]);

  const applyFilter = (cat, serv) => {
    setInternalCategory(cat);
    setInternalService(serv);
    onFilter(cat, serv);
  };

  return (
    <div className={`flex flex-col gap-6 mb-12`}>
      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        {/* CATEGORY SELECT */}
        <CategorySelect
          options={categories}
          value={activeCategory}
          onChange={(cat) => applyFilter(cat, activeService)}
        />

        {/* SERVICES PILLS */}
        {/* <ServiceFilter
          services={services}
          activeService={activeService}
          activeCategory={ activeCategory}
          applyFilter={applyFilter}/> */}
        <div className="flex flex-wrap gap-3 justify-center">
          {services.map((serv) => (
            <button
              key={serv}
              onClick={() => applyFilter(activeCategory, serv)}
              className={`px-4 py-1.5 text-sm rounded-full transition border
                ${
                  activeService === serv
                    ? "bg-secondary text-white border-secondary"
                    : "border-gray-300 hover:border-secondary hover:text-secondary"
                }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {serv}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
