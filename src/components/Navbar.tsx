"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { KotlinIcon, ComposeIcon } from "./TechIcons";

interface NavLinkItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { palette, setPalette } = useTheme();

  const navLinks: NavLinkItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About & Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contactus", label: "Contact" },
  ];

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 border-b border-[var(--border-medium)] bg-[var(--bg-surface)]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--accent-secondary)] border border-[var(--accent-secondary-border)] group-hover:border-[var(--accent-primary)] transition-colors duration-200 p-1.5 shadow-sm">
              <KotlinIcon className="w-4 h-4 text-[var(--accent-primary)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                Abhijith M P
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[var(--accent-secondary-bright)] -mt-0.5 flex items-center gap-1 font-semibold">
                <ComposeIcon className="w-2.5 h-2.5 text-[var(--accent-primary)]" />
                Systems & Android
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-all duration-150 ${
                    active
                      ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border border-[var(--accent-primary-border)] shadow-sm font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Subtle Divider */}
            <div className="h-4 w-px mx-2 bg-[var(--border-medium)]"></div>

            {/* Interactive Color Palette Selector */}
            <div className="flex items-center bg-[var(--bg-card)] p-1 rounded-xl border border-[var(--border-medium)] shadow-sm gap-1">
              <button
                onClick={() => setPalette("slate")}
                className={`px-3 py-1 text-[11px] font-mono font-bold rounded-lg flex items-center gap-1.5 transition-all duration-150 ${
                  palette === "slate"
                    ? "bg-[#FFA586] text-[#1b1e32] shadow-sm font-bold scale-102"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                }`}
                title="Palette 1: Slate (#242740), Steel (#384358), Coral (#FFA586), Teal (#285160)"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFA586] border border-[#242740]/40"></span>
                <span>Slate & Coral</span>
              </button>

              <button
                onClick={() => setPalette("forest")}
                className={`px-3 py-1 text-[11px] font-mono font-bold rounded-lg flex items-center gap-1.5 transition-all duration-150 ${
                  palette === "forest"
                    ? "bg-[#DAF1DE] text-[#051F20] shadow-sm font-bold scale-102"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                }`}
                title="Palette 2: Spruce (#051F20), Forest (#0B2B26), Pine (#235347), Sage (#8EB69B), Mint (#DAF1DE)"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#8EB69B] border border-[#051F20]/40"></span>
                <span>Nordic Forest</span>
              </button>
            </div>

            {/* GitHub Profile */}
            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 ml-1 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-[var(--accent-secondary-bright)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
              title="GitHub Profile (Dev-Abhijithmp)"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github text-sm"></i>
            </a>

            {/* Primary Action Button */}
            <Link
              href="/contactus"
              className="ml-2 px-3.5 py-1.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-primary-text)] font-bold rounded-xl text-xs shadow-md transition duration-150 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-paper-plane text-[10px]"></i> Get in Touch
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Palette Switcher Toggle */}
            <button
              onClick={() => setPalette(palette === "slate" ? "forest" : "slate")}
              className="px-2.5 py-1 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-[10px] font-mono font-bold flex items-center gap-1 text-[var(--accent-primary)]"
              title="Switch Color Palette"
            >
              <span className={`w-2 h-2 rounded-full ${palette === "slate" ? "bg-[#FFA586]" : "bg-[#8EB69B]"}`}></span>
              <span>{palette === "slate" ? "Slate Coral" : "Nordic Forest"}</span>
            </button>

            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-xs text-[var(--accent-secondary-bright)]"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-[var(--text-primary)]"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xs`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-1.5 flex flex-col border-t border-[var(--border-medium)] mt-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-semibold px-3 py-2 rounded-xl transition ${
                    active
                      ? "bg-[var(--accent-primary-subtle)] text-[var(--accent-primary)] border border-[var(--accent-primary-border)] font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
