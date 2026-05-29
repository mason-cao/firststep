type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 md:pt-40">
      <div className="page-shell">
        <div className="hero-enter">
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
