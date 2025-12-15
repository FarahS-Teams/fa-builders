import AboutHero from "../components/about/Hero";
import AboutStory from "../components/about/AboutStory";
import OurValues from "../components/about/OurValues";
import Stats from "../components/about/Stats";
import Leadership from "../components/about/LeadershipSection";
import OurProcess from "../components/about/OurProcess";

export default function AboutPage() {
  return (
    <div className="w-full pt-16 mt-12">
      <AboutHero />
      <AboutStory />
      <OurValues />
      <Stats />
      <Leadership />
      <OurProcess />
    </div>
  );
}
