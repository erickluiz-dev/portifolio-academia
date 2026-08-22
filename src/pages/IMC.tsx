import { useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  label: string;
  range: string;
  color: string;
  bg: string;
  rec: string;
};

const categories: Category[] = [
  { label: "Abaixo do peso", range: "< 18,5", color: "#3B82F6", bg: "#DBEAFE", rec: "Consulte um nutricionista. Aumentar massa muscular com treinos de força e dieta hipercalórica equilibrada pode ser necessário." },
  { label: "Peso normal", range: "18,5 – 24,9", color: "#10B981", bg: "#D1FAE5", rec: "Parabéns! Mantenha hábitos saudáveis com exercícios regulares e alimentação equilibrada para preservar seu peso ideal." },
  { label: "Sobrepeso", range: "25 – 29,9", color: "#F59E0B", bg: "#FEF3C7", rec: "Aumentar a frequência de exercícios aeróbicos e de força, aliados a uma dieta com déficit calórico moderado, pode ajudar." },
  { label: "Obesidade grau I", range: "30 – 34,9", color: "#F97316", bg: "#FFEDD5", rec: "Recomenda-se acompanhamento médico e nutricional. Treinos de baixo impacto como funcional e natação são bons começos." },
  { label: "Obesidade grau II", range: "35 – 39,9", color: "#EF4444", bg: "#FEE2E2", rec: "É fundamental o acompanhamento de uma equipe de saúde multidisciplinar. Comece com atividades leves e vá progredindo." },
  { label: "Obesidade grau III", range: "≥ 40", color: "#DC2626", bg: "#FEE2E2", rec: "Procure orientação médica urgente. Com o suporte certo, é possível alcançar uma saúde melhor e mais qualidade de vida." },
];

function getCategory(imc: number): Category & { imc: number } {
  if (imc < 18.5) return { ...categories[0], imc };
  if (imc < 25) return { ...categories[1], imc };
  if (imc < 30) return { ...categories[2], imc };
  if (imc < 35) return { ...categories[3], imc };
  if (imc < 40) return { ...categories[4], imc };
  return { ...categories[5], imc };
}

