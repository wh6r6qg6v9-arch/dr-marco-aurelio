import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { StickyCta } from "@/components/site/sticky-cta";
import { WhatsAppCta } from "@/components/site/cta";
import { physicianJsonLd, doctor } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="container-prose section-y text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
        Não encontramos esta página
      </h1>
      <p className="mt-4 text-muted-foreground">
        O endereço pode ter mudado ou sido digitado de outra forma. Você pode voltar ao início ou
        falar diretamente com a secretária para agendar uma teleconsulta.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Voltar para a página inicial
        </Link>
        <WhatsAppCta />
      </div>
      <div className="mt-10 border-t border-border pt-6 text-left">
        <h2 className="font-serif text-xl text-primary">Páginas principais</h2>
        <ul className="mt-3 grid gap-2">
          <li>
            <Link to="/teleconsulta" className="text-slate-blue underline underline-offset-4">
              Como funciona a teleconsulta
            </Link>
          </li>
          <li>
            <Link to="/areas-de-cuidado" className="text-slate-blue underline underline-offset-4">
              Áreas de cuidado
            </Link>
          </li>
          <li>
            <Link to="/conteudos" className="text-slate-blue underline underline-offset-4">
              Conteúdos educativos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="container-prose section-y text-center">
      <h1 className="font-serif text-3xl text-primary">Esta página não carregou</h1>
      <p className="mt-3 text-muted-foreground">
        Algo deu errado do nosso lado. Você pode tentar novamente ou voltar ao início.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Tentar novamente
        </button>
        <Link
          to="/"
          className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-primary/25 bg-card px-6 py-3 font-semibold text-primary hover:bg-accent"
        >
          Ir para o início
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${doctor.name} — Cardiologista | Teleconsulta` },
      { name: "description", content: doctor.tagline },
      { name: "author", content: doctor.name },
      { property: "og:site_name", content: doctor.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(physicianJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:font-semibold focus:text-primary-foreground"
      >
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" className="pb-24 md:pb-0">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <StickyCta />
    </QueryClientProvider>
  );
}
