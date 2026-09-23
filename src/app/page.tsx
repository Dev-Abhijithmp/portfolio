"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import profilePhoto from "../../public/abhijith.jpg";
import ComposeShowcase from "../components/ComposeShowcase";
import {
  KotlinIcon,
  ComposeIcon,
  AndroidIcon,
  FlutterIcon,
  NextJsIcon,
} from "../components/TechIcons";

interface TerminalLog {
  cmd: string;
  res: string;
}

interface TechBadge {
  name: string;
  category: "primary" | "secondary";
  iconName: "kotlin" | "compose" | "flutter" | "nextjs" | "pjsip" | "mqtt" | "mdm" | "esp32";
}

interface CoreDomain {
  id: string;
  title: string;
  tag: string;
  desc: string;
  icon: string;
  customIcon?: "compose" | "flutter" | "nextjs";
  themeStyle: "primary" | "secondary";
}

interface QuickStat {
  value: string;
  label: string;
  sub: string;
  accent: "primary" | "secondary";
}

export default function Home() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Terminal interactive state with authentic profile data
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { cmd: "whoami", res: "Abhijith M P — Mobile Software Developer (4 Yrs Exp) • Android (Kotlin/Compose), Flutter, VoIP & MDM." },
    { cmd: "cat status.txt", res: "⚡ Available for high-impact Mobile, Real-Time Systems & Android Engineering roles." },
  ]);

  const handleTerminalCmd = (cmdToRun?: string) => {
    const command = (cmdToRun || terminalInput).trim().toLowerCase();
    let response = "";

    switch (command) {
      case "whoami":
        response = "Abhijith M P — Mobile Software Developer with 4 years of experience (MCA, SNGIST). Native Android (Kotlin/Compose), Flutter, PJSIP/MQTT VoIP & SafeUEM MDM.";
        break;
      case "experience":
      case "work":
        response = "1. Frontend Developer @ ScudNetworks (Apr 2023 – Present) | 2. Flutter Developer @ Texol (Feb 2022 – Apr 2023).";
        break;
      case "verbo":
      case "voip":
        response = "Verbo VoIP Ecosystem: PJSIP stack, Google Oboe C++ NDK (<20ms latency), HiveMQ MQTT v5 signaling, Foreground Services, Phonetic Callsigns (Bravo, Charlie).";
        break;
      case "mdm":
      case "kiosk":
        response = "verbo_lite: SafeUEM MDM provisioning, automated shell/PowerShell scripts, Single-App Kiosk lockdown on RugGear industrial hardware.";
        break;
      case "esp32":
      case "csi":
        response = "Wi-Fi CSI Sensing: ESP-IDF framework on ESP32, 64-subcarrier phase/amplitude matrix extraction, LoRa/BLE transport over Cloudflare Tunneling.";
        break;
      case "kotlin":
      case "compose":
        response = "Kotlin 2.0+ & Jetpack Compose: Coroutines, StateFlow, Foreground Services, JNI audio bindings, and Material 3 design systems.";
        break;
      case "flutter":
        response = "Flutter & Dart: Production mobile apps (DDTransport, OCR Expense Tracker) with Provider, BLoC, Supabase PostgreSQL, and MethodChannels.";
        break;
      case "env":
      case "tools":
        response = "Developer Environment: macOS, Ghostty, tmux, Zsh (Powerlevel10k), Neovim, Git, Figma.";
        break;
      case "education":
        response = "Master of Computer Applications (MCA) from SNGIST Group of Institutions. Fluent in English and Malayalam.";
        break;
      case "skills":
      case "cat skills":
        response = "Android (Kotlin, Compose, Oboe), Flutter, PJSIP, WebRTC, MQTT v5 (HiveMQ), Next.js, TypeScript, Zustand, Supabase, SafeUEM MDM, ESP32.";
        break;
      case "projects":
        response = "1. Verbo VoIP Suite (PJSIP + Oboe) | 2. verbo_lite (SafeUEM Kiosk on RugGear) | 3. ESP32 Wi-Fi Sensing (CSI) | 4. DDTransport (Flutter + Supabase).";
        break;
      case "contact":
        response = "Email: 111abhiabhi@gmail.com | Phone: +91 9497747142 | GitHub: github.com/Dev-Abhijithmp";
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: '${command}'. Try: whoami, experience, verbo, mdm, esp32, kotlin, flutter, env, skills, projects, contact, clear`;
    }

    setTerminalLogs((prev) => [...prev, { cmd: command, res: response }]);
    setTerminalInput("");
  };

  const coreDomains: CoreDomain[] = [
    {
      id: "voip-realtime",
      title: "VoIP & Real-Time Communications",
      tag: "PJSIP & MQTT v5",
      desc: "Mission-critical voice streaming with embedded PJSIP, Google Oboe C++ NDK (<20ms latency), HiveMQ MQTT v5 signaling, and phonetic callsign channel routing.",
      icon: "fa-tower-broadcast",
      themeStyle: "primary",
    },
    {
      id: "enterprise-mdm",
      title: "Enterprise MDM & Kiosk Lockdown",
      tag: "SafeUEM & RugGear",
      desc: "Appliance-grade single-app kiosk lockdown using SafeUEM Device Policy Controllers, ADB automated provisioning scripts, and physical PTT keycode mapping.",
      icon: "fa-shield-halved",
      themeStyle: "primary",
    },
    {
      id: "android-compose",
      title: "Native Android & Jetpack Compose",
      tag: "Kotlin 2.0+ & Compose",
      desc: "Modern declarative Android engineering, Kotlin Coroutines, StateFlow, Android Foreground Services, and hardware-accelerated UI architecture.",
      icon: "fa-android",
      customIcon: "compose",
      themeStyle: "primary",
    },
    {
      id: "embedded-csi",
      title: "ESP32 Wi-Fi Sensing & Hardware",
      tag: "ESP-IDF & Wi-Fi CSI",
      desc: "Embedded firmware extracting raw 64-subcarrier Wi-Fi Channel State Information matrices for presence sensing, alongside LoRa and BLE mesh integration.",
      icon: "fa-microchip",
      themeStyle: "secondary",
    },
  ];

  // Core competencies aligned with authentic work profile
  const techBadges: TechBadge[] = [
    { name: "Kotlin & Compose", category: "primary", iconName: "kotlin" },
    { name: "PJSIP / VoIP", category: "primary", iconName: "pjsip" },
    { name: "MQTT v5 (HiveMQ)", category: "primary", iconName: "mqtt" },
    { name: "SafeUEM MDM", category: "primary", iconName: "mdm" },
    { name: "Flutter (Dart)", category: "secondary", iconName: "flutter" },
    { name: "ESP32 (ESP-IDF)", category: "secondary", iconName: "esp32" },
    { name: "Next.js & TypeScript", category: "secondary", iconName: "nextjs" },
  ];

  const quickStats: QuickStat[] = [
    { value: "4 Years", label: "Mobile Software Engineer", sub: "Android & Flutter (ScudNetworks & Texol)", accent: "primary" },
    { value: "< 20ms", label: "Hardware Audio Buffer", sub: "Google Oboe C++ NDK Engine", accent: "primary" },
    { value: "SafeUEM", label: "Enterprise Kiosk Lockdown", sub: "RugGear Hardware Deployments", accent: "secondary" },
    { value: "100 Hz CSI", label: "Wi-Fi Sensing Pipeline", sub: "ESP32 Embedded Subcarrier Data", accent: "secondary" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      {/* Hero Section with Ambient Atmospheric Glow */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-14 md:pt-16 md:pb-20 w-full ambient-glow-mesh">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Profile Picture Card */}
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="relative p-2.5 rounded-3xl card-gradient">
                <Image
                  src={profilePhoto}
                  alt="Abhijith M P profile"
                  priority
                  className="w-72 sm:w-80 md:w-88 h-auto rounded-2xl object-cover filter contrast-[1.03]"
                />

                {/* Floating Status Badge */}
                <div className="absolute -bottom-3.5 -right-2 btn-primary-gradient text-[var(--accent-primary-text)] text-[11px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_8px_currentColor]"></span>
                  <span>Kotlin & Compose Specialist</span>
                </div>

                {/* Top Badge */}
                <div className="absolute -top-3 -left-3 px-3 py-1 rounded-xl text-[10px] font-mono font-bold flex items-center gap-1.5 btn-secondary-gradient text-[var(--text-primary)] shadow-md">
                  <AndroidIcon className="w-3.5 h-3.5 text-[var(--accent-secondary-bright)]" /> 4 Yrs Exp • Android & Flutter
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-1 lg:order-2">
            {/* Tagline Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--accent-secondary-subtle)] text-[var(--accent-primary)] border border-[var(--glass-border)] backdrop-blur-md shadow-sm">
              <span>Mobile Software Developer • 4 Years Exp • Android & Flutter</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading leading-tight tracking-tight text-[var(--text-primary)]">
              Hi, I'm{" "}
              <span className="text-[var(--accent-primary)]">ABHIJITH</span>{" "}
              <span className="text-[var(--accent-secondary-bright)]">M P</span>
            </h1>

            {/* Bio with authentic professional profile */}
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-[var(--text-secondary)]">
              Mobile Software Developer with <strong className="text-[var(--accent-primary)] font-semibold">4 years of experience</strong> specializing in native Android (<strong className="text-[var(--text-primary)] font-semibold">Kotlin, Jetpack Compose</strong>) and cross-platform <strong className="text-[var(--accent-secondary-bright)] font-semibold">Flutter</strong> development. Proven expertise in building real-time communication systems (<strong className="text-[var(--accent-primary)] font-semibold">PJSIP, MQTT v5, WebRTC</strong>), enterprise device management (<strong className="text-[var(--text-primary)] font-semibold">SafeUEM MDM on RugGear</strong>), and embedded hardware (<strong className="text-[var(--accent-secondary-bright)] font-semibold">ESP32 Wi-Fi sensing</strong>).
            </p>

            {/* Interactive Tech Stack Filter Pills */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span className="uppercase tracking-wider font-semibold">Core Competencies:</span>
                {selectedTech && (
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="text-[var(--accent-primary)] hover:underline text-[11px] font-bold"
                  >
                    Clear Filter ✕
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {techBadges.map((badge) => {
                  const isSelected = selectedTech === badge.name;
                  return (
                    <button
                      key={badge.name}
                      onClick={() => setSelectedTech(isSelected ? null : badge.name)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-2 backdrop-blur-md border ${
                        isSelected
                          ? "btn-primary-gradient text-[var(--accent-primary-text)] scale-105"
                          : badge.category === "primary"
                          ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border-[var(--glass-border)] hover:bg-[var(--accent-primary)] hover:text-[var(--accent-primary-text)] shadow-sm"
                          : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border-[var(--glass-border)] hover:bg-[var(--accent-secondary)] hover:text-[var(--text-primary)] shadow-sm"
                      }`}
                    >
                      {badge.iconName === "kotlin" && <KotlinIcon className="w-3.5 h-3.5 text-current" />}
                      {badge.iconName === "compose" && <ComposeIcon className="w-3.5 h-3.5 text-current" />}
                      {badge.iconName === "flutter" && <FlutterIcon className="w-3.5 h-3.5 text-current" />}
                      {badge.iconName === "nextjs" && <NextJsIcon className="w-3.5 h-3.5 text-current" />}
                      {badge.iconName === "pjsip" && <i className="fa-solid fa-phone-volume text-current text-xs"></i>}
                      {badge.iconName === "mqtt" && <i className="fa-solid fa-tower-broadcast text-current text-xs"></i>}
                      {badge.iconName === "mdm" && <i className="fa-solid fa-shield-halved text-current text-xs"></i>}
                      {badge.iconName === "esp32" && <i className="fa-solid fa-microchip text-current text-xs"></i>}
                      <span>{badge.name}</span>
                      {isSelected && <span className="text-[10px] ml-0.5">✕</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="px-6 py-3.5 btn-primary-gradient text-[var(--accent-primary-text)] font-bold rounded-2xl text-center flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <span>View Engineering Case Studies</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 btn-secondary-gradient text-[var(--text-primary)] font-semibold rounded-2xl text-center text-sm"
              >
                Explore Experience & MCA
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl card-gradient border-t-2 ${
                stat.accent === "primary" ? "border-t-[var(--accent-primary)]" : "border-t-[var(--accent-secondary-bright)]"
              }`}
            >
              <div className={`text-xl sm:text-2xl font-extrabold font-heading ${
                stat.accent === "primary" ? "text-[var(--accent-primary)]" : "text-[var(--accent-secondary-bright)]"
              }`}>
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[var(--text-primary)] mt-1">{stat.label}</div>
              <div className="text-[11px] font-mono mt-0.5 text-[var(--text-muted)]">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Live Jetpack Compose & Kotlin Showcase Component */}
      <section className="max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border border-[var(--glass-border)]">
            <ComposeIcon className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Interactive Android Studio Playground
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-[var(--text-primary)]">
            Jetpack Compose & Kotlin Multiplatform in Action
          </h2>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-[var(--text-secondary)]">
            Interact with the simulated Android device below to test reactive Compose state and explore idiomatic Kotlin code.
          </p>
        </div>

        <ComposeShowcase />
      </section>

      {/* Featured 2026 Case Studies Teaser (Project-Forward Architecture) */}
      <section className="max-w-7xl mx-auto px-6 py-10 w-full space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-[var(--border-subtle)]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              2026 Project-Forward Case Studies
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-[var(--text-primary)] mt-1">
              Featured Systems & Mobile Architecture
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-bold text-[var(--accent-primary)] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All 5 Case Studies</span>
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Case Study 1: Verbo VoIP */}
          <div className="p-6 rounded-3xl card-gradient space-y-4 flex flex-col justify-between border border-[var(--glass-border)]">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded-md bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] font-bold">
                  VoIP & Audio C++
                </span>
                <span className="text-[var(--text-muted)]">ScudNetworks</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-[var(--text-primary)]">
                Verbo VoIP Suite
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Native Android voice streaming with PJSIP, sub-20ms Google Oboe C++ NDK engine, HiveMQ MQTT v5 signaling, and phonetic callsign routing.
              </p>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">&lt; 20ms Latency</span>
              <Link href="/projects" className="text-xs font-bold text-[var(--accent-secondary-bright)] hover:underline">
                Read Case Study →
              </Link>
            </div>
          </div>

          {/* Case Study 2: Enterprise MDM */}
          <div className="p-6 rounded-3xl card-gradient space-y-4 flex flex-col justify-between border border-[var(--glass-border)]">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 font-bold">
                  Enterprise MDM
                </span>
                <span className="text-[var(--text-muted)]">verbo_lite</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-[var(--text-primary)]">
                SafeUEM Kiosk Lockdown
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Automated shell & PowerShell staging scripts for Single-App Kiosk lockdown on RugGear industrial hardware with dedicated PTT key interception.
              </p>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400">100% Kiosk Lock</span>
              <Link href="/projects" className="text-xs font-bold text-[var(--accent-secondary-bright)] hover:underline">
                Read Case Study →
              </Link>
            </div>
          </div>

          {/* Case Study 3: ESP32 Wi-Fi Sensing */}
          <div className="p-6 rounded-3xl card-gradient space-y-4 flex flex-col justify-between border border-[var(--glass-border)]">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-bold">
                  Embedded CSI
                </span>
                <span className="text-[var(--text-muted)]">ESP-IDF</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-[var(--text-primary)]">
                Wi-Fi CSI Sensing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Raw Wi-Fi Channel State Information subcarrier matrix extraction using custom ESP32 firmware, LoRa mesh, and Cloudflare Tunneling.
              </p>
            </div>
            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-300">100Hz Real-Time</span>
              <Link href="/projects" className="text-xs font-bold text-[var(--accent-secondary-bright)] hover:underline">
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Developer CLI Terminal */}
      <section className="max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="rounded-3xl card-gradient overflow-hidden border border-[var(--glass-border)]">
          {/* Terminal Window Header */}
          <div className="surface-gradient px-5 py-3 flex items-center justify-between border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
              <span className="text-xs font-mono text-[var(--accent-secondary-bright)] ml-2 font-semibold">
                abhijith@engineer-core ~ %
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["whoami", "experience", "verbo", "mdm", "esp32", "skills", "env", "education", "contact", "clear"].map((quickCmd) => (
                <button
                  key={quickCmd}
                  onClick={() => handleTerminalCmd(quickCmd)}
                  className="px-2 py-0.5 bg-[var(--accent-secondary-subtle)] text-[var(--accent-primary)] hover:text-white text-[11px] font-mono rounded-md transition font-semibold"
                >
                  {quickCmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Logs & Prompt */}
          <div className="p-5 font-mono text-xs sm:text-sm space-y-3 max-h-60 overflow-y-auto">
            {terminalLogs.map((log, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold">
                  <span className="text-[var(--accent-secondary-bright)]">$</span>
                  <span>{log.cmd}</span>
                </div>
                <div className="text-[var(--text-secondary)] pl-4 border-l-2 border-[var(--accent-secondary-bright)] leading-relaxed">
                  {log.res}
                </div>
              </div>
            ))}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTerminalCmd();
              }}
              className="flex items-center gap-2 pt-2 text-[var(--accent-primary)]"
            >
              <span className="text-[var(--accent-secondary-bright)] font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'whoami', 'experience', 'verbo', 'mdm', 'esp32', or 'skills'..."
                className="bg-transparent border-none outline-none text-[var(--text-primary)] flex-1 font-mono text-xs sm:text-sm placeholder-[var(--text-muted)] focus:ring-0"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Engineering Focus Pillars */}
      <section className="py-16 bg-[var(--bg-canvas)] ambient-glow-mesh">
        <div className="max-w-7xl mx-auto px-6 space-y-10 relative z-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-[var(--text-primary)]">
              Core Technical Competencies
            </h2>
            <p className="text-xs sm:text-sm max-w-xl mx-auto text-[var(--text-secondary)]">
              Production engineering spanning native Android, real-time communications, MDM, and embedded edge systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreDomains.map((domain) => {
              const isMatch = selectedTech
                ? domain.tag.toLowerCase().includes(selectedTech.toLowerCase()) ||
                  domain.title.toLowerCase().includes(selectedTech.toLowerCase())
                : true;

              return (
                <div
                  key={domain.id}
                  className={`p-6 rounded-3xl space-y-4 group relative border border-[var(--glass-border)] ${
                    isMatch ? "card-gradient" : "opacity-40 grayscale"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition duration-200 ${
                    domain.themeStyle === "primary"
                      ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)]"
                      : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)]"
                  }`}>
                    {domain.customIcon === "compose" ? (
                      <ComposeIcon className="w-6 h-6 text-current" />
                    ) : domain.customIcon === "flutter" ? (
                      <FlutterIcon className="w-6 h-6 text-current" />
                    ) : domain.customIcon === "nextjs" ? (
                      <NextJsIcon className="w-6 h-6 text-current" />
                    ) : (
                      <i className={`fa-solid ${domain.icon}`}></i>
                    )}
                  </div>

                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full font-bold ${
                      domain.themeStyle === "primary"
                        ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)]"
                        : "bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)]"
                    }`}>
                      {domain.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mt-2.5 font-heading">
                      {domain.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                    {domain.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
