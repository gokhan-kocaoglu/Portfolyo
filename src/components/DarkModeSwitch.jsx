import { useAppContext } from "../context/AppContext";
import React from "react";

export default function DarkModeSwitch() {
  const { theme, toggleTheme } = useAppContext();
  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      className="flex items-center gap-2 focus:outline-none"
      onClick={toggleTheme}
    >
      {/* Switch görseli */}
      <span className="w-14 h-6 flex items-center justify-end bg-[#E92577] dark:bg-black rounded-full px-1 transition-colors duration-200">
        <span
          className={`relative w-4 h-4 rounded-full shadow transition-transform duration-200
      ${theme === "dark" ? "bg-[#FFE86E] -translate-x-8" : "bg-[#FFE86E]"}
    `}
        >
          {theme === "dark" && (
            <span className="absolute w-4 h-4 rounded-full bg-black left-1.5 top-0"></span>
          )}
        </span>
      </span>
      <span className="tracking-widest text-[15px] dark:text-[#ffffff] font-bold font-inter text-[#777777] select-none">
        {theme === "dark" ? "LIGHT" : "DARK"} MODE
      </span>
    </button>
  );
}
