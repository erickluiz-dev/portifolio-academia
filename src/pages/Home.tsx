import { useState } from "react";
import { Link } from "react-router-dom";
import FreeTrialForm from "../components/FreeTrialForm";

const features = [
  {
    title: "Equipamentos de última geração",
    desc: "Mais de 500 equipamentos profissionais, renovados regularmente para oferecer a melhor experiência de treino.",
  },
  {
    title: "Professores certificados",
    desc: "Equipe com formação em Educação Física e especializações nas principais modalidades fitness.",
  },
  {
    title: "App de treino personalizado",
    desc: "Acompanhe sua evolução, acesse seus treinos e marque aulas direto pelo aplicativo Pulse.",
  },
  {
    title: "Consultoria nutricional",
    desc: "Parceria com nutricionistas para complementar seus treinos com uma alimentação adequada.",
  },
  {
    title: "Vestiários completos",
    desc: "Espaços amplos, limpos e bem equipados com armários individuais e duchas de qualidade.",
  },
  {
    title: "Avaliação física gratuita",
    desc: "Avaliação completa com bioimpedância para traçar o plano de treino ideal para seu perfil.",
  },
];

const modalidades = [
  { slug: "musculacao", name: "Musculação", img: "1534438327276-14e5300c3a48", desc: "Ganho de força e massa muscular com treinos periodizados." },
  { slug: "funcional", name: "Funcional", img: "1571019614242-c5c5dee9f50b", desc: "Movimentos naturais que melhoram desempenho no dia a dia." },
  { slug: "spinning", name: "Spinning", img: "1558618666-fcd25c85cd64", desc: "Pedalar com energia, música e resultado cardiovascular garantido." },
  { slug: "yoga", name: "Yoga", img: "1506126613408-eca07ce68773", desc: "Equilíbrio entre corpo e mente através de posturas e respiração." },
];

const planos = [
  {
    nome: "Mensal",
    preco: "R$ 149",
    periodo: "/mês",
    beneficios: ["Acesso completo à academia", "Avaliação física gratuita", "App de treino", "Vestiário com armário"],
    destaque: false,
  },
  {
    nome: "Anual",
    preco: "R$ 99",
    periodo: "/mês",
    obs: "cobrado anualmente",
    beneficios: ["Tudo do plano mensal", "2 aulas de personal grátis/mês", "Consultoria nutricional", "Acesso prioritário a aulas", "Economia de R$ 600/ano"],
    destaque: true,
  },
  {
    nome: "Trimestral",
    preco: "R$ 119",
    periodo: "/mês",
    beneficios: ["Tudo do plano mensal", "1 aula de personal grátis/mês", "Desconto em produtos da loja"],
    destaque: false,
  },
];

const testimonials = [
  {
    name: "Mariana Costa",
    since: "Aluna desde 2021",
    text: "Perdi 18 kg em oito meses com o suporte dos professores da Pulse. O ambiente é incrível e a equipe realmente se importa com seu progresso. Mudou minha vida.",
    avatar: "1487412720507-95d6424b4b08",
    rating: 5,
  },
  {
    name: "Rafael Almeida",
    since: "Aluno desde 2022",
    text: "Fui de sedentário a correr 10 km em menos de um ano. O treino funcional aqui é de outro nível. Vale muito a pena investir na sua saúde.",
    avatar: "1500648767791-00dcc994a43e",
    rating: 5,
  },
  {
    name: "Juliana Ferreira",
    since: "Aluna desde 2020",
    text: "As aulas de yoga e pilates transformaram minha postura e reduziram minhas dores nas costas. Professora Camila é excepcional.",
    avatar: "1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    since: "Aluno desde 2023",
    text: "Estrutura excelente, aparelhos sempre em ótimo estado e nunca fica lotado. O app de treino personalizado é um diferencial enorme.",
    avatar: "1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    name: "Ana Paula Lima",
    since: "Aluna desde 2019",
    text: "Cinco anos como aluna e ainda me surpreendo com a qualidade. A Pulse é mais que uma academia, é uma comunidade que se apoia.",
    avatar: "1544005313-94ddf0286df2",
    rating: 5,
  },
];

const professors = [
  { name: "Lucas Martins", role: "Musculação & Força", img: "1519085360753-af0119f7cbe7", slug: "lucas-martins" },
  { name: "Camila Rocha", role: "Yoga & Pilates", img: "1524504388324-7bc463f5d5e5", slug: "camila-rocha" },
  { name: "Diego Santos", role: "Cross Training & HIIT", img: "1534528741775-53994a69daeb", slug: "diego-santos" },
  { name: "Fernanda Lima", role: "Funcional & Spinning", img: "1520813792240-956536f54fa0", slug: "fernanda-lima" },
];

