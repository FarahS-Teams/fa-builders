"use client";
import React from "react";
import { useContext, useState, useMemo } from "react";
import projects from "@/app/data/projects";
import themeContext from "@/app/context/themeContext";
import ProjectCard from "./ProjectsCard";
import ProjectFilters from "./ProjectFilters";
import Badge from "../Badge";

export default function ProjectsGrid() {
  const context = useContext(themeContext);
  if (!context) throw new Error("Theme provider missing");
  const { currentTheme } = context;

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    let data = [...projects];

    if (categoryFilter !== "All") {
      data = data.filter((p) => p.category === categoryFilter);
    }

    if (serviceFilter !== "All") {
      data = data.filter((p) => p.service === serviceFilter);
    }

    return data;
  }, [categoryFilter, serviceFilter]);

  const handleFilter = (category, service) => {
    setCategoryFilter(category);
    setServiceFilter(service);
  };

  // Reset to "All" filters
  const resetFilters = () => {
    setCategoryFilter("All");
    setServiceFilter("All");
  };

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
      id="portfolio"
    >
      <div className="content">
        {/* HEADER */}
        <div className="text-center mb-10">
          <Badge text="Our Portfolio" />

          <h2
            className={currentTheme.headings}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            Our <span className="text-secondary">Projects</span>
          </h2>

          <p
            className={`text-lg leading-relaxed text-center ${currentTheme.text} max-w-2xl mx-auto`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explore our completed construction projects across London,
            showcasing high-quality workmanship, modern design, and meticulous
            attention to detail.
          </p>
        </div>

        {/* PROJECTS COUNTER & INFO */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4">
          <div>
            <p
              className="text-sm sm:text-base font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Showing{" "}
              <span className="text-secondary font-bold">
                {filteredProjects.length}
              </span>
              {filteredProjects.length === 1 ? " project" : " projects"}
              {(categoryFilter !== "All" || serviceFilter !== "All") && (
                <span className="ml-2">
                  in {categoryFilter !== "All" ? categoryFilter : ""}
                  {categoryFilter !== "All" && serviceFilter !== "All"
                    ? " • "
                    : ""}
                  {serviceFilter !== "All" ? serviceFilter : ""}
                </span>
              )}
            </p>
          </div>

          {/* RESET BUTTON - Show only when filters are active */}
          {(categoryFilter !== "All" || serviceFilter !== "All") && (
            <button
              onClick={resetFilters}
              className="text-sm text-secondary hover:underline"
              style={{ fontFamily: "var(--font-inter)" }}
              aria-label="Reset all filters"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* FILTERS - Pass current filter state */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <ProjectFilters
            onFilter={handleFilter}
            activeCategory={categoryFilter}
            activeService={serviceFilter}
          />
        </div>

        {/* PROJECTS GRID */}
        <div className="relative px-6 lg:px-0" id="projectsgrid">
          {filteredProjects.length > 0 ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              role="list"
              aria-label="Construction projects portfolio"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="break-inside-avoid"
                  role="listitem"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            // EMPTY STATE - Use resetFilters instead of handleFilter
            <div className="text-center py-10 sm:py-14 lg:py-16 bg-white/5 rounded-2xl border border-dashed border-secondary/30">
              <div className="text-5xl sm:text-6xl mb-4 opacity-50">🏗️</div>
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-3 ${currentTheme.headings}`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                No projects found
              </h3>
              <p
                className="text-base sm:text-lg opacity-70 mb-6 max-w-md mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                We don't have any projects matching your current filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base font-semibold \
                bg-linear-to-r from-secondary to-amber-500 \
                hover:from-secondary hover:to-amber-600 \
                text-white rounded-lg shadow-lg hover:shadow-xl \
                transition-all duration-300 transform hover:scale-105"
                aria-label="Reset filters to view all projects"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
