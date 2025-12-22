// "use client";
// import React from "react";
// import service from "@/app/data/service";
// import Image from "next/image";
// import PerksSection from "@/components/home/PerksSection";
// import CTASection from "@/components/home/CTASection";
// import contactHeroSection from "../../../public/contactHeroSection.jpg";
// import themeContext from "@/app/context/themeContext";
// import { useContext } from "react";
// import { useParams } from "next/navigation";
// import Badge from "@/components/Badge";

// const ServiceDetailPage = () => {
//   const params = useParams();
//   const slug = params.slug;
//   const IndService = service.find((item) => item.slug === slug);

//   if (!IndService) {
//     return <h1>Service not found!</h1>;
//   }

//   const context = useContext(themeContext);

//   if (!context) {
//     throw new Error(
//       "ServicesSection must be used within a ThemeContextProvider"
//     );
//   }

//   const { theme, currentTheme } = context;

//   return (
//     <section className="pt-19 min-h-screen">
//       {/* main hero section */}
//       <div className="max-w-screen min-h-screen flex flex-col items-center justify-start gap-2 pt-10">
//         <h1
//           className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//           style={{ fontFamily: "var(--font-montserrat)" }}
//         >
//           {IndService.title}
//         </h1>
//         <p
//           className="text-lg md:text-lg mb-8 leading-relaxed max-w-2xl text-center"
//           style={{ fontFamily: "var(--font-inter)" }}
//         >
//           {IndService.detailedDescription}
//         </p>
//         <Image
//           src={contactHeroSection}
//           alt="Services Image"
//           width={800}
//           height={400}
//           className="object-cover rounded-2xl"
//         />
//       </div>

//       {/* servives specialities  */}
//       <div
//         className={`${currentTheme.background} ${currentTheme.text} flex flex-col items-center max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-8 lg:py-9`}
//       >
//         <Badge text={"Specialities"} />
//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
//           style={{ fontFamily: "var(--font-montserrat)" }}
//         >
//           Our <span className="text-orange-500">Expertise</span> In This
//           Area{" "}
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
//           {IndService.specialties.map((elem, idx) => {
//             return (
//               <div
//                 key={idx}
//                 className={`p-5 rounded-xl flex flex-col justify-center items-center gap-5 ${currentTheme.card}  transition-all duration-300 group hover:-translate-y-2`}
//               >
//                 <div className="text-3xl">{elem.icon}</div>
//                 <p className="text-center">{elem.text}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* why us section */}
//       <PerksSection />

//       {/* CTA Section */}
//       <CTASection />
//     </section>
//   );
// };

// export default ServiceDetailPage;

"use client";
import React from "react";
import service from "@/app/data/service";
import Image from "next/image";
import PerksSection from "@/components/home/PerksSection";
import CTASection from "@/components/home/CTASection";
import contactHeroSection from "../../../public/contactHeroSection.jpg";
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
    <main className="min-h-screen py-12 md:py-8 lg:py-9">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <Badge text={IndService.title} />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            {IndService.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {IndService.detailedDescription}
          </p>

          <div className="relative w-full aspect-video max-w-4xl mx-auto">
            <Image
              src={contactHeroSection}
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
        className={`${currentTheme.background} ${currentTheme.text} py-12 md:py-16`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge text="Specialties" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6">
              Our <span className="text-orange-500">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IndService.specialties.map((elem, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl flex flex-col items-center text-center ${currentTheme.card} hover:transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-3xl text-orange-500 mb-4">{elem.icon}</div>
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
