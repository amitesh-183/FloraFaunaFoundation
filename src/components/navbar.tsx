"use client";

import { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon, HeartIcon } from "@heroicons/react/24/solid";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm border-b border-stone-100 dark:border-stone-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
              <HeartIcon className="h-4 w-4 text-white" />
            </div>
            <span className="text-base lg:text-lg font-semibold text-stone-800 dark:text-white tracking-tight">
              Flora Fauna <span className="text-emerald-600 dark:text-emerald-400">Foundation</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#donate"
              className="px-5 py-2.5 text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white rounded-full active:scale-95 transition-all duration-200 shadow-sm hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 hover:shadow-md"
            >
              Donate Now 🐾
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-100 dark:border-stone-800 px-6 py-4">
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#donate"
            className="block w-full text-center px-5 py-2.5 text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-all duration-200"
          >
            Donate Now 🐾
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
