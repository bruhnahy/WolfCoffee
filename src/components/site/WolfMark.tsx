export function WolfMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Símbolo da Wolf Coffee: cabeça de lobo com lua crescente"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12 L18 28 M50 12 L46 28" />
      <path d="M14 12 C22 16 26 22 26 28 M50 12 C42 16 38 22 38 28" />
      <path d="M12 30 C12 46 20 56 32 56 C44 56 52 46 52 30 C46 24 38 21 32 21 C26 21 18 24 12 30 Z" />
      <circle cx="24" cy="35" r="2" fill="currentColor" stroke="none" />
      <circle cx="40" cy="35" r="2" fill="currentColor" stroke="none" />
      <path d="M32 42 L29 45 M32 42 L35 45" />
      <path d="M32 40 c1.6 0 3-1.2 3-2.6 S33.6 35 32 35 s-3 1.1-3 2.4 S30.4 40 32 40 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
