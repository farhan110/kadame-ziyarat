import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#C5A028",
        greenDeep: "#1A3C2A",
        sacredBlack: "#111111",
        ivory: "#F5F0E1",
        burgundy: "#6B1D2A"
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(197, 160, 40, 0.28)"
      },
      backgroundImage: {
        shrine: "radial-gradient(circle at 50% 0%, rgba(197,160,40,.32), transparent 28%), linear-gradient(135deg, rgba(26,60,42,.92), rgba(17,17,17,.96) 48%, rgba(17,17,17,1))"
      }
    }
  },
  plugins: []
};

export default config;
