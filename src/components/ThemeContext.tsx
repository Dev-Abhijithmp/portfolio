"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ColorPalette = "slate" | "forest";

export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
  palette: ColorPalette;
  setPalette: (p: ColorPalette) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleTheme: () => {},
  palette: "slate",
  setPalette: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [palette, setPaletteState] = useState<ColorPalette>("slate");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(true);
    }

    const savedPalette = localStorage.getItem("portfolio_palette") as ColorPalette | null;
    if (savedPalette === "forest" || savedPalette === "slate") {
      setPaletteState(savedPalette);
    } else {
      setPaletteState("slate");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio_palette", palette);
    document.documentElement.setAttribute("data-palette", palette);
  }, [palette, mounted]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const setPalette = (p: ColorPalette) => setPaletteState(p);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}
