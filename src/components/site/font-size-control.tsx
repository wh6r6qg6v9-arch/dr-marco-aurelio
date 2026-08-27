import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";

const SCALES = [100, 112.5, 125] as const;
const STORAGE_KEY = "mc-font-scale";

export function FontSizeControl() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stored = Number(window.localStorage.getItem(STORAGE_KEY));
    const found = SCALES.findIndex((s) => s === stored);
    if (found > 0) setIndex(found);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--app-font-scale", `${SCALES[index]}%`);
    window.localStorage.setItem(STORAGE_KEY, String(SCALES[index]));
  }, [index]);

  const btn =
    "inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-md border border-border bg-card px-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent disabled:opacity-40";

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Tamanho do texto">
      <span className="hidden text-xs font-semibold tracking-wide text-muted-foreground lg:inline">
        Texto
      </span>
      <button
        type="button"
        className={btn}
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        disabled={index === 0}
        aria-label="Diminuir tamanho do texto"
      >
        <Minus aria-hidden="true" className="size-3.5" />A
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => setIndex((i) => Math.min(SCALES.length - 1, i + 1))}
        disabled={index === SCALES.length - 1}
        aria-label="Aumentar tamanho do texto"
      >
        <Plus aria-hidden="true" className="size-3.5" />A
      </button>
    </div>
  );
}
