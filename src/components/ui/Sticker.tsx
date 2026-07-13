type StickerProps = {
  children: React.ReactNode;
  rotate?: number;
  color?: "volt" | "signal" | "sky" | "shell";
  className?: string;
};

const colors = {
  volt: "bg-volt text-ink",
  signal: "bg-signal text-ink",
  sky: "bg-sky text-ink",
  shell: "bg-shell text-ink",
};

export function Sticker({
  children,
  rotate = -3,
  color = "volt",
  className = "",
}: StickerProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border-2 border-ink px-2.5 py-1 mono-tag shadow-[2px_2px_0_0_var(--color-ink)] ${colors[color]} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {children}
    </span>
  );
}
