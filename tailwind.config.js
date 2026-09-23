module.exports = {
  darkMode: 'class',
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        bgblue: "#1A1A2E",
        kotlin: {
          DEFAULT: "#7F52FF",
          light: "#A485FF",
          dark: "#6232E5",
          pink: "#C757BC",
          coral: "#E97838",
        },
        compose: {
          DEFAULT: "#00C782",
          blue: "#4285F4",
          dark: "#087F5B",
        },
        dark: {
          bg: "#070B12",
          card: "#0D1424",
          surface: "#121C30",
          border: "#1E2A42",
        }
      },
    },
  },
  plugins: [],
}
