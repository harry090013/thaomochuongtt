interface LotusMarkProps {
  className?: string;
}

export function LotusMark({ className = "w-7 h-7" }: LotusMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 10C27 19 25 28 32 42C39 28 37 19 32 10Z" fill="#6B4226" />
      <path d="M32 42C22 36 16 27 16 17C23 21 28 29 32 42Z" fill="#8C5932" />
      <path d="M32 42C42 36 48 27 48 17C41 21 36 29 32 42Z" fill="#8C5932" />
      <path d="M32 44C20 42 10 36 7 27C15 28 24 34 32 44Z" fill="#2F6443" />
      <path d="M32 44C44 42 54 36 57 27C49 28 40 34 32 44Z" fill="#2F6443" />
      <path d="M18 48C24 51 40 51 46 48C40 46 24 46 18 48Z" fill="#A67C2E" />
    </svg>
  );
}
