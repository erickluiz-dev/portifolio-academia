import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      style={{
        position: "fixed", bottom: 96, right: 28, zIndex: 150,
        width: 44, height: 44, borderRadius: "50%",
        background: "#fff", border: "1px solid #E5E7EB",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.2s ease",
        color: "#374151",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "#2563EB";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.borderColor = "#2563EB";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "#374151";
        e.currentTarget.style.borderColor = "#E5E7EB";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
