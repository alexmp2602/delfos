export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: "#C2A875",
        "gold-80": "#c2a875cc",
        "gold-60": "#c2a87599",
        "gold-30": "#c2a8754d",
        "delfos-bg-dark": "#192e38",
        "delfos-bg-light": "#eddede",
        "delfos-black": "#232220",
        "delfos-accent": "#a67e43",
      },
      fontFamily: {
        "serif-title": ["Playfair Display", "serif"],
        "sans-body": ["Inter", "DM Sans", "Arial", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 16px 2px #c2a87599",
        glass: "0 8px 32px 0 #192e3850",
      },
      borderRadius: {
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      backgroundImage: {
        "overlay-gold":
          "radial-gradient(ellipse 70% 45% at 70% 0%, #c2a8754d 0%, transparent 80%)",
      },
      transitionProperty: {
        size: "width, height",
      },
      keyframes: {
        fadein: {
          from: { opacity: "0", transform: "translateY(40px) scale(0.98)" },
          to: { opacity: "1", transform: "none" },
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 8px 0 #c2a87577" },
          "50%": { boxShadow: "0 0 24px 12px #c2a875cc" },
        },
        glassfade: {
          "0%": { backdropFilter: "blur(0px) saturate(100%)", opacity: "0" },
          "100%": { backdropFilter: "blur(16px) saturate(120%)", opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein 0.8s cubic-bezier(0.5,1.3,0.5,1.1) both",
        glow: "glow 2.8s ease-in-out infinite",
        glassfade: "glassfade 1.2s ease-out both",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,mdx,md,svelte,vue}",
    "./public/**/*.html",
  ],
};
