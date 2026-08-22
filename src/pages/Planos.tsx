import { useState } from "react";
import { Link } from "react-router-dom";
import FreeTrialForm from "../components/FreeTrialForm";

const planos = [
  {
    id: "mensal",
    nome: "Mensal",
    preco: "R$ 149",
    periodo: "/mês",
    obs: "",
    economia: "",
    cor: "#2563EB",
    beneficios: [
      "Acesso completo à academia",
      "Avaliação física gratuita",
      "App de treino personalizado",
      "Vestiário com armário individual",
      "Wi-Fi e TV nas áreas comuns",
      "Área de alongamento ilimitada",
    ],
    nao_inclui: ["Aulas de personal trainer", "Consultoria nutricional"],
    destaque: false,
  },
  {
    id: "trimestral",
    nome: "Trimestral",
    preco: "R$ 119",
    periodo: "/mês",
    obs: "cobrado trimestralmente (R$ 357)",
    economia: "Economia de R$ 90 vs mensal",
    cor: "#2563EB",
    beneficios: [
      "Tudo do Plano Mensal",
      "1 aula de personal trainer/mês",
      "Desconto de 10% na loja Pulse",
      "Acesso a workshops mensais",
      "Avaliação física bimestral",
      "Prioridade no agendamento de aulas",
    ],
    nao_inclui: ["Consultoria nutricional"],
    destaque: false,
  },
  {
    id: "anual",
    nome: "Anual",
    preco: "R$ 99",
    periodo: "/mês",
    obs: "cobrado anualmente (R$ 1.188)",
    economia: "Economia de R$ 600 vs mensal",
    cor: "#2563EB",
    beneficios: [
      "Tudo do Plano Trimestral",
      "2 aulas de personal trainer/mês",
      "Consultoria nutricional trimestral",
      "Acesso prioritário a novas aulas",
      "Desconto de 20% na loja Pulse",
      "Avaliação física mensal",
      "Congelamento de até 2 meses/ano",
      "Acesso a eventos exclusivos",
    ],
    nao_inclui: [],
    destaque: true,
  },
];

const faqs = [
  {
    q: "Existe taxa de matrícula?",
    a: "Não! Na Pulse Fitness não cobramos taxa de matrícula em nenhum dos nossos planos. Você paga apenas a mensalidade escolhida.",
  },
  {
    q: "Posso cancelar meu plano a qualquer momento?",
    a: "O plano mensal pode ser cancelado a qualquer momento sem multa. Os planos trimestral e anual têm fidelidade, mas permitem cancelamento mediante aviso prévio de 30 dias e eventuais ajustes de valor.",
  },
  {
    q: "O que é a avaliação física gratuita?",
    a: "É uma avaliação completa realizada por um de nossos professores, que inclui medidas corporais, bioimpedância e montagem de um plano de treino personalizado para seus objetivos.",
  },
  {
    q: "Posso usar a academia em qualquer horário?",
    a: "Sim! Todos os planos dão acesso completo nos horários de funcionamento: segunda a sexta das 05h às 23h, e sábado e domingo das 07h às 20h.",
  },
  {
    q: "Como funciona o congelamento do plano anual?",
    a: "Assinantes do plano anual podem solicitar até 2 meses de congelamento por ano (por motivo de saúde, viagem ou outros). O período é prorrogado automaticamente.",
  },
  {
    q: "O app de treino é gratuito?",
    a: "Sim! O aplicativo Pulse está incluso em todos os planos. Ele permite acompanhar treinos, agendar aulas, visualizar sua evolução e comunicar com seu professor.",
  },
  {
    q: "Posso fazer o treino experimental antes de assinar?",
    a: "Com certeza! Oferecemos um treino experimental gratuito e sem compromisso para que você conheça nossa estrutura e equipe antes de tomar qualquer decisão.",
  },
  {
    q: "Há planos especiais para estudantes ou idosos?",
    a: "Sim. Oferecemos condições especiais para estudantes (com carteirinha válida) e para maiores de 60 anos. Consulte nossa recepção para saber mais.",
  },
];

