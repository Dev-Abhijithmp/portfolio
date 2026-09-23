"use client";

import { useState } from "react";
import {
  ComposeIcon,
  FlutterIcon,
  NextJsIcon,
  AndroidIcon,
} from "../../components/TechIcons";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  allCategories: string[];
  role: string;
  timeline: string;
  organization: string;
  problem: string;
  architecturalDecisions: {
    title: string;
    description: string;
  }[];
  selfCritiques: string[];
  appliedTech: {
    name: string;
    role: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  frameType: "android" | "rugged" | "terminal" | "mobile" | "browser";
  featured: boolean;
  themeStyle: "primary" | "secondary";
  tags: string[];
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "verbo-voip",
      title: "Verbo / SoundPulse: Mission-Critical VoIP & Comms Ecosystem",
      subtitle: "Native Android Voice Streaming with PJSIP, Google Oboe C++ NDK & MQTT v5 Signaling",
      category: "Native Android & VoIP",
      allCategories: ["Native Android & VoIP", "Web & Cloud"],
      role: "Lead Mobile & Systems Engineer",
      timeline: "2023 – Present",
      organization: "ScudNetworks",
      problem:
        "Field operators and industrial teams in high-noise environments required an instant, reliable push-to-talk and voice communication platform. High audio latency, dropped packets over unstable 4G networks, and aggressive OS background process termination made standard VoIP solutions unreliable.",
      architecturalDecisions: [
        {
          title: "Low-Latency C++ Engine with Google Oboe NDK",
          description:
            "Bypassed standard Java AudioTrack layers by implementing native C++ audio streaming through Google Oboe over JNI. Configured exclusive hardware audio streams and OpenSL ES fallback, driving buffer latency down below 20ms.",
        },
        {
          title: "PJSIP Stack & Android Foreground Lifecycle",
          description:
            "Embedded PJSIP for SIP session initiation, RTP stream transport, and jitter buffer negotiation. Bound the engine to an Android Foreground Service (FOREGROUND_SERVICE_MICROPHONE & PHONE_CALL) with dynamic audio focus management to ensure persistent, uninterrupted voice streams.",
        },
        {
          title: "MQTT v5 (HiveMQ) Instant Signaling",
          description:
            "Implemented HiveMQ MQTT v5 broker signaling for channel presence detection, instant PTT floor arbitration, and sub-second channel hopping without waiting for SIP re-invites.",
        },
        {
          title: "Phonetic Callsign System",
          description:
            "Designed a deterministic radio-style phonetic callsign architecture (Bravo, Charlie, Delta, Echo) for channel assignment, priority override, and cryptographic audit logs.",
        },
      ],
      selfCritiques: [
        "In future iterations, migrate the PJSIP C wrapper to modern Kotlin Multiplatform (KMP) to enable 100% shared business and protocol logic with iOS.",
        "Implement Opus adaptive bitrate encoding dynamically driven by real-time Wi-Fi/LTE RSSI and packet loss feedback.",
      ],
      appliedTech: [
        { name: "Kotlin 2.0+", role: "Core client architecture & UI state flow" },
        { name: "Jetpack Compose", role: "Declarative Material 3 UI & audio wave animations" },
        { name: "Google Oboe (C++)", role: "Sub-20ms JNI native audio buffer engine" },
        { name: "PJSIP / SIP", role: "Real-time call signaling & RTP transport" },
        { name: "MQTT v5 (HiveMQ)", role: "Low-overhead PTT signaling & presence discovery" },
        { name: "Foreground Services", role: "Uninterrupted background audio lifecycle" },
      ],
      metrics: [
        { label: "Hardware Audio Buffer Latency", value: "< 20ms" },
        { label: "PTT Floor Grant Latency", value: "< 120ms" },
        { label: "Background Service Uptime", value: "99.98%" },
      ],
      frameType: "android",
      featured: true,
      themeStyle: "primary",
      tags: ["Kotlin", "Jetpack Compose", "PJSIP", "Oboe C++", "MQTT v5", "Foreground Service", "HiveMQ"],
    },
    {
      id: "verbo-lite-mdm",
      title: "Enterprise MDM Deployment & Single-App Kiosk Lockdown",
      subtitle: "Automated SafeUEM Provisioning & Appliance Lockdown on RugGear Hardware",
      category: "Enterprise MDM",
      allCategories: ["Enterprise MDM", "Native Android & VoIP"],
      role: "Systems & Mobile Infrastructure Engineer",
      timeline: "2023 – Present",
      organization: "ScudNetworks",
      problem:
        "Ruggedized RugGear handhelds deployed in industrial field conditions required strict Single-App Kiosk mode. Devices had to boot directly into the communication app without user escape, settings tampering, safe-mode boot bypass, or unapproved app installations.",
      architecturalDecisions: [
        {
          title: "SafeUEM Device Policy Controller (DPC) Lockdown",
          description:
            "Configured SafeUEM enterprise policies to lock Android devices into dedicated single-app kiosk mode. Suppressed system notification bar pulldowns, navigation bars, and access to Android settings.",
        },
        {
          title: "Automated Shell & PowerShell Provisioning",
          description:
            "Authored automated shell and PowerShell batch staging scripts utilizing ADB command-line automation to enroll, provision certificates, configure APNs, and deploy verbo_lite binaries in under 3 minutes per unit.",
        },
        {
          title: "RugGear Hardware Integration & PTT Keys",
          description:
            "Intercepted specialized hardware key events (RugGear dedicated physical PTT side key, SOS button) via native keycode listeners and wake-locks for instant channel broadcast even with screen darkened.",
        },
        {
          title: "Self-Healing Watchdog Architecture",
          description:
            "Engineered persistent watchdog service with silent OTA binary distribution and automatic crash-recovery restarts, guaranteeing zero device downtime in remote operations.",
        },
      ],
      selfCritiques: [
        "Transition staging from manual ADB cable connection to zero-touch Android Enterprise QR-code enrollment directly during factory unboxing.",
        "Implement remote battery telemetry and thermal throttling diagnostics streamed over MQTT.",
      ],
      appliedTech: [
        { name: "SafeUEM MDM", role: "Enterprise policy & kiosk profile controller" },
        { name: "Android ADB", role: "Batch provisioning and command-line automation" },
        { name: "Shell & PowerShell", role: "Staging scripts & automated binary packaging" },
        { name: "RugGear Hardware", role: "Industrial device target with physical PTT integration" },
        { name: "Watchdog Services", role: "Crash-resilience and silent OTA updates" },
      ],
      metrics: [
        { label: "Kiosk Escape Vulnerability", value: "0 (100% Locked)" },
        { label: "Device Staging Time", value: "< 3 Min / Device" },
        { label: "App Crash Recovery Time", value: "< 1.2s" },
      ],
      frameType: "rugged",
      featured: true,
      themeStyle: "primary",
      tags: ["SafeUEM MDM", "Single-App Kiosk", "RugGear", "Shell Scripts", "ADB", "PowerShell", "Android DPC"],
    },
    {
      id: "esp32-csi-sensing",
      title: "ESP32 Real-Time Wi-Fi CSI Sensing & Telemetry Pipeline",
      subtitle: "Embedded Physical-Layer Wi-Fi Channel State Information Extraction via ESP-IDF",
      category: "Embedded & Hardware",
      allCategories: ["Embedded & Hardware"],
      role: "Embedded & Systems Developer",
      timeline: "2023 – Present",
      organization: "ScudNetworks",
      problem:
        "Detecting human micro-motion, occupancy, and physical space transitions without deploying intrusive cameras, PIR sensors, or specialized radar hardware.",
      architecturalDecisions: [
        {
          title: "ESP-IDF Low-Level CSI Extraction",
          description:
            "Developed custom firmware using the official Espressif ESP-IDF toolchain on dual-core ESP32 microcontrollers. Configured Wi-Fi promiscuous mode to capture raw IEEE 802.11n Channel State Information (CSI).",
        },
        {
          title: "Subcarrier Phase & Amplitude Matrix Processing",
          description:
            "Extracted 64-subcarrier complex numbers (I/Q components), calculating phase shifts and amplitude perturbations caused by human physical motion obstructing wireless multipath reflections.",
        },
        {
          title: "Cloudflare Zero-Trust Tunneling",
          description:
            "Streamed high-speed CSI packets to processing servers over Cloudflare Tunneling and secure WebSockets, bypassing firewalls without exposing open ports.",
        },
        {
          title: "LoRa & BLE Mesh Auxiliaries",
          description:
            "Integrated secondary LoRa radios for long-range heartbeat synchronization across sensor nodes, and BLE for mobile firmware calibration.",
        },
      ],
      selfCritiques: [
        "Incorporate on-chip 1D-CNN signal classification directly on ESP32-S3 vector coprocessor using LiteRT / ESP-DL to avoid streaming raw matrices.",
        "Implement Kalman filtering on-chip to reduce ambient microwave and multipath noise.",
      ],
      appliedTech: [
        { name: "ESP32 Microcontrollers", role: "Dual-core embedded radio target" },
        { name: "ESP-IDF Framework", role: "Low-level C/C++ firmware & Wi-Fi driver hooks" },
        { name: "Wi-Fi CSI Sensing", role: "64-subcarrier phase/amplitude matrix extraction" },
        { name: "Cloudflare Tunneling", role: "Zero-trust secure telemetry transit" },
        { name: "LoRa & BLE", role: "Auxiliary long-range mesh & mobile calibration" },
      ],
      metrics: [
        { label: "CSI Packet Polling Rate", value: "100 Hz" },
        { label: "Subcarrier Resolution", value: "64 Subcarriers" },
        { label: "Motion Sensing Latency", value: "< 50ms" },
      ],
      frameType: "terminal",
      featured: true,
      themeStyle: "secondary",
      tags: ["ESP32", "ESP-IDF", "Wi-Fi CSI", "Cloudflare Tunnel", "LoRa", "Bluetooth", "C/C++"],
    },
    {
      id: "ddtransport-flutter",
      title: "DDTransport: Commercial Fleet Dispatch & Tracking Platform",
      subtitle: "Cross-Platform Mobile Application with Real-Time Supabase Sync & Offline Caching",
      category: "Cross-Platform Flutter",
      allCategories: ["Cross-Platform Flutter"],
      role: "Flutter Developer",
      timeline: "2022 – 2023",
      organization: "Texol",
      problem:
        "Commercial freight dispatchers faced delays, loss of vehicle visibility in remote network blind spots, and desynchronized shipment records between drivers and operations teams.",
      architecturalDecisions: [
        {
          title: "Flutter BLoC & Provider Architecture",
          description:
            "Engineered the mobile client using Flutter with BLoC and Provider state management, enforcing unidirectional data flow and isolating business logic from UI widgets.",
        },
        {
          title: "Supabase PostgreSQL Real-Time Sync",
          description:
            "Implemented Supabase real-time database channels over WebSockets with PostgreSQL Row Level Security (RLS) to enforce tenant isolation and push live route updates to dispatchers.",
        },
        {
          title: "Resilient Offline SQLite Cache",
          description:
            "Built a local SQLite telemetry cache queue that stores GPS coordinates and consignment milestones offline during network dead zones, automatically replaying once back online.",
        },
      ],
      selfCritiques: [
        "Incorporate native Android Background Geofencing APIs to cut continuous GPS polling battery consumption by 40%.",
        "Implement offline vector tile map caching for complete offline navigation capabilities.",
      ],
      appliedTech: [
        { name: "Flutter & Dart", role: "Cross-platform mobile application" },
        { name: "Supabase Backend", role: "Real-time PostgreSQL database & authentication" },
        { name: "Google Maps SDK", role: "Live GPS route tracking and consignment plotting" },
        { name: "SQLite / Local Cache", role: "Offline-first telemetry logging queue" },
        { name: "BLoC & Provider", role: "Predictable unidirectional state management" },
      ],
      metrics: [
        { label: "Real-Time Telemetry Latency", value: "< 400ms" },
        { label: "Offline Trip Recovery Rate", value: "100%" },
        { label: "Driver Daily Active Users", value: "Production" },
      ],
      frameType: "mobile",
      featured: false,
      themeStyle: "secondary",
      tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Maps", "BLoC", "SQLite"],
    },
    {
      id: "japamala-ecommerce",
      title: "Japamala: Headless Next.js & Shopify E-Commerce Storefront",
      subtitle: "High-Performance SSR E-Commerce with Shopify Storefront GraphQL & Zustand",
      category: "Web & Cloud",
      allCategories: ["Web & Cloud"],
      role: "Frontend Developer",
      timeline: "2023 – 2024",
      organization: "Personal / Client Project",
      problem:
        "Standard Shopify Liquid templates suffered from sluggish mobile page loads, restrictive cart state management, and lacked bespoke bundling flows required for devotional merchandise.",
      architecturalDecisions: [
        {
          title: "Next.js App Router & ISR",
          description:
            "Built with Next.js (App Router) using Incremental Static Regeneration (ISR) and Server-Side Rendering (SSR) for instantaneous page transitions and superior SEO rankings.",
        },
        {
          title: "Shopify Storefront GraphQL Integration",
          description:
            "Engineered headless integration through Shopify Storefront GraphQL APIs, executing cart mutations, multi-currency pricing, and secure Shopify Checkout handoff.",
        },
        {
          title: "Zustand Global Cart State",
          description:
            "Implemented lightweight Zustand store for reactive drawer cart persistence and rapid item bundle customizations.",
        },
      ],
      selfCritiques: [
        "Incorporate Cloudflare Workers edge caching for sub-100ms multi-region image delivery.",
        "Implement Web Vitals real-user monitoring (RUM) analytics.",
      ],
      appliedTech: [
        { name: "Next.js (App Router)", role: "Full-stack SSR / ISR web framework" },
        { name: "TypeScript", role: "Strict compile-time type safety across GraphQL payloads" },
        { name: "Shopify GraphQL", role: "Headless Storefront API integration" },
        { name: "Zustand", role: "Client cart & drawer state management" },
        { name: "Tailwind CSS", role: "Responsive modern design system & animations" },
      ],
      metrics: [
        { label: "Lighthouse Performance Score", value: "98 / 100" },
        { label: "Time to First Byte (TTFB)", value: "< 180ms" },
        { label: "Conversion Lift vs Liquid", value: "+25%" },
      ],
      frameType: "browser",
      featured: false,
      themeStyle: "primary",
      tags: ["Next.js", "TypeScript", "Shopify Storefront", "GraphQL", "Zustand", "Tailwind CSS"],
    },
  ];

  const categories: string[] = [
    "All",
    "Native Android & VoIP",
    "Enterprise MDM",
    "Embedded & Hardware",
    "Cross-Platform Flutter",
    "Web & Cloud",
  ];

  const filteredCaseStudies = caseStudies.filter((c) => {
    const matchesCat =
      selectedCategory === "All" ||
      c.category === selectedCategory ||
      c.allCategories.includes(selectedCategory);
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 px-6 relative ambient-glow-mesh">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header (2026 Strategy #1: Project-Forward Case Studies) */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--accent-secondary-subtle)] text-[var(--accent-primary)] text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm border border-[var(--glass-border)]">
            2026 Engineering Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
            Project-Forward Technical Case Studies
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            In-depth architectural breakdowns over superficial checklists. Explore real-world production engineering decisions across <strong className="text-[var(--accent-primary)] font-semibold">PJSIP VoIP & Low-Latency C++</strong>, <strong className="text-[var(--text-primary)] font-semibold">Enterprise SafeUEM Kiosk MDM</strong>, and <strong className="text-[var(--accent-secondary-bright)] font-semibold">ESP32 Wi-Fi Sensing</strong>.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-medium)]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  selectedCategory === cat
                    ? "btn-primary-gradient text-[var(--accent-primary-text)] font-bold scale-102"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture or tech..."
              className="w-full pl-8 pr-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)]"
            />
          </div>
        </div>

        {/* Case Studies Grid (2026 Strategy #1 & #2: Deep Case Studies + Device Proof Mockups) */}
        <div className="space-y-8">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-3xl card-gradient space-y-6 transition-all duration-300 border border-[var(--glass-border)]"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b pb-4 border-[var(--border-subtle)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)]">
                      {cs.category}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {cs.organization} • {cs.timeline}
                    </span>
                    {cs.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] font-bold">
                        ★ Featured Case Study
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                    {cs.title}
                  </h2>
                  <p className="text-xs font-medium text-[var(--accent-secondary-bright)]">
                    {cs.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
                  <button
                    onClick={() => setActiveCaseStudy(cs)}
                    className="px-4 py-2 btn-primary-gradient text-[var(--accent-primary-text)] font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md hover:scale-102 transition"
                  >
                    <span>Read Architecture Case Study</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </button>
                </div>
              </div>

              {/* Grid: Context & Problem vs Device Proof Frame */}
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Problem & Architectural Highlights (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                      The Challenge & Problem
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  {/* Top 2 Architectural Decisions Teaser */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Architectural Solutions
                    </h3>
                    <div className="space-y-2">
                      {cs.architecturalDecisions.slice(0, 2).map((dec, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3 rounded-2xl bg-[var(--bg-surface)]/70 border border-[var(--border-subtle)] space-y-1 text-xs"
                        >
                          <div className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                            <span className="text-[var(--accent-primary)] font-mono">0{dIdx + 1}.</span>
                            <span>{dec.title}</span>
                          </div>
                          <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                            {dec.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contextual Tech Stack (2026 Strategy #3) */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Applied Technology Context
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.appliedTech.map((tech) => (
                        <span
                          key={tech.name}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--glass-border)] font-semibold"
                          title={tech.role}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Device Mockup Frame (2026 Strategy #2: Device Frames & Live Proof) (5 cols) */}
                <div className="lg:col-span-5 flex justify-center">
                  
                  {/* Android Compose Handset Frame */}
                  {cs.frameType === "android" && (
                    <div className="w-full max-w-[280px] rounded-3xl p-3 bg-[#0d0f17] border-2 border-[var(--border-medium)] shadow-2xl space-y-3 relative overflow-hidden">
                      <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono border-b border-white/10 pb-1.5 px-1">
                        <span>12:45 PM • 4G LTE</span>
                        <span className="text-emerald-400 font-bold">PTT ONLINE</span>
                      </div>

                      {/* Screen Content */}
                      <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--glass-border)] space-y-2.5 text-center">
                        <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-[var(--accent-primary)]/20 border border-[var(--accent-primary)] text-[var(--accent-primary)]">
                          <i className="fa-solid fa-microphone text-lg animate-pulse"></i>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Channel Bravo-01</div>
                          <div className="text-[10px] font-mono text-[var(--accent-secondary-bright)]">Callsign: Alpha-Lead (Active)</div>
                        </div>

                        {/* Real-time Waveform */}
                        <div className="h-8 flex items-end justify-center gap-1 px-2 bg-black/40 rounded-xl py-1">
                          {[30, 75, 45, 90, 60, 85, 40, 70, 95, 50, 80, 35].map((h, i) => (
                            <div
                              key={i}
                              className="w-1.5 bg-[var(--accent-primary)] rounded-full"
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-mono text-gray-400 pt-1 border-t border-white/5">
                          <span>Google Oboe C++</span>
                          <span className="text-emerald-400 font-bold">&lt; 20ms JNI</span>
                        </div>
                      </div>

                      <div className="text-center text-[10px] font-mono text-gray-500">
                        Native Android • Jetpack Compose
                      </div>
                    </div>
                  )}

                  {/* RugGear Rugged Handset Frame */}
                  {cs.frameType === "rugged" && (
                    <div className="w-full max-w-[280px] rounded-3xl p-3 bg-[#12141c] border-4 border-amber-600/40 shadow-2xl space-y-3 relative overflow-hidden">
                      <div className="flex items-center justify-between text-[10px] font-mono text-amber-500 border-b border-amber-600/20 pb-1.5 px-1">
                        <span className="flex items-center gap-1 font-bold">
                          <i className="fa-solid fa-shield-halved"></i> SAFE-UEM
                        </span>
                        <span className="bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded text-[9px] font-bold">
                          LOCKED
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-black/80 border border-amber-500/30 space-y-2.5 text-center">
                        <div className="text-xs font-bold text-white">verbo_lite Single-App Kiosk</div>
                        <div className="text-[10px] text-gray-400 font-mono">Status Bar: Suppressed (DPC)</div>

                        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] text-left font-mono space-y-1">
                          <div className="text-amber-300 font-bold">Provisioning Status:</div>
                          <div className="text-gray-300">✓ RugGear Keycode PTT Mapped</div>
                          <div className="text-gray-300">✓ Safe Boot Disabled</div>
                          <div className="text-gray-300">✓ Auto Watchdog Restart: Active</div>
                        </div>

                        <div className="w-full py-2 bg-amber-600 text-black font-bold rounded-xl text-xs uppercase tracking-wider">
                          Dedicated Appliance Mode
                        </div>
                      </div>

                      <div className="text-center text-[10px] font-mono text-gray-500">
                        RugGear RG725 Hardware Target
                      </div>
                    </div>
                  )}

                  {/* ESP32 Telemetry Terminal Frame */}
                  {cs.frameType === "terminal" && (
                    <div className="w-full max-w-[290px] rounded-2xl p-3 bg-[#0a0c12] border border-cyan-500/40 shadow-2xl space-y-2 font-mono text-left">
                      <div className="flex items-center justify-between text-[10px] text-cyan-400 border-b border-cyan-500/20 pb-1 px-1">
                        <span>esp32_csi_node ~ %</span>
                        <span className="text-emerald-400 animate-pulse">100Hz STREAM</span>
                      </div>

                      <div className="text-[10px] text-gray-300 space-y-1 bg-black/60 p-2.5 rounded-xl border border-white/5">
                        <div className="text-cyan-300 font-bold">[ESP-IDF v5.1] Promiscuous: ON</div>
                        <div>Payload: IEEE 802.11n Frame</div>
                        <div>Subcarriers: 64 Complex [I/Q]</div>
                        <div className="text-emerald-400">Phase Variance: +0.42 rad</div>
                        <div className="text-amber-400">Amplitude Shift: Δ 3.8 dBm</div>
                        <div className="text-gray-400">Tunnel: cloudflare://telemetry</div>
                      </div>

                      <div className="h-6 flex items-end justify-between gap-0.5 px-1 bg-black/40 rounded py-1">
                        {[20, 50, 80, 45, 90, 65, 85, 30, 95, 70, 40, 85, 60, 75, 50].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-cyan-400/80 rounded-t"
                            style={{ height: `${h}%` }}
                          ></div>
                        ))}
                      </div>

                      <div className="text-[9px] text-gray-500 text-center">
                        Wi-Fi Channel State Information Sensing
                      </div>
                    </div>
                  )}

                  {/* Flutter Mobile Device Frame */}
                  {cs.frameType === "mobile" && (
                    <div className="w-full max-w-[280px] rounded-3xl p-3 bg-[#0d0f17] border-2 border-[var(--border-medium)] shadow-2xl space-y-2.5 text-center">
                      <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono border-b border-white/10 pb-1 px-1">
                        <span>DDTransport Driver</span>
                        <span className="text-emerald-400">SYNCED</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--glass-border)] space-y-2 text-left text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-white">Trip #KL-4920</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">En Route</span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)]">Consignment: Kochi Freight Hub → Bangalore</p>
                        
                        {/* Map Simulator */}
                        <div className="h-16 rounded-xl bg-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
                          <i className="fa-solid fa-map-location-dot text-2xl text-[var(--accent-secondary-bright)] opacity-60"></i>
                          <span className="absolute bottom-1 right-2 text-[9px] font-mono text-gray-400">GPS Live Sync</span>
                        </div>

                        <div className="text-[10px] font-mono text-gray-400 flex justify-between">
                          <span>PostgreSQL RLS</span>
                          <span className="text-emerald-400 font-bold">&lt; 400ms</span>
                        </div>
                      </div>

                      <div className="text-[10px] font-mono text-gray-500">
                        Flutter • Provider / BLoC
                      </div>
                    </div>
                  )}

                  {/* Browser Web Frame */}
                  {cs.frameType === "browser" && (
                    <div className="w-full max-w-[290px] rounded-2xl p-2.5 bg-[#0d0f17] border border-[var(--border-medium)] shadow-2xl space-y-2 text-left">
                      <div className="flex items-center gap-1.5 border-b border-white/10 pb-1.5 px-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        <span className="text-[10px] font-mono text-gray-400 ml-2">https://japamala.store</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-white">Japamala Headless</span>
                          <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">GraphQL</span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)]">Shopify Storefront API • Zustand Cart</p>
                        
                        <div className="p-2 rounded-lg bg-black/40 text-[10px] font-mono flex justify-between">
                          <span>Lighthouse Score</span>
                          <span className="text-emerald-400 font-bold">98 / 100</span>
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-gray-500 text-center">
                        Next.js App Router • ISR Caching
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Metrics Ribbon */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-[var(--border-subtle)]">
                {cs.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--glass-border)] text-center space-y-0.5"
                  >
                    <div className="text-base sm:text-lg font-bold font-heading text-[var(--accent-primary)]">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Modal: In-Depth Technical Case Study Viewer (2026 Strategy #1) */}
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl card-gradient border border-[var(--glass-border)] p-6 sm:p-8 space-y-6 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[var(--bg-surface)] border border-[var(--border-medium)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center transition"
                aria-label="Close Case Study"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="space-y-1.5 border-b pb-4 border-[var(--border-subtle)] pr-10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)]">
                    {activeCaseStudy.category}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Role: {activeCaseStudy.role} • {activeCaseStudy.organization}
                  </span>
                </div>
                <h2 className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  {activeCaseStudy.title}
                </h2>
                <p className="text-xs text-[var(--accent-secondary-bright)]">
                  {activeCaseStudy.subtitle}
                </p>
              </div>

              {/* Deep Problem Statement */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  1. The Engineering Challenge & Problem
                </h3>
                <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeCaseStudy.problem}
                </div>
              </div>

              {/* Detailed Architectural Decisions */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  2. Architectural Decisions & Implementation Logic
                </h3>
                <div className="space-y-2.5">
                  {activeCaseStudy.architecturalDecisions.map((dec, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1.5"
                    >
                      <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)] flex items-center gap-2">
                        <span className="text-[var(--accent-primary)] font-mono">Decision #{idx + 1}:</span>
                        <span>{dec.title}</span>
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {dec.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applied Technologies Breakdown */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  3. Applied Technology Context
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeCaseStudy.appliedTech.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--glass-border)] text-xs space-y-0.5"
                    >
                      <div className="font-bold text-[var(--text-primary)]">{tech.name}</div>
                      <div className="text-[11px] text-[var(--text-secondary)]">{tech.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Self-Critiques & Future Iterations (2026 Strategy #1) */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-secondary-bright)]">
                  4. Self-Critique & Future Iterations
                </h3>
                <div className="p-4 rounded-2xl bg-[var(--accent-secondary-subtle)] border border-[var(--accent-secondary-border)] space-y-2 text-xs text-[var(--text-secondary)]">
                  {activeCaseStudy.selfCritiques.map((crit, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-secondary-bright)] font-bold">→</span>
                      <span className="leading-relaxed">{crit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Summary */}
              <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-wrap justify-between items-center gap-3">
                <div className="flex gap-4">
                  {activeCaseStudy.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-xs font-bold text-[var(--accent-primary)]">{m.value}</span>
                      <span className="text-[10px] text-[var(--text-muted)] ml-1.5">({m.label})</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="px-5 py-2 btn-secondary-gradient text-[var(--text-primary)] font-bold rounded-xl text-xs"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
