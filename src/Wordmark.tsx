export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Saoi"
      viewBox="0 0 112 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <text
        x="38"
        y="23"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        Saoi
      </text>
    </svg>
  );
}