export default function Planos() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [trialOpen, setTrialOpen] = useState(false);

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #0F172A 0%, #1E3A8A 50%, #2563EB 100%)", padding: "80px 24px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=600&fit=crop&auto=format)", backgroundSize: "cover", opacity: 0.08 }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, alignItems: "center", fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Planos</span>
          </div>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#93C5FD", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Sem taxa de matrícula
            </span>
            <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#fff", letterSpacing: "-0.03em", margin: "12px 0 16px" }}>
              Escolha o plano ideal para você
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>
              Investir na sua saúde é a melhor decisão que você pode tomar. Comece hoje com o plano que cabe no seu bolso.
            </p>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ padding: "0 24px 80px", background: "#F8FAFC", marginTop: -32 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr 1fr", gap: 24, alignItems: "start" }} className="plans-grid">
            {planos.map((p, idx) => (
              <div
                key={p.id}
                style={{
                  background: p.destaque ? "linear-gradient(160deg, #1E3A8A 0%, #2563EB 100%)" : "#fff",
                  borderRadius: 24, padding: "36px 32px",
                  border: p.destaque ? "none" : "1.5px solid #E5E7EB",
                  boxShadow: p.destaque ? "0 24px 64px rgba(37,99,235,0.35)" : "0 2px 12px rgba(0,0,0,0.04)",
                  position: "relative",
                  marginTop: p.destaque ? -24 : 0,
                }}
              >
                {p.destaque && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#10B981", color: "#fff", borderRadius: 100, padding: "6px 20px", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(16,185,129,0.4)" }}>
                    Mais popular — melhor custo-benefício
                  </div>
                )}

                <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: p.destaque ? "rgba(255,255,255,0.6)" : "#6B7280", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
                  Plano {p.nome}
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 48, color: p.destaque ? "#fff" : "#111827", lineHeight: 1 }}>{p.preco}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: p.destaque ? "rgba(255,255,255,0.6)" : "#6B7280", marginBottom: 8 }}>{p.periodo}</span>
                </div>
                {p.obs && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: p.destaque ? "rgba(255,255,255,0.55)" : "#9CA3AF", marginBottom: 4 }}>{p.obs}</p>}
                {p.economia && (
                  <div style={{ display: "inline-block", background: p.destaque ? "rgba(16,185,129,0.25)" : "#D1FAE5", borderRadius: 100, padding: "4px 12px", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: p.destaque ? "#6EE7B7" : "#065F46", marginBottom: 24 }}>
                    ✓ {p.economia}
                  </div>
                )}

                <div style={{ borderTop: `1px solid ${p.destaque ? "rgba(255,255,255,0.15)" : "#E5E7EB"}`, paddingTop: 24, marginTop: p.economia ? 0 : 20 }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: p.destaque ? "rgba(255,255,255,0.5)" : "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>
                    Incluído no plano:
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.beneficios.map(b => (
                      <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Inter, sans-serif", fontSize: 13.5, color: p.destaque ? "rgba(255,255,255,0.9)" : "#374151", lineHeight: 1.4 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.destaque ? "#6EE7B7" : "#10B981"} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                    {p.nao_inclui.map(b => (
                      <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Inter, sans-serif", fontSize: 13.5, color: p.destaque ? "rgba(255,255,255,0.4)" : "#9CA3AF", lineHeight: 1.4 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.destaque ? "rgba(255,255,255,0.3)" : "#D1D5DB"} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contato"
                  style={{
                    display: "block", textAlign: "center", padding: "14px",
                    borderRadius: 12, textDecoration: "none", fontFamily: "Inter, sans-serif",
                    fontWeight: 700, fontSize: 15, transition: "all 0.2s ease",
                    background: p.destaque ? "rgba(255,255,255,0.2)" : "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    border: p.destaque ? "1.5px solid rgba(255,255,255,0.35)" : "none",
                    color: "#fff",
                  }}
                >
                  Matricular-se agora
                </Link>
                <button
                  onClick={() => setTrialOpen(true)}
                  style={{
                    display: "block", width: "100%", marginTop: 10, padding: "12px",
                    borderRadius: 12, fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 13,
                    cursor: "pointer", transition: "all 0.15s ease",
                    background: "none",
                    border: `1px solid ${p.destaque ? "rgba(255,255,255,0.2)" : "#E5E7EB"}`,
                    color: p.destaque ? "rgba(255,255,255,0.7)" : "#6B7280",
                  }}
                >
                  Ou experimente grátis →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      {/* FAQ */}
      <section style={{ padding: "20px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>FAQ</span>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "#111827", margin: "12px 0 0", letterSpacing: "-0.02em" }}>
              Perguntas frequentes
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, border: "1px solid #E5E7EB", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", padding: "20px 24px", background: "none", border: "none",
                    cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    textAlign: "left", gap: 16,
                  }}
                >
                  <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: "#111827" }}>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE TRIAL CTA */}
      <section style={{ padding: "80px 24px", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#111827", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Ainda na dúvida?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#6B7280", lineHeight: 1.7, marginBottom: 32 }}>
            Que tal conhecer a Pulse antes de escolher o plano? Agende um treino experimental gratuito e sem compromisso.
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
              Treino experimental gratuito
            </button>
            <Link to="/contato" style={{ padding: "14px 28px", borderRadius: 12, border: "1.5px solid #E5E7EB", color: "#374151", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Falar com um consultor
            </Link>
          </div>
        </div>
      </section>

      {trialOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setTrialOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "relative", background: "#fff", borderRadius: 24, padding: 40, maxWidth: 560, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", margin: 0 }}>Treino experimental</h2>
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
          .plans-grid { grid-template-columns: 1fr !important; }
          .plans-grid > div { margin-top: 0 !important; }
          .perks-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .perks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
