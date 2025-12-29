import Hero from "../Hero";
import ProjectsGrid from "./ProjectsGrid";
import CTASection from "../home/CTASection";
const Projects = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      <Hero
        title="Our Projects"
        highlight="Projects"
        description="A showcase of our completed and ongoing construction projects across London."
        image="/projects-hero1.jpg"
        ctaText="Check Out Our Services"
        ctaPath="/services"
        overlay="bg-black/30"
      />

      <ProjectsGrid />
      <CTASection />
    </div>
  );
};

export default Projects;
