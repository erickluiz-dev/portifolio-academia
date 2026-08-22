import { Link } from "react-router-dom";
import { professores } from "../data/professores";

export default function Professores() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ position: "relative", height: 420, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1800&h=700&fit=crop&auto=format)", backgroundSize: "cover", backgroundPosition: "center 25%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,20,50,0.88) 0%, rgba(10,20,50,0.4) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Professores</span>
          </div>
          <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            Nossa equipe de professores
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 520, lineHeight: 1.65 }}>
            35 profissionais apaixonados pelo que fazem, prontos para transformar a sua experiência de treino.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: "80px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="team-grid">
            {professores.map(({ slug, name, role, img, modalidades, experiencia }) => (
              <Link key={slug} to={`/professores/${slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #E5E7EB", transition: "all 0.2s ease" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ height: 240, backgroundColor: "#CBD5E1", overflow: "hidden" }}>
                    <img
                      src={`https://images.unsplash.com/photo-${img}?w=400&h=480&fit=crop&auto=format`}
                      alt={name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div style={{ padding: "20px 22px 24px" }}>
                    <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 17, color: "#111827", margin: "0 0 4px" }}>{name}</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#2563EB", fontWeight: 600, margin: "0 0 12px" }}>{role}</p>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", marginBottom: 12 }}>
                      {experiencia} de experiência
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {modalidades.slice(0, 3).map(m => (
                        <span key={m} style={{ background: "#EFF6FF", color: "#2563EB", borderRadius: 100, padding: "3px 10px", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600 }}>{m}</span>
                      ))}
                    </div>
                    <div style={{ marginTop: 16, fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#2563EB" }}>
                      Ver perfil →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "#111827", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Quer treinar com um de nossos professores?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 28 }}>
            Agende uma aula de personal training ou venha conhecer a academia com um treino experimental gratuito.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/planos" style={{ padding: "14px 28px", borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}>
              Ver planos com personal
            </Link>
            <Link to="/horarios" style={{ padding: "14px 28px", borderRadius: 12, border: "1.5px solid #E5E7EB", color: "#374151", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Conferir horários das aulas
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .team-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 760px) { .team-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .team-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
