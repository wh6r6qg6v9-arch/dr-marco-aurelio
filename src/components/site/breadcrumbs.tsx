import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="border-b border-border bg-muted/60">
      <div className="container-page flex flex-wrap items-center gap-1.5 py-3 text-sm">
        <Link to="/" className="text-slate-blue underline-offset-4 hover:underline">
          Início
        </Link>
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <ChevronRight aria-hidden="true" className="size-4 text-muted-foreground" />
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className="text-slate-blue underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
