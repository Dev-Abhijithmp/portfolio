"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import ComposeShowcase from "../components/ComposeShowcase";
import {
  KotlinIcon,
  ComposeIcon,
  AndroidIcon,
  FlutterIcon,
  NextJsIcon,
  ShopifyIcon,
} from "../components/TechIcons";

interface TerminalLog {
  cmd: string;
  res: string;
}

interface TechBadge {
  name: string;
  highlight: boolean;
}

interface CoreDomain {
  id: string;
  title: string;
  tag: string;
  desc: string;
  icon: string;
  customIcon?: "compose" | "flutter" | "nextjs";
  gradient: string;
}

interface QuickStat {
  value: string;
  label: string;
  sub: string;
}

export default function Home() {
  const { darkMode } = useTheme();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Terminal interactive state
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { cmd: "whoami", res: "Abhijith M P — Senior Android, Mobile & Systems Engineer" },
    { cmd: "cat status.txt", res: "⚡ Available for high-impact Android (Kotlin/Compose), Flutter & Cloud projects." },
  ]);

  const handleTerminalCmd = (cmdToRun?: string) => {
    const command = (cmdToRun || terminalInput).trim().toLowerCase();
    let response = "";

    switch (command) {
      case "whoami":
        response = "Abhijith M P — Senior Android & Mobile Systems Engineer specializing in Kotlin, Jetpack Compose, Flutter, Next.js & C++ (Oboe).";
        break;
      case "kotlin":
      case "compose":
      case "kmp":
        response = "Kotlin 2.0+ & Jetpack Compose: Coroutines, StateFlow, MVI Clean Architecture, Compose Multiplatform, Material 3, and Android NDK JNI bindings.";
        break;
      case "flutter":
        response = "Flutter & Dart: Production cross-platform mobile apps (DDTransport, Expense Tracker, WiFi Radar) with BLoC, Provider, and Supabase.";
        break;
      case "nextjs":
      case "shopify":
        response = "Next.js & Shopify: Headless e-commerce (Japamala) with GraphQL Storefront API, and Verbo Next.js real-time web portal.";
        break;
      case "skills":
      case "cat skills":
        response = "Kotlin, Jetpack Compose, Flutter, Next.js, Supabase, Shopify API, Android NDK (Oboe C++), ESP32 BLE/WiFi, Local LLMs (Ollama).";
        break;
      case "projects":
        response = "1. Verbo Suite (Kotlin Jetpack Compose + Next.js Web + Oboe C++) | 2. DDTransport (Flutter + Supabase) | 3. Japamala E-Commerce (Next.js + Shopify) | 4. Expense Tracker & OCR (Flutter)";
        break;
      case "audio":
      case "oboe":
        response = "Google Oboe C++ NDK Engine: Sub-20ms hardware audio buffer rendering with Android JNI hooks.";
        break;
      case "contact":
        response = "Email: 111abhiabhi@gmail.com | Phone: +91 9497747142 | GitHub: github.com/Dev-Abhijithmp";
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: '${command}'. Try: kotlin, compose, flutter, nextjs, audio, skills, projects, contact, clear`;
    }

    setTerminalLogs((prev) => [...prev, { cmd: command, res: response }]);
    setTerminalInput("");
  };

  const coreDomains: CoreDomain[] = [
    {
      id: "kotlin-compose",
      title: "Kotlin & Jetpack Compose / KMP",
      tag: "Kotlin & Compose",
      desc: "Declarative Android UI architecture, Kotlin Coroutines, StateFlow, Navigation Compose, Material 3, and Compose Multiplatform.",
      icon: "fa-android",
      customIcon: "compose",
      gradient: "from-kotlin via-kotlin-pink to-compose",
    },
    {
      id: "flutter-supabase",
      title: "Flutter & Supabase Systems",
      tag: "Flutter & Supabase",
      desc: "Production cross-platform mobile applications (DDTransport, Expense Tracker) with real-time PostgreSQL synchronization.",
      icon: "fa-mobile-screen-button",
      customIcon: "flutter",
      gradient: "from-sky-500 to-indigo-600",
    },
    {
      id: "audio-systems",
      title: "Low-Latency Audio & C++ Engines",
      tag: "NDK & Oboe",
      desc: "Sub-20ms real-time audio pipeline using Google Oboe C++, JNI Android bridges, SIP call signaling, and PCM buffer streams.",
      icon: "fa-wave-square",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "web-ecommerce",
      title: "Next.js & Shopify Headless",
      tag: "Next.js & Shopify",
      desc: "Full-stack SSR/ISR web portals and headless e-commerce platforms (Japamala, Verbo Web) with Shopify Storefront GraphQL.",
      icon: "fa-bag-shopping",
      customIcon: "nextjs",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  const techBadges: TechBadge[] = [
    { name: "Kotlin", highlight: true },
    { name: "Jetpack Compose", highlight: true },
    { name: "Flutter", highlight: true },
    { name: "Next.js", highlight: true },
    { name: "Supabase", highlight: true },
    { name: "Shopify", highlight: false },
    { name: "Android NDK (Oboe)", highlight: true },
    { name: "Coroutines & Flow", highlight: false },
    { name: "ESP32 IoT", highlight: false },
    { name: "Local LLMs (Ollama)", highlight: false },
  ];

  const quickStats: QuickStat[] = [
    { value: "Kotlin & Compose", label: "Native Android Suite", sub: "Verbo Declarative Client" },
    { value: "Flutter + Supabase", label: "Fleet Logistics & OCR", sub: "DDTransport & Expense App" },
    { value: "Next.js + Shopify", label: "Web Portal & E-Commerce", sub: "Verbo Web & Japamala" },
    { value: "< 20ms", label: "Audio Latency", sub: "Google Oboe C++ NDK" },
  ];

  return (
    <div className={`min-h-screen flex flex-col justify-between overflow-hidden relative ${darkMode ? "bg-grid-pattern" : "bg-grid-pattern-light"}`}>
      {/* Ambient Lighting Spotlights */}
      <div className="absolute top-12 left-1/3 w-[500px] h-[500px] bg-indigo-500/[0.07] rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-36 right-12 w-[450px] h-[450px] bg-compose/[0.07] rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Profile Picture Card */}
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-kotlin/30 via-indigo-500/20 to-compose/30 blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse"></div>

              {/* Profile Image Card */}
              <div
                className={`relative p-2 rounded-3xl border backdrop-blur-xl transition duration-300 ${
                  darkMode ? "bg-[#0E1017]/90 border-white/[0.08]" : "bg-white border-slate-200 shadow-2xl"
                }`}
              >
                <img
                  src="/abhijith.jpg"
                  alt="Abhijith M P profile"
                  className="w-72 sm:w-80 md:w-96 h-auto rounded-2xl object-cover shadow-2xl"
                />

                {/* Live Floating Status Badge */}
                <div className="absolute -bottom-4 -right-2 bg-gradient-to-r from-kotlin via-indigo-600 to-compose text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2 border border-white/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
                  Kotlin & Compose Specialist
                </div>

                {/* Top Badge: Android Native */}
                <div
                  className={`absolute -top-3 -left-3 px-3 py-1 rounded-xl text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg border backdrop-blur-md ${
                    darkMode
                      ? "bg-[#141721]/95 border-white/[0.08] text-compose"
                      : "bg-white/95 border-slate-200 text-compose-dark"
                  }`}
                >
                  <AndroidIcon className="w-3.5 h-3.5" /> Native Android + NDK
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-1 lg:order-2">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 backdrop-blur-md bg-white/[0.04] border-white/[0.08] text-gray-300 shadow-sm">
              <KotlinIcon className="w-3.5 h-3.5" />
              <span>Senior Android, Mobile & Systems Engineer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-kotlin via-kotlin-pink to-compose bg-clip-text text-transparent block sm:inline">
                ABHIJITH M P
              </span>
            </h1>

            {/* Bio with accurate tech stack */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Architecting native Android apps with <strong className="text-kotlin-light font-bold">Kotlin & Jetpack Compose</strong>, cross-platform mobile apps with <strong className="text-sky-400 font-bold">Flutter & Supabase</strong>, modern web platforms with <strong className="text-white font-bold">Next.js & Shopify</strong>, and low-latency audio with <strong className="text-compose font-bold">Google Oboe C++ NDK</strong>.
            </p>

            {/* Interactive Tech Stack Filter Pills */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="uppercase tracking-wider">Engineering Tech Stack:</span>
                {selectedTech && (
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="text-kotlin-light hover:underline text-[11px]"
                  >
                    Clear Filter ✕
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techBadges.map((badge) => {
                  const isSelected = selectedTech === badge.name;
                  return (
                    <button
                      key={badge.name}
                      onClick={() => setSelectedTech(isSelected ? null : badge.name)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-gradient-to-r from-kotlin to-compose text-white border-transparent shadow-lg scale-105"
                          : badge.highlight
                          ? darkMode
                            ? "bg-white/[0.06] border-white/[0.12] text-gray-200 hover:bg-white/[0.1]"
                            : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                          : darkMode
                          ? "bg-white/[0.02] border-white/[0.06] text-gray-400 hover:border-white/[0.15] hover:text-white"
                          : "bg-white border-slate-200 text-gray-700 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      {badge.name === "Kotlin" && <KotlinIcon className="w-3 h-3" />}
                      {badge.name === "Jetpack Compose" && <ComposeIcon className="w-3 h-3" />}
                      {badge.name === "Flutter" && <FlutterIcon className="w-3 h-3" />}
                      {badge.name === "Next.js" && <NextJsIcon className="w-3 h-3" />}
                      {badge.name === "Shopify" && <ShopifyIcon className="w-3 h-3 text-emerald-400" />}
                      <span>{badge.name}</span>
                      {isSelected && <span className="text-[10px]">✕</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="px-6 py-3.5 bg-gradient-to-r from-kotlin via-kotlin-pink to-compose hover:opacity-95 text-white font-bold rounded-2xl shadow-xl hover:shadow-kotlin/25 transition duration-200 text-center flex items-center justify-center gap-2 text-sm"
              >
                <span>View Engineered Projects</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
              <Link
                href="/contactus"
                className={`px-6 py-3.5 font-bold rounded-2xl border transition duration-200 text-center text-sm ${
                  darkMode
                    ? "bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-gray-200"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
                }`}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                darkMode ? "bg-[#0E1017]/80 border-white/[0.07]" : "bg-white/90 border-slate-200 shadow-sm"
              }`}
            >
              <div className="text-xl sm:text-2xl font-extrabold font-heading bg-gradient-to-r from-kotlin via-indigo-400 to-compose bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mt-1">{stat.label}</div>
              <div className={`text-[11px] font-mono mt-0.5 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Live Jetpack Compose & Kotlin Showcase Component */}
      <section className="max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-compose/10 text-compose border border-compose/20">
            <ComposeIcon className="w-3.5 h-3.5" /> Interactive Android Studio Playground
          </div>
          <h2 className="text-3xl font-extrabold font-heading">Jetpack Compose & Kotlin Multiplatform in Action</h2>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Interact with the simulated Android device below to test reactive Compose state and explore idiomatic Kotlin code.
          </p>
        </div>

        <ComposeShowcase />
      </section>

      {/* Interactive Developer CLI Terminal */}
      <section className="max-w-7xl mx-auto px-6 py-8 w-full">
        <div
          className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 ${
            darkMode ? "bg-[#090B10] border-white/[0.08]" : "bg-slate-900 border-slate-800 text-gray-100"
          }`}
        >
          {/* Terminal Window Header */}
          <div className="bg-black/40 px-5 py-3 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs font-mono text-gray-400 ml-2">abhijith@engineer-core ~ %</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["whoami", "kotlin", "compose", "flutter", "nextjs", "audio", "skills", "projects", "contact", "clear"].map((quickCmd) => (
                <button
                  key={quickCmd}
                  onClick={() => handleTerminalCmd(quickCmd)}
                  className="px-2 py-0.5 bg-white/[0.06] hover:bg-kotlin hover:text-white text-[11px] font-mono text-gray-300 rounded-md transition"
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
                <div className="flex items-center gap-2 text-kotlin-light">
                  <span className="text-gray-500">$</span>
                  <span>{log.cmd}</span>
                </div>
                <div className="text-gray-300 pl-4 border-l-2 border-kotlin/40 leading-relaxed">
                  {log.res}
                </div>
              </div>
            ))}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTerminalCmd();
              }}
              className="flex items-center gap-2 pt-2 text-compose"
            >
              <span className="text-gray-500">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'kotlin', 'compose', 'flutter', 'nextjs', or 'skills'..."
                className="bg-transparent border-none outline-none text-gray-100 flex-1 font-mono text-xs sm:text-sm placeholder-gray-600 focus:ring-0"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Engineering Focus Pillars */}
      <section className={`py-16 border-t transition-colors duration-300 ${darkMode ? "bg-[#090B10]/80 border-white/[0.05]" : "bg-white border-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold font-heading">Core Engineering Domains</h2>
            <p className={`text-xs sm:text-sm max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Built on production-hardened Android Native, Cross-Platform Mobile, and Modern Web architectures.
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
                  className={`p-6 rounded-3xl border transition-all duration-300 space-y-4 group relative ${
                    isMatch
                      ? darkMode
                        ? "bg-[#0E1017] border-white/[0.08] hover:border-kotlin/50 hover:shadow-2xl hover:shadow-kotlin/10"
                        : "bg-slate-50 border-slate-200/80 hover:border-kotlin/50 hover:shadow-2xl hover:shadow-kotlin/10"
                      : "opacity-40 grayscale"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${domain.gradient} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition duration-300`}>
                    {domain.customIcon === "compose" ? (
                      <ComposeIcon className="w-6 h-6 text-white" />
                    ) : domain.customIcon === "flutter" ? (
                      <FlutterIcon className="w-6 h-6 text-white" />
                    ) : domain.customIcon === "nextjs" ? (
                      <NextJsIcon className="w-6 h-6 text-white" />
                    ) : (
                      <i className={`fa-solid ${domain.icon}`}></i>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.06] text-gray-300 font-bold border border-white/[0.08]">
                      {domain.tag}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-2.5">{domain.title}</h3>
                  </div>

                  <p className={`text-xs leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
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
