import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import ProjectGallery from "@/app/components/projects/ProjectGallery";
import ProjectCTA from "@/app/components/projects/ProjectCTA";

/* SEO + Static Generation */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return {};

  return {
    title: `${project.title} | FA Builders Ltd.`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  console.log(params); // should log { slug: "something" }
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Diagonal Orange Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-[#ff9326]/90 clip-path-diagonal" />

        {/* Hero Content */}
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

      {/* ================= CONTENT ================= */}
      <section className="px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Gallery */}
          <ProjectGallery images={project.gallery} />
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md h-fit">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <strong className="text-white">Category:</strong>{" "}
              <span className="text-gray-300">{project.category}</span>
            </li>
            <li>
              <strong className="text-white">Service:</strong>{" "}
              <span className="text-gray-300">{project.service}</span>
            </li>
            <li>
              <strong className="text-white">Location:</strong>{" "}
              <span className="text-gray-300">{project.location}</span>
            </li>
            <li>
              <strong className="text-white">Year:</strong>{" "}
              <span className="text-gray-300">{project.year}</span>
            </li>
          </ul>
        </aside>
      </section>

      {/* ============= Next & Prev Project ============= */}
      <section className="px-6 lg:px-16 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* PREVIOUS */}
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group w-full md:w-auto text-left"
            >
              <span className="text-sm text-gray-400">Previous Project</span>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-[#ff9326] group-hover:underline">
                  ← {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* NEXT */}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group w-full md:w-auto text-right"
            >
              <span className="text-sm text-gray-400">Next Project</span>
              <div className="mt-1 flex items-center justify-end gap-3">
                <span className="text-[#ff9326] group-hover:underline">
                  {nextProject.title} →
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <ProjectCTA />
    </main>
  );
}
