import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        // Colores cyberpunk adicionales
        neon: {
          purple: '#ff00ff',
          cyan: '#00ffff',
          pink: '#ff006e',
          green: '#00ff00',
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      },
      boxShadow: {
        neon: "0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)",
        "neon-cyan": "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)",
        "neon-strong": "0 0 20px rgba(255, 0, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)",
        "neon-cyan-strong": "0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)",
      },
      textShadow: {
        neon: "0 0 10px rgba(255, 0, 255, 0.8)",
        "neon-cyan": "0 0 10px rgba(0, 255, 255, 0.8)",
      },
      animation: {
        glitch: "glitch 2s infinite",
        "neon-glow": "neon-glow 2s ease-in-out infinite",
        scanlines: "scanlines 8s linear infinite",
        crt: "crt-distort 0.5s infinite",
      },
      keyframes: {
        glitch: {
          "0%": { textShadow: "-2px 0 #ff00ff, 2px 0 #00ffff" },
          "14%": { textShadow: "-2px 0 #ff00ff, 2px 0 #00ffff" },
          "15%": { textShadow: "-2px 0 #ff00ff, 2px 0 #00ffff" },
          "49%": { textShadow: "-2px 0 #ff00ff, 2px 0 #00ffff" },
          "50%": { textShadow: "2px 0 #ff00ff, -2px 0 #00ffff" },
          "100%": { textShadow: "2px 0 #ff00ff, -2px 0 #00ffff" },
        },
      },
    },
  },
  plugins: [],
};
export default config;