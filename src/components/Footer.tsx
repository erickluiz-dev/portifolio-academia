import { Link } from "react-router-dom";

const footerLinks = {
  empresa: [
    { to: "/sobre", label: "Sobre nós" },
    { to: "/professores", label: "Professores" },
    { to: "/modalidades", label: "Modalidades" },
    { to: "/contato", label: "Contato" },
  ],
  planos: [
    { to: "/planos", label: "Plano Mensal" },
    { to: "/planos", label: "Plano Trimestral" },
    { to: "/planos", label: "Plano Anual" },
    { to: "/planos", label: "Treino Experimental" },
  ],
  servicos: [
    { to: "/horarios", label: "Horários" },
    { to: "/imc", label: "Calculadora IMC" },
    { to: "/modalidades", label: "Musculação" },
    { to: "/modalidades/funcional", label: "Funcional" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F172A", color: "#CBD5E1" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 32px" }}>
        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 56,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <img src="/logo.png" width="45" alt="logo" />
              <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff" }}>
                Pulse Fitness
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#94A3B8", marginBottom: 24, maxWidth: 280 }}>
              Seu melhor resultado começa hoje. Uma academia completa para você evoluir com segurança, motivação e qualidade.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "📍", text: "Av. Paulista, 1500 — Bela Vista, São Paulo - SP" },
                { icon: "📞", text: "(11) 3456-7890" },
                { icon: "✉️", text: "contato@pulsefitness.com.br" },
                { icon: "🕐", text: "Seg–Sex: 05h–23h | Sáb–Dom: 07h–20h" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#94A3B8" }}>
                  <span style={{ flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[
                { label: "Instagram", icon: "IG" },
                { label: "Facebook", icon: "FB" },
                { label: "YouTube", icon: "YT" },
                { label: "WhatsApp", icon: "WA" },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, color: "#94A3B8",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {([
            { title: "Empresa", links: footerLinks.empresa },
            { title: "Planos", links: footerLinks.planos },
            { title: "Serviços", links: footerLinks.servicos },
          ] as const).map(({ title, links }) => (
            <div key={title}>
              <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 18, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      style={{ fontSize: 14, color: "#94A3B8", textDecoration: "none", transition: "color 0.15s ease" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          background: "rgba(37,99,235,0.12)",
          border: "1px solid rgba(37,99,235,0.2)",
          borderRadius: 16,
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          marginBottom: 40,
          flexWrap: "wrap",
        }}>
          <div>
            <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", margin: "0 0 4px" }}>
              Receba dicas de treino e saúde
            </h4>
            <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>
              Cadastre seu e-mail e receba conteúdo exclusivo toda semana.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            <input
              type="email"
              placeholder="seu@email.com"
              style={{
                padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 14,
                fontFamily: "Inter, sans-serif", outline: "none", width: 220,
              }}
            />
            <button style={{
              padding: "10px 20px", borderRadius: 10,
              background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
              color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600,
              fontSize: 14, border: "none", cursor: "pointer", whiteSpace: "nowrap",
            }}>
              Assinar
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
            © 2024 Pulse Fitness. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
            Desenvolvido por{" "}
            <span style={{ color: "#2563EB", fontWeight: 600 }}>Agência Digital</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
