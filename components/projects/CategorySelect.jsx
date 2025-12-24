"use client";
import { useState, useRef, useEffect, useContext } from "react";
import { Check, ChevronDown } from "lucide-react";
import themeContext from "@/app/context/themeContext";

export default function CategorySelect({ options, value, onChange }) {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("Must be used within ThemeContextProvider");
  }
  const { currentTheme } = context;

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-48 ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* Selected */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full px-4 py-2 flex items-center justify-between 
                   rounded-lg border text-sm font-medium
                   hover:border-[#ff9326] focus:outline-none`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {value}
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`${currentTheme.card} absolute z-50 mt-2 w-full rounded-lg shadow-lg border-[#fftt66] overflow-hidden`}
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2 text-sm
                hover:bg-[#ff9326]/10 transition
                ${value === opt ? "bg-[#ff9326]/20 text-[#ff9326] font-medium hover:text-[#ff9326]" : "hover:text-[#ff9326]"}`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {opt}
              {value === opt && <Check size={16} className="text-[#ff9326]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
