import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import {
  absoluteUrl,
  allTopics,
  articles,
  doctor,
  EDUCATIONAL_DISCLAIMER,
} from "@/lib/site";
import { pageJsonLd } from "@/lib/schema";

export const Route = createFileRoute("/conteudos/")({
  head: () => ({
    meta: [
      { title: "Conteúdos educativos em cardiologia — Textos claros e responsáveis" },
      {
        name: "description",
        content:
          "Artigos educativos sobre prevenção, colesterol, risco cardiovascular e teleconsulta, escritos em linguagem clara pelo Dr. Marco Aurélio Santos Cordeiro.",
      },
      { property: "og:title", content: "Conteúdos educativos em cardiologia" },
      {
        property: "og:description",
        content:
          "Textos educativos sobre saúde do coração, escritos em linguagem clara e sem promessas.",
      },
      { property: "og:url", content: absoluteUrl("/conteudos") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/conteudos") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          pageJsonLd({
            path: "/conteudos",
            type: "CollectionPage",
            name: "Conteúdos educativos em cardiologia",
            description:
              "Artigos educativos sobre prevenção, colesterol, risco cardiovascular e teleconsulta, escritos e revisados pelo Dr. Marco Aurélio Santos Cordeiro.",
            includeArticleList: true,
            breadcrumbs: [
              { name: "Início", path: "/" },
              { name: "Conteúdos", path: "/conteudos" },
            ],
          }),
        ),
      },
    ],
  }),
  component: ContentsPage,
});

function ContentsPage() {
  const [topic, setTopic] = useState<string | null>(null);
  const list = topic ? articles.filter((a) => a.topics.includes(topic)) : articles;

  return (
    <>
      <Breadcrumbs items={[{ label: "Conteúdos" }]} />

      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">Conteúdos</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl">
          Conteúdos educativos sobre saúde do coração
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/90">
          Textos escritos para explicar, não para prescrever. O objetivo é ajudar você a compreender
          melhor conceitos frequentes em cardiologia, com linguagem simples e honestidade sobre o que
          ainda é incerto.
        </p>
        <p className="mt-4 max-w-2xl text-[0.98rem] text-muted-foreground">
          {EDUCATIONAL_DISCLAIMER}
        </p>
      </section>

      <section className="container-page pb-4" aria-labelledby="filtros">
        <h2 id="filtros" className="text-sm font-semibold tracking-wide text-primary">
          Filtrar por tema
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTopic(null)}
            aria-pressed={topic === null}
            className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors ${
              topic === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-primary hover:bg-accent"
            }`}
          >
            Todos os temas
          </button>
          {allTopics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors ${
                topic === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:bg-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground" role="status">
          {list.length === 1 ? "1 conteúdo encontrado" : `${list.length} conteúdos encontrados`}
        </p>
      </section>

      <section className="container-page grid gap-5 py-8 md:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <article
            key={a.slug}
            className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-soft"
          >
            <ul className="flex flex-wrap gap-2" aria-label="Temas do artigo">
              {a.topics.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <h2 className="mt-4 font-serif text-2xl text-primary">{a.title}</h2>
            <p className="mt-3 flex-1 text-[0.98rem] text-muted-foreground">{a.summary}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {doctor.name}
              <br />
              <time dateTime={a.publishedAt}>{a.publishedLabel}</time> · {a.readingTime}
            </p>
            <Link
              to={a.path}
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Ler o artigo completo
            </Link>
          </article>
        ))}
      </section>

      <CtaSection
        title="Depois de ler, converse com um médico"
        text="Conteúdos educativos ajudam a compreender, mas cada situação é única. A secretária pode agendar sua teleconsulta."
      />
    </>
  );
}
