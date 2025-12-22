"use client";

import Image from "next/image";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useContext } from "react";
import themeContext from "@/app/context/themeContext";
import Badge from "../Badge";

export default function Leadership() {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Hero Section must be used within a ThemeContextProvider");
  }

  const { currentTheme } = context;

  return (
    <section className={`${currentTheme.background} ${currentTheme.text}`}>
      <div className="w-full flex flex-col justify-evenly gap-6 px-6 md:px-12 mb-20 mt-10">
        {/* Section Title */}
        <div className="mb-4 px-2 md:px-0 flex flex-col justify-center items-center  text-center md:text-left">
          <Badge text="Our Leadership" />
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Director</h2>
          <p className="mt-4 max-w-xl">
            FA Builders Ltd. is led by experienced professionals committed to
            delivering quality, integrity, and reliable construction services
            across London.
          </p>
        </div>

        {/* Director Layout */}
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-6">
          {/* Director Image */}
          <div className="w-full md:w-[40%] max-w-[450px] mx-auto md:mx-0 relative rounded-2xl overflow-hidden">
            <Image
              src="/about-story.jpg"
              alt="Director"
              width={550}
              height={400}
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Director Info */}
          <div className="w-full md:w-[60%] flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-2xl font-bold">Awais Ibrar</h3>

            <p className="text-[#ff9326] text-lg font-semibold">
              Managing Director, FA Builders Ltd.
            </p>

            {/* Quote */}
            <p className="italic leading-relaxed max-w-xl mx-auto md:mx-0">
              “At FA Builders, we don’t just construct buildings — we build
              trust, deliver quality, and make sure every project stands the
              test of time.”
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { FaLinkedin, FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { useContext } from "react";
// import themeContext from "@/app/context/themeContext";

// export default function Leadership() {

//   const context = useContext(themeContext);

//     if (!context) {
//         throw new Error("Hero Section must be used within a ThemeContextProvider");
//     }

//     const { theme, currentTheme } = context;

//   return (
//     <section className={`${currentTheme.background} ${currentTheme.text}`}>
//       <div className="w-full flex flex-col justify-evenly gap-12 px-6 mb-20 mt-10">

//         {/* Section Title */}
//         <div className="mb-4 px-6 flex flex-col md:w-1/2 text-center md:text-left">
//           {/* Small head text */}
//           <p className="text-[#ff9326] mb-2">Leadership</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Meet Our Director</h2>
//           <div className="w-24 h-[2px] bg-[#ff9326] mt-3 mx-auto md:mx-0 rounded-full"></div>

//           <p className="mt-4 max-w-xl">
//             FA Builders Ltd. is led by experienced professionals committed to delivering
//             quality, integrity, and reliable construction services across London.
//           </p>

//         </div>

//         {/* Director Layout */}
//         <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6">

//           {/* Actual Image */}
//           <div className="w-[40%] relative rounded-2xl overflow-hidden">
//             <Image
//               src="/about-story.jpg"
//               alt="Director"
//               width={550}
//               height={400}
//               className="object-cover rounded-2xl"
//               priority
//             />
//           </div>

//           {/* Director Info */}
//           <div className="w-[60%] flex flex-col gap-5 text-center md:text-left">

//             <h3 className="text-2xl font-bold">Awais Ibrar</h3>

//             <p className="text-[#ff9326] text-lg font-semibold">
//               Managing Director, FA Builders Ltd.
//             </p>

//             {/* Quote */}
//             <p className="w-[60%] italic leading-relaxed">
//               “At FA Builders, we don’t just construct buildings —
//               we build trust, deliver quality, and make sure every project
//               stands the test of time.”
//             </p>

//             {/* LinkedIn Icon */}
//             <div className="flex md:justify-start justify-center gap-10 mt-2">
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
//               >
//                 <FaLinkedin size={24} />
//               </a>

//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
//               >
//                 <FaFacebook size={24} />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 className="text-white p-3 rounded-full bg-[#ff9326] hover:bg-[#e6831f] transition shadow-lg"
//               >
//                 <FaInstagram size={24} />
//               </a>
//             </div>

//           </div>

//           {/* Extra Space */}
//           {/* <div></div>
//           <div></div>
//           <div></div> */}
//         </div>

//       </div>
//     </section>
//   );
// }
