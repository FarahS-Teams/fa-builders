"use client";

import React from "react";
import projects from "@/app/data/projects";
import Image from "next/image";
import { useState, useContext } from "react";
import Badge from "@/components/Badge";
import themeContext from "@/app/context/themeContext";
import Cta from "../Cta";
import { motion } from "framer-motion";

const ProjectSection = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  const [imageLoaded, setImageLoaded] = useState(false);

  const context = useContext(themeContext);
  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }
  const { theme, currentTheme } = context;

  // Show only the first 3 projects
  const recentProjects = projects.slice(0, 3);

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} custom-container`}
    >
      <div className="content flex flex-col items-center">
        {/* Section Header */}
        <Badge text="Our Portfolio" />
        <h2
          className={`${currentTheme.headings} text-center`}
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Recent <span className="text-secondary">Projects</span>
        </h2>

        {/* Projects Grid */}

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10">
          {recentProjects.map((project, idx) => (
            <div
              key={idx}
              href={`/projects/${project.slug}`}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <motion.div
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`
          ${currentTheme.image_card}
          group relative rounded-xl overflow-hidden
          shadow-lg hover:shadow-2xl
          transition-shadow duration-300
          flex flex-col pb-4
        `}
              >
                {/* Image */}
                <div className="relative w-full h-60">
                  {/* Skeleton */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-gray-300/30 dark:bg-gray-700/30" />
                  )}

                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    onLoad={() => setImageLoaded(true)}
                    className={`
              object-cover
              group-hover:scale-105
              transition-transform duration-300
              ${imageLoaded ? "opacity-100" : "opacity-0"}
            `}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-6 py-4">
                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold mb-2 mt-4 hover:text-secondary"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm opacity-80 mb-6"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {project.description.length > 100
                        ? project.description.slice(0, 100) + "..."
                        : project.description}
                    </p>
                  </div>

                  {/* CTA pinned to bottom */}
                  <div className="mt-auto">
                    <Cta
                      text="View Project"
                      path={`/projects/${project.slug}`}
                      variant="secondary"
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
