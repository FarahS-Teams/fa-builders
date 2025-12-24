"use client";
import Image from "next/image";
import { useContext } from "react";
import themeContext from "../../app/context/themeContext";
import Cta from "../Cta";
import Badge from "../Badge";

const AboutStory = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("About Section must be used within a ThemeContextProvider");
  }
  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} 
            relative w-full px-4 sm:px-6 lg:px-12 py-16 md:py-20 overflow-hidden`}
    >
      <div className="flex items-center justify-center">
        <Badge text={"Our Story"} className="mb-4" />
      </div>

      {/* Wrapper */}
      <div
        className="
                w-full
                flex flex-col md:flex-row
                items-center md:items-start
                justify-between
                gap-10 md:gap-14 lg:gap-16
            "
      >
        {/* Text Section */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left z-10">
          <h2
            className={currentTheme.headings}
            style={{ fontFamily: "var(--font-Montserrat)" }}
          >
            FA Builders <span className="text-[#ff9326]">Story </span>
          </h2>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Founded in 2025, FA Builders Ltd. has grown from a small
            construction firm into one of London’s most trusted building
            companies. We specialize in creating modern, sustainable, and
            high-quality spaces.
          </p>

          <p
            className="text-lg leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every project reflects our commitment to craftsmanship, safety, and
            client satisfaction—building trust and shaping communities across
            London.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-linear-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-50"></div>
          <div
            className={`relative rounded-2xl overflow-hidden ${currentTheme.card} border-2 border-orange-500/20 shadow-2xl`}
          >
            <Image
              src="/about-story.jpg"
              alt="FA Builders Construction Project"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* CTA Button */}
      <div className="flex items-center justify-center mt-10">
        <Cta
          text={"View Our Projects"}
          path={"/projects"}
          variant="secondary"
        />
      </div>
    </section>
  );
};

export default AboutStory;
// import Image from "next/image";
// import { FaBars } from "react-icons/fa6";
// import ThemeToggleButton from "../ThemeToggleButton";
// import Link from "next/link";
// import Cta from "../Cta";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { useContext } from "react";
// import themeContext from "../../context/themeContext";

// const AboutStory = () => {

//     const context = useContext(themeContext);

//     if (!context) {
//         throw new Error("Hero Section must be used within a ThemeContextProvider");
//     }

//     const { theme, currentTheme } = context;

//     return (

//         <section>
//             <div className="w-full flex justify-evenly gap-12 px-6 mb-20">
//                 {/* Text on Left Side */}
//                 <div className="flex flex-col px-6 ">
//                     {/* Small head text */}
//                     <p className="text-[#ff9326] mb-2">History</p>
//                     <h2 className="text-4xl font-bold">
//                         FA Builders Story
//                     </h2>
//                     {/* UnderLine Orange*/}
//                     <div className="w-20 h-1 bg-[#ff9326] mt-2 rounded-full"></div>

//                     <p className="py-4 mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
//                         Founded in 2025, FA Builders Ltd. has grown from a small construction firm into one of London’s most trusted building companies. Driven by a passion for excellence, innovation, and reliability, we specialize in creating modern, sustainable, and high-quality spaces that stand the test of time.
//                     </p>

//                     <p className="text-lg md:text-xl text-gray-200 drop-shadow-md mb-4">
//                         From residential projects to commercial developments, every structure we build reflects our commitment to craftsmanship, safety, and customer satisfaction. At FA Builders, we believe that every project is more than bricks and mortar—it’s about building trust, shaping communities, and turning visions into reality.
//                     </p>
//                     {/* Cta*/}
//                     <div className="relative group">
//                         <Cta text={"View Our Projects"} path={"/projects"} />
//                     </div>
//                 </div>

//                 {/* Image on Right Side */}
//                 <Image
//                     src="/about-story.jpg"
//                     alt="Construction Background"
//                     width={600}
//                     height={10}
//                     className="object-cover px-6"
//                     priority

//                 />

//             </div>
//         </section>
//     );
// };

// export default AboutStory;
