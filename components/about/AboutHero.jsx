"use client";
import Image from "next/image";
import Cta from "../Cta";
import { useContext } from "react";
import themeContext from "../../app/context/themeContext";

const AboutHero = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Hero Section must be used within a ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section
      className={`${currentTheme.background} ${currentTheme.text} relative h-[60vh] sm:h-[70vh] md:h-[80vh]`}
    >
      {/* Background Image */}
      <Image
        src="/about-story.jpg"
        alt="Construction Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center 
                text-center px-4 sm:px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
          About FA Builders
        </h1>

        <p
          className="mt-3 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md 
                    max-w-lg sm:max-w-xl md:max-w-2xl"
        >
          Building London’s skyline with precision, innovation, and unwavering
          commitment since 2015.
        </p>

        <div className="mt-4">
          <Cta text={"View Our Projects"} path={"/projects"} />
        </div>
      </div>
      {/* London Minimal Double Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff9326] to-transparent"></div>
      <div className="absolute top-[4px] left-0 w-full h-[1px] bg-gradient-to-r from-[#ffffff20] to-transparent"></div>
    </section>
  );
};

export default AboutHero;

// "use client";
// import Image from "next/image";
// import { FaBars } from "react-icons/fa6";
// import ThemeToggleButton from "../ThemeToggleButton";
// import Link from "next/link";
// import Cta from "../Cta";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { useContext } from "react";
// import themeContext from "../../context/themeContext";

// const AboutHero = () => {

//     const context = useContext(themeContext);

//     if (!context) {
//         throw new Error("Hero Section must be used within a ThemeContextProvider");
//     }

//     const { theme, currentTheme } = context;

//     return (

//         <div className="w-full h-[70vh]">
//             <Image
//                 src="/about-story.jpg"
//                 alt="Construction Background"
//                 fill
//                 className="object-cover reltive"
//                 priority

//             />

//             {/* Some Effect on Image */}
//             <div className="absolute inset-0 bg-black/50"></div>
//             {/* Text on Image */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//                     About FA Builders
//                 </h1>

//                 <p className="py-4 mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl">
//                     Building London’s skyline with precision, innovation, and unwavering commitment since 2015.
//                 </p>

//                 {/* Cta*/}
//                 <div className="relative group">
//                     <Cta text={"View Our Projects"} path={"/projects"} />
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default AboutHero;
