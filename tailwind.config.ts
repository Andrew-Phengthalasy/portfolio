import type {Config} from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{ts,js,tsx}",
        "./components/**/*.{ts,js,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: [ "var(--font-display)", "serif"],
                body: ["var(--font-body)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"]
            },
            colors: {
                background: "#0f0c1a",
                surface: "1c1830",
                accent: "8b5cf6",
                warm:"ede9e0",
                muted:"a09ab8"

            },
        },
    },
    plugins:[],
};

export default config;