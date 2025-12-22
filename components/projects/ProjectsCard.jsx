"use client";
import Image from "next/image";
import Link from "next/link";
import Cta from "../Cta";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#ff9326]/40 bg-white/10 backdrop-blur-md shadow-lg transition-all hover:shadow-2xl">
      {/* IMAGE WRAPPER */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-2xl">
        {/* IMAGE */}
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* DIAGONAL LONDON OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-tr from-black/70 via-black/40 to-transparent
            opacity-0 group-hover:opacity-100
            transition duration-500
          "
        />

        {/* DIAGONAL ORANGE STRIPE */}
        <div
          className="
            absolute -bottom-20 -left-20 w-[150%] h-24
            bg-[#ff9326]/90
            rotate-[-12deg]
            opacity-0 group-hover:opacity-100
            transition duration-500
          "
        />

        {/* CATEGORY BADGE */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#ff9326] text-white shadow-md">
            {project.service}
          </span>
        </div>

        {/* CENTER HOVER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition duration-300">
          <span className="text-white text-sm tracking-widest uppercase">
            {project.title}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center flex flex-col gap-2 relative z-10">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="px-3 py-1 text-xs rounded-full">
          {project.service}
        </span>
        <p className="text-sm">{project.location}</p>

        {/* VIEW MORE BUTTON */}
        <div className="mt-6">
          <Cta
            text="View Project Details"
            path={`/projects/${project.slug}`}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
