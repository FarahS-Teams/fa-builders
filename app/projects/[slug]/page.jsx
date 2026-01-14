import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/app/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectDetails from "@/components/projects/ProjectDetailsCard";
import CTASection from "@/components/home/CTASection";

/* Static params */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* SEO */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | FA Builders Ltd.`,
    description: project.description,
  };
}

/* PAGE */
export default async function ProjectPage({ params }) {
  const { slug } = await params; // REQUIRED

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main>
      {/* HERO */}
      <section className="w-full relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
        {/* Background Image */}
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col
               justify-end md:justify-center
               px-6 sm:px-8 lg:px-16
               py-4 md:py-0
               text-white"
        >
          {/* Badges */}
          <div className="flex gap-2 flex-wrap mb-3 sm:mb-4">
            <span
              className="inline-flex items-center gap-1
               px-2 py-0.5
               text-[10px] sm:text-[11px]
               font-semibold uppercase tracking-wide
               text-secondary bg-white/90
               rounded-full border border-secondary/30
               shadow-sm backdrop-blur-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.category}
            </span>

            <span
              className="inline-flex items-center gap-1
               px-2 py-0.5
               text-[10px] sm:text-[11px]
               font-semibold uppercase tracking-wide
               text-secondary bg-white/80
               rounded-full border border-secondary/30
               shadow-sm backdrop-blur-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.service}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
            {project.title}
          </h1>

          {/* Meta */}
          <p className="mt-2 text-gray-200 text-sm sm:text-base">
            {project.location} • {project.year}
          </p>
        </div>
      </section>
      <div className="custom-container mt-6">
        <div className="content flex flex-col gap-10 lg:gap-12">
          {/* CONTENT */}
          <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Project Overview
              </h2>
              <p className="mb-10 text-justify sm:text-left">{project.description}</p>
              <ProjectGallery images={project.gallery} />
            </div>

            {/* Projrct Details Card */}
            <aside>
              <ProjectDetails project={project} />
            </aside>
          </section>

          {/* PREV / NEXT */}
          <section className="pt-4 border-t border-primary/10">
            <div className="flex justify-between">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="text-secondary text-xs md:text-sm"
                >
                  ← {prevProject.title}
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="text-secondary text-xs md:text-sm"
                >
                  {nextProject.title} →
                </Link>
              ) : (
                <div />
              )}
            </div>
          </section>

          <div className="-mx-4">
            <CTASection />
          </div>
        </div>
      </div>
    </main>
  );
}
