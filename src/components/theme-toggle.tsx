"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/providers/theme-context";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-xl flex items-center justify-center text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-90"
    >
      <SunIcon
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
        }`}
      />
      <MoonIcon
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
