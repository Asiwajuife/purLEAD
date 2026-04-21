import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:   "#0A1C35",
        surf: "#0D2444",
        elev: "#112B4E",
        acc:  "#00D1FF",
        t1:   "#FFFFFF",
        t2:   "#94A3B8",
        cta:  "#22C55E",
        gold: "#E8B84B",
      },
      fontFamily: {
        display: ["var(--font-syne)",    "sans-serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
        mono:    ["'JetBrains Mono'",    "monospace"],
      },
      animation: {
        ticker:    "ticker 28s linear infinite",
        shimmer:   "shimmer 3.5s infinite",
        livePulse: "livePulse 2s ease-in-out infinite",
        fbob:      "fbob 3s ease-in-out infinite",
      },
      keyframes: {
        ticker:    { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        shimmer:   { "0%": { left: "-100%" }, "55%": { left: "150%" }, "100%": { left: "150%" } },
        livePulse: { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: "0.3", transform: "scale(0.7)" } },
        fbob:      { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
      },
    },
  },
  plugins: [],
};

export default config;
