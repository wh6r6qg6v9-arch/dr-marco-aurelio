import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout, articleJsonLd } from "@/components/site/article-layout";
import { articles } from "@/lib/site";

const article = articles.find((a) => a.slug === "quando-procurar-cardiologista")!;

export const Route = createFileRoute("/conteudos/quando-procurar-cardiologista")({
  head: () => ({
    meta: [
      { title: "Quando procurar um cardiologista? — Conteúdo educativo" },
      { name: "description", content: article.summary },
      { property: "og:title", content: article.title },
      { property: "og:description", content: article.summary },
      { property: "og:type", content: "article" },
      { property: "og:url", content: article.path },
    ],
    links: [{ rel: "canonical", href: article.path }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(articleJsonLd(article)) }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <ArticleLayout
      article={article}
      sources={[
        "Diretrizes e materiais educativos da Sociedade Brasileira de Cardiologia (SBC).",
        "Materiais de educação em saúde do Ministério da Saúde do Brasil.",
        "Diretrizes científicas contemporâneas sobre prevenção e avaliação cardiovascular.",
      ]}
    >
      <p>
        Uma dúvida comum é saber o momento certo de procurar um cardiologista. Muitas pessoas esperam
        um sintoma marcante para buscar avaliação, enquanto outras chegam ao consultório preocupadas
        com um exame isolado. Nos dois casos, o que ajuda é entender que a cardiologia trabalha tanto
        com sintomas quanto com risco — e que uma conversa cuidadosa é o ponto de partida.
      </p>

      <h2>Situações em que uma avaliação costuma ser recomendada</h2>
      <p>
        As orientações abaixo são gerais e educativas. Elas não substituem a avaliação de um médico,
        que considera a história completa de cada pessoa.
      </p>
      <ul>
        <li>
          <strong>Sintomas relacionados ao esforço:</strong> desconforto no peito, falta de ar
          desproporcional, cansaço novo ou piora da capacidade de fazer atividades que antes eram
          fáceis.
        </li>
        <li>
          <strong>Palpitações que incomodam:</strong> sensação de batimentos rápidos, irregulares ou
          muito fortes, especialmente quando acompanhadas de tontura.
        </li>
        <li>
          <strong>Pressão arterial alterada:</strong> medidas repetidamente elevadas, ou dificuldade
          para manter a pressão sob controle com o tratamento em uso.
        </li>
        <li>
          <strong>Exames alterados:</strong> colesterol elevado, glicemia alterada,
          eletrocardiograma com achados a esclarecer, ou exames de imagem com laudos que geraram
          dúvida.
        </li>
        <li>
          <strong>História familiar:</strong> parentes de primeiro grau com infarto, morte súbita ou
          doença cardíaca em idade jovem.
        </li>
        <li>
          <strong>Doença cardíaca já diagnosticada:</strong> acompanhamento periódico e revisão do
          tratamento.
        </li>
        <li>
          <strong>Antes de iniciar exercícios mais intensos:</strong> especialmente com fatores de
          risco presentes ou após período longo de inatividade.
        </li>
        <li>
          <strong>Durante ou após tratamento oncológico:</strong> alguns tratamentos exigem atenção
          cardiovascular específica.
        </li>
      </ul>

      <h2>A diferença entre urgência e acompanhamento</h2>
      <p>
        Essa distinção é importante e costuma gerar confusão. Consultas — presenciais ou por vídeo —
        são adequadas para investigação, acompanhamento e revisão de tratamento. Elas não são o
        caminho para situações agudas.
      </p>
      <p>
        <strong>
          Dor súbita ou intensa no peito, falta de ar importante, desmaio ou outros sinais de
          emergência exigem atendimento imediato. Procure um serviço de urgência ou ligue para o SAMU
          192.
        </strong>
      </p>

      <h2>O que esperar de uma primeira consulta</h2>
      <p>
        Boa parte do tempo de uma primeira consulta é dedicada a ouvir. Antes de qualquer exame, é a
        história que orienta o raciocínio: quando os sintomas começaram, em que circunstâncias
        aparecem, o que os melhora, quais medicamentos estão em uso, como é a rotina, o sono, o
        trabalho e o contexto de vida.
      </p>
      <p>
        A partir dessa conversa, o médico organiza as hipóteses mais prováveis e discute com você o
        que faz sentido investigar. Nem toda dúvida termina com um pedido de exame, e nem todo exame
        alterado significa doença. Muitas vezes o resultado mais útil de uma consulta é entender que
        a probabilidade de um problema grave é baixa — e por quê.
      </p>

      <h3>Perguntas que ajudam você a se preparar</h3>
      <ul>
        <li>Qual é o sintoma ou preocupação que mais me incomoda hoje?</li>
        <li>Quando isso começou e o que mudou desde então?</li>
        <li>Quais medicamentos eu uso, em que doses?</li>
        <li>Quais exames eu já fiz e onde estão os resultados?</li>
        <li>Há doenças cardíacas na minha família?</li>
      </ul>

      <h2>Prevenção não é apenas para quem tem sintomas</h2>
      <p>
        A maior parte das doenças cardiovasculares se desenvolve silenciosamente ao longo de anos.
        Por isso, uma avaliação preventiva costuma ser útil mesmo na ausência de sintomas,
        especialmente a partir da meia-idade ou quando existem fatores de risco. O objetivo não é
        criar preocupação, mas conhecer o próprio cenário com clareza e decidir, em conjunto, o que
        vale a pena fazer.
      </p>

      <h2>Um cuidado com a informação</h2>
      <p>
        Nenhum texto — inclusive este — é capaz de dizer se você precisa ou não de tratamento. A
        interpretação de sintomas e exames depende do conjunto: sua idade, seus antecedentes, seus
        outros exames, seus medicamentos e o que é importante para você. É exatamente esse conjunto
        que uma consulta procura reunir.
      </p>
    </ArticleLayout>
  );
}
