"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

interface NavLinkItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { darkMode, toggleTheme } = useTheme();

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
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                Abhijith M P
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[var(--accent-secondary-bright)] -mt-0.5 font-semibold">
                Software Engineer
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

            {/* Theme Toggle Button (Dark / Light) */}
            <button
              onClick={toggleTheme}
              className="h-9 px-3 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] hover:border-[var(--accent-primary)] text-xs font-semibold flex items-center gap-2 text-[var(--text-primary)] transition-all shadow-sm"
              title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <>
                  <i className="fa-solid fa-sun text-[var(--accent-secondary-bright)] text-xs"></i>
                  <span className="text-[11px] font-mono font-medium">Light</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-moon text-[var(--accent-primary)] text-xs"></i>
                  <span className="text-[11px] font-mono font-medium">Dark</span>
                </>
              )}
            </button>

            {/* GitHub Profile */}
            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-[var(--accent-secondary-bright)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors shadow-sm"
              title="GitHub Profile (Dev-Abhijithmp)"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github text-sm"></i>
            </a>

            {/* Primary Action Button */}
            <Link
              href="/contactus"
              className="h-9 ml-1 px-3.5 btn-primary-gradient text-[var(--accent-primary-text)] font-bold rounded-xl text-xs transition duration-150 flex items-center gap-1.5"
            >
              <i className="fa-solid fa-paper-plane text-[10px]"></i> Get in Touch
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-xs text-[var(--accent-primary)]"
              title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? "fa-sun text-[var(--accent-secondary-bright)]" : "fa-moon text-[var(--accent-primary)]"}`}></i>
            </button>

            <a
              href="https://github.com/Dev-Abhijithmp"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-xs text-[var(--accent-secondary-bright)]"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-[var(--border-medium)] bg-[var(--bg-card)] text-[var(--text-primary)]"
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
