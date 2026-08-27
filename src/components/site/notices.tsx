import { AlertTriangle, Info, Video } from "lucide-react";
import { EMERGENCY_TEXT, IN_PERSON_NOTICE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function EmergencyNotice({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Aviso de emergência"
      className={cn(
        "flex gap-3 rounded-md border-l-4 border-terracotta bg-terracotta/8 p-4 text-foreground",
        className,
      )}
    >
      <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-terracotta" />
      <p className="text-[0.98rem]">
        <strong className="font-semibold">Em caso de emergência:</strong> {EMERGENCY_TEXT}
      </p>
    </aside>
  );
}

export function InPersonNotice({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Situação atual do atendimento"
      className={cn("flex gap-3 rounded-md border border-border bg-card p-4", className)}
    >
      <Video aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-slate-blue" />
      <p className="text-[0.98rem] text-foreground">{IN_PERSON_NOTICE}</p>
    </aside>
  );
}

export function AdminChannelNotice({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Uso do canal administrativo"
      className={cn("flex gap-3 rounded-md border border-border bg-muted p-4", className)}
    >
      <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-slate-blue" />
      <p className="text-[0.98rem] text-foreground">
        <strong className="font-semibold">Este canal é exclusivamente administrativo.</strong> Não
        envie sintomas, diagnósticos, exames, receitas, fotografias ou outras informações médicas.
      </p>
    </aside>
  );
}
