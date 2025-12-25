import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/app/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectCTA from "@/components/projects/ProjectCTA";
import themeContext from "@/app/context/themeContext";
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
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* <div className="absolute bottom-0 left-0 w-full h-10 bg-[#ff9326]/90 clip-path-diagonal" /> */}

        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 pb-16 text-white">
          <div className="flex gap-3 flex-wrap mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#ff9326] bg-white/90 rounded-full border border-[#ff9326]/30 shadow-sm backdrop-blur-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.category}
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#ff9326]  rounded-full border border-[#ff9326]/30 shadow-sm backdrop-blur-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.service}
            </span>
            {/* Badge */}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="mt-2 text-gray-200">
            {project.location} • {project.year}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 sm:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="mb-4">{project.description}</p>
          <ProjectGallery images={project.gallery} />
        </div>

        {/* Projrct Details Card */}
        <aside>
          <ProjectDetails project={project} />
        </aside>
      </section>

      {/* PREV / NEXT */}
      <section className="px-6 sm:px-8 lg:px-12 pt-8 border-t border-white/10">
        <div className="flex justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="text-[#ff9326]"
            >
              ← {prevProject.title}
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-[#ff9326]"
            >
              {nextProject.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
