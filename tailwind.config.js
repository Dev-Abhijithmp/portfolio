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
        // Semantic dynamic theme variables
        palette: {
          canvas: 'var(--bg-canvas)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          subtle: 'var(--bg-subtle)',
          borderSubtle: 'var(--border-subtle)',
          borderMedium: 'var(--border-medium)',
          borderActive: 'var(--border-active)',
          accent: 'var(--accent)',
          accentHover: 'var(--accent-hover)',
          accentText: 'var(--accent-text)',
          accentSubtle: 'var(--accent-subtle)',
          accentSecondary: 'var(--accent-secondary)',
          accentSecondarySubtle: 'var(--accent-secondary-subtle)',
          textPrimary: 'var(--text-primary)',
          textSecondary: 'var(--text-secondary)',
          textMuted: 'var(--text-muted)',
        },
        // Palette 1: Slate & Warm Coral
        paletteSlate: {
          canvas: '#242740',
          surface: '#2b304d',
          card: '#313756',
          border: '#384358',
          teal: '#285160',
          coral: '#FFA586',
        },
        // Palette 2: Nordic Forest & Sage
        paletteForest: {
          canvas: '#051F20',
          surface: '#0B2B26',
          card: '#163832',
          border: '#235347',
          sage: '#8EB69B',
          mint: '#DAF1DE',
        },
      },
    },
  },
  plugins: [],
}
