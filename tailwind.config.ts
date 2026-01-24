import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05060a",
        noir: "#0b0b10",
        chrome: "#c9c9d6",
        blush: "#ff4fd8",
        pearl: "#f7f7fb",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 79, 216, 0.35)",
        chrome: "0 20px 60px rgba(201, 201, 214, 0.20)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(600px circle at var(--x) var(--y), rgba(255,79,216,0.28), transparent 40%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
