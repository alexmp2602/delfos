import { useEffect, useState } from "react";
import IconSun from "./icons/IconSun.jsx";
import IconMoon from "./icons/IconMoon.jsx";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Setea estado inicial tras el mount (evita mismatch SSR/CSR)
  useEffect(() => {
    const getInitialTheme = () => {
      if (typeof window !== "undefined") {
        const saved = window.localStorage.getItem("theme");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    };
    setDark(getInitialTheme());

    // Actualiza el estado si el usuario cambia el tema del SO
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!window.localStorage.getItem("theme")) {
        setDark(mediaQuery.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Cambia la clase en <html> y guarda el modo
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      type="button"
      aria-label={dark ? "Modo claro" : "Modo oscuro"}
      className="transition-colors p-2 rounded-full hover:bg-gold/20"
      onClick={() => setDark((d) => !d)}
      tabIndex={0}
    >
      {dark ? (
        <IconSun
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        />
      ) : (
        <IconMoon
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        />
      )}
    </button>
  );
}
