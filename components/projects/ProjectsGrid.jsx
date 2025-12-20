"use client";
import { useContext, useState } from "react";
import projects from "@/app/data/projects";
import themeContext from "@/app/context/themeContext";
import ProjectCard from "./ProjectsCard";
import ProjectFilters from "./ProjectFilters";

export default function ProjectsGrid() {
  const context = useContext(themeContext);
  if (!context) throw new Error("Theme provider missing");
  const { currentTheme } = context;

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category, service) => {
    let data = projects;

    if (category !== "All") {
      data = data.filter((p) => p.category === category);
    }

    if (service !== "All") {
      data = data.filter((p) => p.service === service);
    }

    setFilteredProjects(data);
  };

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} py-20`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-12 text-center md:text-left md:w-1/2">
          <p className="text-[#ff9326] mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
          <div className="w-24 h-[2px] bg-[#ff9326] mt-3 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* FILTERS */}
        <ProjectFilters onFilter={handleFilter} />

        {/* MASONRY GRID */}
        <div
          className="
        columns-1 sm:columns-2 lg:columns-3 gap-6
        [column-fill:_balance]
      "
        >
          {filteredProjects.map((project) => (
            <div key={project.slug} className="mb-6 break-inside-avoid">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
