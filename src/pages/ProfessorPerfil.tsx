import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { professores } from "../data/professores";
import FreeTrialForm from "../components/FreeTrialForm";

export default function ProfessorPerfil() {
  const { slug } = useParams<{ slug: string }>();
  const prof = professores.find(p => p.slug === slug);
  const [trialOpen, setTrialOpen] = useState(false);

  if (!prof) {
    return (
      <div style={{ paddingTop: 120, textAlign: "center" }}>
        <h2 style={{ fontFamily: "Manrope, sans-serif", fontSize: 28, color: "#111827" }}>Professor não encontrado</h2>
        <Link to="/professores" style={{ color: "#2563EB" }}>Voltar para professores</Link>
      </div>
    );
  }

  const others = professores.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #0F172A 0%, #1E3A8A 60%, #2563EB 100%)", padding: "64px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link to="/professores" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Professores</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>{prof.name}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 48, alignItems: "center" }} className="prof-hero">
            <div style={{ width: 200, height: 200, borderRadius: 24, overflow: "hidden", border: "4px solid rgba(255,255,255,0.2)", backgroundColor: "#CBD5E1", flexShrink: 0 }}>
              <img src={`https://images.unsplash.com/photo-${prof.img}?w=400&h=400&fit=crop&auto=format`} alt={prof.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            </div>
            <div>
              <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 8px" }}>{prof.name}</h1>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "#93C5FD", fontWeight: 600, marginBottom: 20 }}>{prof.role}</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "10px 18px" }}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Experiência</div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginTop: 4 }}>{prof.experiencia}</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "10px 18px" }}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Modalidades</div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginTop: 4 }}>{prof.modalidades.length} áreas</div>
                </div>
                {prof.instagram && (
                  <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "10px 18px" }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Instagram</div>
                    <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginTop: 4 }}>{prof.instagram}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "64px 24px 80px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="prof-content">
          <div>
            {/* Bio */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E5E7EB", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#111827", marginBottom: 16 }}>Sobre {prof.name.split(" ")[0]}</h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15.5, color: "#374151", lineHeight: 1.8, margin: 0 }}>{prof.bio}</p>
            </div>

            {/* Formation */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E5E7EB", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 18, color: "#111827", marginBottom: 20 }}>Formação acadêmica</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {prof.formacao.map(f => (
                  <div key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2563EB", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#374151" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E5E7EB", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 18, color: "#111827", marginBottom: 20 }}>Certificações</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {prof.certificacoes.map(c => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: 10, background: "#F8FAFC", borderRadius: 10, padding: "10px 14px", border: "1px solid #E5E7EB" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#374151" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modalidades */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E5E7EB", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 18, color: "#111827", marginBottom: 20 }}>Modalidades que leciona</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {prof.modalidades.map(m => (
                  <span key={m} style={{ background: "#EFF6FF", color: "#2563EB", borderRadius: 100, padding: "8px 16px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600 }}>{m}</span>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 18, color: "#111827", marginBottom: 20 }}>Horários semanais</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {prof.horarios.map(({ dia, horario }) => (
                  <div key={dia} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#F8FAFC", borderRadius: 12, border: "1px solid #E5E7EB" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#374151" }}>{dia}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#6B7280" }}>{horario}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "linear-gradient(160deg, #1E3A8A, #2563EB)", borderRadius: 24, padding: 32, boxShadow: "0 8px 32px rgba(37,99,235,0.3)" }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 8 }}>
                Agendar aula
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 20 }}>
                Agende uma aula de personal training com {prof.name.split(" ")[0]} ou experimente grátis.
              </p>
              <button
                onClick={() => setTrialOpen(true)}
                style={{ width: "100%", padding: "13px", borderRadius: 12, background: "#fff", color: "#2563EB", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", marginBottom: 10 }}
              >
                Agendar aula
              </button>
              <Link to="/planos" style={{ display: "block", textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Ver planos com personal trainer →
              </Link>
            </div>

            <div style={{ background: "#fff", borderRadius: 20, padding: 24, border: "1px solid #E5E7EB" }}>
              <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 16 }}>
                Outros professores
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {others.map(o => (
                  <Link key={o.slug} to={`/professores/${o.slug}`} style={{ textDecoration: "none", display: "flex", gap: 12, alignItems: "center", padding: "10px 12px", borderRadius: 12, border: "1px solid #F3F4F6", transition: "background 0.15s ease" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#F8FAFC"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, overflow: "hidden", flexShrink: 0, backgroundColor: "#CBD5E1" }}>
                      <img src={`https://images.unsplash.com/photo-${o.img}?w=88&h=88&fit=crop&auto=format`} alt={o.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 13, color: "#111827" }}>{o.name}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>{o.role}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {trialOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setTrialOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "relative", background: "#fff", borderRadius: 24, padding: 40, maxWidth: 560, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", margin: 0 }}>Agendar aula</h2>
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
          .prof-hero { grid-template-columns: 1fr !important; }
          .prof-content { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
