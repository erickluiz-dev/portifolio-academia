import { Link } from "react-router-dom";
import FreeTrialForm from "../components/FreeTrialForm";
import { useState } from "react";

const timeline = [
  { year: "2012", title: "Fundação da Pulse Fitness", desc: "Abrimos nossa primeira unidade na Av. Paulista com foco em qualidade e resultado real para cada aluno." },
  { year: "2015", title: "Expansão e certificações", desc: "Conquistamos o certificado de excelência em gestão fitness e ampliamos nossa equipe para 20 professores." },
  { year: "2018", title: "Lançamento do app Pulse", desc: "Desenvolvemos nosso aplicativo próprio de treino, conectando alunos e professores digitalmente." },
  { year: "2020", title: "Adaptação e resiliência", desc: "Durante a pandemia, mantivemos aulas online e apoiamos nossos alunos com conteúdo gratuito." },
  { year: "2022", title: "Renovação completa", desc: "Reformamos toda a estrutura, adquirimos novos equipamentos e atingimos 2.000 alunos ativos." },
  { year: "2024", title: "Referência em Goiânia", desc: "Reconhecidos como uma das melhores academias de Goiânia com mais de 2.800 alunos e 98% de satisfação." },
];

const values = [
  { icon: "💪", title: "Resultado real", desc: "Cada treino é planejado para gerar resultados concretos e duradouros no seu corpo e na sua saúde." },
  { icon: "🤝", title: "Comunidade", desc: "Mais que uma academia, somos uma comunidade que se apoia e celebra cada conquista juntos." },
  { icon: "🎯", title: "Personalização", desc: "Entendemos que cada pessoa é única. Nossos treinos são adaptados para seu perfil e objetivos." },
  { icon: "✅", title: "Qualidade", desc: "Equipamentos premium, espaços limpos e professores certificados. Sem compromisso com menos que o melhor." },
  { icon: "🌱", title: "Bem-estar integral", desc: "Cuidamos do corpo e da mente. Saúde é muito mais que estética." },
  { icon: "♿", title: "Acessibilidade", desc: "Nossa academia é totalmente acessível e acolhemos alunos de todas as idades e condições físicas." },
];



export default function Sobre() {
  const [trialOpen, setTrialOpen] = useState(false);

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ position: "relative", height: 480, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1800&h=800&fit=crop&auto=format)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,20,50,0.85) 0%, rgba(10,20,50,0.4) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center", fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Sobre</span>
          </div>
          <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            Sobre a Pulse Fitness
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 520, lineHeight: 1.65 }}>
            Mais de uma década transformando vidas através do movimento e da saúde.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="story-grid">
          <div>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Nossa história
            </span>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", color: "#111827", margin: "12px 0 24px", letterSpacing: "-0.02em" }}>
              Nascemos para ser diferentes
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#6B7280", lineHeight: 1.75, marginBottom: 20 }}>
              A Pulse Fitness nasceu em 2012 com uma visão simples e poderosa: criar um espaço onde qualquer pessoa — independente da idade, condição física ou objetivo — pudesse transformar sua vida através do movimento.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#6B7280", lineHeight: 1.75, marginBottom: 20 }}>
              Nosso fundador, Marco Augusto, professor de educação física com 20 anos de experiência, queria ir além dos padrões de uma academia convencional. Ele sonhava com um lugar que combinasse estrutura de ponta com atendimento humanizado e professores verdadeiramente comprometidos com o resultado de cada aluno.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#6B7280", lineHeight: 1.75 }}>
              Doze anos depois, com mais de 2.800 alunos ativos e uma equipe de 35 professores apaixonados, esse sonho se tornou realidade — e continua crescendo a cada dia.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", height: 440, backgroundColor: "#CBD5E1" }}>
              <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5702?w=800&h=880&fit=crop&auto=format" alt="Academia Pulse Fitness" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", bottom: -20, left: -20, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", borderRadius: 20, padding: "20px 24px", boxShadow: "0 8px 32px rgba(37,99,235,0.3)" }}>
              <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 32, color: "#fff" }}>12+</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>anos de história</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section style={{ padding: "96px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 64 }} className="mvv-grid">
            {[
              { icon: "🎯", title: "Missão", text: "Proporcionar experiências de treino de alta qualidade que transformem corpos e vidas, com profissionalismo, cuidado e tecnologia." },
              { icon: "🔭", title: "Visão", text: "Ser a academia de referência em Goiânia, reconhecida pela excelência no atendimento e pelos resultados que entregamos a cada aluno." },
              { icon: "💎", title: "Valores", text: "Resultado, comunidade, personalização, qualidade, bem-estar integral e acessibilidade. Esses são os pilares que guiam cada decisão que tomamos." },
            ].map(({ icon, title, text }) => (
              <div key={title} style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E5E7EB" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)", color: "#111827", marginBottom: 36, letterSpacing: "-0.02em", textAlign: "center" }}>
              Nossos valores em prática
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="values-grid">
              {values.map(({ icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: "#111827", margin: "0 0 6px" }}>{title}</h4>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section style={{ padding: "20px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Nossa estrutura
            </span>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#111827", margin: "12px 0 0", letterSpacing: "-0.02em" }}>
              Um espaço feito para você evoluir
            </h2>
          </div>
          
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "20px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Nossa trajetória
            </span>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#111827", margin: "12px 0 0", letterSpacing: "-0.02em" }}>
              12 anos de história
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map(({ year, title, desc }, i) => (
              <div key={year} style={{ display: "flex", gap: 32 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 80, flexShrink: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #2563EB, #1D4ED8)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 12, color: "#fff", flexShrink: 0 }}>
                    {year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 40, background: "#E5E7EB", margin: "8px 0" }} />
                  )}
                </div>
                <div style={{ paddingBottom: 40 }}>
                  <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 17, color: "#111827", margin: "10px 0 8px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#111827", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Venha conhecer a Pulse de perto
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#6B7280", lineHeight: 1.7, marginBottom: 32 }}>
            Agende uma visita gratuita e conheça nossa estrutura, nossa equipe e tudo que temos a oferecer para a sua evolução.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setTrialOpen(true)}
              style={{
                padding: "14px 28px", borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15,
                border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
              }}
            >
              Agendar visita gratuita
            </button>
            <Link to="/contato" style={{ padding: "14px 28px", borderRadius: 12, border: "1.5px solid #E5E7EB", color: "#374151", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Falar com a gente
            </Link>
          </div>
        </div>
      </section>

      {trialOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setTrialOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "relative", background: "#fff", borderRadius: 24, padding: 40, maxWidth: 560, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", margin: 0 }}>Agendar visita</h2>
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
          .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .mvv-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .facilities-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .facilities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
