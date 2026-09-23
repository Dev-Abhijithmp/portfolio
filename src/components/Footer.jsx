"use client";

import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { KotlinIcon, ComposeIcon, FlutterIcon, NextJsIcon } from "./TechIcons";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-12 px-6 border-t transition-colors duration-300 mt-20 ${
        darkMode ? "bg-[#06080C] border-white/[0.06] text-gray-400" : "bg-white border-slate-200 text-gray-600"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-sm tracking-tight text-white dark:text-gray-100">
              Abhijith M P
            </span>
            <span className="text-gray-600 dark:text-gray-500">•</span>
            <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
              Senior Mobile, Systems & Cloud Engineer
            </span>
          </div>
          <p className="text-[11px] text-gray-500">
            Android (Kotlin & Compose) • Flutter & Supabase • Next.js Web • C++ Audio Engines (Google Oboe)
          </p>
        </div>

        {/* Center Technology Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-kotlin/10 text-kotlin-light border border-kotlin/20 flex items-center gap-1">
            <KotlinIcon className="w-3.5 h-3.5" /> Kotlin
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-compose/10 text-compose border border-compose/20 flex items-center gap-1">
            <ComposeIcon className="w-3.5 h-3.5" /> Compose
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1">
            <FlutterIcon className="w-3.5 h-3.5" /> Flutter
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1">
            <NextJsIcon className="w-3.5 h-3.5" /> Next.js
          </span>
        </div>

        {/* Contact links */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <a
            href="https://github.com/Dev-Abhijithmp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-1.5"
          >
            <i className="fa-brands fa-github text-sm"></i> GitHub
          </a>
          <a
            href="mailto:111abhiabhi@gmail.com"
            className="hover:text-compose transition flex items-center gap-1.5"
          >
            <i className="fa-solid fa-envelope text-xs"></i> Email
          </a>
          <a
            href="tel:+919497747142"
            className="hover:text-cyan-400 transition flex items-center gap-1.5"
          >
            <i className="fa-solid fa-phone text-xs"></i> Phone
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
        <span>© {new Date().getFullYear()} Abhijith M P. Engineered with Next.js & Tailwind CSS.</span>
        <span>Ernakulam, Kerala, India</span>
      </div>
    </footer>
  );
}
