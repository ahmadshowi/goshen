import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F3EA",
          soft: "#F1EBDD",
          deep: "#E8E0CC",
        },
        charcoal: {
          DEFAULT: "#1E1B16",
          soft: "#3A352C",
          faint: "#6B6459",
        },
        rust: {
          50: "#FBF0E6",
          100: "#F4DAC0",
          200: "#E9B685",
          300: "#DC9251",
          400: "#C1611A",
          500: "#A85315",
          600: "#8A4311",
          700: "#6B340D",
        },
        moss: {
          50: "#EEF1E9",
          100: "#D3DCC5",
          200: "#A9BC8B",
          300: "#7C9A5C",
          400: "#4E6B37",
          500: "#3B5228",
          600: "#2C3E1E",
          700: "#1F2C15",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 7vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2.25rem, 4.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-3": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
