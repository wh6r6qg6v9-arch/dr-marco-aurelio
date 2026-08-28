import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout, articleJsonLd } from "@/components/site/article-layout";
import { absoluteUrl, articles } from "@/lib/site";

const article = articles.find((a) => a.slug === "colesterol-risco-cardiovascular")!;

export const Route = createFileRoute("/conteudos/colesterol-risco-cardiovascular")({
  head: () => ({
    meta: [
      { title: "Colesterol e risco cardiovascular — Além de um número isolado" },
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
        "Diretrizes da Sociedade Brasileira de Cardiologia sobre dislipidemias e prevenção cardiovascular.",
        "Materiais educativos do Ministério da Saúde sobre fatores de risco cardiovascular.",
        "Diretrizes científicas internacionais contemporâneas sobre manejo de lipídios.",
      ]}
    >
      <p>
        Poucos exames geram tanta ansiedade quanto o do colesterol. É comum que uma pessoa receba o
        resultado, procure o valor de referência ao lado do número e conclua sozinha que algo está
        errado — ou que está tudo bem. Na prática clínica, o raciocínio é diferente: o colesterol é
        uma peça importante dentro de um quadro maior.
      </p>

      <h2>O que o exame mostra</h2>
      <p>
        O perfil lipídico costuma trazer vários componentes. O colesterol total é a soma de frações
        diferentes, e não a informação mais útil isoladamente. O LDL-colesterol está diretamente
        relacionado ao processo de formação de placas nas artérias, a aterosclerose. O
        HDL-colesterol tem outro comportamento, e valores mais altos não funcionam como proteção
        garantida. Os triglicerídeos variam muito com alimentação, álcool, peso e controle do açúcar
        no sangue.
      </p>
      <p>
        Existem também outras medidas usadas em situações específicas, como o colesterol não-HDL. A
        escolha do que acompanhar depende do contexto de cada pessoa.
      </p>

      <h2>Por que um número isolado explica pouco</h2>
      <p>
        A mesma dosagem de LDL pode significar coisas muito diferentes em duas pessoas. Considere o
        que entra na interpretação:
      </p>
      <ul>
        <li>idade e sexo;</li>
        <li>pressão arterial e seu controle;</li>
        <li>presença de diabetes ou pré-diabetes;</li>
        <li>tabagismo, atual ou passado;</li>
        <li>história familiar de doença cardiovascular precoce;</li>
        <li>doença renal e outras condições associadas;</li>
        <li>se já houve infarto, derrame ou colocação de stent;</li>
        <li>exames de imagem que possam mostrar aterosclerose já presente.</li>
      </ul>
      <p>
        É por isso que a cardiologia trabalha com <strong>risco</strong>: a probabilidade de um evento
        cardiovascular ocorrer em determinado período. O colesterol entra nesse cálculo, mas não o
        determina sozinho.
      </p>

      <h2>Risco não é destino</h2>
      <p>
        Uma estimativa de risco não é uma previsão sobre a sua vida. Ela descreve o que acontece, em
        média, com pessoas que compartilham um conjunto de características. Duas pessoas com o mesmo
        risco estimado podem ter desfechos completamente diferentes.
      </p>
      <p>
        Esse é um ponto delicado e frequentemente mal comunicado. Falar em probabilidade não é
        relativizar o problema; é dizer a verdade sobre o que a ciência consegue e o que não consegue
        afirmar. Compreender isso ajuda a tomar decisões mais tranquilas e menos guiadas pelo medo.
      </p>

      <h2>O que costuma ser discutido em consulta</h2>
      <p>
        Em uma conversa sobre colesterol, geralmente se examinam três frentes, sem que nenhuma
        substitua as outras: os hábitos de vida, que envolvem alimentação, atividade física, sono,
        álcool e tabaco; o controle de condições associadas, como pressão arterial e glicemia; e a
        possibilidade de tratamento medicamentoso, quando o risco estimado e o quadro clínico
        indicam benefício.
      </p>
      <p>
        Cada uma dessas frentes tem benefícios esperados e possíveis inconvenientes. A escolha entre
        elas não é automática nem definida por um número: é uma decisão compartilhada, que considera
        suas preferências, suas prioridades e o que você está disposto a fazer no dia a dia.
      </p>

      <h3>Quando repetir o exame</h3>
      <p>
        A frequência do acompanhamento depende do quadro individual, de mudanças de tratamento e de
        alterações no peso ou na saúde geral. Não existe intervalo único válido para todos, e repetir
        um exame sem uma pergunta clara por trás raramente ajuda.
      </p>

      <h2>Casos que merecem atenção especial</h2>
      <p>
        Valores muito elevados de colesterol, sobretudo quando surgem em idade jovem ou se repetem em
        vários familiares, levantam a possibilidade de causas de origem familiar. Esse cenário exige
        avaliação médica específica, porque muda tanto a investigação quanto o acompanhamento
        recomendado.
      </p>

      <h2>O que este texto não pode fazer</h2>
      <p>
        Ele não pode dizer se o seu colesterol está adequado, se você precisa de medicamento ou se
        deve interromper algum tratamento em uso. Nenhuma decisão sobre medicação deve ser tomada a
        partir de um artigo. O caminho seguro é levar seus exames e suas dúvidas para uma consulta,
        onde eles podem ser lidos junto com a sua história.
      </p>
    </ArticleLayout>
  );
}
