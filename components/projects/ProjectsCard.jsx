"use client";
import React from "react";
import Image from "next/image";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Cta from "../Cta";
import themeContext from "@/app/context/themeContext";
import { MapPin } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectCard = ({ project, index }) => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Theme provider missing");
  const { currentTheme } = context;

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`
          ${currentTheme.background} ${currentTheme.text}
          ${currentTheme.card}
          group relative overflow-hidden
          rounded-2xl border border-secondary/20
          backdrop-blur-md shadow-lg
          transition-all hover:shadow-2xl
          flex flex-col h-full
        `}
      >
        {/* IMAGE */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl">
          {/* Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-300/30 dark:bg-gray-700/30" />
          )}

          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            onLoad={() => setImageLoaded(true)}
            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Orange stripe */}
          <div className="absolute -bottom-20 -left-20 w-[150%] h-24 bg-secondary rotate-[-12deg] opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary bg-white/90 rounded-full border border-secondary/30 shadow-sm backdrop-blur-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.service}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-5 flex flex-col text-center md:text-left lg:text-left gap-2 flex-grow ">
          {/* Title – fixed height */}
          <h3
            className="text-base sm:text-lg font-bold line-clamp-2 min-h-[3rem]"
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            {project.title}
          </h3>

          {/* Decription */}
          <p
            className="text-xs sm:text-sm opacity-90 min-h-[1.5rem] mb-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {project.description.length > 100
              ? project.description.slice(0, 100) + "..."
              : project.description}
          </p>

          {/* Location – fixed height */}
          <div className="flex items-center justify-center md:justify-start lg:justify-start gap-2 ">
            <MapPin className="w-6 h-6 sm:w-4 sm:h-7 min-h-[1.25rem] text-secondary" />
            <p
              className="text-xs sm:text-sm opacity-80 min-h-[1.25rem]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.location}
            </p>
          </div>

          {/* CTA always at bottom */}
          <div className="mt-auto pt-4">
            <Cta
              text="View Project Details"
              path={`/projects/${project.slug}`}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
