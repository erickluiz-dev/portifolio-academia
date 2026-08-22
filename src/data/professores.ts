export interface Professor {
  slug: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  experiencia: string;
  formacao: string[];
  certificacoes: string[];
  modalidades: string[];
  horarios: { dia: string; horario: string }[];
  instagram?: string;
}

export const professores: Professor[] = [
  {
    slug: "lucas-martins",
    name: "Lucas Martins",
    role: "Musculação & Força",
    img: "1519085360753-af0119f7cbe7",
    bio: "Lucas é especialista em hipertrofia e força, com mais de 8 anos de experiência treinando atletas amadores e praticantes de todas as faixas etárias. Seu método combina periodização científica com acompanhamento humanizado, garantindo resultados seguros e duradouros.",
    experiencia: "8 anos",
    formacao: ["Licenciatura em Educação Física — USP", "Especialização em Musculação e Culturismo — UNICAMP"],
    certificacoes: ["CREF 12345-G/SP", "NSCA-CSCS", "Curso de Bioimpedância Avançada"],
    modalidades: ["Musculação", "Avaliação Física", "Personal Trainer"],
    horarios: [
      { dia: "Segunda-feira", horario: "06:00 – 14:00" },
      { dia: "Terça-feira", horario: "06:00 – 14:00" },
      { dia: "Quarta-feira", horario: "06:00 – 14:00" },
      { dia: "Quinta-feira", horario: "06:00 – 14:00" },
      { dia: "Sexta-feira", horario: "06:00 – 14:00" },
    ],
    instagram: "@lucas.martins.fit",
  },
  {
    slug: "camila-rocha",
    name: "Camila Rocha",
    role: "Yoga & Pilates",
    img: "1524504388324-7bc463f5d5e5",
    bio: "Camila é instrutora certificada de Yoga e Pilates com 10 anos de prática e 6 de ensino. Apaixonada por bem-estar integral, ela conduz aulas que equilibram desafio físico e tranquilidade mental, atendendo desde iniciantes até praticantes avançados.",
    experiencia: "6 anos de ensino",
    formacao: ["Bacharelado em Educação Física — PUC-SP", "Certificação em Hatha e Vinyasa Yoga — Escola de Yoga de Auroville"],
    certificacoes: ["CREF 23456-G/SP", "Pilates Reformer Certificada — STOTT Pilates", "200h Yoga Alliance RYT"],
    modalidades: ["Yoga", "Pilates", "Meditação", "Alongamento"],
    horarios: [
      { dia: "Segunda-feira", horario: "09:00 – 17:00" },
      { dia: "Terça-feira", horario: "07:00 – 12:00 / 18:00 – 21:00" },
      { dia: "Quarta-feira", horario: "09:00 – 17:00" },
      { dia: "Quinta-feira", horario: "07:00 – 12:00 / 18:00 – 21:00" },
      { dia: "Sábado", horario: "08:00 – 13:00" },
    ],
    instagram: "@camila.rocha.yoga",
  },
  {
    slug: "diego-santos",
    name: "Diego Santos",
    role: "Cross Training & HIIT",
    img: "1534528741775-53994a69daeb",
    bio: "Diego é atleta e treinador de Cross Training, com passagem por competições nacionais. Seu treino é intenso, motivador e adaptado para todos os níveis — do iniciante ao competidor. Ele acredita que o limite é sempre maior do que imaginamos.",
    experiencia: "5 anos",
    formacao: ["Educação Física — FMUSP", "Especialização em Treinamento Funcional — CEFISO"],
    certificacoes: ["CREF 34567-G/SP", "CrossFit Level 1 Trainer", "TRX Certified Trainer"],
    modalidades: ["Cross Training", "HIIT", "Funcional", "Musculação"],
    horarios: [
      { dia: "Segunda-feira", horario: "14:00 – 22:00" },
      { dia: "Terça-feira", horario: "14:00 – 22:00" },
      { dia: "Quarta-feira", horario: "14:00 – 22:00" },
      { dia: "Quinta-feira", horario: "14:00 – 22:00" },
      { dia: "Sexta-feira", horario: "14:00 – 22:00" },
    ],
    instagram: "@diegosantos_cf",
  },
  {
    slug: "fernanda-lima",
    name: "Fernanda Lima",
    role: "Funcional & Spinning",
    img: "1520813792240-956536f54fa0",
    bio: "Fernanda é especialista em treino funcional e spinning, com foco em condicionamento cardiovascular e qualidade de movimento. Suas aulas são conhecidas pela energia contagiante e pela forma como ela adapta o treino para cada perfil de aluno.",
    experiencia: "7 anos",
    formacao: ["Educação Física — UNIFESP", "Especialização em Spinning e Ciclismo Indoor — ICG Master Instructor"],
    certificacoes: ["CREF 45678-G/SP", "Spinning Certified Master Instructor — Mad Dogg Athletics", "Functional Movement Screen Certified"],
    modalidades: ["Spinning", "Funcional", "Circuito", "Alongamento"],
    horarios: [
      { dia: "Segunda-feira", horario: "05:00 – 13:00" },
      { dia: "Quarta-feira", horario: "05:00 – 13:00" },
      { dia: "Sexta-feira", horario: "05:00 – 13:00" },
      { dia: "Sábado", horario: "06:00 – 14:00" },
      { dia: "Domingo", horario: "07:00 – 12:00" },
    ],
    instagram: "@fernanda.spinning",
  },
  {
    slug: "rafael-costa",
    name: "Rafael Costa",
    role: "Musculação & Personal",
    img: "1507003211169-0a1dd7228f2d",
    bio: "Rafael é personal trainer com foco em emagrecimento e recomposição corporal. Seus métodos combinam ciência e praticidade, tornando cada treino eficiente e adequado à rotina do aluno. Especialista em atender iniciantes e pessoas com histórico sedentário.",
    experiencia: "6 anos",
    formacao: ["Educação Física — UNESP", "Pós-graduação em Personal Training e Prescrição de Exercícios — UNIFRAN"],
    certificacoes: ["CREF 56789-G/SP", "NSCA-CPT", "Nutrição Esportiva Aplicada — ACSM"],
    modalidades: ["Musculação", "Personal Trainer", "Funcional"],
    horarios: [
      { dia: "Terça-feira", horario: "06:00 – 14:00" },
      { dia: "Quarta-feira", horario: "06:00 – 14:00" },
      { dia: "Quinta-feira", horario: "06:00 – 14:00" },
      { dia: "Sexta-feira", horario: "06:00 – 14:00" },
      { dia: "Sábado", horario: "08:00 – 16:00" },
    ],
  },
  {
    slug: "ana-beatriz",
    name: "Ana Beatriz Souza",
    role: "Pilates & Reabilitação",
    img: "1438761681033-6461ffad8d80",
    bio: "Ana Beatriz tem formação em Fisioterapia e é instrutora de Pilates terapêutico. Atende com excelência alunos em reabilitação, gestantes, idosos e pessoas com dores crônicas, sempre com atenção individualizada e segurança acima de tudo.",
    experiencia: "9 anos",
    formacao: ["Fisioterapia — FMUSP", "Formação Completa em Pilates Clínico — Physio Pilates"],
    certificacoes: ["CREFITO-3 98765", "STOTT Pilates Certified", "Pilates para Gestantes — Hospital Albert Einstein"],
    modalidades: ["Pilates", "Pilates Terapêutico", "Reabilitação", "Yoga"],
    horarios: [
      { dia: "Segunda-feira", horario: "07:00 – 15:00" },
      { dia: "Terça-feira", horario: "07:00 – 15:00" },
      { dia: "Quarta-feira", horario: "07:00 – 15:00" },
      { dia: "Quinta-feira", horario: "07:00 – 15:00" },
      { dia: "Sexta-feira", horario: "07:00 – 12:00" },
    ],
  },
  {
    slug: "marcos-oliveira",
    name: "Marcos Oliveira",
    role: "Cross Training & Musculação",
    img: "1500648767791-00dcc994a43e",
    bio: "Marcos é ex-jogador de futebol profissional e traz a mentalidade do esporte de alto rendimento para seus alunos. Especialista em performance e preparo físico, seus treinos são completos, intensos e adaptados para cada fase do aluno.",
    experiencia: "4 anos",
    formacao: ["Educação Física — UNIRIO", "Especialização em Preparação Física para Esportes Coletivos — CETE"],
    certificacoes: ["CREF 67890-G/SP", "CrossFit Level 2 Trainer", "Preparador Físico — CBF"],
    modalidades: ["Cross Training", "Musculação", "Funcional", "HIIT"],
    horarios: [
      { dia: "Segunda-feira", horario: "16:00 – 23:00" },
      { dia: "Terça-feira", horario: "16:00 – 23:00" },
      { dia: "Quarta-feira", horario: "16:00 – 23:00" },
      { dia: "Quinta-feira", horario: "16:00 – 23:00" },
      { dia: "Sábado", horario: "08:00 – 16:00" },
    ],
  },
  {
    slug: "julia-mendes",
    name: "Julia Mendes",
    role: "Yoga & Meditação",
    img: "1544005313-94ddf0286df2",
    bio: "Julia é professora de Yoga com formação na Índia e anos de prática meditativa. Suas aulas combinam tradição yóguica com elementos contemporâneos de mindfulness, criando experiências transformadoras de corpo e mente para todos os alunos.",
    experiencia: "7 anos",
    formacao: ["Psicologia — USP", "500h Yoga Teacher Training — Rishikesh, Índia"],
    certificacoes: ["500h Yoga Alliance E-RYT", "Mindfulness-Based Stress Reduction — MBSR", "Yin Yoga Certified — Paramaguru School"],
    modalidades: ["Yoga", "Meditação", "Yin Yoga", "Yoga Restaurativo"],
    horarios: [
      { dia: "Segunda-feira", horario: "08:00 – 16:00" },
      { dia: "Quarta-feira", horario: "08:00 – 16:00" },
      { dia: "Sexta-feira", horario: "08:00 – 16:00" },
      { dia: "Sábado", horario: "09:00 – 14:00" },
      { dia: "Domingo", horario: "09:00 – 12:00" },
    ],
  },
];
