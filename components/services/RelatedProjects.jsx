"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import Badge from "../Badge";
import themeContext from "@/app/context/themeContext";
import { Calendar } from "lucide-react";
import Cta from "../Cta";

const RelatedProjects = ({ projects }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const context = useContext(themeContext);
  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }
  const { theme, currentTheme } = context;

  if (!projects || projects.length === 0) {
    return (
      <section className="py-16 text-center text-gray-500">
        No related projects found
      </section>
    );
  }

  return (
    <section className={`${currentTheme.background} ${currentTheme.text}`}>
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <Badge text="Related Projects" />

          <h2
            className={`${currentTheme.headings} text-2xl sm:text-3xl font-bold`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            Projects Completed Under <br />{" "}
            <span className="text-secondary">{projects[0].service}</span> in
            London
          </h2>

          <p
            className={`text-base sm:text-lg mt-2 ${currentTheme.text} max-w-2xl mx-auto`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explore completed projects under this service, showcasing quality
            craftsmanship, modern design, and attention to detail.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`${currentTheme.card} group rounded-xl overflow-hidden hover:shadow-lg transition`}
            >
              {/* Image */}
              <div className="relative h-56">
                {/* Skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gray-300/30 dark:bg-gray-700/30" />
                )}
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  onLoad={() => setImageLoaded(true)}
                  className={`object-cover group-hover:scale-105 transition ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-secondary">
                  {project.title}
                </h3>
                {/* Year */}
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-secondary" />
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center mt-8">
          <Cta
            text={"View All Projects"}
            path="/projects#projectsgrid"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
