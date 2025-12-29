import Hero from "../Hero";
import AboutStory from "./AboutStory";
import OurValues from "./OurValues";
import Stats from "./Stats";
import Leadership from "./Leadership";
import OurProcess from "./OurProcess";
import CTASection from "../home/CTASection";
import PerksSection from "../home/PerksSection";
import Certifications from "../Certifications";

const About = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      <Hero
        title="About FA Builders"
        highlight="FA Builders"
        description="Building London’s skyline with precision, innovation, and unwavering commitment since 2015."
        image="/about-story.jpg"
        ctaText="View Our Projects"
        ctaPath="/projects"
      />
      <AboutStory />
      <OurValues />
      <Stats />
      <Leadership />
      <OurProcess />
      <PerksSection />
      <CTASection />
    </div>
  );
};

export default About;
