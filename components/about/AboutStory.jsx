"use client";
import Image from "next/image";
import { useContext } from "react";
import themeContext from "../../app/context/themeContext";
import Cta from "../Cta";

const AboutStory = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Hero Section must be used within a ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} 
            relative w-full px-4 sm:px-6 lg:px-12 py-16 md:py-20 overflow-hidden`}
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff9326]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ff7b00]/10 rounded-full blur-3xl"></div>

      {/* London Minimal Double Border Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff9326] to-transparent"></div>
      <div className="absolute top-[4px] left-0 w-full h-[1px] bg-gradient-to-r from-[#ffffff20] to-transparent"></div>

      {/* Wrapper */}
      <div
        className="
                w-full
                flex flex-col md:flex-row
                items-center md:items-start
                justify-between
                gap-10 md:gap-14 lg:gap-16
                mt-10
            "
      >
        {/* Text Section */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left z-10">
          <p className="text-[#ff9326] mb-2 tracking-wider text-sm sm:text-base">
            History
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">FA Builders Story</h2>

          <div className="w-24 h-[2px] bg-[#ff9326] mt-3 mx-auto md:mx-0 rounded-full"></div>

          <p className="py-4 mt-4 text-base sm:text-lg drop-shadow-md leading-relaxed">
            Founded in 2025, FA Builders Ltd. has grown from a small
            construction firm into one of London’s most trusted building
            companies. We specialize in creating modern, sustainable, and
            high-quality spaces.
          </p>

          <p className="text-base sm:text-lg drop-shadow-md mb-4 leading-relaxed">
            Every project reflects our commitment to craftsmanship, safety, and
            client satisfaction—building trust and shaping communities across
            London.
          </p>

          <div className="relative group mt-4 mx-auto md:mx-0">
            <Cta text={"View Our Projects"} path={"/projects"} />
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end z-10">
          <Image
            src="/about-story.jpg"
            alt="Construction Background"
            width={600}
            height={450}
            priority
            className="
                            object-cover rounded-md
                            w-full max-w-[440px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[600px]
                            shadow-lg shadow-black/40
                            border border-white/10
                        "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

// "use client";
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
