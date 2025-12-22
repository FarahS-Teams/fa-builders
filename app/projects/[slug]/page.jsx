import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/app/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectCTA from "@/components/projects/ProjectCTA";

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
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 w-full h-28 bg-[#ff9326]/90 clip-path-diagonal" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 pb-16 text-white">
          <div className="flex gap-3 flex-wrap mb-4">
            <span className="bg-[#ff9326] px-4 py-1 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <span className="border border-white/40 px-4 py-1 rounded-full text-sm">
              {project.service}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="mt-2 text-gray-200">
            {project.location} • {project.year}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-10">{project.description}</p>
          <ProjectGallery images={project.gallery} />
        </div>

        <aside className="bg-white/10 border border-white/20 p-6 rounded-xl h-fit">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Category:</strong> {project.category}
            </li>
            <li>
              <strong>Service:</strong> {project.service}
            </li>
            <li>
              <strong>Location:</strong> {project.location}
            </li>
            <li>
              <strong>Year:</strong> {project.year}
            </li>
          </ul>
        </aside>
      </section>

      {/* PREV / NEXT */}
      <section className="px-6 lg:px-16 py-12 border-t border-white/10">
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

      <ProjectCTA />
    </main>
  );
}
