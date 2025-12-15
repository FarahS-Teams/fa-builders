import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import OurValues from "../components/about/OurValues";
import Stats from "../components/about/Stats";
import Leadership from "../components/about/Leadership";
import OurProcess from "../components/about/OurProcess";
import CTASection from "../components/home/CTASection";
import PerksSection from "../components/home/PerksSection";

export default function AboutPage() {
  return (
    <div className="w-full pt-16 mt-12">
      <AboutHero />
      <AboutStory />
      <OurValues />
      <Stats />
      <Leadership />
      <OurProcess />
      <PerksSection />
      <CTASection />
    </div>
  );
}
