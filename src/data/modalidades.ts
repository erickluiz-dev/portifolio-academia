export interface Modalidade {
  slug: string;
  name: string;
  img: string;
  heroImg: string;
  desc: string;
  longDesc: string;
  beneficios: string[];
  dificuldade: "Iniciante" | "Intermediário" | "Avançado" | "Todos os níveis";
  publico: string;
  duracao: string;
  horarios: string[];
}

export const modalidades: Modalidade[] = [
  {
    slug: "musculacao",
    name: "Musculação",
    img: "1534438327276-14e5300c3a48",
    heroImg: "1534438327276-14e5300c3a48",
    desc: "Ganho de força e massa muscular com treinos periodizados.",
    longDesc: "A musculação é a modalidade mais completa para transformação corporal. Na Pulse Fitness, nossos treinos são 100% personalizados e periodizados, garantindo que você evolua de forma segura e consistente. Contamos com mais de 200 aparelhos de última geração e professores especializados para orientar cada exercício.",
    beneficios: ["Aumento de massa muscular", "Aceleração do metabolismo", "Fortalecimento de ossos e articulações", "Melhora da postura", "Maior autonomia funcional", "Redução de gordura corporal"],
    dificuldade: "Todos os níveis",
    publico: "Qualquer pessoa a partir de 16 anos",
    duracao: "45–90 min",
    horarios: ["05:00 – 23:00 (Seg–Sex)", "07:00 – 20:00 (Sáb–Dom)"],
  },
  {
    slug: "funcional",
    name: "Funcional",
    img: "1571019614242-c5c5dee9f50b",
    heroImg: "1571019614242-c5c5dee9f50b",
    desc: "Movimentos naturais que melhoram desempenho no dia a dia.",
    longDesc: "O treino funcional trabalha movimentos que o corpo executa no cotidiano, melhorando força, equilíbrio, coordenação e mobilidade de forma integrada. As aulas são dinâmicas, em grupo, com duração de 50 minutos e intensidade progressiva para todos os níveis.",
    beneficios: ["Melhora do equilíbrio e coordenação", "Prevenção de lesões", "Aumento da disposição diária", "Fortalecimento do core", "Trabalha todo o corpo", "Alta queima calórica"],
    dificuldade: "Todos os níveis",
    publico: "A partir de 14 anos, inclusive terceira idade",
    duracao: "50 min",
    horarios: ["06:00, 07:00, 08:00 (Seg/Qua/Sex)", "18:00, 19:00, 20:00 (Seg/Qua/Sex)"],
  },
  {
    slug: "cross-training",
    name: "Cross Training",
    img: "1534367990399-abd658456f88",
    heroImg: "1534367990399-abd658456f88",
    desc: "Alta intensidade, treino completo, resultados em tempo recorde.",
    longDesc: "O Cross Training combina levantamento olímpico, ginástica e exercícios metabólicos em treinos curtos e de alta intensidade. As aulas são em grupo, com WOD (Workout of the Day) diversificado a cada sessão, promovendo superação constante.",
    beneficios: ["Aumento de força e potência", "Condicionamento cardiovascular intenso", "Queima de gordura acelerada", "Melhora de flexibilidade", "Desenvolvimento de atletas completos", "Comunidade motivadora"],
    dificuldade: "Intermediário",
    publico: "A partir de 16 anos com boa base física",
    duracao: "60 min",
    horarios: ["07:00, 08:00 (Seg–Sáb)", "18:00, 19:00, 20:00 (Seg–Sex)"],
  },
  {
    slug: "pilates",
    name: "Pilates",
    img: "1518611012118-696072aa579a",
    heroImg: "1518611012118-696072aa579a",
    desc: "Fortalecimento profundo com foco em postura e respiração.",
    longDesc: "O Pilates trabalha o fortalecimento muscular profundo, a postura e o controle corporal através de movimentos precisos e respiração consciente. Na Pulse, utilizamos tanto o método solo quanto equipamentos como Reformer e Cadillac, com turmas pequenas e atenção individualizada.",
    beneficios: ["Correção postural", "Alívio de dores nas costas", "Fortalecimento do core", "Melhora da respiração", "Aumento da flexibilidade", "Redução do estresse"],
    dificuldade: "Todos os níveis",
    publico: "A partir de 12 anos, inclusive gestantes e idosos",
    duracao: "55 min",
    horarios: ["07:00, 09:00, 10:00 (Ter/Qui/Sáb)", "18:00, 19:00 (Ter/Qui)"],
  },
  {
    slug: "yoga",
    name: "Yoga",
    img: "1506126613408-eca07ce68773",
    heroImg: "1506126613408-eca07ce68773",
    desc: "Equilíbrio entre corpo e mente através de posturas e respiração.",
    longDesc: "Nossas aulas de yoga combinam posturas (asanas), respiração (pranayama) e meditação para promover equilíbrio físico e mental. Trabalhamos com Hatha Yoga e Vinyasa, atendendo tanto iniciantes quanto praticantes mais experientes.",
    beneficios: ["Redução de ansiedade e estresse", "Melhora do foco e concentração", "Flexibilidade e mobilidade", "Fortalecimento muscular", "Qualidade do sono", "Bem-estar emocional"],
    dificuldade: "Todos os níveis",
    publico: "A partir de 14 anos",
    duracao: "60 min",
    horarios: ["07:00, 09:00 (Seg/Qua/Sex)", "19:00, 20:00 (Ter/Qui)", "09:00, 10:30 (Sáb)"],
  },
  {
    slug: "spinning",
    name: "Spinning",
    img: "1558618666-fcd25c85cd64",
    heroImg: "1558618666-fcd25c85cd64",
    desc: "Pedalar com energia, música e resultado cardiovascular garantido.",
    longDesc: "Nossas aulas de spinning são conduzidas por instrutores animados, com playlists energizantes e bikes profissionais reguláveis. É uma das melhores formas de queimar calorias e melhorar o condicionamento cardiovascular sem impacto nas articulações.",
    beneficios: ["Alta queima calórica (600–800 kcal/aula)", "Fortalecimento de pernas e glúteos", "Condicionamento cardiovascular", "Sem impacto nas articulações", "Aulas em grupo motivadoras", "Melhora da resistência"],
    dificuldade: "Todos os níveis",
    publico: "A partir de 14 anos",
    duracao: "50 min",
    horarios: ["06:00, 07:00 (Seg/Qua/Sex)", "08:00 (Sáb)", "18:00, 19:00, 20:00 (Seg–Sex)"],
  },
  {
    slug: "hiit",
    name: "HIIT",
    img: "1552674605-db5fecabfe68",
    heroImg: "1552674605-db5fecabfe68",
    desc: "Intervalado de alta intensidade para queima máxima em menos tempo.",
    longDesc: "HIIT (High Intensity Interval Training) alterna períodos de esforço máximo com recuperação ativa, gerando alto gasto calórico mesmo horas após o treino. Ideal para quem tem rotina agitada e busca resultados rápidos.",
    beneficios: ["Queima de gordura acelerada", "Efeito termogênico pós-treino", "Melhora cardiovascular rápida", "Treinos curtos e eficientes", "Sem necessidade de equipamento", "Aumento do metabolismo"],
    dificuldade: "Intermediário",
    publico: "A partir de 16 anos com boa saúde cardiovascular",
    duracao: "40 min",
    horarios: ["06:00, 07:00 (Ter/Qui/Sáb)", "18:00, 19:00 (Ter/Qui)"],
  },
  {
    slug: "alongamento",
    name: "Alongamento",
    img: "1544367775-7b63bbf0d43a",
    heroImg: "1544367775-7b63bbf0d43a",
    desc: "Flexibilidade, mobilidade e recuperação muscular com método.",
    longDesc: "As aulas de alongamento e mobilidade são essenciais para complementar qualquer treino. Trabalhamos a amplitude de movimento, prevenção de lesões e recuperação muscular ativa, com técnicas de alongamento estático, dinâmico e liberação miofascial.",
    beneficios: ["Aumento de flexibilidade", "Prevenção de lesões", "Aceleração da recuperação", "Alívio de tensão muscular", "Melhora da postura", "Relaxamento profundo"],
    dificuldade: "Todos os níveis",
    publico: "Qualquer idade, especialmente atletas",
    duracao: "45 min",
    horarios: ["08:00 (Seg–Sex)", "20:00 (Seg/Qua/Sex)", "11:00 (Sáb/Dom)"],
  },
];
