import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { doctor, nav } from "@/lib/site";
import { FontSizeControl } from "./font-size-control";
import { WhatsAppCta } from "./cta";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <Link
          to="/"
          className="flex items-baseline gap-3 rounded-sm"
          aria-label={`${doctor.name}, página inicial`}
        >
          <span className="font-serif text-lg leading-tight text-primary md:text-xl">
            {doctor.name}
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <FontSizeControl />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-semibold text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="menu-principal"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
            Menu
          </button>
        </div>

        <div className="w-full border-t border-border/70 pt-2 text-sm text-muted-foreground lg:w-auto lg:border-0 lg:pt-0 lg:order-2 lg:basis-full">
          <p>
            <span className="font-semibold tracking-[0.16em] text-terracotta">{doctor.role}</span>
            <span aria-hidden="true"> · </span>
            {doctor.specialty}
            <span aria-hidden="true"> · </span>
            {doctor.crm}
            <span aria-hidden="true"> · </span>
            {doctor.rqe}
          </p>
        </div>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${open ? "block" : "hidden"} w-full lg:order-3 lg:block lg:basis-full`}
        >
          <ul className="flex flex-col gap-1 pb-3 lg:flex-row lg:flex-wrap lg:items-center lg:gap-1 lg:pb-1">
            {nav.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded-md px-3 text-base transition-colors hover:bg-accent ${
                      active
                        ? "bg-accent font-semibold text-primary"
                        : "font-medium text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 lg:ml-auto lg:mt-0">
              <WhatsAppCta
                label="Agendar pelo WhatsApp"
                className="w-full min-h-11 px-4 py-2 text-sm lg:w-auto"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
