/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,js,tsx,jsx}",
    "./components/**/*.{ts,js,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#0a0812",
        surface: "#13102a",
        accent: "#9d6eff",
        gold: "#c9a84c",
        warm: "#f8f8f8",
        muted: "#8892a4",
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