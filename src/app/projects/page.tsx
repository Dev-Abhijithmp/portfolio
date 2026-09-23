"use client";

import { useState } from "react";
import { useTheme } from "../../components/ThemeContext";
import {
  ComposeIcon,
  FlutterIcon,
  NextJsIcon,
  ShopifyIcon,
} from "../../components/TechIcons";

interface Project {
  id: number;
  title: string;
  category: string;
  allCategories?: string[];
  description: string;
  architecture: string;
  tags: string[];
  icon: string;
  badgeType?: "compose" | "flutter" | "nextjs" | "ai";
  featured: boolean;
  metrics?: string;
}

export default function ProjectsPage() {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const realProjects: Project[] = [
    {
      id: 1,
      title: "Verbo / SoundPulse VoIP Suite & Next.js Portal",
      category: "Kotlin & Compose",
      allCategories: ["Kotlin & Compose", "Next.js & Web", "IoT & Embedded"],
      description: "An enterprise-grade VoIP audio streaming and voice communication ecosystem. Features a native Android client built with Kotlin & Jetpack Compose and low-latency Google Oboe C++ NDK engine, alongside a modern Next.js management web portal, SIP call signaling, and BLE provisioning to ESP32 microcontrollers.",
      architecture: "Mobile App: Native Android built with Kotlin Coroutines and StateFlow with 100% Jetpack Compose UI. Bridges via JNI to Google Oboe C++ for sub-20ms audio buffer latency. Web Portal: Built with Next.js (App Router) and Tailwind CSS for real-time fleet call routing, provisioning, and audio telemetry.",
      tags: ["Kotlin", "Jetpack Compose", "Next.js Web", "Android NDK (Oboe C++)", "SIP/VoIP", "ESP32 BLE", "Coroutines Flow"],
      icon: "fa-phone-volume",
      badgeType: "compose",
      featured: true,
      metrics: "Sub-20ms Oboe Latency & Next.js",
    },
    {
      id: 2,
      title: "DDTransport - Fleet Logistics Platform",
      category: "Flutter & Mobile",
      allCategories: ["Flutter & Mobile"],
      description: "Cross-platform mobile application engineered for commercial transport fleet dispatching, live driver route tracking, consignment logging, and vehicle activity management.",
      architecture: "Cross-platform client built with Flutter using BLoC/Provider architecture, Google Maps SDK for real-time route plotting, and a robust Supabase backend for PostgreSQL real-time database sync, user authentication, and offline trip cache.",
      tags: ["Flutter", "Dart", "Supabase Backend", "PostgreSQL", "Google Maps SDK", "Real-Time Fleet Sync"],
      icon: "fa-truck-fast",
      badgeType: "flutter",
      featured: true,
      metrics: "Real-Time Supabase Sync",
    },
    {
      id: 3,
      title: "Japamala - E-Commerce & Devotional Platform",
      category: "Next.js & Web",
      allCategories: ["Next.js & Web"],
      description: "Modern headless e-commerce web platform built with Next.js for spiritual merchandise and devotional routines, fully integrated with Shopify Storefront API.",
      architecture: "Engineered with Next.js (App Router), Tailwind CSS, and headless Shopify Storefront GraphQL API. Implements server-side rendering (SSR/ISR) for optimal SEO, lightning-fast cart interactions, and secure Shopify checkout.",
      tags: ["Next.js", "Shopify Storefront API", "GraphQL", "Tailwind CSS", "Headless E-Commerce", "Shopify Checkout"],
      icon: "fa-bag-shopping",
      badgeType: "nextjs",
      featured: true,
      metrics: "Shopify Headless Storefront",
    },
    {
      id: 4,
      title: "Transaction Detector & OCR Expense Tracker",
      category: "Flutter & Mobile",
      allCategories: ["Flutter & Mobile", "AI & Utility"],
      description: "Smart financial utility mobile application built with Flutter that automatically parses incoming SMS notifications, bank alert receipts, and payment statements into categorised expense analytics.",
      architecture: "Cross-platform mobile app built with Flutter, on-device SQLite/Isar local storage, Google MLKit on-device OCR, and high-speed RegEx pattern engines for 100% private, on-device data parsing without cloud calls.",
      tags: ["Flutter", "Dart", "MLKit OCR", "SQLite / Isar", "RegEx Parser", "100% Privacy"],
      icon: "fa-receipt",
      badgeType: "flutter",
      featured: false,
      metrics: "100% On-Device Privacy",
    },
    {
      id: 5,
      title: "WiFi Radar - Signal & Network Diagnostics",
      category: "Flutter & Mobile",
      allCategories: ["Flutter & Mobile", "IoT & Embedded"],
      description: "Utility application for discovering nearby wireless networks, analyzing RSSI signal strength metrics, channel overlap, and mapping access point stability.",
      architecture: "Built with Flutter interfacing via MethodChannels with Android native WifiManager APIs for hardware wireless signal polling and real-time RSSI graph plotting.",
      tags: ["Flutter", "Android Native APIs", "MethodChannels", "Network Diagnostics", "RSSI Graph"],
      icon: "fa-wifi",
      badgeType: "flutter",
      featured: false,
      metrics: "Live RSSI Diagnostics",
    },
    {
      id: 6,
      title: "Local Edge AI & Video Automation Pipeline",
      category: "AI & Utility",
      allCategories: ["AI & Utility"],
      description: "On-device intelligence and media generation workflow utilizing local quantized LLMs (Ollama) and LiteRT Edge ML models.",
      architecture: "Private AI inference pipeline linking local Ollama HTTP REST endpoints with custom prompt processors and automated video generation routines.",
      tags: ["Local LLM (Ollama)", "LiteRT", "Python", "Zero Cloud Cost", "Private Inference"],
      icon: "fa-wand-magic-sparkles",
      badgeType: "ai",
      featured: false,
      metrics: "Zero Cloud API Cost",
    },
  ];

  const categories: string[] = [
    "All",
    "Kotlin & Compose",
    "Flutter & Mobile",
    "Next.js & Web",
    "IoT & Embedded",
    "AI & Utility",
  ];

  const filteredProjects = realProjects.filter((p) => {
    const matchesCat =
      selectedCategory === "All" ||
      p.category === selectedCategory ||
      (p.allCategories && p.allCategories.includes(selectedCategory));
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 px-6 relative">
      {/* Background ambient glows */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-indigo-500/[0.06] rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute top-96 right-1/4 w-80 h-80 bg-compose/[0.06] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
            <ComposeIcon className="w-3.5 h-3.5" /> Engineered Systems & Products
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading">Featured Projects & Systems</h2>
          <p className={`max-w-2xl mx-auto text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Production applications featuring <strong className="text-kotlin-light font-bold">Kotlin & Jetpack Compose</strong>, <strong className="text-sky-400 font-bold">Flutter & Supabase</strong>, and <strong className="text-emerald-400 font-bold">Next.js & Shopify</strong>.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-kotlin via-indigo-500 to-compose mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-kotlin via-indigo-600 to-compose text-white shadow-md shadow-kotlin/25 scale-105"
                    : darkMode
                    ? "bg-[#0E1017] text-gray-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.08]"
                    : "bg-white text-gray-700 hover:bg-slate-100 border border-slate-200 shadow-sm"
                }`}
              >
                {cat === "Kotlin & Compose" && <ComposeIcon className="w-3.5 h-3.5" />}
                {cat === "Flutter & Mobile" && <FlutterIcon className="w-3.5 h-3.5" />}
                {cat === "Next.js & Web" && <NextJsIcon className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-gray-400 text-xs"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Kotlin, Flutter, Supabase, Next.js..."
              className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs border outline-none transition duration-200 ${
                darkMode
                  ? "bg-[#0E1017] border-white/[0.08] text-gray-200 placeholder-gray-500 focus:border-kotlin"
                  : "bg-white border-slate-200 text-gray-800 placeholder-gray-400 focus:border-kotlin shadow-sm"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <i className="fa-solid fa-folder-open text-4xl text-gray-500"></i>
            <p className="text-gray-400 font-medium text-sm">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs text-kotlin-light underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group relative ${
                  darkMode
                    ? "bg-[#0E1017] border-white/[0.08] hover:border-white/[0.2] hover:shadow-2xl hover:shadow-indigo-500/10"
                    : "bg-white border-slate-200 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 shadow-sm"
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-5 right-5 bg-gradient-to-r from-kotlin via-indigo-600 to-compose text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    Featured Build
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] text-gray-300 flex items-center justify-center text-xl font-bold border border-white/[0.08] group-hover:scale-110 transition duration-300">
                      {project.badgeType === "compose" ? (
                        <ComposeIcon className="w-6 h-6 text-compose" />
                      ) : project.badgeType === "flutter" ? (
                        <FlutterIcon className="w-6 h-6 text-sky-400" />
                      ) : project.badgeType === "nextjs" ? (
                        <NextJsIcon className="w-6 h-6 text-white" />
                      ) : (
                        <i className={`fa-solid ${project.icon}`}></i>
                      )}
                    </div>
                    {project.metrics && (
                      <span className="text-[11px] font-mono font-bold text-compose bg-compose/10 px-2.5 py-1 rounded-lg border border-compose/20 flex items-center gap-1">
                        {project.tags.includes("Shopify Storefront API") && <ShopifyIcon className="w-3.5 h-3.5 text-emerald-400" />}
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-kotlin-light uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.tags.includes("Next.js") && (
                        <span className="text-[10px] font-mono font-bold text-gray-300 bg-white/[0.06] px-2 py-0.5 rounded-md border border-white/[0.08]">
                          Next.js
                        </span>
                      )}
                      {project.tags.includes("Supabase Backend") && (
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          Supabase
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold font-heading mt-1 group-hover:text-kotlin-light transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className={`line-clamp-3 leading-relaxed text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 text-[10px] font-mono rounded-lg font-medium border ${
                          tag.includes("Kotlin") || tag.includes("Compose")
                            ? "bg-kotlin/10 border-kotlin/30 text-kotlin-light font-bold"
                            : tag.includes("Flutter")
                            ? "bg-sky-500/10 border-sky-500/30 text-sky-400 font-bold"
                            : tag.includes("Next.js")
                            ? "bg-white/10 border-white/20 text-white font-bold"
                            : tag.includes("Supabase") || tag.includes("Shopify")
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold"
                            : darkMode
                            ? "bg-white/[0.03] border-white/[0.06] text-gray-400"
                            : "bg-slate-100 border-slate-200 text-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-white pt-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect System Specs</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`w-full max-w-2xl p-8 rounded-3xl border shadow-2xl space-y-6 relative transition-all duration-300 ${
              darkMode ? "bg-[#0E1017] border-white/[0.15] text-gray-100" : "bg-white border-slate-200 text-gray-900"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-gray-300 flex items-center justify-center text-sm transition"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] text-gray-300 flex items-center justify-center text-2xl font-bold border border-white/[0.08]">
                {activeModalProject.badgeType === "compose" ? (
                  <ComposeIcon className="w-8 h-8 text-compose" />
                ) : activeModalProject.badgeType === "flutter" ? (
                  <FlutterIcon className="w-8 h-8 text-sky-400" />
                ) : activeModalProject.badgeType === "nextjs" ? (
                  <NextJsIcon className="w-8 h-8 text-white" />
                ) : (
                  <i className={`fa-solid ${activeModalProject.icon}`}></i>
                )}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-kotlin-light uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-bold font-heading">{activeModalProject.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-gray-400 uppercase tracking-wider text-[11px] mb-1">
                  Project Overview
                </h4>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {activeModalProject.description}
                </p>
              </div>

              {activeModalProject.architecture && (
                <div className={`p-4 rounded-2xl border ${darkMode ? "bg-black/30 border-white/[0.06] text-gray-300" : "bg-slate-50 border-slate-200 text-gray-700"}`}>
                  <h4 className="font-bold text-compose uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-microchip"></i> System Architecture Highlights
                  </h4>
                  <p>{activeModalProject.architecture}</p>
                </div>
              )}

              <div>
                <h4 className="font-bold text-gray-400 uppercase tracking-wider text-[11px] mb-2">
                  Technologies & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-medium border ${
                        t.includes("Kotlin") || t.includes("Compose")
                          ? "bg-kotlin/15 border-kotlin/30 text-kotlin-light font-bold"
                          : t.includes("Flutter")
                          ? "bg-sky-500/15 border-sky-500/30 text-sky-400 font-bold"
                          : t.includes("Next.js")
                          ? "bg-white/15 border-white/30 text-white font-bold"
                          : t.includes("Supabase") || t.includes("Shopify")
                          ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 font-bold"
                          : "bg-white/[0.04] border-white/[0.08] text-gray-300"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 bg-gradient-to-r from-kotlin via-indigo-600 to-compose hover:opacity-95 text-white font-bold rounded-xl text-xs transition shadow-md shadow-kotlin/20"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
