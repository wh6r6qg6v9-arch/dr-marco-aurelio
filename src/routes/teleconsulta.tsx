import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CtaSection } from "@/components/site/cta-section";
import {
  AdminChannelNotice,
  EmergencyNotice,
  InPersonNotice,
} from "@/components/site/notices";
import { WhatsAppCta } from "@/components/site/cta";
import { CredentialLine } from "@/components/site/identity";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/teleconsulta")({
  head: () => ({
    meta: [
      { title: "Teleconsulta cardiológica — Como funciona e como se preparar" },
      {
        name: "description",
        content:
          "O que é a teleconsulta cardiológica, para quem pode ser útil, como se preparar e quais situações exigem avaliação presencial ou atendimento de urgência.",
      },
      { property: "og:title", content: "Teleconsulta cardiológica — Dr. Marco Aurélio Santos Cordeiro" },
      {
        property: "og:description",
        content:
          "Consulta por vídeo com tempo para conversar, disponível para pacientes de diferentes regiões do Brasil. Agendamento pela secretária.",
      },
      { property: "og:url", content: absoluteUrl("/teleconsulta") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/teleconsulta") }],
  }),
  component: TeleconsultaPage,
});

function TeleconsultaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Teleconsulta" }]} />

      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">Teleconsulta</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl">
          Teleconsulta cardiológica, com tempo para conversar
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/90">
          A teleconsulta é um atendimento médico realizado por vídeo, em horário agendado. Ela está
          disponível para pacientes de diferentes regiões do Brasil e permite uma conversa detalhada
          sobre a sua história, seus exames já realizados e suas dúvidas.
        </p>
        <CredentialLine className="mt-5" />
        <div className="mt-8">
          <WhatsAppCta />
        </div>
      </section>

      <section className="container-page grid gap-5 pb-12 md:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="font-serif text-2xl text-primary">Para quem pode ser útil</h2>
          <ul className="mt-4 grid gap-2.5 text-foreground">
            {[
              "Pessoas que desejam uma avaliação cardiológica preventiva e uma conversa sobre risco cardiovascular.",
              "Quem já tem um diagnóstico cardiológico e quer compreender melhor o próprio tratamento.",
              "Quem recebeu resultados de exames e deseja entendê-los dentro do contexto clínico.",
              "Pessoas que moram longe de centros de referência e buscam uma segunda conversa cuidadosa.",
              "Familiares que acompanham o cuidado de alguém e precisam de orientação clara.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-terracotta"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="font-serif text-2xl text-primary">Como se preparar</h2>
          <ul className="mt-4 grid gap-2.5 text-foreground">
            {[
              "Escolha um lugar tranquilo, silencioso e com boa luz.",
              "Tenha por perto seus medicamentos, para falar sobre nomes e doses.",
              "Separe os exames que você já tem, para consultá-los durante a conversa.",
              "Anote suas principais dúvidas antes de começar, em ordem de importância.",
              "Se quiser, peça a um familiar para acompanhar a consulta com você.",
              "Reserve o horário sem compromissos em seguida, para conversar sem pressa.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-slate-blue"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/conteudos/como-se-preparar-teleconsulta"
            className="mt-5 inline-flex min-h-11 items-center font-semibold text-slate-blue underline underline-offset-4"
          >
            Ler o guia completo de preparação
          </Link>
        </article>
      </section>

      <section className="container-page pb-12">
        <div className="rounded-lg border border-border bg-muted/70 p-6 md:p-8">
          <h2 className="font-serif text-2xl text-primary md:text-3xl">
            Limites e adequação do atendimento a distância
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <p className="text-foreground">
              A adequação da teleconsulta para cada situação, assim como seus limites, é avaliada
              pelo médico durante o próprio atendimento. Em algumas situações, é necessário exame
              físico, exames complementares presenciais ou avaliação em serviço de urgência.
            </p>
            <p className="text-foreground">
              Quando isso acontecer, você receberá orientação clara sobre os próximos passos. Nenhum
              diagnóstico é feito pelo site, por mensagem ou fora do atendimento médico.
            </p>
          </div>
          <ul className="mt-5 grid gap-2.5 text-foreground">
            {[
              "Sintomas agudos e intensos exigem atendimento imediato, presencial.",
              "Procedimentos e exames não são realizados por teleconsulta.",
              "Situações que exigem exame físico detalhado podem demandar avaliação presencial.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-terracotta"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page grid gap-4 pb-14">
        <InPersonNotice />
        <AdminChannelNotice />
        <EmergencyNotice />
        <p className="text-[0.98rem] text-muted-foreground">
          O agendamento é feito exclusivamente com a secretária. Não é necessário — e não deve ser
          feito — o envio de documentos clínicos, exames ou informações de saúde por este canal.
        </p>
      </section>

      <CtaSection
        title="Pronto para agendar sua teleconsulta?"
        text="Fale com a secretária pelo WhatsApp ou por telefone para combinar dia, horário e orientações administrativas."
      />
    </>
  );
}
