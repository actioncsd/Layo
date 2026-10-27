type AsteriscoProps = {
  semente: number;
  cor: string;
  className?: string;
};

export function Asterisco({ semente, cor, className = '' }: AsteriscoProps) {
  const filtro = `asterisco-${semente}`;

  return (
    <svg className={`spin-slow ${className}`} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <filter id={filtro}>
          <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves={2} seed={semente} />
          <feDisplacementMap in="SourceGraphic" scale={9} />
        </filter>
      </defs>
      <g filter={`url(#${filtro})`} stroke={cor} strokeWidth={22} strokeLinecap="round">
        <path d="M100 14 L100 186" />
        <path d="M28 56 L172 144" />
        <path d="M28 144 L172 56" />
        <path d="M60 22 L140 178" />
      </g>
    </svg>
  );
}
