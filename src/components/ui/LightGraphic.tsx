export function LightGraphic({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative min-h-32 overflow-hidden rounded-[1.5rem] border border-ink/8 bg-shell/45 ${className}`}
    >
      <svg className="absolute inset-0 h-full w-full text-moss/20" viewBox="0 0 420 180" fill="none">
        <path d="M18 128 C86 56 132 114 190 64 S312 50 390 118" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M42 148 C118 104 172 146 236 98 S330 78 402 132" stroke="currentColor" strokeWidth="2" strokeDasharray="2 12" />
      </svg>
      <span className="absolute left-[18%] top-[31%] size-3 rounded-full bg-clay/32" />
      <span className="absolute right-[23%] top-[38%] size-4 rounded-full bg-sage/34" />
      <span className="absolute bottom-[22%] left-[54%] size-2.5 rounded-full bg-harvest/48" />
    </div>
  );
}
