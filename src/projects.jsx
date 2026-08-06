import { useState } from "react";
import { useTheme } from "./ThemeContext";

function Projects() {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const realProjects = [
    {
      id: 1,
      title: "Verbo / Troy VoIP Communication Suite",
      category: "Mobile & VoIP",
      description: "A comprehensive VoIP audio streaming and voice communication application suite. Integrates low-latency Android native C++ audio (Google Oboe), SIP call signaling, ESP32 provisioning, and a synchronized React web management dashboard.",
      architecture: "Mobile client built with Flutter using BLoC pattern, interfacing via JNI with Google Oboe C++ for sub-20ms audio buffer latency. Device provisioning handled over BLE/Wi-Fi to ESP32 microcontrollers.",
      tags: ["Flutter", "Dart", "C++ (Oboe)", "SIP/VoIP", "React.js", "ESP32 Provisioning"],
      icon: "fa-phone-volume",
      featured: true,
      metrics: "Sub-20ms Audio Latency",
    },
    {
      id: 2,
      title: "DDTransport - Logistics & Fleet Platform",
      category: "Mobile & VoIP",
      description: "Cross-platform mobile application designed for transport dispatching, real-time vehicle route tracking, consignment logging, and driver activity management.",
      architecture: "Clean layered architecture with Flutter, Google Maps SDK, custom location background tracking service, and Supabase / Firebase Realtime synchronization.",
      tags: ["Flutter", "Google Maps API", "Firebase Realtime DB", "REST Services"],
      icon: "fa-truck-fast",
      featured: true,
      metrics: "Real-Time Fleet Sync",
    },
    {
      id: 3,
      title: "Transaction Detector & OCR Analyzer",
      category: "AI & Utility",
      description: "Smart utility app that parses incoming financial notifications, SMS alerts, and transaction receipts to generate categorized expense reports and financial analytics.",
      architecture: "Built with Flutter local storage (SQLite/Isar), on-device regex rule engines, and optional MLKit OCR text extraction.",
      tags: ["Flutter", "Dart", "Local Storage", "RegEx / Parser", "Analytics"],
      icon: "fa-receipt",
      featured: false,
      metrics: "100% On-Device Privacy",
    },
    {
      id: 4,
      title: "WiFi Radar - Signal & Network Mapping",
      category: "IoT & Embedded",
      description: "Utility application for discovering nearby wireless networks, analyzing RSSI signal strength metrics, channel overlap, and mapping access point stability.",
      architecture: "Android native Wi-Fi scan manager bridge hooked into Flutter via MethodChannels for live RSSI graph plotting.",
      tags: ["Flutter", "Android Native APIs", "Network Diagnostics", "Charts"],
      icon: "fa-wifi",
      featured: false,
      metrics: "Live RSSI Diagnostics",
    },
    {
      id: 5,
      title: "Japamala - Devotional & Habit Tracker",
      category: "Mobile & VoIP",
      description: "Spiritual tracking and daily devotional prayer app featuring audio playback, counter routines, offline streak stats, and localized multi-language UI support.",
      tags: ["Flutter", "Audio Players", "SQLite", "Shared Preferences"],
      icon: "fa-hands-praying",
      featured: false,
      metrics: "Offline Audio Playback",
    },
    {
      id: 6,
      title: "Personal Analyser & AI Video Automation",
      category: "AI & Utility",
      description: "Local data analysis and video workflow pipeline utilizing Ollama local LLM models, LiteRT Edge ML, and Venice AI video generation scripts.",
      architecture: "Python automation scripts connecting local Ollama REST endpoints with video rendering pipelines and custom prompt templates.",
      tags: ["Local LLM (Ollama)", "LiteRT", "Python", "Media Processing"],
      icon: "fa-wand-magic-sparkles",
      featured: false,
      metrics: "Zero Cloud API Cost",
    },
  ];

  const categories = ["All", "Mobile & VoIP", "IoT & Embedded", "AI & Utility"];

  const filteredProjects = realProjects.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider">
            <i className="fa-solid fa-layer-group"></i> Software Portfolio
          </div>
          <h2 className="text-4xl font-extrabold font-serif">Projects & Systems Showcase</h2>
          <p className={`max-w-2xl mx-auto text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Filter, search, or click on any project card to inspect full technical architecture and metrics.
          </p>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/20"
                    : darkMode
                    ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-gray-400 text-xs"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tags..."
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border outline-none transition duration-200 ${
                darkMode
                  ? "bg-gray-800/80 border-gray-700 text-gray-200 placeholder-gray-500 focus:border-cyan-500"
                  : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-cyan-600 shadow-sm"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200 text-xs"
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
              className="text-xs text-cyan-400 underline font-semibold"
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
                className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group relative ${
                  darkMode
                    ? "bg-[#0F172A]/90 border-gray-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
                    : "bg-white border-gray-200/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 shadow-sm"
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-cyan-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    Featured Build
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl font-bold border border-cyan-500/20 group-hover:scale-110 transition duration-300">
                      <i className={`fa-solid ${project.icon}`}></i>
                    </div>
                    {project.metrics && (
                      <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-cyan-400 transition-colors">
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
                        className={`px-2 py-0.5 text-[11px] rounded-md font-medium border ${
                          darkMode
                            ? "bg-gray-800/60 border-gray-700 text-gray-300"
                            : "bg-slate-100 border-gray-200 text-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-500 pt-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect System Specs</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div
            className={`w-full max-w-2xl p-8 rounded-3xl border shadow-2xl space-y-6 relative transition-all duration-300 ${
              darkMode ? "bg-[#0F172A] border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 flex items-center justify-center text-sm transition"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl font-bold border border-cyan-500/20">
                <i className={`fa-solid ${activeModalProject.icon}`}></i>
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-bold">{activeModalProject.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-gray-300 uppercase tracking-wider text-[11px] mb-1">Project Summary</h4>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{activeModalProject.description}</p>
              </div>

              {activeModalProject.architecture && (
                <div className={`p-4 rounded-xl border ${darkMode ? "bg-gray-900/80 border-gray-800 text-gray-300" : "bg-slate-50 border-gray-200 text-gray-700"}`}>
                  <h4 className="font-bold text-cyan-400 uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-microchip"></i> System Architecture Highlights
                  </h4>
                  <p>{activeModalProject.architecture}</p>
                </div>
              )}

              <div>
                <h4 className="font-bold text-gray-300 uppercase tracking-wider text-[11px] mb-2">Technologies & Tooling</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg text-xs font-medium">
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
                className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl text-xs transition"
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

export default Projects;