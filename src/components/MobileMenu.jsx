import { useState, useEffect, useRef } from "react";

export default function MobileMenu({ nav }) {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold bg-white/10 shadow-gold-glow transition"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        {open ? (
          <svg
            className="w-7 h-7 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        )}
      </button>
      {/* Menú lateral glass, gold overlay y animación */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300
          ${
            open
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        style={{
          background: "rgba(25,46,56,0.94)",
          backdropFilter: "blur(16px) saturate(120%)",
          WebkitBackdropFilter: "blur(16px) saturate(120%)",
        }}
        aria-modal={open ? "true" : undefined}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
      >
        <div className="delfos-overlay-gold"></div>
        <button
          aria-label="Cerrar menú"
          className="absolute top-5 right-6 p-2 rounded-full bg-gold/80 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold transition z-50"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        >
          <svg
            className="w-7 h-7 text-delfos-bg-dark"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col items-center justify-center h-full gap-10 relative z-10">
          {nav.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              ref={i === 0 ? firstLinkRef : null}
              className="text-2xl font-serif-title text-gold hover:text-delfos-accent focus:text-delfos-accent transition tracking-tight drop-shadow-gold-glow outline-none px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
