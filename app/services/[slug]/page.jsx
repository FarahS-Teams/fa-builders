"use client";
import React from "react";
import service from "@/app/data/service";
import projects from "@/app/data/projects";
import Image from "next/image";
import PerksSection from "@/components/home/PerksSection";
import CTASection from "@/components/home/CTASection";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { useParams } from "next/navigation";
import Badge from "@/components/Badge";
import RelatedProjects from "@/components/services/RelatedProjects";
import Hero from "@/components/Hero";
import ServiceInfoSection from "@/components/services/ServiceInfoSection";
import { motion } from "framer-motion";

const ServiceDetailPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const params = useParams();
  const slug = params.slug;
  const IndService = service.find((item) => item.slug === slug);

  if (!IndService) {
    return <h1>Service not found!</h1>;
  }

  const relatedProjects = projects
    .filter((p) => p.service === IndService.title)
    .slice(0, 3);

  const context = useContext(themeContext);
  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }

  const { currentTheme } = context;

  return (
    <main>
      <Hero
        title={IndService.title}
        description={IndService.shortDescription}
        image={IndService.heroImage}
      />
      <div className="custom-container">
        <div className="mt-14 content flex flex-col gap-16 lg:gap-24">
          {/* Service Section */}
          <ServiceInfoSection service={IndService} />

          {/* Related Projects*/}
          <section
            className={`${currentTheme.background} ${currentTheme.text}`}
          >
            <RelatedProjects projects={relatedProjects} />
          </section>

          {/* Specialties Section */}
          <section
            className={`${currentTheme.background} ${currentTheme.text} flex justify-center`}
          >
            <div>
              {/* Heading */}
              <div className="text-center w-full mb-10">
                <Badge text="Specialties" />
                <h2
                  className={currentTheme.headings}
                  style={{ fontFamily: "var(--font-Montserrat)" }}
                >
                  Our <span className="text-secondary">Expertise</span>
                </h2>
              </div>

              {/* Grid */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-12">
                {IndService.specialties.map((elem, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`
            p-8 sm:p-4 lg:p-3 xl:p-8
            rounded-xl
            flex flex-col items-center text-center
            ${currentTheme.card}
            hover:-translate-y-1
            hover:shadow-lg
            transition-all duration-300
          `}
                  >
                    <div className="text-3xl text-secondary mb-4">
                      {elem.icon}
                    </div>
                    <p className="text-sm md:text-base">{elem.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <PerksSection />

          {/* CTA Section */}
          <div className="-mx-4">
            <CTASection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetailPage;
