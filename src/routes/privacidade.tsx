import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { AdminChannelNotice, EmergencyNotice } from "@/components/site/notices";
import { absoluteUrl, contact, doctor } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade — Dr. Marco Aurélio Santos Cordeiro" },
      {
        name: "description",
        content:
          "Como este site trata informações: não há formulários, não há coleta de dados de saúde e o contato é feito diretamente com a secretária por WhatsApp ou telefone.",
      },
      { property: "og:title", content: "Política de privacidade" },
      {
        property: "og:description",
        content:
          "Este site não coleta dados de saúde e não possui formulários. Entenda como as informações são tratadas.",
      },
      { property: "og:url", content: absoluteUrl("/privacidade") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacidade") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Política de privacidade" }]} />

      <article className="container-prose py-12 md:py-16">
        <p className="eyebrow">Privacidade</p>
        <h1 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
          Política de privacidade
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: 26 de agosto de 2026
        </p>

        <div className="prose-article mt-8 text-foreground">
          <h2>Informações coletadas por este site</h2>
          <p>
            Este site é informativo e educativo. Ele não possui formulários de contato, área de
            login, cadastro de pacientes, envio de exames ou qualquer campo destinado à coleta de
            dados pessoais ou de saúde.
          </p>
          <p>
            A navegação pelas páginas não exige identificação. O site não solicita nome, documento,
            endereço, e-mail, histórico clínico, sintomas ou resultados de exames.
          </p>

          <h2>Contato pelo WhatsApp e telefone</h2>
          <p>
            Os botões de agendamento abrem uma conversa no WhatsApp com a secretária ou iniciam uma
            chamada telefônica. Essas comunicações acontecem nos aplicativos e serviços de telefonia
            que você já utiliza, sujeitos às políticas próprias dessas plataformas.
          </p>
          <p>
            O canal com a secretária é utilizado apenas para finalidades administrativas: verificar
            disponibilidade de agenda, combinar dia e horário e transmitir orientações
            administrativas.
          </p>

          <AdminChannelNotice className="my-8" />

          <h2>Dados tratados no atendimento médico</h2>
          <p>
            Informações clínicas são tratadas exclusivamente no contexto do atendimento médico, com
            as garantias legais de sigilo profissional previstas na legislação brasileira e no Código
            de Ética Médica. Esse tratamento não ocorre por meio deste site.
          </p>

          <h2>Cookies e medição de audiência</h2>
          <p>
            O site utiliza apenas o armazenamento local do seu navegador para lembrar preferências de
            acessibilidade, como o tamanho de texto escolhido nos botões A- e A+. Essa informação
            fica no seu próprio dispositivo e não é enviada a terceiros nem usada para identificar
            você.
          </p>

          <h2>Direitos do titular</h2>
          <p>
            Nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), você pode
            solicitar informações sobre o tratamento de dados pessoais relacionados ao atendimento.
            Para isso, entre em contato pelo telefone{" "}
            <a
              href={`tel:${contact.phoneTel}`}
              className="font-semibold text-primary underline underline-offset-4"
            >
              {contact.phoneDisplay}
            </a>
            .
          </p>

          <h2>Conteúdo educativo</h2>
          <p>
            Os textos publicados na seção de conteúdos têm finalidade educativa e não substituem uma
            consulta médica, não estabelecem relação médico-paciente e não constituem orientação
            individual.
          </p>

          <h2>Responsável</h2>
          <p>
            {doctor.name} — {doctor.specialty} — {doctor.crm} · {doctor.rqe}.
          </p>
        </div>

        <EmergencyNotice className="mt-10" />
      </article>
    </>
  );
}
