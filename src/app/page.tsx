"use client";

import Link from "next/link";
import React, { useState } from "react";
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
}

interface QuickStat {
  value: string;
  label: string;
  sub: string;
}

export default function Home() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Terminal interactive state
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { cmd: "whoami", res: "Abhijith M P — Systems & Android Native Engineer" },
    { cmd: "cat status.txt", res: "⚡ Available for high-impact Android (Kotlin/Compose), Flutter & Cloud systems." },
  ]);

  const handleTerminalCmd = (cmdToRun?: string) => {
    const command = (cmdToRun || terminalInput).trim().toLowerCase();
    let response = "";

    switch (command) {
      case "whoami":
        response = "Abhijith M P — Systems & Mobile Engineer specializing in Kotlin, Jetpack Compose, Flutter, Next.js & C++ (Oboe).";
        break;
      case "kotlin":
      case "compose":
      case "kmp":
        response = "Kotlin 2.0+ & Jetpack Compose: Coroutines, StateFlow, MVI Clean Architecture, Compose Multiplatform, and Android NDK JNI bindings.";
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
        response = "1. Verbo Suite (Kotlin Jetpack Compose + Next.js Web + Oboe C++) | 2. DDTransport (Flutter + Supabase) | 3. Japamala (Next.js + Shopify) | 4. Expense Tracker & OCR (Flutter)";
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
    },
    {
      id: "flutter-supabase",
      title: "Flutter & Supabase Systems",
      tag: "Flutter & Supabase",
      desc: "Production cross-platform mobile applications (DDTransport, Expense Tracker) with real-time PostgreSQL synchronization.",
      icon: "fa-mobile-screen-button",
      customIcon: "flutter",
    },
    {
      id: "audio-systems",
      title: "Low-Latency Audio & C++ Engines",
      tag: "NDK & Oboe",
      desc: "Sub-20ms real-time audio pipeline using Google Oboe C++, JNI Android bridges, SIP call signaling, and PCM buffer streams.",
      icon: "fa-wave-square",
    },
    {
      id: "web-ecommerce",
      title: "Next.js & Shopify Headless",
      tag: "Next.js & Shopify",
      desc: "Full-stack SSR/ISR web portals and headless e-commerce platforms (Japamala, Verbo Web) with Shopify Storefront GraphQL.",
      icon: "fa-bag-shopping",
      customIcon: "nextjs",
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
    <div className="min-h-screen flex flex-col justify-between relative bg-grid-subtle">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-14 md:pt-16 md:pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {/* Profile Picture Card */}
          <div className="flex-1 flex justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Profile Image Card */}
              <div className="relative p-2 rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] shadow-2xl transition duration-300">
                <img
                  src="/abhijith.jpg"
                  alt="Abhijith M P profile"
                  className="w-72 sm:w-80 md:w-88 h-auto rounded-2xl object-cover filter contrast-[1.03]"
                />

                {/* Floating Status Badge */}
                <div className="absolute -bottom-3.5 -right-2 bg-[var(--accent)] text-[var(--accent-text)] text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-text)] animate-pulse"></span>
                  Kotlin & Compose Specialist
                </div>

                {/* Top Badge */}
                <div className="absolute -top-3 -left-3 px-3 py-1 rounded-xl text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-md border border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--accent)]">
                  <AndroidIcon className="w-3.5 h-3.5" /> Native Android + NDK
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-1 lg:order-2">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[var(--border-active)] bg-[var(--accent-subtle)] text-[var(--accent)] shadow-sm">
              <KotlinIcon className="w-3.5 h-3.5" />
              <span>Senior Android, Mobile & Systems Engineer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading leading-tight tracking-tight text-[var(--text-primary)]">
              Hi, I'm{" "}
              <span className="text-[var(--accent)] block sm:inline">
                ABHIJITH M P
              </span>
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-[var(--text-secondary)]">
              Architecting native Android applications with <strong className="text-[var(--accent)] font-semibold">Kotlin & Jetpack Compose</strong>, cross-platform mobile apps with <strong className="text-[var(--text-primary)] font-semibold">Flutter & Supabase</strong>, web platforms with <strong className="text-[var(--text-primary)] font-semibold">Next.js & Shopify</strong>, and low-latency audio engines with <strong className="text-[var(--accent)] font-semibold">Google Oboe C++ NDK</strong>.
            </p>

            {/* Interactive Tech Stack Filter Pills */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span className="uppercase tracking-wider">Engineering Tech Stack:</span>
                {selectedTech && (
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="text-[var(--accent)] hover:underline text-[11px]"
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
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-150 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-[var(--accent)] text-[var(--accent-text)] border-[var(--accent)] shadow-sm scale-105 font-bold"
                          : "bg-[var(--bg-card)] border-[var(--border-medium)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)]"
                      }`}
                    >
                      {badge.name === "Kotlin" && <KotlinIcon className="w-3 h-3" />}
                      {badge.name === "Jetpack Compose" && <ComposeIcon className="w-3 h-3" />}
                      {badge.name === "Flutter" && <FlutterIcon className="w-3 h-3" />}
                      {badge.name === "Next.js" && <NextJsIcon className="w-3 h-3" />}
                      {badge.name === "Shopify" && <ShopifyIcon className="w-3 h-3" />}
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
                className="px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-text)] font-semibold rounded-2xl shadow-sm transition duration-150 text-center flex items-center justify-center gap-2 text-sm"
              >
                <span>View Engineered Projects</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
              <Link
                href="/contactus"
                className="px-6 py-3.5 font-semibold rounded-2xl border border-[var(--border-medium)] text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition duration-150 text-center text-sm"
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
              className="p-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--bg-card)] transition-all duration-200"
            >
              <div className="text-xl sm:text-2xl font-extrabold font-heading text-[var(--accent)]">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-active)]">
            <ComposeIcon className="w-3.5 h-3.5" /> Interactive Android Studio Playground
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-[var(--text-primary)]">Jetpack Compose & Kotlin Multiplatform in Action</h2>
          <p className="text-xs sm:text-sm max-w-xl mx-auto text-[var(--text-secondary)]">
            Interact with the simulated Android device below to test reactive Compose state and explore idiomatic Kotlin code.
          </p>
        </div>

        <ComposeShowcase />
      </section>

      {/* Interactive Developer CLI Terminal */}
      <section className="max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="rounded-3xl border border-[var(--border-medium)] bg-[var(--bg-card)] shadow-2xl overflow-hidden transition-all duration-200">
          {/* Terminal Window Header */}
          <div className="bg-[var(--bg-surface)] px-5 py-3 border-b border-[var(--border-medium)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs font-mono text-[var(--text-muted)] ml-2">abhijith@engineer-core ~ %</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["whoami", "kotlin", "compose", "flutter", "nextjs", "audio", "skills", "projects", "contact", "clear"].map((quickCmd) => (
                <button
                  key={quickCmd}
                  onClick={() => handleTerminalCmd(quickCmd)}
                  className="px-2 py-0.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-active)] hover:text-[var(--accent)] text-[11px] font-mono text-[var(--text-secondary)] rounded-md transition"
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
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <span className="text-[var(--text-muted)]">$</span>
                  <span>{log.cmd}</span>
                </div>
                <div className="text-[var(--text-secondary)] pl-4 border-l-2 border-[var(--accent)]/50 leading-relaxed">
                  {log.res}
                </div>
              </div>
            ))}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTerminalCmd();
              }}
              className="flex items-center gap-2 pt-2 text-[var(--accent)]"
            >
              <span className="text-[var(--text-muted)]">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'kotlin', 'compose', 'flutter', 'nextjs', or 'skills'..."
                className="bg-transparent border-none outline-none text-[var(--text-primary)] flex-1 font-mono text-xs sm:text-sm placeholder-[var(--text-muted)] focus:ring-0"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Engineering Focus Pillars */}
      <section className="py-16 border-t border-[var(--border-medium)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-[var(--text-primary)]">Core Engineering Domains</h2>
            <p className="text-xs sm:text-sm max-w-xl mx-auto text-[var(--text-secondary)]">
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
                  className={`p-6 rounded-3xl border transition-all duration-200 space-y-4 group relative ${
                    isMatch
                      ? "bg-[var(--bg-card)] border-[var(--border-medium)] hover:border-[var(--border-active)] shadow-sm"
                      : "opacity-40 grayscale"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent-subtle)] border border-[var(--border-active)] flex items-center justify-center text-[var(--accent)] text-xl transition duration-200">
                    {domain.customIcon === "compose" ? (
                      <ComposeIcon className="w-6 h-6 text-[var(--accent)]" />
                    ) : domain.customIcon === "flutter" ? (
                      <FlutterIcon className="w-6 h-6 text-[var(--accent)]" />
                    ) : domain.customIcon === "nextjs" ? (
                      <NextJsIcon className="w-6 h-6 text-[var(--accent)]" />
                    ) : (
                      <i className={`fa-solid ${domain.icon}`}></i>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] font-semibold border border-[var(--border-subtle)]">
                      {domain.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mt-2.5">{domain.title}</h3>
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
