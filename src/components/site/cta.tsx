import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-md font-semibold tracking-tight transition-colors min-h-12 px-6 py-3 text-base";

export function WhatsAppCta({
  label = "Agendar teleconsulta pelo WhatsApp",
  variant = "primary",
  className,
}: {
  label?: string;
  variant?: "primary" | "outline" | "ink";
  className?: string;
}) {
  return (
    <a
      href={contact.whatsapp}
      target="_top"
      rel="noopener noreferrer"
      className={cn(
        base,
        variant === "primary" &&
          "bg-whatsapp text-whatsapp-foreground shadow-soft hover:bg-whatsapp/90",
        variant === "ink" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" &&
          "border-2 border-primary/25 bg-card text-primary hover:border-primary/60 hover:bg-accent",
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="size-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}

export function PhoneCta({ className }: { className?: string }) {
  return (
    <a
      href={`tel:${contact.phoneTel}`}
      className={cn(
        base,
        "border-2 border-primary/25 bg-card text-primary hover:border-primary/60 hover:bg-accent",
        className,
      )}
    >
      <Phone aria-hidden="true" className="size-5 shrink-0" />
      <span>Ligar para a secretária: {contact.phoneDisplay}</span>
    </a>
  );
}
