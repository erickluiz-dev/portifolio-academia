import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/modalidades", label: "Modalidades" },
  { to: "/planos", label: "Planos" },
  { to: "/professores", label: "Professores" },
  { to: "/horarios", label: "Horários" },
  { to: "/imc", label: "Calcular IMC" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 15px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.png" width="60" alt="logo" />
            <div>
              <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 18, color: "#111827", letterSpacing: "-0.02em" }}>
                Pulse
              </span>
              <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 18, color: "#2563EB", letterSpacing: "-0.02em" }}>
                {" "}Fitness
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  fontWeight: isActive(link.to) ? 600 : 500,
                  color: isActive(link.to) ? "#2563EB" : "#374151",
                  textDecoration: "none",
                  padding: "6px 10px",
                  borderRadius: 8,
                  backgroundColor: isActive(link.to) ? "#EFF6FF" : "transparent",
                  transition: "all 0.15s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Link
              to="/contato"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13.5,
                fontWeight: 600,
                color: "#374151",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: 8,
                transition: "all 0.15s ease",
              }}
              className="cta-ghost"
            >
              Contato
            </Link>
            <Link
              to="/planos"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13.5,
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                padding: "9px 18px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
                transition: "all 0.15s ease",
                whiteSpace: "nowrap",
              }}
            >
              Ver Planos
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
                borderRadius: 8,
                color: "#374151",
              }}
              className="hamburger"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid #E5E7EB",
            padding: "12px 0 16px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: isActive(link.to) ? 600 : 500,
                  color: isActive(link.to) ? "#2563EB" : "#374151",
                  textDecoration: "none",
                  padding: "10px 12px",
                  borderRadius: 8,
                  backgroundColor: isActive(link.to) ? "#EFF6FF" : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/planos"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Agendar Treino Experimental
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .cta-ghost { display: none !important; }
        }
      `}</style>
    </header>
  );
}
