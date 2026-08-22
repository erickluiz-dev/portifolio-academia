import { useState } from "react";
import { Link } from "react-router-dom";

const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

const horarios = [
  // Segunda
  { dia: "Segunda", hora: "06:00", modalidade: "Funcional", professor: "Fernanda Lima", sala: "Estúdio A", periodo: "manha", nivel: "Todos" },
  { dia: "Segunda", hora: "07:00", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Segunda", hora: "07:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "manha", nivel: "Todos" },
  { dia: "Segunda", hora: "08:00", modalidade: "Alongamento", professor: "Camila Rocha", sala: "Estúdio B", periodo: "manha", nivel: "Todos" },
  { dia: "Segunda", hora: "09:00", modalidade: "Yoga", professor: "Camila Rocha", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Segunda", hora: "09:00", modalidade: "Pilates", professor: "Ana Beatriz", sala: "Sala Pilates", periodo: "manha", nivel: "Todos" },
  { dia: "Segunda", hora: "18:00", modalidade: "Funcional", professor: "Fernanda Lima", sala: "Estúdio A", periodo: "noite", nivel: "Todos" },
  { dia: "Segunda", hora: "18:00", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "noite", nivel: "Todos" },
  { dia: "Segunda", hora: "19:00", modalidade: "HIIT", professor: "Diego Santos", sala: "Estúdio A", periodo: "noite", nivel: "Intermediário" },
  { dia: "Segunda", hora: "19:00", modalidade: "Cross Training", professor: "Marcos Oliveira", sala: "Área Cross", periodo: "noite", nivel: "Intermediário" },
  { dia: "Segunda", hora: "20:00", modalidade: "Funcional", professor: "Fernanda Lima", sala: "Estúdio A", periodo: "noite", nivel: "Todos" },
  { dia: "Segunda", hora: "20:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "noite", nivel: "Todos" },

  // Terça
  { dia: "Terça", hora: "07:00", modalidade: "Pilates", professor: "Ana Beatriz", sala: "Sala Pilates", periodo: "manha", nivel: "Todos" },
  { dia: "Terça", hora: "07:00", modalidade: "HIIT", professor: "Diego Santos", sala: "Estúdio A", periodo: "manha", nivel: "Intermediário" },
  { dia: "Terça", hora: "08:00", modalidade: "Yoga", professor: "Camila Rocha", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Terça", hora: "09:00", modalidade: "Funcional", professor: "Rafael Costa", sala: "Estúdio B", periodo: "manha", nivel: "Todos" },
  { dia: "Terça", hora: "18:00", modalidade: "Pilates", professor: "Ana Beatriz", sala: "Sala Pilates", periodo: "noite", nivel: "Todos" },
  { dia: "Terça", hora: "18:00", modalidade: "Cross Training", professor: "Diego Santos", sala: "Área Cross", periodo: "noite", nivel: "Intermediário" },
  { dia: "Terça", hora: "19:00", modalidade: "Yoga", professor: "Camila Rocha", sala: "Sala Yoga", periodo: "noite", nivel: "Todos" },
  { dia: "Terça", hora: "20:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "noite", nivel: "Todos" },

  // Quarta
  { dia: "Quarta", hora: "06:00", modalidade: "Funcional", professor: "Fernanda Lima", sala: "Estúdio A", periodo: "manha", nivel: "Todos" },
  { dia: "Quarta", hora: "07:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "manha", nivel: "Todos" },
  { dia: "Quarta", hora: "08:00", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Quarta", hora: "09:00", modalidade: "Pilates", professor: "Ana Beatriz", sala: "Sala Pilates", periodo: "manha", nivel: "Todos" },
  { dia: "Quarta", hora: "09:00", modalidade: "Funcional", professor: "Rafael Costa", sala: "Estúdio B", periodo: "manha", nivel: "Todos" },
  { dia: "Quarta", hora: "18:00", modalidade: "HIIT", professor: "Diego Santos", sala: "Estúdio A", periodo: "noite", nivel: "Intermediário" },
  { dia: "Quarta", hora: "18:00", modalidade: "Funcional", professor: "Fernanda Lima", sala: "Estúdio B", periodo: "noite", nivel: "Todos" },
  { dia: "Quarta", hora: "19:00", modalidade: "Cross Training", professor: "Marcos Oliveira", sala: "Área Cross", periodo: "noite", nivel: "Intermediário" },
  { dia: "Quarta", hora: "20:00", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "noite", nivel: "Todos" },

  // Quinta
  { dia: "Quinta", hora: "07:00", modalidade: "Pilates", professor: "Ana Beatriz", sala: "Sala Pilates", periodo: "manha", nivel: "Todos" },
  { dia: "Quinta", hora: "07:00", modalidade: "HIIT", professor: "Diego Santos", sala: "Estúdio A", periodo: "manha", nivel: "Intermediário" },
  { dia: "Quinta", hora: "09:00", modalidade: "Yoga", professor: "Camila Rocha", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Quinta", hora: "18:00", modalidade: "Pilates", professor: "Camila Rocha", sala: "Sala Pilates", periodo: "noite", nivel: "Todos" },
  { dia: "Quinta", hora: "18:00", modalidade: "Funcional", professor: "Rafael Costa", sala: "Estúdio A", periodo: "noite", nivel: "Todos" },
  { dia: "Quinta", hora: "19:00", modalidade: "Cross Training", professor: "Diego Santos", sala: "Área Cross", periodo: "noite", nivel: "Intermediário" },
  { dia: "Quinta", hora: "20:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "noite", nivel: "Todos" },

  // Sexta
  { dia: "Sexta", hora: "06:00", modalidade: "Funcional", professor: "Fernanda Lima", sala: "Estúdio A", periodo: "manha", nivel: "Todos" },
  { dia: "Sexta", hora: "07:00", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Sexta", hora: "07:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "manha", nivel: "Todos" },
  { dia: "Sexta", hora: "08:00", modalidade: "Alongamento", professor: "Camila Rocha", sala: "Estúdio B", periodo: "manha", nivel: "Todos" },
  { dia: "Sexta", hora: "18:00", modalidade: "Funcional", professor: "Rafael Costa", sala: "Estúdio A", periodo: "noite", nivel: "Todos" },
  { dia: "Sexta", hora: "19:00", modalidade: "HIIT", professor: "Diego Santos", sala: "Estúdio B", periodo: "noite", nivel: "Intermediário" },
  { dia: "Sexta", hora: "19:00", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "noite", nivel: "Todos" },
  { dia: "Sexta", hora: "20:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "noite", nivel: "Todos" },
  { dia: "Sexta", hora: "20:00", modalidade: "Alongamento", professor: "Camila Rocha", sala: "Estúdio B", periodo: "noite", nivel: "Todos" },

  // Sábado
  { dia: "Sábado", hora: "07:00", modalidade: "Cross Training", professor: "Marcos Oliveira", sala: "Área Cross", periodo: "manha", nivel: "Intermediário" },
  { dia: "Sábado", hora: "07:00", modalidade: "HIIT", professor: "Diego Santos", sala: "Estúdio A", periodo: "manha", nivel: "Intermediário" },
  { dia: "Sábado", hora: "08:00", modalidade: "Spinning", professor: "Fernanda Lima", sala: "Sala Spinning", periodo: "manha", nivel: "Todos" },
  { dia: "Sábado", hora: "09:00", modalidade: "Yoga", professor: "Camila Rocha", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Sábado", hora: "09:00", modalidade: "Pilates", professor: "Ana Beatriz", sala: "Sala Pilates", periodo: "manha", nivel: "Todos" },
  { dia: "Sábado", hora: "10:30", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Sábado", hora: "11:00", modalidade: "Alongamento", professor: "Camila Rocha", sala: "Estúdio B", periodo: "manha", nivel: "Todos" },

  // Domingo
  { dia: "Domingo", hora: "08:00", modalidade: "Funcional", professor: "Rafael Costa", sala: "Estúdio A", periodo: "manha", nivel: "Todos" },
  { dia: "Domingo", hora: "09:00", modalidade: "Yoga", professor: "Julia Mendes", sala: "Sala Yoga", periodo: "manha", nivel: "Todos" },
  { dia: "Domingo", hora: "10:00", modalidade: "Pilates", professor: "Ana Beatriz", sala: "Sala Pilates", periodo: "manha", nivel: "Todos" },
  { dia: "Domingo", hora: "11:00", modalidade: "Alongamento", professor: "Camila Rocha", sala: "Estúdio B", periodo: "manha", nivel: "Todos" },
];

const modalidadeCores: Record<string, { bg: string; color: string }> = {
  "Funcional": { bg: "#DBEAFE", color: "#1D4ED8" },
  "Yoga": { bg: "#F3E8FF", color: "#7C3AED" },
  "Pilates": { bg: "#FCE7F3", color: "#BE185D" },
  "Spinning": { bg: "#D1FAE5", color: "#065F46" },
  "HIIT": { bg: "#FEE2E2", color: "#DC2626" },
  "Cross Training": { bg: "#FEF3C7", color: "#92400E" },
  "Alongamento": { bg: "#CCFBF1", color: "#0F766E" },
  "Musculação": { bg: "#E0E7FF", color: "#3730A3" },
};

export default function Horarios() {
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda");
  const [periodo, setPeriodo] = useState<"todos" | "manha" | "tarde" | "noite">("todos");
  const [modalidadeFiltro, setModalidadeFiltro] = useState("Todas");

  const aulas = horarios.filter(h => {
    if (h.dia !== diaSelecionado) return false;
    if (periodo !== "todos" && h.periodo !== periodo) return false;
    if (modalidadeFiltro !== "Todas" && h.modalidade !== modalidadeFiltro) return false;
    return true;
  });

  const todasModalidades = ["Todas", ...Array.from(new Set(horarios.map(h => h.modalidade))).sort()];

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #0F172A 0%, #1E3A8A 60%, #2563EB 100%)", padding: "72px 24px 80px", position: "relative" }}>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Horários</span>
          </div>
          <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 14px" }}>
            Grade de Horários
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 520, lineHeight: 1.65 }}>
            Confira os horários das aulas coletivas e encontre o momento perfeito para o seu treino.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "20px 24px", position: "sticky", top: 68, zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          {/* Day selector */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {dias.map(dia => (
              <button
                key={dia}
                onClick={() => setDiaSelecionado(dia)}
                style={{
                  padding: "8px 14px", borderRadius: 10, fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600,
                  border: "1.5px solid",
                  borderColor: diaSelecionado === dia ? "#2563EB" : "#E5E7EB",
                  background: diaSelecionado === dia ? "#EFF6FF" : "#fff",
                  color: diaSelecionado === dia ? "#2563EB" : "#6B7280",
                  cursor: "pointer", transition: "all 0.15s ease",
                }}
              >
                {dia}
              </button>
            ))}
          </div>
          <div style={{ width: 1, height: 28, background: "#E5E7EB", flexShrink: 0 }} />
          {/* Period filter */}
          <div style={{ display: "flex", gap: 6 }}>
            {(["todos", "manha", "tarde", "noite"] as const).map(p => (
              <button
                key={p}
                onClick={() => setPeriodo(p)}
                style={{
                  padding: "8px 14px", borderRadius: 10, fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500,
                  border: "1.5px solid",
                  borderColor: periodo === p ? "#2563EB" : "#E5E7EB",
                  background: periodo === p ? "#EFF6FF" : "#fff",
                  color: periodo === p ? "#2563EB" : "#6B7280",
                  cursor: "pointer",
                }}
              >
                {p === "todos" ? "Todos" : p === "manha" ? "Manhã" : p === "tarde" ? "Tarde" : "Noite"}
              </button>
            ))}
          </div>
          <div style={{ width: 1, height: 28, background: "#E5E7EB", flexShrink: 0 }} />
          {/* Modalidade filter */}
          <select
            value={modalidadeFiltro}
            onChange={e => setModalidadeFiltro(e.target.value)}
            style={{ padding: "8px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 13, color: "#374151", background: "#fff", cursor: "pointer", outline: "none" }}
          >
            {todasModalidades.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </section>

      {/* SCHEDULE */}
      <section style={{ padding: "40px 24px 80px", background: "#F8FAFC", minHeight: 400 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 20, color: "#111827", margin: 0 }}>
              {diaSelecionado}-feira — {aulas.length} aula{aulas.length !== 1 ? "s" : ""}
            </h2>
          </div>

          {aulas.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 24px", background: "#fff", borderRadius: 20, border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📅</div>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 20, color: "#111827", marginBottom: 8 }}>Nenhuma aula encontrada</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280" }}>Tente outros filtros ou selecione outro dia.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {aulas
                .sort((a, b) => a.hora.localeCompare(b.hora))
                .map((aula, i) => {
                  const cor = modalidadeCores[aula.modalidade] || { bg: "#F3F4F6", color: "#374151" };
                  return (
                    <div
                      key={i}
                      style={{
                        background: "#fff", borderRadius: 16, padding: "20px 24px",
                        border: "1px solid #E5E7EB", display: "grid",
                        gridTemplateColumns: "90px 1fr 1fr 1fr 140px",
                        gap: 16, alignItems: "center",
                        transition: "all 0.15s ease",
                      }}
                      className="schedule-row"
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                    >
                      <div>
                        <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#111827" }}>{aula.hora}</div>
                      </div>
                      <div>
                        <span style={{ background: cor.bg, color: cor.color, borderRadius: 8, padding: "4px 12px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700 }}>
                          {aula.modalidade}
                        </span>
                      </div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#374151" }}> {aula.professor}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#6B7280" }}> {aula.sala}</div>
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Link
                          to="/contato"
                          style={{
                            padding: "9px 18px", borderRadius: 10,
                            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                            color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13,
                            textDecoration: "none", whiteSpace: "nowrap",
                          }}
                        >
                          Agendar aula
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      {/* LEGEND */}
      <section style={{ padding: "40px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 16 }}>Legenda de modalidades</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {Object.entries(modalidadeCores).map(([mod, { bg, color }]) => (
              <span key={mod} style={{ background: bg, color, borderRadius: 8, padding: "6px 14px", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600 }}>{mod}</span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .schedule-row {
            grid-template-columns: auto 1fr !important;
            grid-template-rows: auto auto auto auto !important;
          }
          .schedule-row > div:nth-child(5) {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </div>
  );
}
