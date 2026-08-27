import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import { EmergencyNotice, InPersonNotice } from "@/components/site/notices";
import { CredentialLine } from "@/components/site/identity";

export const Route = createFileRoute("/areas-de-cuidado")({
  head: () => ({
    meta: [
      { title: "Áreas de cuidado — Cardiologia clínica, prevenção e cardio-oncologia" },
      {
        name: "description",
        content:
          "Prevenção cardiovascular, colesterol, doença coronariana, insuficiência cardíaca, cardio-oncologia e revisão de exames em teleconsulta cardiológica.",
      },
      { property: "og:title", content: "Áreas de cuidado — Dr. Marco Aurélio Santos Cordeiro" },
      {
        property: "og:description",
        content:
          "Como a teleconsulta cardiológica pode ajudar em prevenção, colesterol, doença coronariana, insuficiência cardíaca e cardio-oncologia.",
      },
      { property: "og:url", content: "/areas-de-cuidado" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-cuidado" }],
  }),
  component: AreasPage,
});

const areas = [
  {
    title: "Cardiologia clínica e preventiva",
    text: "Avaliação geral da saúde do coração, revisão de antecedentes, sintomas, medicamentos em uso e hábitos de vida, com atenção à história completa da pessoa.",
    help: "A conversa permite organizar o que já foi investigado, identificar pontos que merecem atenção e definir, em conjunto, os próximos passos possíveis.",
  },
  {
    title: "Prevenção de doenças cardiovasculares",
    text: "Discussão sobre fatores que influenciam o risco ao longo do tempo, como pressão arterial, glicemia, colesterol, tabagismo, sono, atividade física e histórico familiar.",
    help: "É possível esclarecer o que cada fator representa no seu caso e quais medidas podem ser discutidas, sem promessas de resultado.",
  },
  {
    title: "Colesterol e distúrbios lipídicos",
    text: "Interpretação de exames de lipídios dentro do contexto clínico, incluindo situações de colesterol elevado de causa familiar.",
    help: "A teleconsulta pode ajudar a compreender o significado dos números, as opções de acompanhamento e as dúvidas sobre tratamentos.",
  },
  {
    title: "Avaliação de risco cardiovascular",
    text: "Uso de raciocínio probabilístico e de instrumentos reconhecidos para estimar risco, sempre com explicação sobre limites e incertezas.",
    help: "A estimativa é apresentada de forma compreensível, para apoiar decisões compartilhadas — não como previsão sobre o futuro.",
  },
  {
    title: "Doença arterial coronariana e aterosclerose",
    text: "Acompanhamento de pessoas com diagnóstico já estabelecido, revisão de exames prévios e discussão sobre sintomas e tratamentos.",
    help: "A conversa pode esclarecer o que os exames mostraram, o que ainda falta esclarecer e quando uma avaliação presencial ou complementar é indicada.",
  },
  {
    title: "Insuficiência cardíaca",
    text: "Orientação sobre acompanhamento clínico, entendimento do quadro, sinais de alerta e organização do tratamento em uso.",
    help: "É possível revisar em conjunto a compreensão da condição e as dúvidas do dia a dia, sempre respeitando os limites de uma avaliação a distância.",
  },
  {
    title: "Cardio-oncologia",
    text: "Atenção à saúde cardiovascular de pessoas em tratamento oncológico ou que já concluíram o tratamento, em diálogo com a equipe que acompanha o caso.",
    help: "A teleconsulta pode apoiar a compreensão dos cuidados cardiovasculares nesse contexto, de forma complementar ao acompanhamento oncológico.",
  },
  {
    title: "Revisão de exames e compreensão do tratamento",
    text: "Espaço para entender laudos, siglas e resultados já realizados, e para conversar sobre as razões de cada medicamento ou conduta.",
    help: "O objetivo é clareza: sair da consulta compreendendo o próprio quadro e o que foi decidido — não um novo diagnóstico automático.",
  },
  {
    title: "Experiência em imagem cardiovascular, emergências e terapia intensiva",
    text: "A trajetória inclui tomografia computadorizada cardíaca, ressonância magnética cardiovascular, emergências cardiológicas e terapia intensiva.",
    help: "Essa experiência contribui para a interpretação de exames já realizados. Exames e procedimentos não são realizados por teleconsulta e, quando indicados, são solicitados para execução presencial em serviço adequado.",
  },
  {
    title: "Medicina baseada em evidências, epidemiologia clínica e pensamento probabilístico",
    text: "Áreas de ensino e pesquisa que atravessam toda a prática: avaliar criticamente estudos, entender probabilidades e reconhecer incertezas.",
    help: "Na prática, isso significa explicações honestas sobre o que se sabe, o que é provável e o que permanece indefinido.",
  },
];

function AreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Áreas de cuidado" }]} />

      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">Áreas de cuidado</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl">
          Áreas de cuidado em cardiologia
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/90">
          A seguir, os temas mais frequentes nas teleconsultas, descritos em linguagem simples. Em
          todos eles, o ponto de partida é a sua história — e não apenas um resultado isolado.
        </p>
        <CredentialLine className="mt-5" />
      </section>

      <div className="container-page grid gap-5 pb-12 md:grid-cols-2">
        {areas.map((a) => (
          <article
            key={a.title}
            className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-soft"
          >
            <h2 className="font-serif text-2xl text-primary">{a.title}</h2>
            <p className="mt-3 text-muted-foreground">{a.text}</p>
            <div className="mt-5 rounded-md border-l-4 border-slate-blue/60 bg-muted/70 p-4">
              <h3 className="text-sm font-semibold tracking-wide text-primary">
                Como a teleconsulta pode ajudar
              </h3>
              <p className="mt-1.5 text-[0.98rem] text-foreground">{a.help}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="container-page grid gap-4 pb-14 md:grid-cols-2">
        <InPersonNotice />
        <EmergencyNotice />
      </section>

      <CtaSection
        title="Sua dúvida se encaixa em algum desses temas?"
        text="A secretária pode agendar uma teleconsulta para que você converse com o Dr. Marco com tempo e tranquilidade."
      />
    </>
  );
}
