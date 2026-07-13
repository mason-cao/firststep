type MarqueeProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  duration?: number;
};

export function Marquee({
  items,
  className = "",
  itemClassName = "",
  duration = 36,
}: MarqueeProps) {
  const list = [...items, ...items];

  return (
    <div
      className={`marquee ${className}`}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      aria-hidden="true"
    >
      {[0, 1].map((track) => (
        <div key={track} className="marquee-track">
          {list.map((item, index) => (
            <span
              key={`${track}-${index}`}
              className={`flex items-center whitespace-nowrap ${itemClassName}`}
            >
              <span>{item}</span>
              <span className="mx-[0.9em] text-[0.55em]">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
