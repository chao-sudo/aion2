import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // AION 2 sky-blue palette mapped onto the reference site's token names
        // (layout/class names stay identical to the reference; only hues change)
        gold: "#3c9add", // primary sky accent (reference: #d4af6a)
        gold2: "#8fd0ff", // light ice accent (reference: #f6d98a)
        cyan: "#5ee2f0", // ice/teal glow (reference: #5ee2d8)
        violet: "#2563eb", // deep blue glow (reference: #8b5cf6)
        bg: "#050a12", // deep navy background (reference: #05030c)
        bg2: "#0a1420",
        ink: "#eaf3ff", // near-white text (reference: #f5f1ff)
        muted: "#8aa0bd", // slate-blue secondary text
        line: "hsla(205, 68%, 55%, 0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-cormorant)", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        gold: "0 0 30px hsla(205, 68%, 55%, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
