"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeMode = "dark" | "light";

export interface ThemeContextType {
  darkMode: boolean;
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (t: ThemeMode) => void;
  palette: "slate";
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  palette: "slate",
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio_theme") as ThemeMode | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
    } else {
      setThemeState("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-palette", "slate");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme, mounted]);

  const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  const setTheme = (t: ThemeMode) => setThemeState(t);
  const darkMode = theme === "dark";

  return (
    <ThemeContext.Provider value={{ darkMode, theme, toggleTheme, setTheme, palette: "slate" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}

