import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send, CalendarCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PhoneCta, WhatsAppCta } from "@/components/site/cta";
import {
  AdminChannelNotice,
  EmergencyNotice,
  InPersonNotice,
} from "@/components/site/notices";
import { CredentialBlock } from "@/components/site/identity";
import { absoluteUrl, contact } from "@/lib/site";
import { pageJsonLd, schemaIds } from "@/lib/schema";

export const Route = createFileRoute("/agendamento")({
  head: () => ({
    meta: [
      { title: "Agendamento de teleconsulta — Falar com a secretária" },
      {
        name: "description",
        content:
          "Agende sua teleconsulta cardiológica em três passos simples pelo WhatsApp da secretária, ou ligue para (62) 98427-0577. Canal exclusivamente administrativo.",
      },
      { property: "og:title", content: "Agendamento de teleconsulta cardiológica" },
      {
        property: "og:description",
        content:
          "Três passos simples para agendar sua teleconsulta com o Dr. Marco Aurélio Santos Cordeiro pelo WhatsApp da secretária.",
      },
      { property: "og:url", content: absoluteUrl("/agendamento") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/agendamento") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          pageJsonLd({
            path: "/agendamento",
            name: "Agendamento de teleconsulta cardiológica",
            description:
              "Orientações administrativas para agendar uma teleconsulta com o Dr. Marco Aurélio Santos Cordeiro pela secretária.",
            mainEntityId: schemaIds.teleconsultation,
            breadcrumbs: [
              { name: "Início", path: "/" },
              { name: "Agendamento", path: "/agendamento" },
            ],
          }),
        ),
      },
    ],
  }),
  component: SchedulingPage,
});

const steps = [
  {
    icon: MessageCircle,
    n: "1",
    title: "Toque no botão do WhatsApp",
    text: "O botão abre uma conversa direta com a secretária no seu celular ou computador.",
  },
  {
    icon: Send,
    n: "2",
    title: "Envie a mensagem pronta para a secretária",
    text: "A mensagem já vem escrita. Basta enviar — não é preciso digitar nada.",
  },
  {
    icon: CalendarCheck,
    n: "3",
    title: "Combine dia, horário e orientações administrativas",
    text: "A secretária confirma o melhor horário e explica tudo o que você precisa saber antes da consulta.",
  },
];

function SchedulingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Agendamento" }]} />

      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">Agendamento</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl">
          Agendar teleconsulta pelo WhatsApp
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/90">
          O agendamento é feito pela secretária, de forma simples e sem formulários. São três passos.
        </p>
      </section>

      <section className="container-page pb-10" aria-labelledby="passos">
        <h2 id="passos" className="sr-only">
          Três passos para agendar
        </h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, n, title, text }) => (
            <li key={n} className="rounded-lg border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-14 items-center justify-center rounded-full bg-primary font-serif text-2xl text-primary-foreground"
                >
                  {n}
                </span>
                <Icon aria-hidden="true" className="size-7 text-terracotta" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-primary">
                <span className="sr-only">Passo {n}: </span>
                {title}
              </h3>
              <p className="mt-2.5 text-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-4 rounded-lg border-2 border-primary/15 bg-card p-6 md:p-8">
          <h2 className="font-serif text-2xl text-primary md:text-3xl">Contato da secretária</h2>
          <WhatsAppCta className="w-full text-lg md:w-auto" />
          <PhoneCta className="w-full text-base md:w-auto" />
          <p className="text-foreground">
            Telefone e WhatsApp:{" "}
            <a
              href={`tel:${contact.phoneTel}`}
              className="font-semibold text-primary underline underline-offset-4"
            >
              +55 (62) 98427-0577
            </a>
          </p>
          <AdminChannelNotice />
        </div>
      </section>

      <section className="container-page grid gap-4 pb-12 md:grid-cols-2">
        <InPersonNotice />
        <EmergencyNotice />
      </section>

      <section className="container-page pb-16">
        <div className="rounded-lg border border-border bg-muted/70 p-6">
          <h2 className="font-serif text-2xl text-primary">Atendimento</h2>
          <CredentialBlock className="mt-4" />
          <p className="mt-4 text-foreground">
            Teleconsultas para pacientes de diferentes regiões do Brasil, com tempo para conversar,
            compreender o contexto e explicar as decisões.
          </p>
          <p className="mt-3 text-[0.98rem] text-muted-foreground">
            Este site não coleta dados de saúde e não possui formulários de atendimento.
          </p>
        </div>
      </section>
    </>
  );
}
