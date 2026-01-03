import themeContext from "@/app/context/themeContext";
import React, { useContext } from "react";

export default function SimpleCards({ items, content }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-3 lg:gap-10">
        {content}
      </div>
    </div>
  );
}
