import { contact } from "@/lib/site";
import { WhatsAppCta } from "./cta";
import { AdminChannelNotice } from "./notices";

export function CtaSection({
  title = "Vamos conversar com calma sobre a sua saúde do coração",
  text = "O agendamento é feito pela secretária, por WhatsApp ou telefone. Ela combina com você o dia, o horário e as orientações administrativas.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-y bg-primary text-primary-foreground">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <span className="rule-accent" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">{text}</p>
        </div>
        <div className="space-y-4">
          <WhatsAppCta className="w-full" />
          <a
            href={`tel:${contact.phoneTel}`}
            className="flex min-h-12 w-full items-center justify-center rounded-md border-2 border-primary-foreground/30 px-5 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
          >
            Ligar: {contact.phoneDisplay}
          </a>
          <AdminChannelNotice className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground [&_p]:text-primary-foreground" />
        </div>
      </div>
    </section>
  );
}
