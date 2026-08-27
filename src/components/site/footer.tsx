import { Link } from "@tanstack/react-router";
import { AlertTriangle, MessageCircle, Phone } from "lucide-react";
import { contact, doctor, EDUCATIONAL_DISCLAIMER, EMERGENCY_TEXT, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-8 border-t-4 border-terracotta/70 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-2">
          <p className="font-serif text-xl leading-tight">{doctor.name}</p>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary-foreground/70">
            {doctor.role}
          </p>
          <p className="text-primary-foreground/90">{doctor.specialty}</p>
          <p className="text-sm text-primary-foreground/75">
            {doctor.crm} · {doctor.rqe}
          </p>
          <p className="pt-2 text-sm text-primary-foreground/80">
            Teleconsultas para pacientes de diferentes regiões do Brasil.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-serif text-lg">Navegação</h2>
          <ul className="mt-3 grid gap-1">
            {[...nav, { to: "/privacidade", label: "Política de privacidade" }].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex min-h-10 items-center text-primary-foreground/90 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <h2 className="font-serif text-lg">Agendamento</h2>
          <p className="text-sm text-primary-foreground/80">
            Atendimento administrativo com a secretária.
          </p>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Falar com a secretária
          </a>
          <p>
            <a
              href={`tel:${contact.phoneTel}`}
              className="inline-flex min-h-10 items-center gap-2 text-primary-foreground underline underline-offset-4"
            >
              <Phone aria-hidden="true" className="size-4" />
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      <div className="container-page space-y-4 border-t border-primary-foreground/15 py-8 text-sm text-primary-foreground/80">
        <p className="flex gap-3 rounded-md border border-terracotta/50 bg-terracotta/15 p-4 text-primary-foreground">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-terracotta" />
          <span>
            <strong className="font-semibold">Emergência:</strong> {EMERGENCY_TEXT} O WhatsApp da
            secretária não é canal de emergência.
          </span>
        </p>
        <p>{EDUCATIONAL_DISCLAIMER}</p>
        <p>
          © {new Date().getFullYear()} {doctor.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