export default function Home() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div style={{ paddingTop: 68 }}>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&h=1000&fit=crop&auto=format)",
          backgroundSize: "cover", backgroundPosition: "center 30%",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(10,20,50,0.82) 0%, rgba(10,20,50,0.55) 55%, rgba(10,20,50,0.2) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 24px", width: "100%" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,0.25)", border: "1px solid rgba(37,99,235,0.4)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#93C5FD" }}>Matrículas abertas — Venha treinar!</span>
            </div>
            <h1 style={{
              fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 24px",
            }}>
              Transforme seu corpo<br />e sua rotina.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.7, marginBottom: 36, maxWidth: 520 }}>
              Treinos personalizados, professores qualificados e uma estrutura completa para você alcançar seus objetivos com segurança e motivação.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => setTrialOpen(true)}
                style={{
                  padding: "14px 28px", borderRadius: 12,
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 15,
                  border: "none", cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.5)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                Agendar Treino Experimental
              </button>
              <Link
                to="/planos"
                style={{
                  padding: "14px 28px", borderRadius: 12,
                  background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15,
                  textDecoration: "none", transition: "all 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"}
              >
                Conhecer os planos
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "96px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Por que escolher a Pulse?
            </span>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#111827", margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
              Tudo que você precisa para evoluir
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "#6B7280", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Uma academia completa que vai muito além dos equipamentos. Aqui você encontra suporte, comunidade e resultado.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="features-grid">
            {features.map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  background: "#fff", borderRadius: 20, padding: 32,
                  border: "1px solid #E5E7EB",
                  transition: "all 0.2s ease", cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,99,235,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}></div>
                <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 17, color: "#111827", marginBottom: 10 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#6B7280", lineHeight: 1.65 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CLASSES */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Modalidades em destaque
              </span>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#111827", margin: "10px 0 0", letterSpacing: "-0.02em" }}>
                Para todos os perfis e objetivos
              </h2>
            </div>
            <Link
              to="/modalidades"
              style={{
                fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, color: "#2563EB",
                textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
                padding: "10px 18px", borderRadius: 10, border: "1.5px solid #BFDBFE",
                transition: "all 0.15s ease",
              }}
            >
              Ver todas as modalidades →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="modalities-grid">
            {modalidades.map(({ slug, name, img, desc }) => (
              <Link
                key={slug}
                to={`/modalidades/${slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{ borderRadius: 20, overflow: "hidden", background: "#F8FAFC", border: "1px solid #E5E7EB", transition: "all 0.2s ease" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ height: 200, overflow: "hidden", backgroundColor: "#CBD5E1" }}>
                    <img
                      src={`https://images.unsplash.com/photo-${img}?w=600&h=400&fit=crop&auto=format`}
                      alt={name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div style={{ padding: "20px 22px 22px" }}>
                    <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 17, color: "#111827", margin: "0 0 8px" }}>{name}</h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 14, fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#2563EB" }}>
                      Saiba mais →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS PREVIEW */}
      <section style={{ padding: "96px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Nossos planos
            </span>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#111827", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
              Escolha o plano ideal
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#6B7280", margin: 0 }}>
              Sem taxa de matrícula em todos os planos. Comece hoje.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="plans-grid">
            {planos.map((p) => (
              <div
                key={p.nome}
                style={{
                  background: p.destaque ? "linear-gradient(160deg, #2563EB 0%, #1D4ED8 100%)" : "#fff",
                  borderRadius: 24, padding: "36px 32px",
                  border: p.destaque ? "none" : "1.5px solid #E5E7EB",
                  boxShadow: p.destaque ? "0 16px 48px rgba(37,99,235,0.3)" : "none",
                  position: "relative",
                  transform: p.destaque ? "scale(1.03)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {p.destaque && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "#10B981", color: "#fff", borderRadius: 100, padding: "5px 16px",
                    fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 12, whiteSpace: "nowrap",
                  }}>
                    Mais popular
                  </div>
                )}
                <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 15, color: p.destaque ? "rgba(255,255,255,0.75)" : "#6B7280", marginBottom: 12 }}>
                  Plano {p.nome}
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: p.obs ? 4 : 24 }}>
                  <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 42, color: p.destaque ? "#fff" : "#111827", lineHeight: 1 }}>{p.preco}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: p.destaque ? "rgba(255,255,255,0.7)" : "#6B7280", marginBottom: 6 }}>{p.periodo}</span>
                </div>
                {p.obs && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: p.destaque ? "rgba(255,255,255,0.6)" : "#9CA3AF", marginBottom: 20 }}>{p.obs}</p>}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.beneficios.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter, sans-serif", fontSize: 14, color: p.destaque ? "rgba(255,255,255,0.9)" : "#374151" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.destaque ? "#93C5FD" : "#10B981"} strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/planos"
                  style={{
                    display: "block", textAlign: "center", padding: "13px",
                    borderRadius: 12, textDecoration: "none", fontFamily: "Inter, sans-serif",
                    fontWeight: 700, fontSize: 15, transition: "all 0.2s ease",
                    background: p.destaque ? "rgba(255,255,255,0.18)" : "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    border: p.destaque ? "1.5px solid rgba(255,255,255,0.3)" : "none",
                    color: "#fff",
                  }}
                >
                  Matricular-se
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 32, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#9CA3AF" }}>
            Primeira semana grátis para novos alunos.{" "}
            <Link to="/planos" style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>Ver detalhes completos →</Link>
          </p>
        </div>
      </section>

      {/* TRAINERS */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Nossa equipe
              </span>
              <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#111827", margin: "10px 0 0", letterSpacing: "-0.02em" }}>
                Professores que fazem a diferença
              </h2>
            </div>
            <Link to="/professores" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, color: "#2563EB", textDecoration: "none", padding: "10px 18px", borderRadius: 10, border: "1.5px solid #BFDBFE" }}>
              Ver equipe completa →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="professors-grid">
            {professors.map(({ name, role, img, slug }) => (
              <Link key={slug} to={`/professores/${slug}`} style={{ textDecoration: "none" }}>
                <div style={{ borderRadius: 20, overflow: "hidden", background: "#F8FAFC", border: "1px solid #E5E7EB", transition: "all 0.2s ease" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ height: 220, backgroundColor: "#CBD5E1", overflow: "hidden" }}>
                    <img
                      src={`https://images.unsplash.com/photo-${img}?w=400&h=440&fit=crop&auto=format`}
                      alt={name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  <div style={{ padding: "18px 20px 20px" }}>
                    <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 16, color: "#111827" }}>{name}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#2563EB", marginTop: 4 }}>{role}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* FREE TRIAL CTA */}
      <section style={{ padding: "96px 24px", background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #1D4ED8 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=700&fit=crop&auto=format)", backgroundSize: "cover", opacity: 0.12 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="trial-section">
          <div>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#fff", letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.1 }}>
              Seu primeiro treino é por nossa conta.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 36 }}>
              Venha conhecer a Pulse Fitness sem compromisso. Nossos professores vão te receber, mostrar a estrutura e montar um treino do seu perfil.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {["Sem taxa de matrícula", "Avaliação física gratuita", "Treino experimental grátis"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <FreeTrialForm inline />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="location-grid">
          <div>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Localização
            </span>
            <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)", color: "#111827", margin: "12px 0 20px", letterSpacing: "-0.02em" }}>
              Fácil de acessar, difícil de largar
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Endereço", text: "Av. Paulista, 1500 — Bela Vista, São Paulo - SP, CEP 01310-200" },
                { title: "Metrô", text: "A 100m da estação Trianon-MASP (Linha 2 - Verde)" },
                { title: "Estacionamento", text: "Convênio com Parking Paulista — 2h grátis para alunos" },
                { title: "Horários", text: "Seg–Sex: 05h00–23h00 | Sáb–Dom: 07h00–20h00" },
              ].map(({ title, text }) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  
                  <div>
                    <div style={{ fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: 14, color: "#111827" }}>{title}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#6B7280", marginTop: 2 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contato" style={{ display: "inline-block", marginTop: 28, padding: "13px 24px", borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              Falar com a gente →
            </Link>
          </div>
          <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid #E5E7EB", height: 400, backgroundColor: "#E5E7EB" }}>
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
        </div>
      </section>

      {/* FREE TRIAL MODAL */}
      {trialOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setTrialOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "relative", background: "#fff", borderRadius: 24, padding: 40, maxWidth: 560, width: "100%", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <div>
                <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", margin: "0 0 4px" }}>
                  Agendar treino experimental
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280", margin: 0 }}>
                  Sem compromisso. Totalmente gratuito.
                </p>
              </div>
              <button onClick={() => setTrialOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: 4 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FreeTrialForm onClose={() => setTrialOpen(false)} />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: 1fr 1fr !important; }
          .modalities-grid { grid-template-columns: 1fr 1fr !important; }
          .professors-grid { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; flex-direction: column !important; }
          .plans-grid { grid-template-columns: 1fr !important; }
          .trial-section { grid-template-columns: 1fr !important; }
          .location-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .modalities-grid { grid-template-columns: 1fr !important; }
          .professors-grid { grid-template-columns: 1fr !important; }
          .trial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
