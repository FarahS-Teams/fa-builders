"use client";

import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import { Layers, Wrench, MapPin, Calendar } from "lucide-react";

const ProjectDetails = ({ project }) => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Theme provider missing");
  const { currentTheme } = context;

  return (
    <div
      className={`
        ${currentTheme.card} ${currentTheme.text}
        p-6 rounded-xl h-fit
        max-w-sm mx-auto md:mx-0
        text-left md:text-center lg:text-left
      `}
    >
      {/* Title */}
      <h3
        className="text-base sm:text-lg font-bold mb-4"
        style={{ fontFamily: "var(--font-Montserrat)" }}
      >
        Project Details
      </h3>

      {/* Details List */}
      <ul
        className="space-y-3 text-xs sm:text-sm"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <li className="flex items-center gap-3 justify-start md:justify-center lg:justify-start opacity-95">
          <Layers size={16} className="text-secondary" />
          <span>
            <strong>Category:</strong> {project.category}
          </span>
        </li>

        <li className="flex items-center gap-3 justify-start md:justify-center lg:justify-start opacity-95">
          <Wrench size={16} className="text-secondary" />
          <span>
            <strong>Service:</strong> {project.service}
          </span>
        </li>

        <li className="flex items-center gap-3 justify-start md:justify-center lg:justify-start opacity-95">
          <MapPin size={16} className="text-secondary" />
          <span>
            <strong>Location:</strong> {project.location}
          </span>
        </li>

        <li className="flex items-center gap-3 justify-start md:justify-center lg:justify-start opacity-95">
          <Calendar size={16} className="text-secondary" />
          <span>
            <strong>Year:</strong> {project.year}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectDetails;
