export function BazWordmark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 194 72" role="img" aria-label="Saoirse" className={className}>
      {/* b */}
      <circle cx="32" cy="40" r="24.5" fill="none" stroke="currentColor" strokeWidth="15" />
      <circle cx="26" cy="37" r="3" fill="currentColor" />
      <circle cx="37" cy="37" r="3" fill="currentColor" />
      <path
        d="M0 7.5C0 3.35786 3.35786 0 7.5 0V0C11.6421 0 15 3.35786 15 7.5V40H0V7.5Z"
        fill="currentColor"
      />

      {/* a */}
      <circle cx="101" cy="40" r="24.5" fill="none" stroke="currentColor" strokeWidth="15" />
      <path
        d="M133 64.5C133 68.6421 129.642 72 125.5 72V72C121.358 72 118 68.6421 118 64.5L118 38L133 38L133 64.5Z"
        fill="currentColor"
      />

      {/* z */}
      <path
        d="M145.5 23C141.358 23 138 19.6421 138 15.5V15.5C138 11.3579 141.358 8 145.5 8L187 8L187 23L145.5 23Z"
        fill="currentColor"
      />
      <path d="M145 65L187 15" stroke="currentColor" strokeWidth="14.8" />
      <path
        d="M186.5 57C190.642 57 194 60.3579 194 64.5V64.5C194 68.6421 190.642 72 186.5 72L146 72L146 57L186.5 57Z"
        fill="currentColor"
      />
      <circle cx="186.5" cy="15.5" r="7.5" fill="currentColor" />
      <circle cx="145.5" cy="64.5" r="7.5" fill="currentColor" />
    </svg>
  );
}
