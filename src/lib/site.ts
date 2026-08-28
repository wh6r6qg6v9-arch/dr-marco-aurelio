export const SITE_URL = "https://dr.marco.cordeirocardio.com.br";

export function absoluteUrl(path = "/") {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${normalizedPath}`;
}

export const doctor = {
  name: "Dr. Marco Aurélio Santos Cordeiro",
  structuredName: "Marco Aurélio Santos Cordeiro",
  honorificPrefix: "Dr.",
  siteName: "Dr. Marco Aurélio",
  siteAlternateNames: ["Dr. Marco Cordeiro", "Marco Aurélio Cordeiro", "Cordeiro Cardio"],
  role: "MÉDICO",
  specialty: "Médico Cardiologista",
  crm: "CRM-GO 7104",
  rqe: "RQE 4255 — Goiás",
  tagline: "Cardiologia baseada em evidências, com tempo para ouvir você.",
};

export const contact = {
  phoneDisplay: "(62) 98427-0577",
  phoneTel: "+5562984270577",
  whatsapp:
    "https://wa.me/5562984270577?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20teleconsulta%20com%20o%20Dr.%20Marco%20Cordeiro.",
};

export const EMERGENCY_TEXT =
  "Dor súbita ou intensa no peito, falta de ar importante, desmaio ou outros sinais de emergência exigem atendimento imediato. Procure um serviço de urgência ou ligue para o SAMU 192.";

export const IN_PERSON_NOTICE =
  "Atualmente, o Dr. Marco realiza atendimentos por teleconsulta. Não há atendimento presencial disponível em Anápolis neste momento.";

export const EDUCATIONAL_DISCLAIMER =
  "Este conteúdo é educativo e não substitui uma consulta médica.";

export const nav = [
  { to: "/", label: "Início" },
  { to: "/trajetoria", label: "Trajetória" },
  { to: "/areas-de-cuidado", label: "Áreas de cuidado" },
  { to: "/teleconsulta", label: "Teleconsulta" },
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/agendamento", label: "Agendamento" },
] as const;

export type Article = {
  slug: string;
  path: string;
  title: string;
  summary: string;
  topics: string[];
  publishedAt: string;
  reviewedAt: string;
  publishedLabel: string;
  readingTime: string;
};

export const articles: Article[] = [
  {
    slug: "quando-procurar-cardiologista",
    path: "/conteudos/quando-procurar-cardiologista",
    title: "Quando procurar um cardiologista?",
    summary:
      "Situações em que uma avaliação cardiológica costuma ser recomendada, o que esperar da conversa e como diferenciar urgência de acompanhamento.",
    topics: ["Prevenção", "Primeiros passos"],
    publishedAt: "2026-08-26",
    reviewedAt: "2026-08-26",
    publishedLabel: "26 de agosto de 2026",
    readingTime: "7 min de leitura",
  },
  {
    slug: "colesterol-risco-cardiovascular",
    path: "/conteudos/colesterol-risco-cardiovascular",
    title: "Colesterol e risco cardiovascular: por que olhar além de um número isolado",
    summary:
      "Por que o colesterol é interpretado dentro de um conjunto de fatores, e o que significa avaliar risco em vez de reagir a um único resultado.",
    topics: ["Colesterol", "Risco cardiovascular"],
    publishedAt: "2026-08-26",
    reviewedAt: "2026-08-26",
    publishedLabel: "26 de agosto de 2026",
    readingTime: "8 min de leitura",
  },
  {
    slug: "como-se-preparar-teleconsulta",
    path: "/conteudos/como-se-preparar-teleconsulta",
    title: "Como se preparar para uma teleconsulta cardiológica",
    summary:
      "Um guia simples e sem pressa para organizar sua história, escolher um lugar tranquilo e aproveitar melhor o tempo de conversa.",
    topics: ["Teleconsulta", "Primeiros passos"],
    publishedAt: "2026-08-26",
    reviewedAt: "2026-08-26",
    publishedLabel: "26 de agosto de 2026",
    readingTime: "6 min de leitura",
  },
];

export const allTopics = Array.from(new Set(articles.flatMap((a) => a.topics))).sort((a, b) =>
  a.localeCompare(b, "pt-BR"),
);
