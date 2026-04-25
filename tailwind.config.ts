import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles.ts",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "var(--font-jetbrains-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#1d1b29",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        term: {
          bg: "#0a0e14",
          tab: "#161b22",
          card: "#0d1117",
          border: "#21262d",
          border2: "#30363d",
          fg: "#a3b3cc",
          muted: "#7d8590",
          accent: "#7ee787",
          blue: "#79c0ff",
          blue2: "#a5d6ff",
          purple: "#d2a8ff",
          red: "#ff7b72",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      keyframes: {
        blink: {
          "0%,50%": { opacity: "1" },
          "50.01%,100%": { opacity: "0" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.06s step-end infinite",
        pulseDot: "pulseDot 2.5s ease-in-out infinite",
        fadeUp: "fadeUp 200ms ease-out both",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
export default config;
