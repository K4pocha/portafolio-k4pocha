import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Cambia a 'media' si prefieres el modo oscuro automático según la configuración del sistema
  theme: {
    extend: {
      colors: {
        // Ejemplo: define colores semánticos
        background: 'hsl(var(--background))', // Usaremos variables CSS HSL
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        // ... otros colores que necesites (accent, card, etc.)
      },
      // Añade esta sección para las fuentes
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Fuente por defecto
        mono: ["var(--font-fira-code)", "monospace"], // Fuente monoespaciada
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;