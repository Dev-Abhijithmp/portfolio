/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        obsidian: {
          DEFAULT: "#08090D",
          surface: "#0E1017",
          card: "#131620",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(99, 102, 241, 0.4)",
        },
        kotlin: {
          DEFAULT: "#7F52FF",
          light: "#A485FF",
          dark: "#6232E5",
          pink: "#C757BC",
          coral: "#E97838",
        },
        compose: {
          DEFAULT: "#00C782",
          blue: "#38BDF8",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
}
