import { useState } from "react";
import { Link } from "react-router-dom";
import FreeTrialForm from "../components/FreeTrialForm";

const objectives = [
  "Emagrecimento",
  "Ganho de massa muscular",
  "Condicionamento físico",
  "Saúde e bem-estar",
  "Reabilitação",
  "Outro",
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", objetivo: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #0F172A 0%, #1E3A8A 60%, #2563EB 100%)", padding: "72px 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Contato</span>
          </div>
          <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 14px" }}>
            Fale com a gente
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 520, lineHeight: 1.65 }}>
            Nossa equipe está pronta para responder suas dúvidas, agendar visitas e ajudar você a dar o primeiro passo.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section style={{ padding: "64px 24px 80px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "start" }} className="contact-grid">
          {/* Left: info */}
          <div>
            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {[
                { icon: "📍", title: "Endereço", lines: ["Av. Paulista, 1500 — Bela Vista", "São Paulo - SP, CEP 01310-200"] },
                { icon: "📞", title: "Telefone & WhatsApp", lines: ["(11) 3456-7890", "(11) 93456-7890"] },
                { icon: "✉️", title: "E-mail", lines: ["contato@pulsefitness.com.br", "comercial@pulsefitness.com.br"] },
                { icon: "🕐", title: "Horário de funcionamento", lines: ["Segunda a Sexta: 05h00 – 23h00", "Sábado e Domingo: 07h00 – 20h00"] },
              ].map(({ icon, title, lines }) => (
                <div key={title} style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", border: "1px solid #E5E7EB", display: "flex", gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 4 }}>{title}</div>
                    {lines.map(l => <div key={l} style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#6B7280" }}>{l}</div>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #E5E7EB", height: 300, backgroundColor: "#E5E7EB" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.205!2d-46.6566!3d-23.5613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjYiUyA0NsKwMzknMjEuNCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Pulse Fitness"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511934567890?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20Pulse%20Fitness."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 12, marginTop: 16,
                background: "#25D366", borderRadius: 14, padding: "16px 24px", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)", transition: "transform 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>Falar pelo WhatsApp</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.85)" }}>Respondemos em até 1 hora durante o horário comercial</div>
              </div>
            </a>
          </div>

          {/* Right: form */}
          <div>
            <div style={{ background: "#fff", borderRadius: 24, padding: 40, border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", marginBottom: 10 }}>Mensagem enviada!</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 24 }}>
                    Obrigado por entrar em contato. Nossa equipe responderá em até 24 horas.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{ padding: "12px 24px", borderRadius: 10, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer" }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", marginBottom: 28 }}>
                    Enviar mensagem
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-grid">
                      {([
                        { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome", full: false },
                        { id: "telefone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 99999-9999", full: false },
                        { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com", full: true },
                      ] as const).map(({ id, label, type, placeholder, full }) => (
                        <div key={id} style={{ gridColumn: full ? "1 / -1" : "auto" }}>
                          <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 13, color: "#374151", marginBottom: 6 }}>{label}</label>
                          <input
                            type={type}
                            placeholder={placeholder}
                            required
                            value={form[id]}
                            onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                            style={{
                              width: "100%", padding: "11px 14px", borderRadius: 10,
                              border: "1.5px solid #E5E7EB", fontSize: 14, fontFamily: "Inter, sans-serif",
                              color: "#111827", outline: "none",
                            }}
                            onFocus={e => e.target.style.borderColor = "#2563EB"}
                            onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 13, color: "#374151", marginBottom: 6 }}>Objetivo</label>
                      <select
                        value={form.objetivo}
                        onChange={e => setForm(f => ({ ...f, objetivo: e.target.value }))}
                        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontSize: 14, fontFamily: "Inter, sans-serif", color: form.objetivo ? "#111827" : "#9CA3AF", background: "#fff", outline: "none" }}
                      >
                        <option value="">Selecione seu objetivo</option>
                        {objectives.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 13, color: "#374151", marginBottom: 6 }}>Mensagem</label>
                      <textarea
                        placeholder="Escreva sua mensagem..."
                        rows={5}
                        required
                        value={form.mensagem}
                        onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))}
                        style={{
                          width: "100%", padding: "11px 14px", borderRadius: 10,
                          border: "1.5px solid #E5E7EB", fontSize: 14, fontFamily: "Inter, sans-serif",
                          color: "#111827", outline: "none", resize: "vertical",
                        }}
                        onFocus={e => e.target.style.borderColor = "#2563EB"}
                        onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: "100%", padding: "14px", borderRadius: 12,
                        background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                        color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15,
                        border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
                      }}
                    >
                      Enviar mensagem
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Trial CTA */}
            <div style={{ marginTop: 24, background: "linear-gradient(135deg, #0F172A, #1E3A8A)", borderRadius: 20, padding: 28, display: "flex", gap: 20, alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", margin: "0 0 6px" }}>
                  Quer vir treinar?
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                  Agende um treino experimental gratuito e sem compromisso.
                </p>
              </div>
              <button
                onClick={() => setTrialOpen(true)}
                style={{
                  padding: "12px 20px", borderRadius: 12, flexShrink: 0,
                  background: "#fff", color: "#2563EB", fontFamily: "Inter, sans-serif",
                  fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", whiteSpace: "nowrap",
                }}
              >
                Treino grátis
              </button>
            </div>
          </div>
        </div>
      </section>

      {trialOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setTrialOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "relative", background: "#fff", borderRadius: 24, padding: 40, maxWidth: 560, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", margin: 0 }}>Agendar treino experimental</h2>
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
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
