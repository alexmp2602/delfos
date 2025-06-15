import { useState } from "react";

export default function MobileMenu({ nav }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
      {/* Botón hamburguesa (2 líneas) */}
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((prev) => !prev)}
        className="relative w-8 h-8 focus:outline-none group"
      >
        {/* Línea superior */}
        <span
          className={`absolute left-0 w-full h-0.5 bg-gold transform transition duration-300 ease-in-out ${
            open ? "rotate-45 top-1/2" : "top-2"
          }`}
        />
        {/* Línea inferior */}
        <span
          className={`absolute left-0 w-full h-0.5 bg-gold transform transition duration-300 ease-in-out ${
            open ? "-rotate-45 top-1/2" : "bottom-2"
          }`}
        />
      </button>

      {/* Menú desplegable */}
      <div
        className={`absolute right-4 mt-4 max-w-[calc(100vw-2rem)] w-64 bg-[#1a1a1a] rounded-xl shadow-xl border border-gold p-6 transform transition-all duration-300 ease-out origin-top ${
          open
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
        role="menu"
        aria-label="Navegación móvil"
      >
        <ul className="flex flex-col gap-4 text-right">
          {nav.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-offwhite hover:text-gold text-base font-medium transition"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
