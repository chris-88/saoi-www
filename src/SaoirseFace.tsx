export function SaoirseFace({ className = '' }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Saoirse"
      viewBox="0 0 64 72"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="40" r="24.5" stroke="currentColor" strokeWidth="15" />
      <circle cx="26" cy="37" r="3" fill="currentColor" />
      <circle cx="37" cy="37" r="3" fill="currentColor" />
      <path
        d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5V40H0V7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
