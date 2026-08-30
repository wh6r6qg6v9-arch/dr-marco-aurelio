import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  Ear,
  HeartPulse,
  Handshake,
  Lightbulb,
  MessageCircle,
  Microscope,
  Stethoscope,
  Users,
  Waves,
} from "lucide-react";
import { CredentialBlock } from "@/components/site/identity";
import { HeroArt } from "@/components/site/hero-art";
import { WhatsAppCta } from "@/components/site/cta";
import { CtaSection } from "@/components/site/cta-section";
import { EmergencyNotice, InPersonNotice } from "@/components/site/notices";
import { absoluteUrl, articles, doctor } from "@/lib/site";
import { pageJsonLd } from "@/lib/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Marco Cordeiro — Cardiologista online para Anápolis" },
      {
        name: "description",
        content:
          "Teleconsulta com o cardiologista Dr. Marco Aurélio Santos Cordeiro para pacientes de Anápolis e de todo o Brasil. CRM-GO 7104 · RQE 4255.",
      },
      {
        property: "og:title",
        content: "Dr. Marco Cordeiro — Cardiologista online para Anápolis",
      },
      {
        property: "og:description",
        content:
          "Teleconsultas cardiológicas para pacientes de Anápolis e de todo o Brasil, com tempo para conversar e explicar decisões. CRM-GO 7104 · RQE 4255.",
      },
      { property: "og:url", content: absoluteUrl() },
    ],
    links: [{ rel: "canonical", href: absoluteUrl() }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          pageJsonLd({
            name: "Dr. Marco Aurélio Santos Cordeiro — Cardiologista online para Anápolis",
            description:
              "Teleconsulta cardiológica para pacientes de Anápolis, Goiás e de outras regiões do Brasil, com tempo para conversar e explicar decisões.",
          }),
        ),
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Ear,
    title: "Ouvir",
    text: "A consulta começa pela sua história, no seu tempo, sem interrupções desnecessárias.",
  },
  {
    icon: Users,
    title: "Contextualizar",
    text: "Sintomas, exames e antecedentes fazem sentido dentro da sua vida, rotina e prioridades.",
  },
  {
    icon: Lightbulb,
    title: "Explicar",
    text: "As informações são apresentadas em linguagem clara, incluindo o que ainda é incerto.",
  },
  {
    icon: Handshake,
    title: "Decidir em conjunto",
    text: "As condutas são discutidas com você, considerando seus valores e suas dúvidas.",
  },
];

const areas = [
  { icon: HeartPulse, title: "Prevenção e risco cardiovascular" },
  { icon: Activity, title: "Colesterol e hipertensão" },
  { icon: Waves, title: "Doença arterial coronariana" },
  { icon: Stethoscope, title: "Insuficiência cardíaca" },
  { icon: Microscope, title: "Cardio-oncologia" },
  { icon: BookOpen, title: "Revisão de exames e compreensão do tratamento" },
];

const milestones = [
  {
    period: "1989 – 2001",
    title: "Formação clínica no Brasil",
    text: "Medicina na UFG, Clínica Médica no HC-FMUSP, Cardiologia no InCor-HCFMUSP e título de especialista SBC/AMB.",
  },
  {
    period: "2001 – 2006",
    title: "Pesquisa e imagem cardiovascular",
    text: "Doutorado na FMUSP em tomografia coronária e pesquisa de pós-doutorado na Johns Hopkins University School of Medicine.",
  },
  {
    period: "2007 – hoje",
    title: "Ensino, hospital e medicina baseada em evidências",
    text: "Professor titular na UniEVANGÉLICA, coordenação de residência em Cardiologia e de programas de raciocínio científico e probabilístico.",
  },
];

