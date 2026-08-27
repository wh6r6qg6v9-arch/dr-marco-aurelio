export function HeroArt() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative aspect-4/3 w-full overflow-hidden rounded-lg border border-border bg-card"
    >
      <svg viewBox="0 0 480 360" className="size-full" role="presentation">
        <defs>
          <linearGradient id="mc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.288 0.062 258)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="oklch(0.522 0.128 38)" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <rect width="480" height="360" fill="url(#mc-grad)" />

        {/* formas orgânicas discretas */}
        <circle cx="368" cy="96" r="86" fill="oklch(0.288 0.062 258)" opacity="0.07" />
        <circle cx="96" cy="286" r="60" fill="oklch(0.522 0.128 38)" opacity="0.09" />

        {/* linhas de ritmo */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="40"
            x2="440"
            y1={70 + i * 62}
            y2={70 + i * 62}
            stroke="oklch(0.598 0.036 250)"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ))}

        {/* traçado contínuo inspirado em ritmo e circulação */}
        <path
          className="animate-trace"
          d="M24 218 H118 l16-34 12 68 14-96 16 122 18-60 h44 l18-28 14 46 16-64 14 84 16-46 h96"
          fill="none"
          stroke="oklch(0.288 0.062 258)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M24 300 C 120 260, 190 330, 280 288 S 420 236, 456 262"
          fill="none"
          stroke="oklch(0.522 0.128 38)"
          strokeWidth="1.75"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
