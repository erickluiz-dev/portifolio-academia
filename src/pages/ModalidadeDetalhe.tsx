import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { modalidades } from "../data/modalidades";
import FreeTrialForm from "../components/FreeTrialForm";

const dificuldadeColor: Record<string, string> = {
  "Iniciante": "#10B981",
  "Intermediário": "#F59E0B",
  "Avançado": "#EF4444",
  "Todos os níveis": "#2563EB",
};

export default function ModalidadeDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const mod = modalidades.find(m => m.slug === slug);
  const [trialOpen, setTrialOpen] = useState(false);

  if (!mod) {
    return (
      <div style={{ paddingTop: 120, textAlign: "center" }}>
        <h2 style={{ fontFamily: "Manrope, sans-serif", fontSize: 28, color: "#111827" }}>Modalidade não encontrada</h2>
        <Link to="/modalidades" style={{ color: "#2563EB" }}>Voltar para modalidades</Link>
      </div>
    );
  }

  const others = modalidades.filter(m => m.slug !== slug).slice(0, 3);

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ position: "relative", height: 480, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(https://images.unsplash.com/photo-${mod.heroImg}?w=1800&h=800&fit=crop&auto=format)`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,20,50,0.88) 0%, rgba(10,20,50,0.4) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center", fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link to="/modalidades" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Modalidades</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>{mod.name}</span>
          </div>
          <div style={{ display: "inline-block", background: dificuldadeColor[mod.dificuldade], color: "#fff", borderRadius: 100, padding: "5px 14px", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
            {mod.dificuldade}
          </div>
          <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "0.7em" }}>{mod.emoji}</span> {mod.name}
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 520, lineHeight: 1.65, margin: "0 0 32px" }}>
            {mod.desc}
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { icon: "⏱️", label: "Duração", val: mod.duracao },
              { icon: "👥", label: "Público", val: mod.publico },
            ].map(({ icon, label, val }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "12px 20px" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{icon} {label}</div>
                <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", marginTop: 4 }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64, alignItems: "start" }} className="detail-grid">
          <div>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#111827", marginBottom: 20, letterSpacing: "-0.02em" }}>
              Sobre a modalidade
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#374151", lineHeight: 1.8, marginBottom: 40 }}>
              {mod.longDesc}
            </p>

            <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#111827", marginBottom: 20 }}>
              Benefícios
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }}>
              {mod.beneficios.map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, background: "#F8FAFC", borderRadius: 12, padding: "12px 16px", border: "1px solid #E5E7EB" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#374151", fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#111827", marginBottom: 16 }}>
              Horários disponíveis
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {mod.horarios.map(h => (
                <div key={h} style={{ display: "flex", alignItems: "center", gap: 12, background: "#F8FAFC", borderRadius: 12, padding: "12px 18px", border: "1px solid #E5E7EB" }}>
                  <span style={{ fontSize: 18 }}>🕐</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#374151" }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: "linear-gradient(160deg, #2563EB, #1D4ED8)", borderRadius: 24, padding: 32, boxShadow: "0 8px 32px rgba(37,99,235,0.3)" }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 8 }}>
                Experimente grátis
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 20 }}>
                Agende uma aula experimental de {mod.name} sem compromisso.
              </p>
              <button
                onClick={() => setTrialOpen(true)}
                style={{
                  width: "100%", padding: "13px", borderRadius: 12,
                  background: "#fff", color: "#2563EB",
                  fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15,
                  border: "none", cursor: "pointer",
                }}
              >
                Agendar aula experimental
              </button>
              <Link to="/horarios" style={{ display: "block", textAlign: "center", marginTop: 12, fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Ver horários completos →
              </Link>
            </div>

            <div style={{ background: "#F8FAFC", borderRadius: 20, padding: 28, border: "1px solid #E5E7EB" }}>
              <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 16 }}>Informações</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Duração", val: mod.duracao },
                  { label: "Nível", val: mod.dificuldade },
                  { label: "Público", val: mod.publico },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{label}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#374151", fontWeight: 500 }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#F0FDF4", borderRadius: 20, padding: 24, border: "1px solid #BBF7D0" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
                <div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 14, color: "#065F46", marginBottom: 6 }}>Dica do professor</div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#047857", lineHeight: 1.6, margin: 0 }}>
                    Combine {mod.name} com uma alimentação equilibrada para potencializar seus resultados. Fale com nossos especialistas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER MODALITIES */}
      <section style={{ padding: "64px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", marginBottom: 32 }}>
            Outras modalidades
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="others-grid">
            {others.map(o => (
              <Link key={o.slug} to={`/modalidades/${o.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #E5E7EB", transition: "all 0.2s ease" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
                >
                  <div style={{ height: 140, backgroundColor: "#CBD5E1" }}>
                    <img src={`https://images.unsplash.com/photo-${o.img}?w=400&h=280&fit=crop&auto=format`} alt={o.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 16, color: "#111827" }}>{o.emoji} {o.name}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#2563EB", marginTop: 6 }}>Saiba mais →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {trialOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setTrialOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "relative", background: "#fff", borderRadius: 24, padding: 40, maxWidth: 560, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", margin: 0 }}>Agendar aula experimental</h2>
              <button onClick={() => setTrialOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <FreeTrialForm onClose={() => setTrialOpen(false)} />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .others-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .others-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
