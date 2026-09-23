"use client";

import { useState } from "react";
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
    <div className="min-h-screen py-12 px-6 relative bg-grid-subtle">
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--accent-subtle)] border border-[var(--border-active)] text-[var(--accent)] text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
            <ComposeIcon className="w-3.5 h-3.5" /> Engineered Systems & Products
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">Featured Projects & Systems</h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[var(--text-secondary)]">
            Production systems across <strong className="text-[var(--accent)] font-semibold">Kotlin & Jetpack Compose</strong>, <strong className="text-[var(--text-primary)] font-semibold">Flutter & Supabase</strong>, and <strong className="text-[var(--text-primary)] font-semibold">Next.js & Shopify</strong>.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-sm font-bold scale-105"
                    : "bg-[var(--bg-card)] border border-[var(--border-medium)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)]"
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
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-[var(--text-muted)] text-xs"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Kotlin, Flutter, Supabase, Next.js..."
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs border border-[var(--border-medium)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition duration-150 focus:border-[var(--border-active)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <i className="fa-solid fa-folder-open text-4xl text-[var(--text-muted)]"></i>
            <p className="text-[var(--text-secondary)] font-medium text-sm">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs text-[var(--accent)] underline font-semibold"
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
                className="p-7 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] hover:border-[var(--border-active)] transition-all duration-200 flex flex-col justify-between cursor-pointer group relative shadow-sm"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-5 right-5 bg-[var(--accent)] text-[var(--accent-text)] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-text)]"></span>
                    Featured Build
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-medium)] text-[var(--accent)] flex items-center justify-center text-xl font-bold transition duration-200">
                      {project.badgeType === "compose" ? (
                        <ComposeIcon className="w-6 h-6 text-[var(--accent)]" />
                      ) : project.badgeType === "flutter" ? (
                        <FlutterIcon className="w-6 h-6 text-[var(--accent)]" />
                      ) : project.badgeType === "nextjs" ? (
                        <NextJsIcon className="w-6 h-6 text-[var(--accent)]" />
                      ) : (
                        <i className={`fa-solid ${project.icon}`}></i>
                      )}
                    </div>
                    {project.metrics && (
                      <span className="text-[11px] font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded-lg border border-[var(--border-active)] flex items-center gap-1">
                        {project.tags.includes("Shopify Storefront API") && <ShopifyIcon className="w-3.5 h-3.5 text-[var(--accent)]" />}
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.tags.includes("Next.js") && (
                        <span className="text-[10px] font-mono font-semibold text-[var(--text-muted)] bg-[var(--bg-surface)] px-2 py-0.5 rounded-md border border-[var(--border-subtle)]">
                          Next.js
                        </span>
                      )}
                      {project.tags.includes("Supabase Backend") && (
                        <span className="text-[10px] font-mono font-semibold text-[var(--text-muted)] bg-[var(--bg-surface)] px-2 py-0.5 rounded-md border border-[var(--border-subtle)]">
                          Supabase
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold font-heading mt-1 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="line-clamp-3 leading-relaxed text-xs sm:text-sm text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-mono rounded-lg font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)] group-hover:text-[var(--accent)] pt-1 group-hover:translate-x-1 transition-transform">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl p-8 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-surface)] shadow-2xl space-y-6 relative transition-all duration-200 text-[var(--text-primary)]">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[var(--bg-card)] hover:bg-[var(--border-medium)] border border-[var(--border-medium)] text-[var(--text-secondary)] flex items-center justify-center text-sm transition"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)] flex items-center justify-center text-2xl font-bold text-[var(--accent)]">
                {activeModalProject.badgeType === "compose" ? (
                  <ComposeIcon className="w-8 h-8 text-[var(--accent)]" />
                ) : activeModalProject.badgeType === "flutter" ? (
                  <FlutterIcon className="w-8 h-8 text-[var(--accent)]" />
                ) : activeModalProject.badgeType === "nextjs" ? (
                  <NextJsIcon className="w-8 h-8 text-[var(--accent)]" />
                ) : (
                  <i className={`fa-solid ${activeModalProject.icon}`}></i>
                )}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">{activeModalProject.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-[var(--text-muted)] uppercase tracking-wider text-[11px] mb-1">
                  Project Overview
                </h4>
                <p className="text-[var(--text-secondary)]">
                  {activeModalProject.description}
                </p>
              </div>

              {activeModalProject.architecture && (
                <div className="p-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-card)]">
                  <h4 className="font-bold text-[var(--accent)] uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-microchip"></i> System Architecture Highlights
                  </h4>
                  <p className="text-[var(--text-secondary)]">{activeModalProject.architecture}</p>
                </div>
              )}

              <div>
                <h4 className="font-bold text-[var(--text-muted)] uppercase tracking-wider text-[11px] mb-2">
                  Technologies & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]"
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
                className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-text)] font-semibold rounded-xl text-xs transition shadow-sm"
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
