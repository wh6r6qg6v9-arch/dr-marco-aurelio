import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  getStoredAnalyticsConsent,
  OPEN_COOKIE_PREFERENCES_EVENT,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(getStoredAnalyticsConsent() === null);

    const openPreferences = () => setIsOpen(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
  }, []);

  function choose(choice: AnalyticsConsent) {
    setIsOpen(false);
    setAnalyticsConsent(choice);
  }

  if (!isOpen) return null;

  return (
    <section
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-24 left-3 right-3 z-60 rounded-lg border border-border bg-card p-5 shadow-lift md:bottom-6 md:left-6 md:right-auto md:max-w-xl"
    >
      <h2 id="cookie-consent-title" className="font-serif text-xl text-primary">
        Medição de audiência
      </h2>
      <p id="cookie-consent-description" className="mt-2 text-sm text-muted-foreground">
        Com sua autorização, usamos o Google Analytics para entender quais páginas são mais úteis.
        Não usamos essas informações para publicidade nem coletamos dados clínicos pelo site.
      </p>
      <Link
        to="/privacidade"
        className="mt-2 inline-flex min-h-10 items-center text-sm font-semibold text-slate-blue underline underline-offset-4"
      >
        Ler a política de privacidade
      </Link>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="min-h-12 rounded-md border-2 border-primary/25 bg-card px-4 py-3 font-semibold text-primary hover:bg-accent"
        >
          Recusar métricas
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="min-h-12 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Aceitar métricas
        </button>
      </div>
    </section>
  );
}
