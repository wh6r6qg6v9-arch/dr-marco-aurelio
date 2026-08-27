import { doctor } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CredentialBlock({
  className,
  headingLevel: Heading = "p",
}: {
  className?: string;
  headingLevel?: "p" | "h1" | "h2";
}) {
  return (
    <div className={cn("space-y-1", className)}>
      <Heading className="font-serif text-2xl leading-tight text-primary md:text-3xl">
        {doctor.name}
      </Heading>
      <p className="text-xs font-semibold tracking-[0.18em] text-terracotta">{doctor.role}</p>
      <p className="text-base font-medium text-foreground">{doctor.specialty}</p>
      <p className="text-sm text-muted-foreground">
        {doctor.crm} · {doctor.rqe}
      </p>
    </div>
  );
}

export function CredentialLine({ className }: { className?: string }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {doctor.specialty} · {doctor.crm} · {doctor.rqe}
    </p>
  );
}
