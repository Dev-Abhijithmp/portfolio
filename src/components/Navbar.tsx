"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { KotlinIcon, ComposeIcon } from "./TechIcons";

interface NavLinkItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { darkMode, toggleTheme } = useTheme();

  const navLinks: NavLinkItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About & Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contactus", label: "Contact" },
  ];

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b backdrop-blur-xl ${
        darkMode
          ? "bg-[#08090D]/80 border-white/[0.07] text-gray-100"
          : "bg-white/85 border-slate-200/80 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Kotlin / Compose Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-kotlin via-kotlin-pink to-compose shadow-sm group-hover:scale-105 transition-transform duration-200 p-[1.5px]">
              <div
                className={`w-full h-full rounded-[10px] flex items-center justify-center transition-colors ${
                  darkMode ? "bg-[#08090D]" : "bg-white"
                }`}
              >
                <KotlinIcon className="w-4 h-4 group-hover:rotate-6 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base tracking-tight bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:opacity-90 transition">
                Abhijith M P
              </span>
              <span className="text-[10px] font-mono tracking-wider text-gray-400 -mt-0.5 flex items-center gap-1">
                <ComposeIcon className="w-2.5 h-2.5 text-compose" />
                Systems & Android
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                    active
                      ? darkMode
                        ? "bg-white/[0.08] text-white border border-white/[0.12] shadow-sm"
                        : "bg-slate-100 text-slate-900 font-bold border border-slate-200"
                      : darkMode
                      ? "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Subtle Divider */}
            <div className={`h-4 w-px mx-2 ${darkMode ? "bg-white/10" : "bg-slate-200"}`}></div>

            {/* GitHub Profile */}
            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08]"
                  : "bg-slate-50 border-slate-200 text-gray-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
              title="GitHub Profile (Dev-Abhijithmp)"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github text-sm"></i>
            </a>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? "bg-white/[0.03] border-white/[0.08] text-amber-400 hover:bg-white/[0.08]"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"} text-sm`}></i>
            </button>

            {/* Quick Action Button */}
            <Link
              href="/contactus"
              className="ml-2 px-3.5 py-1.5 bg-gradient-to-r from-kotlin via-kotlin-pink to-compose hover:opacity-90 text-white font-semibold rounded-xl text-xs shadow-sm hover:shadow-kotlin/20 transition duration-200 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-paper-plane text-[10px]"></i> Get in Touch
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border text-sm ${
                darkMode ? "bg-white/[0.04] border-white/10 text-gray-300" : "bg-slate-100 border-slate-200 text-gray-700"
              }`}
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border text-sm ${
                darkMode ? "bg-white/[0.04] border-white/10 text-amber-400" : "bg-slate-100 border-slate-200 text-gray-700"
              }`}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border ${
                darkMode ? "bg-white/[0.04] border-white/10 text-gray-200" : "bg-slate-100 border-slate-200 text-gray-800"
              }`}
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-sm`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className={`md:hidden pb-4 pt-2 space-y-1.5 flex flex-col border-t mt-2 ${darkMode ? "border-white/10" : "border-slate-100"}`}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-semibold px-3 py-2 rounded-xl transition ${
                    active
                      ? darkMode
                        ? "bg-white/[0.08] text-white border border-white/15"
                        : "bg-slate-100 text-slate-900 font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
