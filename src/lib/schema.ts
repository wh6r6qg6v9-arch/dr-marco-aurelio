import { absoluteUrl, articles, contact, doctor, SITE_URL, type Article } from "./site";

const IDS = {
  doctor: `${SITE_URL}/#doctor`,
  website: `${SITE_URL}/#website`,
  teleconsultation: `${SITE_URL}/#teleconsulta`,
} as const;

const doctorImageUrl = absoluteUrl("/images/dr-marco-aurelio-santos-cordeiro.jpeg");

export const siteGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": IDS.doctor,
      url: absoluteUrl("/trajetoria"),
      name: doctor.structuredName,
      honorificPrefix: doctor.honorificPrefix,
      jobTitle: doctor.specialty,
      description: doctor.tagline,
      image: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#doctor-image`,
        url: doctorImageUrl,
        contentUrl: doctorImageUrl,
        width: 290,
        height: 446,
        caption: doctor.name,
      },
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "CRM-GO",
          name: "Registro no Conselho Regional de Medicina de Goiás",
          value: "7104",
        },
        {
          "@type": "PropertyValue",
          propertyID: "RQE-GO",
          name: "Registro de Qualificação de Especialista em Cardiologia — Goiás",
          value: "4255",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Médico Cardiologista",
        occupationLocation: { "@type": "Country", name: "Brasil" },
        skills: [
          "Cardiologia clínica",
          "Cardiologia preventiva",
          "Cardio-oncologia",
          "Imagem cardiovascular",
          "Medicina baseada em evidências",
        ],
      },
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Universidade Evangélica de Goiás — UniEVANGÉLICA",
        url: "https://www4.unievangelica.edu.br/",
      },
      sameAs: [
        "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4730399D2",
        "https://www.escavador.com/sobre/1671182/marco-aurelio-santos-cordeiro",
      ],
      subjectOf: [
        {
          "@type": "WebPage",
          name: "Equipe Editorial — Revista Educação em Saúde",
          url: "https://periodicos.unievangelica.edu.br/index.php/educacaoemsaude/about/editorialTeam",
        },
        {
          "@type": "CreativeWork",
          genre: "Artigo científico",
          name: "Efeitos tardios da radioterapia mediastinal sobre as valvas cardíacas: uma revisão narrativa",
          url: "https://periodicos.unievangelica.edu.br/index.php/educacaoemsaude/article/view/6640",
          sameAs: "https://doi.org/10.37951/2358-9868.2022v10i2.p95-102",
        },
        {
          "@type": "CreativeWork",
          name: "Tese de doutorado — Programa de Pós-Graduação em Cardiologia da USP",
          url: "https://www.pgcardiologiausp.com.br/wp-content/uploads/2024/12/marco_aurlio_santos_cordeiro.pdf",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": IDS.website,
      url: absoluteUrl(),
      name: doctor.siteName,
      alternateName: doctor.siteAlternateNames,
      description: doctor.tagline,
      inLanguage: "pt-BR",
      publisher: { "@id": IDS.doctor },
      copyrightHolder: { "@id": IDS.doctor },
    },
    {
      "@type": "Service",
      "@id": IDS.teleconsultation,
      url: absoluteUrl("/teleconsulta"),
      name: "Teleconsulta cardiológica",
      serviceType: "Teleconsulta cardiológica",
      category: { "@id": "https://schema.org/Cardiovascular", name: "Cardiologia" },
      description:
        "Atendimento cardiológico por vídeo, com agendamento administrativo pela secretária.",
      provider: { "@id": IDS.doctor },
      areaServed: { "@type": "Country", name: "Brasil" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: absoluteUrl("/agendamento"),
        servicePhone: {
          "@type": "ContactPoint",
          telephone: contact.phoneTel,
          contactType: "Agendamento administrativo",
          areaServed: "BR",
          availableLanguage: "pt-BR",
        },
      },
    },
  ],
};

type PageSchemaOptions = {
  path?: string;
  name: string;
  description: string;
  type?: "WebPage" | "ProfilePage" | "CollectionPage";
  breadcrumbs?: Array<{ name: string; path: string }>;
  mainEntityId?: string;
  includeArticleList?: boolean;
};

export function pageJsonLd({
  path = "/",
  name,
  description,
  type = "WebPage",
  breadcrumbs = [],
  mainEntityId,
  includeArticleList = false,
}: PageSchemaOptions) {
  const pageUrl = absoluteUrl(path);
  const pageId = `${pageUrl}#webpage`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": type,
      "@id": pageId,
      url: pageUrl,
      name,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": IDS.website },
      about: { "@id": IDS.doctor },
      ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
      ...(breadcrumbs.length ? { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } } : {}),
    },
  ];

  if (breadcrumbs.length) {
    graph.push(breadcrumbJsonLd(pageUrl, breadcrumbs));
  }

  if (includeArticleList) {
    graph.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#articles`,
      name: "Conteúdos educativos em cardiologia",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: absoluteUrl(article.path),
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function articleJsonLd(article: Article) {
  const pageUrl = absoluteUrl(article.path);
  const pageId = `${pageUrl}#webpage`;
  const articleId = `${pageUrl}#article`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: article.title,
        description: article.summary,
        inLanguage: "pt-BR",
        isPartOf: { "@id": IDS.website },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": articleId },
        about: { "@id": IDS.doctor },
      },
      {
        "@type": "Article",
        "@id": articleId,
        headline: article.title,
        description: article.summary,
        url: pageUrl,
        mainEntityOfPage: { "@id": pageId },
        datePublished: article.publishedAt,
        dateModified: article.reviewedAt,
        inLanguage: "pt-BR",
        author: { "@id": IDS.doctor },
        reviewedBy: { "@id": IDS.doctor },
        publisher: { "@id": IDS.doctor },
        copyrightHolder: { "@id": IDS.doctor },
        isPartOf: { "@id": IDS.website },
        about: article.topics.map((name) => ({ "@type": "Thing", name })),
      },
      breadcrumbJsonLd(pageUrl, [
        { name: "Início", path: "/" },
        { name: "Conteúdos", path: "/conteudos" },
        { name: article.title, path: article.path },
      ]),
    ],
  };
}

function breadcrumbJsonLd(
  pageUrl: string,
  items: Array<{ name: string; path: string }>,
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const schemaIds = IDS;
