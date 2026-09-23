"use client";

import { useState } from "react";
import {
  KotlinIcon,
  ComposeIcon,
  AndroidIcon,
  FlutterIcon,
  NextJsIcon,
} from "../../components/TechIcons";

interface CompetencyItem {
  name: string;
  detail: string;
  appliedIn: string;
  tag: string;
}

interface CompetencyGroup {
  category: string;
  title: string;
  icon: "mobile" | "realtime" | "web" | "embedded" | "mdm" | "env";
  items: CompetencyItem[];
  themeStyle: "primary" | "secondary";
}

interface WorkExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
  themeStyle: "primary" | "secondary";
}

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const experiences: WorkExperience[] = [
    {
      period: "April 2023 – Present",
      role: "Frontend Developer",
      company: "ScudNetworks",
      location: "Ernakulam, Kerala, India",
      summary: "Spearheading mobile, real-time communications, and enterprise device infrastructure across native Android and web platforms.",
      responsibilities: [
        "Architecting native Android VoIP client with Kotlin, Jetpack Compose, foreground services, and low-latency audio via Google Oboe C++ NDK.",
        "Integrated PJSIP call handling, audio focus routing, and MQTT v5 (HiveMQ) signaling with phonetic callsign routing (Bravo, Charlie).",
        "Engineered Enterprise MDM provisioning scripts (SafeUEM) and Single-App Kiosk mode lockouts deployed on RugGear ruggedized hardware.",
        "Constructed management web portals and responsive interfaces with Next.js (App Router), TypeScript, Zustand, and Cloudflare Tunneling.",
        "Built embedded Wi-Fi Channel State Information (CSI) sensing pipelines using ESP32 microcontrollers and the ESP-IDF framework.",
      ],
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "PJSIP / VoIP",
        "MQTT v5 (HiveMQ)",
        "Next.js",
        "TypeScript",
        "Zustand",
        "SafeUEM MDM",
        "RugGear",
        "ESP32 (ESP-IDF)",
        "Oboe C++",
      ],
      themeStyle: "primary",
    },
    {
      period: "February 2022 – April 2023",
      role: "Flutter Developer",
      company: "Texol",
      location: "Kochi, Kerala, India",
      summary: "Engineered scalable cross-platform mobile applications for commercial clients, fleet logistics, and on-device processing.",
      responsibilities: [
        "Engineered production Flutter applications utilizing Provider, BLoC state management, and optimized WebViews.",
        "Developed DDTransport, a commercial fleet dispatching and live route tracking platform with real-time Supabase PostgreSQL synchronization.",
        "Implemented on-device financial transaction detector & OCR expense tracking engine with 100% offline privacy.",
        "Bridged Flutter with native Android subsystem APIs using MethodChannels for Wi-Fi diagnostic routines and hardware telemetry.",
      ],
      tech: [
        "Flutter",
        "Dart",
        "Provider",
        "BLoC",
        "Supabase",
        "PostgreSQL",
        "MethodChannels",
        "MLKit OCR",
        "WebViews",
      ],
      themeStyle: "secondary",
    },
  ];

  const competencyGroups: CompetencyGroup[] = [
    {
      category: "Mobile",
      title: "Mobile Development",
      icon: "mobile",
      themeStyle: "primary",
      items: [
        {
          name: "Native Android & Jetpack Compose",
          detail: "Modern declarative UI, Material 3, custom Layouts/Modifiers, state management, and Recomposition optimization.",
          appliedIn: "Verbo VoIP Suite",
          tag: "Compose UI",
        },
        {
          name: "Kotlin, Coroutines & Flow",
          detail: "Structured concurrency, StateFlow/SharedFlow, background thread dispatchers, and MVI/MVVM clean architecture.",
          appliedIn: "Android Native Core",
          tag: "Kotlin 2.0+",
        },
        {
          name: "Android Foreground Services & Audio",
          detail: "Uninterrupted background execution, notification channel binding, audio focus routing, and Google Oboe C++ NDK buffers.",
          appliedIn: "Verbo Background Engine",
          tag: "Foreground & Oboe",
        },
        {
          name: "Flutter & Dart",
          detail: "Cross-platform mobile development with Provider and BLoC, native MethodChannels, custom painters, and WebViews.",
          appliedIn: "DDTransport & OCR App",
          tag: "Flutter",
        },
      ],
    },
    {
      category: "Real-Time",
      title: "Real-Time & Communications",
      icon: "realtime",
      themeStyle: "primary",
      items: [
        {
          name: "PJSIP & SIP Protocol Stack",
          detail: "Session Initiation Protocol signaling, SDP negotiation, RTP audio packet streams, jitter buffers, and codec management.",
          appliedIn: "VoIP Call Engine",
          tag: "PJSIP / SIP",
        },
        {
          name: "MQTT v5 (HiveMQ)",
          detail: "Low-overhead broker messaging, topic subscriptions, user presence discovery, and instant channel switching signaling.",
          appliedIn: "Verbo Comms Signaling",
          tag: "MQTT v5",
        },
        {
          name: "WebRTC & Audio Focus Routing",
          detail: "Peer-to-peer media streams, audio routing across earpiece/speaker/Bluetooth SCO, and hardware call management.",
          appliedIn: "Real-Time Audio",
          tag: "WebRTC",
        },
        {
          name: "Phonetic Callsign System",
          detail: "Radio-style phonetic callsign protocol (Bravo, Charlie, Delta) for channel assignments, user addressing, and audit logging.",
          appliedIn: "Verbo Channel Logic",
          tag: "Phonetic Protocol",
        },
      ],
    },
    {
      category: "MDM & Enterprise",
      title: "Device Management & Kiosk",
      icon: "mdm",
      themeStyle: "primary",
      items: [
        {
          name: "SafeUEM Android MDM",
          detail: "Enterprise device enrollment, policy configuration, remote application distribution, and over-the-air firmware updates.",
          appliedIn: "verbo_lite Deployments",
          tag: "SafeUEM MDM",
        },
        {
          name: "Single-App Kiosk Deployment",
          detail: "Total hardware lockdown, suppression of system navigation, status bar blackout, and safe-mode boot prevention.",
          appliedIn: "RugGear Devices",
          tag: "Kiosk Mode",
        },
        {
          name: "Automated Shell & PowerShell Scripting",
          detail: "Custom batch provisioning scripts utilizing ADB command-line tools for zero-touch mass device setup.",
          appliedIn: "Hardware Provisioning",
          tag: "ADB Automation",
        },
        {
          name: "RugGear Hardware Integration",
          detail: "Push-to-Talk (PTT) physical button keycode interception, ruggedized acoustic hardware tuning, and drop-resilience testing.",
          appliedIn: "Industrial Field Deployments",
          tag: "RugGear",
        },
      ],
    },
    {
      category: "Embedded",
      title: "Embedded & Hardware",
      icon: "embedded",
      themeStyle: "secondary",
      items: [
        {
          name: "ESP32 & ESP-IDF Framework",
          detail: "Custom C/C++ firmware development on dual-core Espressif microcontrollers using the official ESP-IDF toolchain.",
          appliedIn: "Wi-Fi Sensing Nodes",
          tag: "ESP-IDF",
        },
        {
          name: "Wi-Fi Channel State Information (CSI)",
          detail: "Extracting raw physical-layer CSI subcarrier phase and amplitude matrices for non-invasive human presence sensing.",
          appliedIn: "CSI Sensing Pipeline",
          tag: "Wi-Fi CSI",
        },
        {
          name: "LoRa & Bluetooth LE",
          detail: "Long-range low-power sensor telemetry over LoRa, alongside BLE GATT services for mobile hardware provisioning.",
          appliedIn: "Mesh Hardware",
          tag: "LoRa & BLE",
        },
      ],
    },
    {
      category: "Web & Backend",
      title: "Web & Cloud Backend",
      icon: "web",
      themeStyle: "secondary",
      items: [
        {
          name: "Next.js & TypeScript",
          detail: "Full-stack server-side rendered (SSR) web applications with App Router, server actions, and strict TypeScript types.",
          appliedIn: "Verbo Web & Japamala",
          tag: "Next.js",
        },
        {
          name: "Zustand & State Management",
          detail: "Lightweight, decoupled state architecture for real-time dashboards, active channel indicators, and client caches.",
          appliedIn: "Web Management Consoles",
          tag: "Zustand",
        },
        {
          name: "Supabase & PostgreSQL",
          detail: "Relational database schema modeling, Row Level Security (RLS) multi-tenant policies, and real-time WebSocket subscriptions.",
          appliedIn: "DDTransport Backend",
          tag: "Supabase",
        },
        {
          name: "Cloudflare Tunneling",
          detail: "Secure zero-trust ingress networking routing local microservice streams directly to public endpoints without port forwarding.",
          appliedIn: "Edge Telemetry",
          tag: "Cloudflare",
        },
      ],
    },
    {
      category: "Environment",
      title: "Developer Environment",
      icon: "env",
      themeStyle: "secondary",
      items: [
        {
          name: "macOS & Modern Terminal",
          detail: "Daily driver on macOS running Ghostty & tmux terminal multiplexers with Zsh and Powerlevel10k prompt configuration.",
          appliedIn: "Core Tooling",
          tag: "Ghostty / tmux",
        },
        {
          name: "Neovim & Git Workflows",
          detail: "Modal keyboard-driven editing with custom LSP configurations, semantic code navigation, and strict feature-branch Git workflows.",
          appliedIn: "Development Cycle",
          tag: "Neovim / Git",
        },
        {
          name: "Figma to Code",
          detail: "Translating design systems, component tokens, and interactive UI micro-interactions directly into native Compose and Tailwind CSS.",
          appliedIn: "UI Implementation",
          tag: "Figma",
        },
      ],
    },
  ];

  const filteredCompetencies = competencyGroups.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  return (
    <div className="min-h-screen py-12 px-6 relative ambient-glow-mesh">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header with Professional Summary */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--accent-secondary-subtle)] text-[var(--accent-primary)] text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm border border-[var(--glass-border)]">
            Professional Profile & Engineering Background
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
            About & Experience
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Mobile Software Developer with <strong className="text-[var(--accent-primary)] font-semibold">4 years of experience</strong> specializing in native Android (<strong className="text-[var(--text-primary)] font-semibold">Kotlin, Jetpack Compose</strong>) and cross-platform <strong className="text-[var(--accent-secondary-bright)] font-semibold">Flutter</strong> development. Proven expertise in building real-time communication systems, enterprise device management (MDM), and hardware-integrated applications.
          </p>
        </div>

        {/* Bio Summary & Education Card */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Professional Bio */}
          <div className="md:col-span-2 p-7 rounded-3xl card-gradient space-y-4">
            <div className="border-b pb-3 border-[var(--border-subtle)] flex items-center justify-between">
              <h2 className="text-xl font-bold font-heading text-[var(--text-primary)] flex items-center gap-2.5">
                <AndroidIcon className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>Abhijith M P</span>
              </h2>
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)]">
                4 Years Experience
              </span>
            </div>

            <p className="leading-relaxed text-xs sm:text-sm text-[var(--text-secondary)]">
              I specialize in bridging high-level declarative user interfaces with low-level systems architectures. My experience spans mission-critical native Android engineering with <strong className="text-[var(--accent-primary)] font-semibold">Kotlin & Jetpack Compose</strong>, low-latency audio via <strong className="text-[var(--accent-primary)] font-semibold">Google Oboe C++ NDK</strong>, real-time signaling with <strong className="text-[var(--accent-primary)] font-semibold">PJSIP & MQTT v5</strong>, and cross-platform mobile apps with <strong className="text-[var(--accent-secondary-bright)] font-semibold">Flutter & Supabase</strong>.
            </p>

            <p className="leading-relaxed text-xs sm:text-sm text-[var(--text-secondary)]">
              Beyond standard application development, I have extensive hands-on expertise with <strong className="text-[var(--accent-primary)] font-semibold">Enterprise Device Management (SafeUEM MDM)</strong> deploying single-app kiosk lockdown environments on ruggedized <strong className="text-[var(--text-primary)] font-semibold">RugGear hardware</strong>, and embedded <strong className="text-[var(--accent-secondary-bright)] font-semibold">ESP32 Wi-Fi sensing</strong> pipelines capturing Channel State Information (CSI).
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {[
                "Native Android",
                "Jetpack Compose",
                "Flutter & Dart",
                "PJSIP / WebRTC",
                "MQTT v5 (HiveMQ)",
                "SafeUEM MDM",
                "RugGear Kiosk",
                "ESP32 (ESP-IDF)",
                "Next.js & TypeScript",
              ].map((b) => (
                <span
                  key={b}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] font-semibold border border-[var(--glass-border)]"
                >
                  #{b}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Credentials Card */}
          <div className="p-7 rounded-3xl card-gradient space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-b pb-3 border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  Academic Degree
                </span>
                <h3 className="text-base font-bold text-[var(--text-primary)] mt-0.5">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">SNGIST Group of Institutions</p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-secondary-bright)]">
                  Languages Spoken
                </span>
                <div className="flex gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-medium text-[var(--text-primary)]">
                    English (Fluent)
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-medium text-[var(--text-primary)]">
                    Malayalam (Native)
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  Location & Availability
                </span>
                <p className="text-xs text-[var(--text-secondary)]">
                  Ernakulam, Kerala, India • Open for high-impact mobile & systems roles globally.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/contactus"
                className="w-full py-2.5 btn-primary-gradient text-[var(--accent-primary-text)] font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Connect with Me</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6 pt-2">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)]">
              Work Experience
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Full-time production engineering roles spanning real-time mobile systems, MDM, and enterprise frontends.
            </p>
          </div>

          <div className="relative border-l-2 border-[var(--border-subtle)] pl-6 ml-3 sm:ml-6 space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node */}
                <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--bg-canvas)] transition-transform duration-200 ${
                  exp.themeStyle === "primary" ? "bg-[var(--accent-primary)]" : "bg-[var(--accent-secondary-bright)]"
                }`}></div>

                <div className="p-7 rounded-3xl card-gradient space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b pb-3 border-[var(--border-subtle)]">
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[var(--text-primary)]">
                        {exp.role} <span className="text-[var(--accent-primary)]">@ {exp.company}</span>
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] font-mono">{exp.location}</p>
                    </div>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-xl self-start sm:self-auto ${
                      exp.themeStyle === "primary"
                        ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border border-[var(--accent-primary-border)]"
                        : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border border-[var(--accent-secondary-border)]"
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[var(--accent-primary)] mt-0.5">•</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--glass-border)] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contextual Technical Competencies (2026 Strategy #3) */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)]">
                Core Technical Competencies
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Skills contextualized by real-world production application rather than detached percentage bars.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {["All", "Mobile", "Real-Time", "MDM & Enterprise", "Embedded", "Web & Backend", "Environment"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    activeCategory === cat
                      ? "btn-primary-gradient text-[var(--accent-primary-text)] font-bold scale-105"
                      : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--glass-border)] shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCompetencies.map((group) => (
              <div
                key={group.title}
                className="p-6 rounded-3xl card-gradient space-y-4"
              >
                <div className="border-b pb-3 flex items-center justify-between border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    {group.icon === "mobile" && <AndroidIcon className="w-5 h-5 text-[var(--accent-primary)]" />}
                    {group.icon === "realtime" && <i className="fa-solid fa-tower-broadcast text-[var(--accent-primary)] text-sm"></i>}
                    {group.icon === "mdm" && <i className="fa-solid fa-shield-halved text-[var(--accent-primary)] text-sm"></i>}
                    {group.icon === "embedded" && <i className="fa-solid fa-microchip text-[var(--accent-secondary-bright)] text-sm"></i>}
                    {group.icon === "web" && <NextJsIcon className="w-5 h-5 text-[var(--accent-secondary-bright)]" />}
                    {group.icon === "env" && <i className="fa-solid fa-terminal text-[var(--accent-secondary-bright)] text-sm"></i>}
                    <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)] font-heading">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md font-bold bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)]">
                    {group.category}
                  </span>
                </div>

                <div className="space-y-3.5">
                  {group.items.map((item) => (
                    <div key={item.name} className="p-3.5 rounded-2xl bg-[var(--bg-surface)]/70 border border-[var(--glass-border)] space-y-1.5">
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-bold text-xs text-[var(--text-primary)]">
                          {item.name}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] font-bold shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
                        {item.detail}
                      </p>
                      <div className="pt-0.5 flex items-center gap-1 text-[10px] font-mono text-[var(--accent-secondary-bright)]">
                        <i className="fa-solid fa-arrow-turn-down text-[8px]"></i>
                        <span>Applied in: <strong className="text-[var(--text-primary)]">{item.appliedIn}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
