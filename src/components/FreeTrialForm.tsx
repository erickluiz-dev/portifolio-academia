import { useState } from "react";

interface Props {
  onClose?: () => void;
  inline?: boolean;
}

export default function FreeTrialForm({ onClose, inline }: Props) {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", periodo: "", objetivo: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const content = submitted ? (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <div style={{
        width: 64, height: 64, borderRadius: "50%",
        background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 20px",
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", marginBottom: 8 }}>
        Solicitação enviada!
      </h3>
      <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
        Nossa equipe entrará em contato em até 24 horas para confirmar seu treino experimental. Estamos ansiosos para te conhecer!
      </p>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            padding: "12px 28px", borderRadius: 10,
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600,
            fontSize: 15, border: "none", cursor: "pointer",
          }}
        >
          Fechar
        </button>
      )}
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="trial-grid">
        {([
          { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome" },
          { id: "telefone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
          { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
        ] as const).map(({ id, label, type, placeholder }) => (
          <div key={id} style={{ gridColumn: id === "email" ? "1 / -1" : "auto" }}>
            <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 13, color: "#374151", marginBottom: 6 }}>
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              required
              value={form[id]}
              onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
              style={{
                width: "100%", padding: "11px 14px", borderRadius: 10,
                border: "1.5px solid #E5E7EB", fontSize: 14, fontFamily: "Inter, sans-serif",
                color: "#111827", outline: "none", transition: "border-color 0.15s ease",
              }}
              onFocus={e => e.target.style.borderColor = "#2563EB"}
              onBlur={e => e.target.style.borderColor = "#E5E7EB"}
            />
          </div>
        ))}
        <div>
          <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 13, color: "#374151", marginBottom: 6 }}>
            Período preferido
          </label>
          <select
            required
            value={form.periodo}
            onChange={e => setForm(f => ({ ...f, periodo: e.target.value }))}
            style={{
              width: "100%", padding: "11px 14px", borderRadius: 10,
              border: "1.5px solid #E5E7EB", fontSize: 14, fontFamily: "Inter, sans-serif",
              color: form.periodo ? "#111827" : "#9CA3AF", outline: "none", background: "#fff",
            }}
          >
            <option value="">Selecione</option>
            <option value="manha">Manhã (05h–12h)</option>
            <option value="tarde">Tarde (12h–18h)</option>
            <option value="noite">Noite (18h–23h)</option>
          </select>
        </div>
        <div>
          <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 13, color: "#374151", marginBottom: 6 }}>
            Objetivo principal
          </label>
          <select
            required
            value={form.objetivo}
            onChange={e => setForm(f => ({ ...f, objetivo: e.target.value }))}
            style={{
              width: "100%", padding: "11px 14px", borderRadius: 10,
              border: "1.5px solid #E5E7EB", fontSize: 14, fontFamily: "Inter, sans-serif",
              color: form.objetivo ? "#111827" : "#9CA3AF", outline: "none", background: "#fff",
            }}
          >
            <option value="">Selecione</option>
            <option value="emagrecimento">Emagrecimento</option>
            <option value="ganho-massa">Ganho de massa muscular</option>
            <option value="condicionamento">Condicionamento físico</option>
            <option value="saude">Saúde e bem-estar</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        style={{
          marginTop: 20, width: "100%", padding: "14px", borderRadius: 12,
          background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
          color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700,
          fontSize: 15, border: "none", cursor: "pointer",
          boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.4)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.3)";
        }}
      >
        Solicitar Treino Experimental Gratuito
      </button>
      <p style={{ textAlign: "center", fontSize: 12, color: "#9CA3AF", marginTop: 10, fontFamily: "Inter, sans-serif" }}>
        Sem compromisso. Nossa equipe entrará em contato para confirmar.
      </p>
    </form>
  );

  if (inline) {
    return (
      <div style={{ background: "#fff", borderRadius: 20, padding: 32, border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        {!submitted && (
          <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#111827", marginBottom: 20 }}>
            Agendar Treino Experimental
          </h3>
        )}
        {content}
      </div>
    );
  }

  return content;
}
