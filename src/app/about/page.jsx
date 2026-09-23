"use client";

import { useState } from "react";
import { useTheme } from "../../components/ThemeContext";
import {
  KotlinIcon,
  ComposeIcon,
  AndroidIcon,
  FlutterIcon,
  NextJsIcon,
} from "../../components/TechIcons";

export default function AboutPage() {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    {
      category: "Kotlin & Android Native",
      title: "Modern Android, Kotlin & Jetpack Compose",
      icon: "compose",
      skills: [
        {
          name: "Kotlin 2.0+ & Coroutines",
          level: "96%",
          desc: "Idiomatic Kotlin, Structured Concurrency, StateFlow, SharedFlow & Flow transforms",
          badge: "Kotlin Core",
        },
        {
          name: "Jetpack Compose & Material 3",
          level: "95%",
          desc: "Declarative layouts, custom Modifiers, Canvas animations & Recomposition tuning",
          badge: "Compose UI",
        },
        {
          name: "Android Architecture & Jetpack",
          level: "92%",
          desc: "Clean Architecture, MVI / MVVM, Hilt & Koin DI, Room DB, WorkManager",
          badge: "Architecture",
        },
        {
          name: "Compose Multiplatform (KMP)",
          level: "88%",
          desc: "Code sharing between Android and Desktop / iOS with Kotlin Multiplatform",
          badge: "KMP Multiplatform",
        },
      ],
    },
    {
      category: "Flutter & Cross-Platform",
      title: "Flutter & Supabase Mobile Engineering",
      icon: "flutter",
      skills: [
        {
          name: "Flutter & Dart",
          level: "94%",
          desc: "Production mobile apps (DDTransport, Expense Tracker, WiFi Radar) with BLoC and Provider",
          badge: "Flutter",
        },
        {
          name: "Supabase & PostgreSQL Backend",
          level: "91%",
          desc: "Realtime databases, Row Level Security (RLS), Auth, fleet telemetry sync, and edge storage",
          badge: "Supabase / BaaS",
        },
        {
          name: "On-Device MLKit & OCR",
          level: "88%",
          desc: "100% offline financial SMS parsing and transaction receipt analysis engine",
          badge: "On-Device ML",
        },
      ],
    },
    {
      category: "Audio & Systems (C++)",
      title: "Audio Engineering & Android NDK",
      icon: "audio",
      skills: [
        {
          name: "Android C/C++ Audio (Google Oboe)",
          level: "90%",
          desc: "Native JNI audio streams, sub-20ms low latency hardware buffers, OpenSL ES fallback",
          badge: "NDK / C++",
        },
        {
          name: "SIP & VoIP Protocols",
          level: "86%",
          desc: "Real-time call signaling, audio codecs (Opus, PCMU), jitter buffers, and stream sync",
          badge: "VoIP Engine",
        },
        {
          name: "Android Hardware & Wi-Fi APIs",
          level: "88%",
          desc: "WifiManager scan routines, RSSI signal diagnostics, and BLE GATT clients",
          badge: "Hardware APIs",
        },
      ],
    },
    {
      category: "Next.js & Cloud",
      title: "Next.js Web & Shopify E-Commerce",
      icon: "nextjs",
      skills: [
        {
          name: "Next.js (App Router) & React",
          level: "90%",
          desc: "Full-stack SSR/ISR web portals, server actions, and Verbo web management dashboard",
          badge: "Next.js",
        },
        {
          name: "Shopify Storefront & GraphQL",
          level: "88%",
          desc: "Headless e-commerce (Japamala) with Shopify Storefront API, cart state, and checkout flows",
          badge: "Shopify Headless",
        },
        {
          name: "Tailwind CSS & Design Systems",
          level: "95%",
          desc: "Sophisticated glassmorphism, responsive architectural layouts, and dark/light palettes",
          badge: "Design Systems",
        },
      ],
    },
    {
      category: "IoT & Edge AI",
      title: "Embedded Systems & On-Device ML",
      icon: "iot",
      skills: [
        {
          name: "ESP32 Firmware & Provisioning",
          level: "84%",
          desc: "BLE/Wi-Fi provisioning protocols, sensor telemetry, and hardware download tools",
          badge: "ESP32",
        },
        {
          name: "Local LLMs (Ollama, LiteRT)",
          level: "86%",
          desc: "On-device quantized AI execution, zero-cloud API dependency, private data inference",
          badge: "Local AI",
        },
      ],
    },
  ];

  const timelineEvents = [
    {
      year: "Present",
      role: "Lead Systems & Android Engineer",
      desc: "Architecting the Verbo VoIP communication suite with Kotlin & Jetpack Compose, the Verbo Next.js web portal, low-latency Google Oboe C++ audio engines, and BLE provisioning to ESP32 microcontrollers.",
      tech: ["Kotlin", "Jetpack Compose", "Next.js", "Oboe C++", "ESP32", "Supabase"],
    },
    {
      year: "2023 - 2024",
      role: "Senior Mobile & Web Developer",
      desc: "Developed the DDTransport fleet logistics platform with Flutter & Supabase real-time backend, the on-device OCR expense tracker in Flutter, and the Japamala headless Next.js Shopify e-commerce platform.",
      tech: ["Flutter", "Supabase", "Next.js", "Shopify API", "MLKit OCR", "Dart"],
    },
    {
      year: "2022",
      role: "Full-Stack Web & Mobile Developer",
      desc: "Constructed web dashboard platforms with React and Tailwind CSS, implemented microservice APIs, and published utility applications.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "SQLite"],
    },
  ];

  const filteredCategories = skillCategories.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  return (
    <div className="min-h-screen py-12 px-6 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-indigo-500/[0.06] rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute top-96 left-1/4 w-80 h-80 bg-compose/[0.06] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
            <KotlinIcon className="w-3.5 h-3.5" /> Engineer Profile & Competencies
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading">About & Technical Expertise</h2>
          <p className={`max-w-2xl mx-auto text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Specializing in modern Android with <strong className="text-kotlin-light font-bold">Kotlin & Jetpack Compose</strong>, cross-platform mobile with <strong className="text-sky-400 font-bold">Flutter & Supabase</strong>, modern web with <strong className="text-white font-bold">Next.js & Shopify</strong>, and low-latency C++ audio engines.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-kotlin via-indigo-500 to-compose mx-auto rounded-full"></div>
        </div>

        {/* Bio Highlights Card */}
        <div
          className={`p-8 rounded-3xl border transition-all duration-300 space-y-5 ${
            darkMode ? "bg-[#0E1017] border-white/[0.08] text-gray-200" : "bg-white border-slate-200 text-gray-800 shadow-sm"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-white/[0.08]">
            <h3 className="text-2xl font-bold font-heading text-white dark:text-gray-100 flex items-center gap-2.5">
              <AndroidIcon className="w-6 h-6 text-compose" />
              <span>Abhijith M P — Systems & Mobile Engineer</span>
            </h3>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-gray-300 border border-white/[0.08] self-start sm:self-auto">
              Ernakulam, Kerala, India
            </span>
          </div>

          <p className="leading-relaxed text-xs sm:text-sm">
            I am a mobile, systems, and full-stack software engineer driven by crafting production-grade software architectures. My core strength centers on <strong className="text-kotlin-light font-bold">Modern Android Engineering</strong> using <strong className="text-compose font-bold">Kotlin & Jetpack Compose</strong>, following clean MVI/MVVM design patterns, and asynchronous Coroutines/Flow pipelines.
          </p>

          <p className="leading-relaxed text-xs sm:text-sm">
            Alongside native Android, I build scalable cross-platform mobile apps with <strong className="text-sky-400 font-bold">Flutter & Supabase</strong> (DDTransport, Expense Tracker), modern web portals and headless e-commerce with <strong className="text-white font-bold">Next.js & Shopify</strong> (Japamala, Verbo Web), low-level audio streaming with <strong className="text-compose font-bold">Google Oboe C++ NDK</strong>, and embedded <strong className="text-gray-200 font-bold">ESP32 IoT BLE</strong> device provisioning.
          </p>

          {/* Quick Technical Badges */}
          <div className="pt-2 flex flex-wrap gap-2">
            {[
              "Kotlin 2.0+",
              "Jetpack Compose",
              "Coroutines StateFlow",
              "Flutter & Dart",
              "Supabase Backend",
              "Next.js (App Router)",
              "Shopify Storefront",
              "Google Oboe C++",
              "ESP32 BLE",
              "Ollama Local AI",
            ].map((badge) => (
              <span
                key={badge}
                className={`text-[11px] font-mono px-3 py-1 rounded-xl border ${
                  badge.includes("Kotlin") || badge.includes("Compose")
                    ? "bg-kotlin/10 border-kotlin/30 text-kotlin-light font-semibold"
                    : badge.includes("Flutter")
                    ? "bg-sky-500/10 border-sky-500/30 text-sky-400 font-semibold"
                    : badge.includes("Next.js")
                    ? "bg-white/10 border-white/20 text-white font-semibold"
                    : badge.includes("Supabase") || badge.includes("Shopify")
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-semibold"
                    : darkMode
                    ? "bg-white/[0.04] border-white/[0.08] text-gray-300"
                    : "bg-gray-100 border-gray-200 text-gray-700"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Skill Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl font-bold font-heading">Engineering Skill Matrix</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "All",
                "Kotlin & Android Native",
                "Flutter & Cross-Platform",
                "Audio & Systems (C++)",
                "Next.js & Cloud",
                "IoT & Edge AI",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-kotlin via-indigo-600 to-compose text-white shadow-md shadow-kotlin/20"
                      : darkMode
                      ? "bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.08]"
                      : "bg-white text-gray-700 hover:bg-slate-100 border border-slate-200 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCategories.map((catGroup) => (
              <div
                key={catGroup.title}
                className={`p-6 rounded-3xl border transition-all duration-300 space-y-5 ${
                  darkMode ? "bg-[#0E1017] border-white/[0.08]" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="border-b pb-3.5 flex items-center justify-between border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    {catGroup.icon === "compose" ? (
                      <ComposeIcon className="w-5 h-5 text-compose" />
                    ) : catGroup.icon === "flutter" ? (
                      <FlutterIcon className="w-5 h-5 text-sky-400" />
                    ) : catGroup.icon === "nextjs" ? (
                      <NextJsIcon className="w-5 h-5 text-white" />
                    ) : (
                      <i className={`fa-solid ${catGroup.icon === "audio" ? "fa-wave-square text-cyan-400" : "fa-microchip text-emerald-400"} text-lg`}></i>
                    )}
                    <h4 className="font-bold text-sm sm:text-base">{catGroup.title}</h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-white/[0.06] text-gray-300 px-2.5 py-0.5 rounded-md font-bold border border-white/[0.08]">
                    {catGroup.category}
                  </span>
                </div>

                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="font-bold flex items-center gap-1.5">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-gray-400">
                            {skill.badge}
                          </span>
                          <span className="text-kotlin-light font-mono font-extrabold">{skill.level}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className={`w-full rounded-full h-1.5 ${darkMode ? "bg-white/[0.06]" : "bg-slate-100"}`}>
                        <div
                          className="bg-gradient-to-r from-kotlin via-indigo-500 to-compose h-1.5 rounded-full transition-all duration-700"
                          style={{ width: skill.level }}
                        ></div>
                      </div>

                      <p className={`text-[11px] leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Evolution Timeline */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-bold font-heading">Engineering Evolution</h3>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Key milestones across Native Android, Cross-Platform Mobile, Web, and Systems tooling.
            </p>
          </div>

          <div className="relative border-l-2 border-white/[0.1] pl-6 ml-4 sm:ml-8 space-y-8">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-kotlin to-compose border-4 border-[#08090D] group-hover:scale-125 transition-transform duration-300"></div>

                <div
                  className={`p-6 rounded-3xl border transition-all duration-300 space-y-3 ${
                    darkMode
                      ? "bg-[#0E1017] border-white/[0.08] hover:border-white/[0.2]"
                      : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-mono font-bold text-kotlin-light bg-white/[0.06] px-2.5 py-0.5 rounded-md inline-block w-max border border-white/[0.08]">
                      {evt.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-heading">{evt.role}</h4>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {evt.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evt.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-lg border ${
                          t.includes("Kotlin") || t.includes("Compose")
                            ? "bg-kotlin/10 border-kotlin/30 text-kotlin-light font-bold"
                            : t.includes("Flutter")
                            ? "bg-sky-500/10 border-sky-500/30 text-sky-400 font-bold"
                            : t.includes("Next.js")
                            ? "bg-white/10 border-white/20 text-white font-bold"
                            : t.includes("Supabase") || t.includes("Shopify")
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold"
                            : darkMode
                            ? "bg-white/[0.04] border-white/[0.08] text-gray-300"
                            : "bg-slate-100 border-slate-200 text-gray-700"
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
