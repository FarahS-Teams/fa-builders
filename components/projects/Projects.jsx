import Hero from "../Hero";
import ProjectsGrid from "./ProjectsGrid";
import CTASection from "../home/CTASection";
const Projects = () => {
  return (
    <div>
      <Hero
        title="Our Projects"
        highlight="Projects"
        description="A showcase of our completed and ongoing construction projects across London."
        image="/projects-hero.jpg"
        ctaText="Check Out Our Services"
        ctaPath="/services"
        overlay="bg-black/30"
        height="h-[60vh] sm:h-[70vh] md:h-[80vh]"
      />

      <ProjectsGrid />
      <CTASection />
    </div>
  );
};

export default Projects;
