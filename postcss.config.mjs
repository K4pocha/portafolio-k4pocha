// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- ¡Usa el nombre correcto del paquete!
    autoprefixer: {},
  },
};

export default config;