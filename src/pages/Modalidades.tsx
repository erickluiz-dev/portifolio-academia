import { Link } from "react-router-dom";
import { modalidades } from "../data/modalidades";

const dificuldadeColor: Record<string, string> = {
  "Iniciante": "#10B981",
  "Intermediário": "#F59E0B",
  "Avançado": "#EF4444",
  "Todos os níveis": "#2563EB",
};

export default function Modalidades() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ position: "relative", height: 420, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1534367990399-abd658456f88?w=1800&h=700&fit=crop&auto=format)", backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,20,50,0.88) 0%, rgba(10,20,50,0.45) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center", fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Modalidades</span>
          </div>
          <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            Modalidades
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 520, lineHeight: 1.65, margin: 0 }}>
            8 modalidades para todos os perfis, objetivos e idades. Encontre a sua.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "80px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="modal-grid">
            {modalidades.map(({ slug, name, emoji, img, desc, dificuldade, publico, duracao }) => (
              <Link key={slug} to={`/modalidades/${slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #E5E7EB", transition: "all 0.2s ease", height: "100%" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ height: 220, backgroundColor: "#CBD5E1", overflow: "hidden", position: "relative" }}>
                    <img src={`https://images.unsplash.com/photo-${img}?w=600&h=440&fit=crop&auto=format`} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: dificuldadeColor[dificuldade],
                      color: "#fff", borderRadius: 100, padding: "4px 12px",
                      fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
                    }}>
                      {dificuldade}
                    </div>
                  </div>
                  <div style={{ padding: "24px 26px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 24 }}>{emoji}</span>
                      <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 19, color: "#111827", margin: 0 }}>{name}</h3>
                    </div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280", lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid #F3F4F6", paddingTop: 16 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}>
                        <span>⏱️</span><span>{duracao}</span>
                        <span style={{ marginLeft: 12 }}>👥</span><span className="line-clamp-1" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{publico}</span>
                      </div>
                    </div>
                    <div style={{ marginTop: 18, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB" }}>
                      Quero conhecer →
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
          <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.2rem)", color: "#111827", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Não sabe por onde começar?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#6B7280", lineHeight: 1.7, marginBottom: 28 }}>
            Venha conversar com nossos professores. Eles vão te ajudar a montar o plano de treino ideal para o seu perfil e objetivo.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/planos" style={{ padding: "14px 28px", borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}>
              Ver planos e matrícula
            </Link>
            <Link to="/horarios" style={{ padding: "14px 28px", borderRadius: 12, border: "1.5px solid #E5E7EB", color: "#374151", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Conferir horários
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .modal-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .modal-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
