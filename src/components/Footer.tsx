"use client";

import React from "react";
import { KotlinIcon, ComposeIcon, FlutterIcon, NextJsIcon } from "./TechIcons";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--text-secondary)] mt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm tracking-tight text-[var(--text-primary)]">
              Abhijith M P
            </span>
            <span className="text-[var(--accent-secondary-bright)] font-bold">•</span>
            <span className="text-xs font-mono text-[var(--accent-secondary-bright)] flex items-center gap-1 font-semibold">
              Systems & Mobile Engineer
            </span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">
            Android (Kotlin & Compose) • Flutter & Supabase • Next.js Web • C++ Audio Engines (Google Oboe)
          </p>
        </div>

        {/* Center Technology Badges featuring both palette accents */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border border-[var(--accent-primary-border)] flex items-center gap-1 font-semibold">
            <KotlinIcon className="w-3.5 h-3.5 text-current" /> Kotlin
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border border-[var(--accent-primary-border)] flex items-center gap-1 font-semibold">
            <ComposeIcon className="w-3.5 h-3.5 text-current" /> Compose
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border border-[var(--accent-secondary-border)] flex items-center gap-1 font-semibold">
            <FlutterIcon className="w-3.5 h-3.5 text-current" /> Flutter
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[var(--accent-secondary-subtle)] text-[var(--accent-secondary-bright)] border border-[var(--accent-secondary-border)] flex items-center gap-1 font-semibold">
            <NextJsIcon className="w-3.5 h-3.5 text-current" /> Next.js
          </span>
        </div>

        {/* Contact links */}
        <div className="flex items-center gap-5 text-xs font-semibold">
          <a
            href="https://github.com/Dev-Abhijithmp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-secondary-bright)] hover:text-[var(--accent-primary)] transition flex items-center gap-1.5"
          >
            <i className="fa-brands fa-github text-sm"></i> GitHub
          </a>
          <a
            href="mailto:111abhiabhi@gmail.com"
            className="text-[var(--accent-secondary-bright)] hover:text-[var(--accent-primary)] transition flex items-center gap-1.5"
          >
            <i className="fa-solid fa-envelope text-xs"></i> Email
          </a>
          <a
            href="tel:+919497747142"
            className="text-[var(--accent-secondary-bright)] hover:text-[var(--accent-primary)] transition flex items-center gap-1.5"
          >
            <i className="fa-solid fa-phone text-xs"></i> Phone
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--text-muted)] gap-2">
        <span>© {new Date().getFullYear()} Abhijith M P. Engineered with Next.js & TypeScript.</span>
        <span>Ernakulam, Kerala, India</span>
      </div>
    </footer>
  );
}