export default function IMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState<ReturnType<typeof getCategory> | null>(null);
  const [error, setError] = useState("");

  const calcular = () => {
    const p = parseFloat(peso.replace(",", "."));
    const a = parseFloat(altura.replace(",", "."));
    if (!p || !a || p <= 0 || a <= 0) {
      setError("Por favor, preencha peso e altura com valores válidos.");
      setResult(null);
      return;
    }
    if (p > 300 || a > 2.5 || a < 0.5) {
      setError("Verifique os valores inseridos. Peso em kg, altura em metros (ex: 1,75).");
      setResult(null);
      return;
    }
    setError("");
    const imc = p / (a * a);
    setResult(getCategory(imc));
  };

  const resetar = () => {
    setPeso("");
    setAltura("");
    setResult(null);
    setError("");
  };

  const pointerPct = result
    ? Math.min(Math.max(((result.imc - 10) / 40) * 100, 0), 100)
    : null;

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #0F172A 0%, #1E3A8A 60%, #2563EB 100%)", padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=600&fit=crop&auto=format)", backgroundSize: "cover", opacity: 0.07 }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>Calculadora IMC</span>
          </div>
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 16px" }}>
              Calcule seu IMC
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>
              O Índice de Massa Corporal é uma referência útil para entender sua relação entre peso e altura. Descubra o seu agora.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section style={{ padding: "64px 24px 80px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="imc-main">
          {/* Calculator */}
          <div>
            <div style={{ background: "#fff", borderRadius: 24, padding: 40, border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", marginBottom: 28 }}>
                Inserir dados
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>
                <div>
                  <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, color: "#374151", marginBottom: 8 }}>
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 70"
                    value={peso}
                    onChange={e => setPeso(e.target.value)}
                    style={{
                      width: "100%", padding: "14px 16px", borderRadius: 12,
                      border: "1.5px solid #E5E7EB", fontSize: 16, fontFamily: "Inter, sans-serif",
                      color: "#111827", outline: "none", transition: "border-color 0.15s ease",
                    }}
                    onFocus={e => e.target.style.borderColor = "#2563EB"}
                    onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                    min="1" max="300" step="0.1"
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, color: "#374151", marginBottom: 8 }}>
                    Altura (metros)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 1.75"
                    value={altura}
                    onChange={e => setAltura(e.target.value)}
                    style={{
                      width: "100%", padding: "14px 16px", borderRadius: 12,
                      border: "1.5px solid #E5E7EB", fontSize: 16, fontFamily: "Inter, sans-serif",
                      color: "#111827", outline: "none", transition: "border-color 0.15s ease",
                    }}
                    onFocus={e => e.target.style.borderColor = "#2563EB"}
                    onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                    min="0.5" max="2.5" step="0.01"
                  />
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", marginTop: 6 }}>
                    Use ponto ou vírgula como separador decimal. Ex: 1.75 ou 1,75
                  </p>
                </div>
              </div>

              {error && (
                <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: 10, padding: "12px 16px", marginBottom: 20, fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#DC2626" }}>
                  {error}
                </div>
              )}

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={calcular}
                  style={{
                    flex: 1, padding: "14px", borderRadius: 12,
                    background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 16,
                    border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Calcular IMC
                </button>
                {result && (
                  <button
                    onClick={resetar}
                    style={{
                      padding: "14px 18px", borderRadius: 12, border: "1.5px solid #E5E7EB",
                      background: "#fff", color: "#6B7280", fontFamily: "Inter, sans-serif",
                      fontWeight: 600, fontSize: 15, cursor: "pointer",
                    }}
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>

            {/* RESULT */}
            {result && (
              <div style={{ marginTop: 24, background: "#fff", borderRadius: 24, padding: 40, border: `2px solid ${result.color}`, boxShadow: `0 8px 32px ${result.color}22` }}>
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}></div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                    Seu IMC
                  </div>
                  <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 64, color: result.color, lineHeight: 1 }}>
                    {result.imc.toFixed(1)}
                  </div>
                  <div style={{ display: "inline-block", background: result.bg, color: result.color, borderRadius: 100, padding: "8px 20px", marginTop: 12, fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15 }}>
                    {result.label}
                  </div>
                </div>

                {/* Scale */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ position: "relative", height: 12, borderRadius: 100, background: "linear-gradient(to right, #3B82F6, #10B981, #F59E0B, #F97316, #EF4444)", marginBottom: 6 }}>
                    {pointerPct !== null && (
                      <div style={{
                        position: "absolute", top: -6, left: `${pointerPct}%`,
                        transform: "translateX(-50%)",
                        width: 24, height: 24, borderRadius: "50%",
                        background: result.color, border: "3px solid #fff",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      }} />
                    )}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>
                    <span>10</span><span>18,5</span><span>25</span><span>30</span><span>35</span><span>40+</span>
                  </div>
                </div>

                <div style={{ background: result.bg, borderRadius: 14, padding: "16px 18px" }}>
                  <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: result.color, marginBottom: 8 }}>
                    Recomendação
                  </h4>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#374151", lineHeight: 1.65, margin: 0 }}>
                    {result.rec}
                  </p>
                </div>

                <Link
                  to="/planos"
                  style={{
                    display: "block", textAlign: "center", marginTop: 20, padding: "13px",
                    borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none",
                  }}
                >
                  Comece a treinar na Pulse →
                </Link>
              </div>
            )}
          </div>

          {/* Info sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* What is BMI */}
            <div style={{ background: "#fff", borderRadius: 24, padding: 36, border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#111827", marginBottom: 16 }}>
                O que é o IMC?
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#374151", lineHeight: 1.75, marginBottom: 16 }}>
                O <strong>Índice de Massa Corporal (IMC)</strong> é uma medida internacional usada para avaliar se uma pessoa está no peso adequado para a sua altura.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#374151", lineHeight: 1.75, marginBottom: 16 }}>
                Ele é calculado dividindo o peso (em kg) pelo quadrado da altura (em metros):
              </p>
              <div style={{ background: "#EFF6FF", borderRadius: 12, padding: "16px 20px", textAlign: "center", marginBottom: 16 }}>
                <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#2563EB" }}>
                  IMC = Peso ÷ Altura²
                </span>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                Por exemplo: uma pessoa com 70 kg e 1,75 m tem IMC = 70 ÷ (1,75 × 1,75) = <strong>22,9</strong>
              </p>
            </div>

            {/* Table */}
            <div style={{ background: "#fff", borderRadius: 24, padding: 36, border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 20, color: "#111827", marginBottom: 20 }}>
                Classificação do IMC (OMS)
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {categories.map(({ label, range, color, bg }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: bg, borderRadius: 10, padding: "10px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}></span>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, fontWeight: 600, color }}>{label}</span>
                    </div>
                    <span style={{ fontFamily: "Manrope, sans-serif", fontSize: 13, fontWeight: 700, color }}>{range}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div style={{ background: "#FFFBEB", borderRadius: 16, padding: 24, border: "1px solid #FDE68A" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}></span>
                <div>
                  <h4 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 14, color: "#92400E", marginBottom: 6 }}>Aviso importante</h4>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#78350F", lineHeight: 1.65, margin: 0 }}>
                    A calculadora de IMC é uma ferramenta de referência e <strong>não substitui a avaliação de um profissional de saúde</strong>. O IMC não considera fatores como massa muscular, densidade óssea, distribuição de gordura e outras características individuais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px 80px", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "#111827", marginBottom: 14, letterSpacing: "-0.02em" }}>
            Quer ir além do IMC?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 28 }}>
            Na Pulse Fitness, realizamos avaliação física completa com bioimpedância, medidas corporais e montagem de plano de treino personalizado — totalmente gratuito para novos alunos.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/planos" style={{ padding: "14px 28px", borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}>
              Começar agora
            </Link>
            <Link to="/contato" style={{ padding: "14px 28px", borderRadius: 12, border: "1.5px solid #E5E7EB", color: "#374151", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Falar com um professor
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .imc-main { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
