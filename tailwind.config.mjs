// tailwind.config.mjs
export default {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "serif-title": ['"Playfair Display"', "serif"],
        "sans-body": ["Inter", '"DM Sans"', "sans-serif"],
      },
      colors: {
        gold: "#C2A875",
        "delfos-bg-dark": "#192E38",
        "delfos-bg-light": "#EDDEDE",
        "delfos-black": "#232220",
        // Opcionales para hover/efectos modernos
        "gold-70": "#C2A875b3", // 70% opacity, para overlays
        "delfos-accent": "#A67E43", // Para acentos, botones especiales, etc.
      },
      boxShadow: {
        "gold-glow": "0 0 16px 2px #C2A87590", // Efecto soft-glow para logos y highlights
      },
      // Animaciones y transiciones futuras
      transitionProperty: {
        size: "width, height",
      },
    },
  },
  plugins: [
    // Para tipografías más elegantes y legibles
    require("@tailwindcss/typography"),
    // Para formularios estilizados
    require("@tailwindcss/forms"),
    // Para clamping de texto (ej: títulos largos)
    require("@tailwindcss/line-clamp"),
  ],
};
