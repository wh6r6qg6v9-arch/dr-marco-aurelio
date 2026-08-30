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
import { pageJsonLd, schemaIds } from "@/lib/schema";

export const Route = createFileRoute("/teleconsulta")({
  head: () => ({
    meta: [
      { title: "Cardiologista online para Anápolis | Dr. Marco Cordeiro" },
      {
        name: "description",
        content:
          "Entenda como funciona a teleconsulta com o cardiologista Dr. Marco Cordeiro, disponível para pacientes de Anápolis e de todo o Brasil.",
      },
      {
        property: "og:title",
        content: "Cardiologista online para Anápolis — Dr. Marco Cordeiro",
      },
      {
        property: "og:description",
        content:
          "Consulta cardiológica por vídeo para pacientes de Anápolis e de todo o Brasil. Agendamento pela secretária.",
      },
      { property: "og:url", content: absoluteUrl("/teleconsulta") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/teleconsulta") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          pageJsonLd({
            path: "/teleconsulta",
            type: "MedicalWebPage",
            name: "Cardiologista online para Anápolis — Teleconsulta cardiológica",
            description:
              "Atendimento cardiológico por vídeo para pacientes de Anápolis, Goiás e de outras regiões do Brasil, com agendamento pela secretária.",
            mainEntityId: schemaIds.teleconsultation,
            breadcrumbs: [
              { name: "Início", path: "/" },
              { name: "Teleconsulta", path: "/teleconsulta" },
            ],
          }),
        ),
      },
    ],
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
          Teleconsulta com cardiologista para pacientes de Anápolis e de todo o Brasil
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/90">
          Com uma trajetória profissional ligada a Anápolis, o Dr. Marco oferece atualmente
          atendimento cardiológico por vídeo para pacientes da cidade e de outras regiões do Brasil.
          A consulta acontece em horário agendado e permite uma conversa detalhada sobre sua história,
          seus exames já realizados e suas dúvidas.
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
