import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { CredentialLine } from "@/components/site/identity";
import { CtaSection } from "@/components/site/cta-section";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/trajetoria")({
  head: () => ({
    meta: [
      { title: "Trajetória — Dr. Marco Aurélio Santos Cordeiro, Cardiologista" },
      {
        name: "description",
        content:
          "Formação em Medicina pela UFG, Clínica Médica no HC-FMUSP, Cardiologia no InCor, doutorado na FMUSP, pesquisa na Johns Hopkins, ensino e coordenação hospitalar.",
      },
      { property: "og:title", content: "Trajetória — Dr. Marco Aurélio Santos Cordeiro" },
      {
        property: "og:description",
        content:
          "Uma trajetória dedicada à ciência, ao ensino e ao cuidado: formação clínica, pesquisa em imagem cardiovascular, docência e gestão hospitalar.",
      },
      { property: "og:url", content: absoluteUrl("/trajetoria") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/trajetoria") }],
  }),
  component: TrajectoryPage,
});

type Chapter = {
  n: string;
  title: string;
  lead: string;
  milestones: string[];
  details?: { title: string; items: string[] };
};

const chapters: Chapter[] = [
  {
    n: "01",
    title: "Formação clínica no Brasil",
    lead: "A base da prática foi construída em escolas médicas de referência, com longa convivência hospitalar e contato diário com pacientes graves.",
    milestones: [
      "Medicina na Universidade Federal de Goiás (1989–1994)",
      "Residência em Clínica Médica no HC-FMUSP, concluída em 1998",
      "Residência em Cardiologia no InCor-HCFMUSP, concluída em 2000",
      "Título de especialista em Cardiologia pela SBC/AMB (2001)",
    ],
    details: {
      title: "Cursos complementares desse período",
      items: [
        "Preventive Cardiology and Lipid Disorders, Mayo Clinic (1997)",
        "ATLS e ACLS, Universidade de São Paulo (1998)",
      ],
    },
  },
  {
    n: "02",
    title: "Pesquisa e imagem cardiovascular",
    lead: "O doutorado aproximou a prática clínica do método científico, com foco em métodos de imagem para avaliar as artérias coronárias.",
    milestones: [
      "Doutorado na Faculdade de Medicina da USP (2001–2005)",
      "Orientação do Prof. Dr. Carlos Eduardo Rochitte",
      "Parte da pesquisa desenvolvida em período na Johns Hopkins",
    ],
    details: {
      title: "Tese de doutorado",
      items: [
        "“Angiografia coronária não-invasiva por meio de tomografia computadorizada: determinação da acurácia de sistema isotrópico com 32 colunas de detectores em pacientes com doença arterial coronariana avançada.”",
      ],
    },
  },
  {
    n: "03",
    title: "Experiência internacional",
    lead: "Anos de pesquisa e formação no exterior ampliaram o repertório em imagem cardiovascular e em métodos de ensino.",
    milestones: [
      "Postdoctoral Research Fellowship em Cardiologia e Tomografia Cardíaca, Johns Hopkins University School of Medicine (2003–2006), com apoio do NIH e do CNPq",
      "Fellowship em Ressonância Magnética Cardíaca, Duke University (2013)",
      "Problem-Based Learning, McMaster University (2006)",
      "Equivalência ao Mestrado Integrado em Medicina, Universidade de Lisboa",
    ],
  },
  {
    n: "04",
    title: "Atualização ampla e contínua",
    lead: "A formação segue em movimento, incluindo áreas em expansão como a cardio-oncologia e a análise crítica de dados.",
    milestones: [
      "Cardio-Oncologia pelo Instituto Nacional de Cardiologia (2021–2022), com formação vinculada à SBC",
      "Statistical Reasoning in Public Health I e II, e pesquisa e ética, Johns Hopkins (2004)",
      "MBA em Value Investing, UniBTA",
    ],
  },
  {
    n: "05",
    title: "Ensino e liderança acadêmica",
    lead: "A docência é parte central da trajetória, especialmente na formação do raciocínio clínico e científico de novos médicos.",
    milestones: [
      "Professor Titular na UniEVANGÉLICA desde 2007, docente fundador do curso",
      "Coordenador do Programa de Medicina Baseada em Evidências, Pensamento Probabilístico, Racionalidade Científica e Valor desde 2016",
      "Instrutor de BLS e ACLS desde 2011",
    ],
    details: {
      title: "Funções anteriores",
      items: [
        "Membro do Núcleo Docente Estruturante (NDE)",
        "Coordenador de planejamento do curso",
      ],
    },
  },
  {
    n: "06",
    title: "Hospital e gestão de serviços",
    lead: "A experiência hospitalar inclui terapia intensiva, imagem cardíaca e coordenação de programas de residência médica.",
    milestones: [
      "Diretor Clínico do Hospital Evangélico Goiano (HEG)",
      "Coordenador da Residência em Cardiologia do HEG desde 2011",
      "Coordenador do Serviço de Cardiologia, da COREME e do Núcleo de Ensino, Pesquisa e Extensão do Hospital Estadual de Anápolis",
    ],
    details: {
      title: "Funções anteriores",
      items: [
        "Coordenador de UTI cardiológica e de UTI geral adulta",
        "Coordenador do serviço de tomografia computadorizada cardíaca da Clínica da Imagem, Goiânia",
      ],
    },
  },
  {
    n: "07",
    title: "Ciência e trabalho editorial",
    lead: "A participação editorial em revistas científicas mantém o contato diário com a avaliação crítica da literatura.",
    milestones: [
      "Editor responsável da Revista Educação em Saúde",
      "Editor associado do Journal of Evidence-Based Healthcare",
      "Ex-diretor científico da Associação Médica de Anápolis",
    ],
  },
];

function TrajectoryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Trajetória" }]} />

      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">Trajetória</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-primary md:text-5xl">
          Uma trajetória dedicada à ciência, ao ensino e ao cuidado
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/90">
          Da formação clínica em hospitais universitários brasileiros à pesquisa em imagem
          cardiovascular nos Estados Unidos, e da sala de aula à coordenação de serviços
          hospitalares, esta é uma história de convivência longa com a ciência e com pessoas.
        </p>
        <CredentialLine className="mt-5" />
      </section>

      <div className="container-page pb-8">
        <ol className="grid gap-10">
          {chapters.map((c) => (
            <li key={c.n} className="grid gap-5 border-t border-border pt-8 md:grid-cols-[7rem_1fr]">
              <p aria-hidden="true" className="font-serif text-4xl text-terracotta/70">
                {c.n}
              </p>
              <div>
                <h2 className="font-serif text-2xl text-primary md:text-3xl">{c.title}</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">{c.lead}</p>
                <ul className="mt-5 grid gap-2.5">
                  {c.milestones.map((m) => (
                    <li key={m} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-terracotta"
                      />
                      <span className="text-foreground">{m}</span>
                    </li>
                  ))}
                </ul>
                {c.details && (
                  <Accordion type="single" collapsible className="mt-5 max-w-2xl">
                    <AccordionItem value="details" className="rounded-md border border-border px-4">
                      <AccordionTrigger className="text-base font-semibold text-primary">
                        {c.details.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="grid gap-2 pb-2">
                          {c.details.items.map((d) => (
                            <li key={d} className="text-muted-foreground">
                              {d}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <CtaSection
        title="Ciência e escuta na mesma consulta"
        text="Se você deseja uma avaliação cardiológica com tempo para conversar, a secretária pode organizar o agendamento da sua teleconsulta."
      />
    </>
  );
}
