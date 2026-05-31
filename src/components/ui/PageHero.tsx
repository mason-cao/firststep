type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  motif?: "sun-step" | "path" | "person-step" | "frames" | "notes" | "map" | "envelope";
  children?: React.ReactNode;
};

type MotifIcon = {
  name: string;
  className: string;
};

function HeroMotif({ motif }: { motif: NonNullable<PageHeroProps["motif"]> }) {
  const placements: Record<NonNullable<PageHeroProps["motif"]>, string> = {
    "sun-step": "right-[-0.5rem] top-[-2.1rem] w-[min(27vw,22rem)]",
    path: "right-[-0.25rem] top-[-1.75rem] w-[min(27vw,22rem)]",
    "person-step": "right-[-0.45rem] top-[-2rem] w-[min(27vw,22rem)]",
    frames: "right-[-0.6rem] top-[-1.75rem] w-[min(26vw,21rem)]",
    notes: "right-[-0.6rem] top-[-1.8rem] w-[min(26vw,21rem)]",
    map: "right-[-0.65rem] top-[-1.75rem] w-[min(26vw,21rem)]",
    envelope: "right-[-0.5rem] top-[-1.7rem] w-[min(26vw,21rem)]",
  };
  const icons: Record<NonNullable<PageHeroProps["motif"]>, MotifIcon[]> = {
    "sun-step": [
      { name: "wb_sunny", className: "right-1 top-0 size-28 opacity-50" },
      { name: "directions_walk", className: "left-10 top-16 size-36 opacity-70" },
      { name: "arrow_forward", className: "right-14 bottom-5 size-14 opacity-35" },
    ],
    path: [
      { name: "location_on", className: "left-7 top-6 size-32 opacity-70" },
      { name: "route", className: "left-24 top-14 size-24 opacity-35" },
      { name: "flag", className: "right-5 top-10 size-28 opacity-65" },
    ],
    "person-step": [
      { name: "directions_walk", className: "left-12 top-3 size-40 opacity-70" },
      { name: "groups", className: "right-2 top-14 size-24 opacity-35" },
      { name: "arrow_forward", className: "right-20 bottom-2 size-16 opacity-35" },
    ],
    frames: [
      { name: "photo_library", className: "left-8 top-8 size-40 opacity-70" },
      { name: "image", className: "right-4 top-[4.5rem] size-[7.5rem] opacity-45" },
    ],
    notes: [
      { name: "article", className: "left-10 top-3 size-40 opacity-70" },
      { name: "checklist", className: "right-5 top-20 size-24 opacity-48" },
      { name: "edit", className: "right-2 top-3 size-[4.5rem] opacity-55" },
    ],
    map: [
      { name: "map", className: "left-8 top-8 size-40 opacity-70" },
      { name: "location_on", className: "right-7 top-16 size-24 opacity-50" },
      { name: "explore", className: "left-0 top-1 size-16 opacity-35" },
    ],
    envelope: [
      { name: "mail", className: "left-7 top-[4.5rem] size-40 opacity-70" },
      { name: "send", className: "right-4 top-5 size-20 opacity-48" },
    ],
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden lg:block ${placements[motif]}`}
    >
      <div className="relative aspect-[1.46] text-ink">
        {icons[motif].map((icon) => (
          // Google Material Symbols are external decorative SVGs, kept as plain images so they never render as ligature text.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${motif}-${icon.name}`}
            src={`https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/${icon.name}/default/48px.svg`}
            alt=""
            draggable={false}
            className={`absolute select-none object-contain drop-shadow-[0_1.5rem_3rem_rgba(18,32,27,0.08)] ${icon.className}`}
          />
        ))}
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, description, motif, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 md:pt-40">
      <div className="page-shell">
        <div className="relative">
          {motif && <HeroMotif motif={motif} />}
          <span className="eyebrow">{eyebrow}</span>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="display-lg max-w-5xl">{title}</h1>
            <p className="copy-lg max-w-2xl">{description}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
