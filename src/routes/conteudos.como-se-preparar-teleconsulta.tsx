import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/site/article-layout";
import { absoluteUrl, articles } from "@/lib/site";
import { articleJsonLd } from "@/lib/schema";

const article = articles.find((a) => a.slug === "como-se-preparar-teleconsulta")!;

export const Route = createFileRoute("/conteudos/como-se-preparar-teleconsulta")({
  head: () => ({
    meta: [
      { title: "Como se preparar para uma teleconsulta cardiológica" },
      { name: "description", content: article.summary },
      { property: "og:title", content: article.title },
      { property: "og:description", content: article.summary },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl(article.path) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(article.path) }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(articleJsonLd(article)) }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <ArticleLayout
      article={article}
      sources={[
        "Materiais educativos do Ministério da Saúde sobre telessaúde e cuidado em saúde.",
        "Orientações institucionais sobre telemedicina e segurança do paciente.",
        "Diretrizes científicas contemporâneas sobre acompanhamento cardiovascular.",
      ]}
    >
      <p>
        A teleconsulta permite conversar com o cardiologista sem precisar se deslocar. Uma preparação
        simples ajuda a aproveitar melhor esse tempo, especialmente quando a consulta envolve revisão
        de exames, medicamentos ou acompanhamento de uma condição já conhecida.
      </p>

      <h2>Escolha um lugar tranquilo</h2>
      <p>
        Procure um ambiente silencioso, iluminado e com alguma privacidade. Apoie o celular ou o
        computador em uma superfície estável e, se possível, use uma conexão de internet conhecida.
        Fones de ouvido podem facilitar a conversa, mas não são obrigatórios.
      </p>
      <p>
        Entre no link alguns minutos antes do horário combinado. Isso dá tempo para conferir o som,
        a câmera e a bateria do aparelho sem pressa.
      </p>

      <h2>Organize as informações que deseja discutir</h2>
      <p>
        Antes da consulta, anote em poucas linhas o motivo principal do encontro e as dúvidas que não
        quer esquecer. Também pode ser útil ter por perto uma lista atualizada dos medicamentos, com
        os nomes, as doses e os horários em que são usados.
      </p>
      <ul>
        <li>Quando começou a preocupação ou mudança que motivou a consulta?</li>
        <li>O que mudou desde a última avaliação?</li>
        <li>Quais medicamentos e suplementos estão em uso?</li>
        <li>Quais decisões ou orientações você gostaria de compreender melhor?</li>
      </ul>

      <h2>Separe exames e registros relevantes</h2>
      <p>
        Se houver exames anteriores, deixe-os organizados para consulta durante a conversa. A equipe
        informará de forma segura como disponibilizá-los quando isso for necessário. O WhatsApp da
        secretária é exclusivamente administrativo e não deve receber exames, receitas, fotografias
        ou outras informações médicas.
      </p>
      <p>
        Registros de pressão arterial ou frequência cardíaca podem ser úteis quando foram medidos de
        forma orientada. Não é necessário realizar novas medições ou comprar equipamentos apenas por
        causa da teleconsulta.
      </p>

      <h2>Peça ajuda se precisar</h2>
      <p>
        Um familiar ou cuidador pode ajudar a abrir o link, ajustar o aparelho ou acompanhar a
        conversa, desde que você concorde com sua presença. Essa ajuda costuma ser especialmente útil
        para pessoas com pouca familiaridade com chamadas de vídeo.
      </p>

      <h2>O que acontece durante a consulta</h2>
      <p>
        A conversa começa pela sua história e pelo contexto atual. O médico pode revisar informações,
        explicar hipóteses e discutir próximos passos. Dependendo da situação, pode recomendar exames
        ou uma avaliação presencial. A adequação e os limites da teleconsulta são avaliados em cada
        caso.
      </p>

      <h2>Teleconsulta não é atendimento de emergência</h2>
      <p>
        <strong>
          Dor súbita ou intensa no peito, falta de ar importante, desmaio ou outros sinais de
          emergência exigem atendimento imediato. Procure um serviço de urgência ou ligue para o
          SAMU 192.
        </strong>
      </p>
      <p>
        O WhatsApp da secretária serve apenas para agendamento e orientações administrativas. Ele não
        é monitorado como canal de urgência e não deve ser usado para solicitar diagnóstico ou
        orientação clínica.
      </p>
    </ArticleLayout>
  );
}
