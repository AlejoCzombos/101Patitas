export default function AccordeonIcon({ className }: { className?: string }) {
  return (
    <span className={`transition group-open:rotate-180 ${className}`}>
      <svg
        fill="none"
        height="24"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </span>
  );
}
