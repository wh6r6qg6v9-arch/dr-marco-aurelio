import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/site";

export function StickyCta() {
  return (
    <>
      {/* Mobile: barra fixa clara */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/98 p-3 shadow-lift backdrop-blur md:hidden">
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-13 w-full items-center justify-center gap-2.5 rounded-md bg-whatsapp px-4 py-3 text-base font-semibold text-whatsapp-foreground"
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          Agendar teleconsulta pelo WhatsApp
        </a>
      </div>

      {/* Desktop: botão discreto */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden min-h-12 items-center gap-2.5 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lift transition-colors hover:bg-whatsapp/90 md:inline-flex"
      >
        <MessageCircle aria-hidden="true" className="size-5" />
        Falar com a secretária
      </a>
    </>
  );
}
