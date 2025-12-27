import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Badge from "../Badge";
import themeContext from "@/app/context/themeContext";
import Cta from "../Cta";

const RelatedProjects = ({ projects }) => {
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
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <Badge text="Related Projects" />
          <h2
            className={`${currentTheme.headings}`}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            Projects Related to{" "}
            <span className="text-secondary">{projects[0].service}</span>
          </h2>
          <p className="">Projects completed under this service</p>
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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:text-secondary">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary mt-2">
                  {project.location}
                </p>
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