const steps = [
  {
    n: "1",
    title: "Toque no botão do WhatsApp",
    text: "Você é levado direto para a conversa com a secretária, com a mensagem já escrita.",
  },
  {
    n: "2",
    title: "Combine dia e horário",
    text: "A secretária organiza a agenda e envia as orientações administrativas.",
  },
  {
    n: "3",
    title: "Converse com o Dr. Marco por vídeo",
    text: "No horário marcado, a consulta acontece por vídeo, de onde você estiver.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="rhythm-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-page relative grid gap-12 py-14 md:grid-cols-[1.15fr_1fr] md:items-center md:py-24">
          <div className="animate-rise">
            <CredentialBlock headingLevel="h1" />
            <p className="mt-8 max-w-xl font-serif text-3xl leading-tight text-primary md:text-[2.75rem]">
              {doctor.tagline}
            </p>
            <p className="mt-5 max-w-xl text-lg text-foreground/90">
              Com uma trajetória acadêmica e hospitalar construída também em Anápolis, o Dr. Marco
              realiza atualmente teleconsultas para pacientes da cidade e de diferentes regiões do
              Brasil, com tempo para conversar, compreender o contexto de cada pessoa e explicar as
              decisões tomadas em conjunto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppCta />
              <Link
                to="/teleconsulta"
                className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-primary/25 bg-card px-6 py-3 font-semibold text-primary hover:bg-accent"
              >
                Entender como funciona a teleconsulta
              </Link>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <div className="bg-primary py-3.5 text-center text-primary-foreground">
        <p className="container-page font-medium">Teleconsultas disponíveis em todo o Brasil</p>
      </div>

      <section className="section-y" aria-labelledby="pilares">
        <div className="container-page">
          <span className="rule-accent" aria-hidden="true" />
          <h2 id="pilares" className="mt-5 max-w-3xl font-serif text-3xl text-primary md:text-4xl">
            Uma consulta para compreender, não apenas prescrever
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Cada encontro é organizado em torno de quatro movimentos simples, que sustentam uma
            conversa cuidadosa e sem pressa.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="rounded-lg border border-border bg-card p-6 shadow-soft transition-colors hover:border-primary/30"
              >
                <Icon aria-hidden="true" className="size-7 text-terracotta" />
                <h3 className="mt-4 font-serif text-xl text-primary">{title}</h3>
                <p className="mt-2 text-[0.98rem] text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-muted/70" aria-labelledby="areas">
        <div className="container-page">
          <span className="rule-accent" aria-hidden="true" />
          <h2 id="areas" className="mt-5 font-serif text-3xl text-primary md:text-4xl">
            Áreas mais procuradas
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A teleconsulta é um espaço de avaliação, orientação e acompanhamento. Não existe
            diagnóstico automático ou instantâneo pela internet: cada situação exige conversa,
            análise da história e, quando necessário, exames ou avaliação presencial.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, title }) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
              >
                <Icon aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-slate-blue" />
                <span className="font-medium text-foreground">{title}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/areas-de-cuidado"
            className="mt-8 inline-flex min-h-12 items-center rounded-md border-2 border-primary/25 bg-card px-6 py-3 font-semibold text-primary hover:bg-accent"
          >
            Ver todas as áreas de cuidado
          </Link>
        </div>
      </section>

      <section className="section-y" aria-labelledby="trajetoria">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="rule-accent" aria-hidden="true" />
            <h2
              id="trajetoria"
              className="mt-5 font-serif text-3xl text-primary md:text-4xl"
            >
              Uma trajetória dedicada à ciência, ao ensino e ao cuidado
            </h2>
            <p className="mt-4 text-muted-foreground">
              Da formação clínica em São Paulo à pesquisa em imagem cardiovascular nos Estados
              Unidos, e do ensino universitário à coordenação de serviços hospitalares, a prática do
              Dr. Marco foi construída no encontro entre ciência e escuta.
            </p>
            <Link
              to="/trajetoria"
              className="mt-6 inline-flex min-h-12 items-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Conhecer a trajetória completa
            </Link>
          </div>
          <ol className="grid gap-5">
            {milestones.map((m) => (
              <li key={m.period} className="border-l-2 border-terracotta/60 pl-5">
                <p className="text-sm font-semibold tracking-wide text-terracotta">{m.period}</p>
                <h3 className="mt-1 font-serif text-xl text-primary">{m.title}</h3>
                <p className="mt-1.5 text-[0.98rem] text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-primary text-primary-foreground" aria-labelledby="mbe">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <span className="rule-accent" aria-hidden="true" />
            <h2 id="mbe" className="mt-5 font-serif text-3xl md:text-4xl">
              O que significa medicina baseada em evidências
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              É uma forma de tomar decisões em saúde combinando três coisas, sem que nenhuma delas
              decida sozinha.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              {
                t: "As melhores pesquisas disponíveis",
                d: "Estudos científicos avaliados de forma crítica, incluindo o que eles não conseguem responder.",
              },
              {
                t: "A experiência clínica",
                d: "Anos de prática em consultório, hospital, terapia intensiva e imagem cardiovascular.",
              },
              {
                t: "Suas preferências e seu contexto",
                d: "O que faz sentido para a sua vida, seus valores, sua rotina e suas prioridades.",
              },
            ].map((item) => (
              <li
                key={item.t}
                className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/8 p-5"
              >
                <h3 className="font-serif text-xl">{item.t}</h3>
                <p className="mt-1.5 text-[0.98rem] text-primary-foreground/85">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y" aria-labelledby="como-funciona">
        <div className="container-page">
          <span className="rule-accent" aria-hidden="true" />
          <h2 id="como-funciona" className="mt-5 font-serif text-3xl text-primary md:text-4xl">
            Como funciona a teleconsulta, em 3 passos
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-lg border border-border bg-card p-6 shadow-soft">
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-full bg-primary font-serif text-xl text-primary-foreground"
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-serif text-xl text-primary">
                  <span className="sr-only">Passo {s.n}: </span>
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.98rem] text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta />
            <Link
              to="/agendamento"
              className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-primary/25 bg-card px-6 py-3 font-semibold text-primary hover:bg-accent"
            >
              Ver os passos do agendamento
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-muted/70" aria-labelledby="conteudos-recentes">
        <div className="container-page">
          <span className="rule-accent" aria-hidden="true" />
          <h2
            id="conteudos-recentes"
            className="mt-5 font-serif text-3xl text-primary md:text-4xl"
          >
            Conteúdos educativos recentes
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {articles.map((a) => (
              <li key={a.slug} className="flex flex-col rounded-lg border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground">
                  {a.publishedLabel} · {a.readingTime}
                </p>
                <h3 className="mt-2 font-serif text-xl text-primary">{a.title}</h3>
                <p className="mt-2 flex-1 text-[0.98rem] text-muted-foreground">{a.summary}</p>
                <Link
                  to={a.path}
                  className="mt-4 inline-flex min-h-11 items-center font-semibold text-slate-blue underline underline-offset-4"
                >
                  Ler o artigo completo
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page grid gap-4 pb-14 pt-4 md:grid-cols-2">
        <InPersonNotice />
        <EmergencyNotice />
      </section>

      <CtaSection />

      <section className="container-page py-10">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageCircle aria-hidden="true" className="size-4" />
          Todos os contatos e agendamentos são feitos pela secretária.
        </p>
      </section>
    </>
  );
}
