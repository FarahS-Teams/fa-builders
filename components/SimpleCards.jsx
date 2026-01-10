import themeContext from "@/app/context/themeContext";
import React, { useContext } from "react";

export default function SimpleCards({ items, content }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {content}
      </div>

    </div>
  );
}
