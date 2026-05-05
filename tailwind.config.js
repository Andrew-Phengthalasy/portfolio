/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,js,tsx,jsx}",
    "./components/**/*.{ts,js,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#0a0812",
        surface: "#13102a",
        accent: "#b87fff",
        warm: "#f0ece4",
        muted: "#b8b2cc",
      },
      borderRadius: {
        card: "1rem",
        btn: "0.5rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};