import { useState } from "react";
import { useTheme } from "./ThemeContext";

export default function About() {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    {
      category: "Mobile & Audio",
      title: "Mobile Architecture & Audio Engineering",
      skills: [
        { name: "Flutter & Dart", level: "95%", desc: "Cross-platform mobile apps, BLoC, Provider, Riverpod architecture" },
        { name: "Android C/C++ Audio (Google Oboe)", level: "88%", desc: "Native JNI audio buffers, low latency rendering" },
        { name: "SIP & VoIP Protocols", level: "85%", desc: "Real-time call signaling, audio codecs, and stream sync" },
        { name: "UI/UX Micro-Animations", level: "90%", desc: "Smooth 60fps Flutter transitions & layout design" },
      ],
    },
    {
      category: "IoT & Systems",
      title: "Embedded Hardware & Systems",
      skills: [
        { name: "ESP32 Firmware & Provisioning", level: "82%", desc: "BLE/Wi-Fi provisioning, hardware sensor integration" },
        { name: "Network Scan & Diagnostic Tools", level: "85%", desc: "Android Wi-Fi scan manager, RSSI signal diagnostics" },
        { name: "Hardware Flashing & RG Tools", level: "80%", desc: "Download tool instructions and firmware validation" },
      ],
    },
    {
      category: "Full-Stack & Cloud",
      title: "Full-Stack Web & Edge AI",
      skills: [
        { name: "React.js & Tailwind CSS", level: "88%", desc: "Glassmorphic responsive dashboards & web portals" },
        { name: "Local LLMs (Ollama, LiteRT)", level: "85%", desc: "On-device quantised AI model execution & APIs" },
        { name: "Supabase & Firebase Backend", level: "90%", desc: "Realtime databases, Auth, & Storage" },
        { name: "Go & REST Microservices", level: "80%", desc: "Lightweight backend microservices" },
      ],
    },
  ];

  const timelineEvents = [
    {
      year: "Present",
      role: "Senior Mobile, IoT & Edge AI Developer",
      desc: "Architecting enterprise VoIP communication suites with Flutter & C++ (Oboe), building local AI automation workflows, and deploying ESP32 IoT hardware tools.",
      tech: ["Flutter", "Oboe C++", "Ollama AI", "ESP32"],
    },
    {
      year: "2023 - 2024",
      role: "Cross-Platform Mobile App Lead",
      desc: "Developed real-time fleet transport platforms (DDTransport), OCR transaction analyzers, and network diagnostic tools.",
      tech: ["Flutter", "Dart", "Firebase", "Google Maps SDK"],
    },
    {
      year: "2022",
      role: "Full-Stack Web & Mobile Developer",
      desc: "Built initial React web platforms, API integrations, and mobile utility applications.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    },
  ];

  const filteredCategories = skillCategories.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider">
            <i className="fa-solid fa-user-gear"></i> Developer Bio & Capabilities
          </div>
          <h2 className="text-4xl font-extrabold font-serif">About & Engineering Expertise</h2>
          <p className={`max-w-2xl mx-auto text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Cross-platform developer specializing in mobile audio engines, embedded ESP32 hardware, and on-device Local AI models.
          </p>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Bio Highlights */}
        <div
          className={`p-8 rounded-3xl border transition-all duration-300 space-y-4 ${
            darkMode ? "bg-[#0F172A]/90 border-gray-800 text-gray-200" : "bg-white border-gray-200 text-gray-800 shadow-sm"
          }`}
        >
          <h3 className="text-2xl font-bold font-serif text-cyan-500 flex items-center gap-2">
            <i className="fa-solid fa-code-commit"></i> Systems & Mobile Developer Profile
          </h3>
          <p className="leading-relaxed text-sm sm:text-base">
            I am <strong className={darkMode ? "text-white" : "text-gray-900"}>Abhijith M P</strong>, a software engineer based in Ernakulam, Kerala. Over years of active project development, I have focused on solving real-world challenges across mobile, embedded hardware, and AI domains.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            My engineering stack combines <strong className={darkMode ? "text-white" : "text-gray-900"}>Flutter cross-platform apps</strong> with native C++ audio drivers (<strong className={darkMode ? "text-white" : "text-gray-900"}>Google Oboe</strong>), real-time <strong className={darkMode ? "text-white" : "text-gray-900"}>SIP/VoIP protocols</strong>, wireless signal analysis, and privacy-first local LLM integration via <strong className={darkMode ? "text-white" : "text-gray-900"}>Ollama & LiteRT</strong>.
          </p>
        </div>

        {/* Interactive Skill Category Filters */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl font-bold font-serif">Technical Skill Matrix</h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Mobile & Audio", "IoT & Systems", "Full-Stack & Cloud"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/20"
                      : darkMode
                      ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700 border border-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredCategories.map((catGroup) => (
              <div
                key={catGroup.title}
                className={`p-6 rounded-2xl border transition-all duration-300 space-y-5 ${
                  darkMode ? "bg-[#0F172A]/90 border-gray-800" : "bg-white border-gray-200/80 shadow-sm"
                }`}
              >
                <h4 className="font-bold text-base border-b pb-3 flex items-center justify-between border-gray-700/50">
                  <span className="flex items-center gap-2 text-cyan-400">
                    <i className="fa-solid fa-layer-group"></i> {catGroup.title}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">
                    {catGroup.category}
                  </span>
                </h4>

                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-cyan-400 font-mono font-bold">{skill.level}</span>
                      </div>
                      <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-700"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                      <p className={`text-[11px] ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Career Timeline */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-serif text-center">Engineering Evolution</h3>

          <div className="relative border-l-2 border-cyan-500/30 pl-6 ml-4 sm:ml-8 space-y-8">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 space-y-3 ${
                    darkMode
                      ? "bg-[#0F172A]/90 border-gray-800 hover:border-cyan-500/40"
                      : "bg-white border-gray-200/80 shadow-sm hover:border-cyan-500/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md inline-block w-max">
                      {evt.year}
                    </span>
                    <h4 className="text-lg font-bold">{evt.role}</h4>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {evt.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evt.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          darkMode ? "bg-gray-800 text-gray-300" : "bg-slate-100 text-gray-700"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
