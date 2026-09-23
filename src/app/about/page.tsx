"use client";

import { useState } from "react";
import {
  KotlinIcon,
  ComposeIcon,
  AndroidIcon,
  FlutterIcon,
  NextJsIcon,
} from "../../components/TechIcons";

interface Skill {
  name: string;
  level: string;
  desc: string;
  badge: string;
}

interface SkillCategory {
  category: string;
  title: string;
  icon: "compose" | "flutter" | "audio" | "nextjs" | "iot";
  skills: Skill[];
  colorType: "primary" | "secondary";
}

interface TimelineEvent {
  year: string;
  role: string;
  desc: string;
  tech: string[];
  colorType: "primary" | "secondary";
}

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const skillCategories: SkillCategory[] = [
    {
      category: "Kotlin & Android Native",
      title: "Modern Android, Kotlin & Jetpack Compose",
      icon: "compose",
      colorType: "primary",
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
      colorType: "secondary",
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
      colorType: "primary",
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
      colorType: "secondary",
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
          desc: "Sophisticated responsive architectural layouts, custom themes, and design tokens",
          badge: "Design Systems",
        },
      ],
    },
    {
      category: "IoT & Edge AI",
      title: "Embedded Systems & On-Device ML",
      icon: "iot",
      colorType: "primary",
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

  const timelineEvents: TimelineEvent[] = [
    {
      year: "Present",
      role: "Lead Systems & Android Engineer",
      desc: "Architecting the Verbo VoIP communication suite with Kotlin & Jetpack Compose, the Verbo Next.js web portal, low-latency Google Oboe C++ audio engines, and BLE provisioning to ESP32 microcontrollers.",
      tech: ["Kotlin", "Jetpack Compose", "Next.js", "Oboe C++", "ESP32", "Supabase"],
      colorType: "primary",
    },
    {
      year: "2023 - 2024",
      role: "Senior Mobile & Web Developer",
      desc: "Developed the DDTransport fleet logistics platform with Flutter & Supabase real-time backend, the on-device OCR expense tracker in Flutter, and the Japamala headless Next.js Shopify e-commerce platform.",
      tech: ["Flutter", "Supabase", "Next.js", "Shopify API", "MLKit OCR", "Dart"],
      colorType: "secondary",
    },
    {
      year: "2022",
      role: "Full-Stack Web & Mobile Developer",
      desc: "Constructed web dashboard platforms with React and Tailwind CSS, implemented microservice APIs, and published utility applications.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "SQLite"],
      colorType: "primary",
    },
  ];

  const filteredCategories = skillCategories.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  return (
    <div className="min-h-screen py-12 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--accent-secondary)] border border-[var(--accent-secondary-border)] text-[var(--accent-primary)] text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
            <KotlinIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Engineer Profile & Competencies
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">About & Technical Expertise</h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[var(--text-secondary)]">
            Specializing in modern Android with <strong className="text-[var(--accent-primary)] font-semibold">Kotlin & Jetpack Compose</strong>, cross-platform mobile with <strong className="text-[var(--accent-secondary-bright)] font-semibold">Flutter & Supabase</strong>, modern web with <strong className="text-[var(--text-primary)] font-semibold">Next.js & Shopify</strong>, and low-latency C++ audio engines.
          </p>
        </div>

        {/* Bio Highlights Card */}
        <div className="p-8 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] transition-all duration-200 space-y-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-[var(--border-medium)]">
            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] flex items-center gap-2.5">
              <AndroidIcon className="w-6 h-6 text-[var(--accent-primary)]" />
              <span>Abhijith M P — Systems & Mobile Engineer</span>
            </h3>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[var(--accent-secondary)] text-[var(--accent-secondary-bright)] border border-[var(--accent-secondary-border)] self-start sm:self-auto">
              Ernakulam, Kerala, India
            </span>
          </div>

          <p className="leading-relaxed text-xs sm:text-sm text-[var(--text-secondary)]">
            I am a mobile, systems, and full-stack software engineer driven by crafting production-grade software architectures. My core strength centers on <strong className="text-[var(--accent-primary)] font-semibold">Modern Android Engineering</strong> using <strong className="text-[var(--accent-primary)] font-semibold">Kotlin & Jetpack Compose</strong>, following clean MVI/MVVM design patterns, and asynchronous Coroutines/Flow pipelines.
          </p>

          <p className="leading-relaxed text-xs sm:text-sm text-[var(--text-secondary)]">
            Alongside native Android, I build scalable cross-platform mobile apps with <strong className="text-[var(--accent-secondary-bright)] font-semibold">Flutter & Supabase</strong> (DDTransport, Expense Tracker), modern web portals and headless e-commerce with <strong className="text-[var(--text-primary)] font-semibold">Next.js & Shopify</strong> (Japamala, Verbo Web), low-level audio streaming with <strong className="text-[var(--accent-primary)] font-semibold">Google Oboe C++ NDK</strong>, and embedded <strong className="text-[var(--accent-secondary-bright)] font-semibold">ESP32 IoT BLE</strong> device provisioning.
          </p>

          {/* Quick Technical Badges with rich palette styling */}
          <div className="pt-2 flex flex-wrap gap-2">
            {[
              { name: "Kotlin 2.0+", type: "primary" },
              { name: "Jetpack Compose", type: "primary" },
              { name: "Coroutines StateFlow", type: "primary" },
              { name: "Flutter & Dart", type: "secondary" },
              { name: "Supabase Backend", type: "secondary" },
              { name: "Next.js (App Router)", type: "secondary" },
              { name: "Shopify Storefront", type: "secondary" },
              { name: "Google Oboe C++", type: "primary" },
              { name: "ESP32 BLE", type: "secondary" },
              { name: "Ollama Local AI", type: "primary" },
            ].map((badge) => (
              <span
                key={badge.name}
                className={`text-[11px] font-mono px-3 py-1 rounded-xl border font-bold ${
                  badge.type === "primary"
                    ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border-[var(--accent-primary-border)]"
                    : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border-[var(--accent-secondary-border)]"
                }`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Skill Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Engineering Skill Matrix</h3>
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
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    activeCategory === cat
                      ? "bg-[var(--accent-primary)] text-[var(--accent-primary-text)] shadow-md font-bold scale-105"
                      : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--accent-secondary-bright)]"
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
                className="p-6 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] transition-all duration-200 space-y-5 shadow-sm"
              >
                <div className="border-b pb-3.5 flex items-center justify-between border-[var(--border-medium)]">
                  <div className="flex items-center gap-2.5">
                    {catGroup.icon === "compose" ? (
                      <ComposeIcon className="w-5 h-5 text-[var(--accent-primary)]" />
                    ) : catGroup.icon === "flutter" ? (
                      <FlutterIcon className="w-5 h-5 text-[var(--accent-secondary-bright)]" />
                    ) : catGroup.icon === "nextjs" ? (
                      <NextJsIcon className="w-5 h-5 text-[var(--accent-secondary-bright)]" />
                    ) : (
                      <i className={`fa-solid ${catGroup.icon === "audio" ? "fa-wave-square" : "fa-microchip"} text-[var(--accent-primary)] text-lg`}></i>
                    )}
                    <h4 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">{catGroup.title}</h4>
                  </div>
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-md font-bold border ${
                    catGroup.colorType === "primary"
                      ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border-[var(--accent-primary-border)]"
                      : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border-[var(--accent-secondary-border)]"
                  }`}>
                    {catGroup.category}
                  </span>
                </div>

                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-secondary)] text-[var(--accent-secondary-bright)] border border-[var(--accent-secondary-border)] font-semibold">
                            {skill.badge}
                          </span>
                          <span className={`font-mono font-bold ${
                            catGroup.colorType === "primary" ? "text-[var(--accent-primary)]" : "text-[var(--accent-secondary-bright)]"
                          }`}>{skill.level}</span>
                        </div>
                      </div>

                      {/* Progress Bar with category color */}
                      <div className="w-full rounded-full h-1.5 bg-[var(--bg-surface)] overflow-hidden">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            catGroup.colorType === "primary" ? "bg-[var(--accent-primary)]" : "bg-[var(--accent-secondary-bright)]"
                          }`}
                          style={{ width: skill.level }}
                        ></div>
                      </div>

                      <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
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
            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Engineering Evolution</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Key milestones across Native Android, Cross-Platform Mobile, Web, and Systems tooling.
            </p>
          </div>

          <div className="relative border-l-2 border-[var(--border-medium)] pl-6 ml-4 sm:ml-8 space-y-8">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--bg-canvas)] transition-transform duration-200 ${
                  evt.colorType === "primary" ? "bg-[var(--accent-primary)]" : "bg-[var(--accent-secondary-bright)]"
                }`}></div>

                <div className="p-6 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] hover:border-[var(--border-active)] transition-all duration-200 space-y-3 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md inline-block w-max border ${
                      evt.colorType === "primary"
                        ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border-[var(--accent-primary-border)]"
                        : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border-[var(--accent-secondary-border)]"
                    }`}>
                      {evt.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--text-primary)]">{evt.role}</h4>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {evt.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evt.tech.map((t) => {
                      const isPrimary = t.includes("Kotlin") || t.includes("Compose") || t.includes("Oboe");
                      return (
                        <span
                          key={t}
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-lg border font-semibold ${
                            isPrimary
                              ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border-[var(--accent-primary-border)]"
                              : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border-[var(--accent-secondary-border)]"
                          }`}
                        >
                          #{t}
                        </span>
                      );
                    })}
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
