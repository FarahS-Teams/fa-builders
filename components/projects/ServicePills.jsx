"use client";
import { useRef, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import themeContext from "@/app/context/themeContext";
const ServicePills = ({
  services,
  activeService,
  activeCategory,
  applyFilter,
}) => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Theme provider missing");
  const { currentTheme } = context;

  const scrollRef = useRef(null);
  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text} relative flex items-center w-[80vw] lg:w-[70vw]`}
    >
      {/* Prev */}
      <button
        onClick={() => scroll("left")}
        className="shrink-0 h-9 w-9
                   flex items-center justify-center
                   rounded-full border-2 border-secondary
                   hover:bg-secondary/10
                   hidden md:flex"
      >
        <ChevronLeft size={20} className="text-secondary" />
      </button>

      {/* Pills */}
      <div
        ref={scrollRef}
        className="mx-3 flex gap-2
                   overflow-x-auto overflow-y-hidden
                   whitespace-nowrap scroll-smooth
                   no-scrollbar"
      >
        {services.map((serv) => (
          <button
            key={serv}
            onClick={() => applyFilter(activeCategory, serv)}
            className={`shrink-0 px-1 lg:px-5 py-1 lg:py-2 text-sm rounded-full transition border
                        ${
                          activeService === serv
                            ? "bg-secondary text-white bg-secondary border-none"
                            : "border hover:bg-secondary/10 hover:text-secondary/90"
                        }`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {serv}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => scroll("right")}
        className="shrink-0 h-9 w-9
                   flex items-center justify-center
                   rounded-full border-2 border-secondary
                   hover:bg-secondary/10
                   hidden md:flex"
      >
        <ChevronRight size={20} className="text-secondary" />
      </button>
    </div>
  );
};

export default ServicePills;
