"use client";
import React from "react";
import service from "@/app/data/service";
import Image from "next/image";
import PerksSection from "@/components/home/PerksSection";
import CTASection from "@/components/home/CTASection";
import themeContext from "@/app/context/themeContext";
import { useContext } from "react";
import { useParams } from "next/navigation";
import Badge from "@/components/Badge";

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug;
  const IndService = service.find((item) => item.slug === slug);

  if (!IndService) {
    return <h1>Service not found!</h1>;
  }

  const context = useContext(themeContext);

  if (!context) {
    throw new Error(
      "ServicesSection must be used within a ThemeContextProvider",
    );
  }

  const { currentTheme } = context;

  return (
    <main className="min-h-screen flex flex-col gap-16 lg:gap-24">
      {/* Hero Section */}
      <section className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge text={IndService.title} />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {IndService.title}
          </h1>

          <p className="text-lg max-w-3xl mx-auto mb-8">
            {IndService.detailedDescription}
          </p>

          <div className="relative w-full aspect-video max-w-4xl mx-auto">
            <Image
              src={IndService.image}
              alt={IndService.title}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section
        className={`${currentTheme.background} ${currentTheme.text} px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Badge text="Specialties" />
            <h2
              className={`${currentTheme.headings}`}
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              Our <span className="text-secondary">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IndService.specialties.map((elem, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl flex flex-col items-center text-center ${currentTheme.card} hover:transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-3xl text-secondary mb-4">{elem.icon}</div>
                <p className="text-sm md:text-base">{elem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <PerksSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default ServiceDetailPage;
