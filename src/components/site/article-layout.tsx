import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Breadcrumbs } from "./breadcrumbs";
import { EmergencyNotice } from "./notices";
import { WhatsAppCta } from "./cta";
import {
  absoluteUrl,
  articles,
  doctor,
  EDUCATIONAL_DISCLAIMER,
  type Article,
} from "@/lib/site";

export function ArticleLayout({
  article,
  children,
  sources,
}: {
  article: Article;
  children: ReactNode;
  sources: string[];
}) {
  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Conteúdos", to: "/conteudos" }, { label: article.title }]} />

      <article className="container-prose py-12 md:py-16">
        <ul className="flex flex-wrap gap-2" aria-label="Temas do artigo">
          {article.topics.map((t) => (
            <li
              key={t}
              className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <h1 className="mt-5 font-serif text-4xl text-primary md:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg text-foreground/90">{article.summary}</p>

        <div className="mt-6 border-y border-border py-4 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{doctor.name}</p>
          <p>
            {doctor.specialty} · {doctor.crm} · {doctor.rqe}
          </p>
          <p className="mt-1.5">
            Publicado em <time dateTime={article.publishedAt}>{article.publishedLabel}</time> ·
            Revisado em <time dateTime={article.reviewedAt}>{article.publishedLabel}</time> ·{" "}
            {article.readingTime}
          </p>
        </div>

        <div className="prose-article mt-8 text-foreground">{children}</div>

        <section className="mt-12" aria-labelledby="fontes">
          <h2 id="fontes" className="font-serif text-2xl text-primary">
            Referências gerais
          </h2>
          <ul className="mt-3 grid gap-2 text-[0.98rem] text-muted-foreground">
            {sources.map((s) => (
              <li key={s} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-slate-blue"
                />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <aside className="mt-10 rounded-md border-l-4 border-slate-blue/60 bg-muted/70 p-4">
          <p className="text-[0.98rem] text-foreground">{EDUCATIONAL_DISCLAIMER}</p>
        </aside>

        <EmergencyNotice className="mt-4" />

        <section className="mt-10 rounded-lg border-2 border-primary/15 bg-card p-6">
          <h2 className="font-serif text-2xl text-primary">
            Quer conversar sobre o seu caso com um cardiologista?
          </h2>
          <p className="mt-2.5 text-foreground">
            A secretária organiza o agendamento da sua teleconsulta e combina dia, horário e
            orientações administrativas.
          </p>
          <div className="mt-5">
            <WhatsAppCta className="w-full sm:w-auto" />
          </div>
        </section>

        <nav aria-label="Outros conteúdos" className="mt-12 border-t border-border pt-8">
          <h2 className="font-serif text-2xl text-primary">Continue lendo</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {others.map((a) => (
              <li key={a.slug} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-serif text-lg text-primary">{a.title}</h3>
                <Link
                  to={a.path}
                  className="mt-3 inline-flex min-h-11 items-center font-semibold text-slate-blue underline underline-offset-4"
                >
                  Ler este artigo
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/conteudos"
            className="mt-6 inline-flex min-h-12 items-center rounded-md border-2 border-primary/25 bg-card px-6 py-3 font-semibold text-primary hover:bg-accent"
          >
            Ver todos os conteúdos
          </Link>
        </nav>
      </article>
    </>
  );
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    url: absoluteUrl(article.path),
    mainEntityOfPage: absoluteUrl(article.path),
    datePublished: article.publishedAt,
    dateModified: article.reviewedAt,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: doctor.name,
      jobTitle: doctor.specialty,
    },
  };
}
