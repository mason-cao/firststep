import { ArrowUpRight, PresentationChart } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { presentations, publications } from "@/content/publications";

export const metadata = {
  title: "Publications",
  description:
    "First Step Team articles and presentations promoting community service participation.",
};

export default function PublicationsPage() {
  const years = [...new Set(publications.map((item) => item.year))].sort((a, b) => b - a);

  return (
    <>
      <PageHero
        index="05"
        eyebrow="Publications and presentations"
        title="The work, written up."
        description="Team members and parents have published in English and Chinese to promote community service participation among Chinese Americans in Atlanta."
      />

      <section className="px-5 pb-24 pt-14 md:pt-20">
        <div className="page-shell grid gap-16">
          {years.map((year) => {
            const yearItems = publications.filter((item) => item.year === year);
            return (
              <section key={year} className="grid gap-6 lg:grid-cols-[11rem_1fr]">
                <Reveal className="lg:sticky lg:top-28 lg:self-start">
                  <span className="font-display text-6xl font-extrabold leading-none text-river md:text-7xl">
                    {year}
                  </span>
                  <span className="mono-tag mt-2 block text-ink/50">
                    {yearItems.length} pieces
                  </span>
                </Reveal>
                <div className="overflow-hidden rounded-xl border-2 border-ink bg-shell shadow-[5px_5px_0_0_var(--color-ink)]">
                  {yearItems.map((publication, index) => (
                    <Reveal key={`${publication.title}-${index}`} delay={Math.min(index * 0.03, 0.2)}>
                      <a
                        href={publication.url ?? "#"}
                        target={publication.url ? "_blank" : undefined}
                        rel={publication.url ? "noopener noreferrer" : undefined}
                        className="group grid gap-2 border-b-2 border-ink/10 px-5 py-5 transition-colors last:border-b-0 hover:bg-sky/60 md:grid-cols-[1fr_10rem_2rem] md:items-center md:gap-5 md:px-6"
                      >
                        <div>
                          <h2 className="font-display text-xl font-bold leading-tight md:text-2xl">
                            {publication.title}
                          </h2>
                          <p className="mono-data mt-1.5 text-ink/55">{publication.authors}</p>
                        </div>
                        <span className="mono-data text-signal">
                          {publication.date ?? year}
                        </span>
                        <ArrowUpRight
                          className="hidden size-5 text-ink/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal md:block"
                          weight="bold"
                        />
                      </a>
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section id="decks" className="border-t-2 border-ink bg-sky px-5 py-20 md:py-28">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Meetings and decks"
              title="How the team presents its work"
              size="md"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {presentations.map((deck, index) => (
              <Reveal key={deck.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-xl border-2 border-ink bg-shell p-6 shadow-[4px_4px_0_0_var(--color-ink)]">
                  <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-volt text-ink">
                    <PresentationChart className="size-5" weight="bold" />
                  </span>
                  <h3 className="heading-sm mt-5">{deck.title}</h3>
                  <p className="mono-data mt-2 text-ink/55">
                    {[deck.authors, deck.date].filter(Boolean).join(" · ")}
                  </p>
                  {"url" in deck && deck.url && (
                    <a
                      href={deck.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-underline mt-auto inline-flex w-max items-center gap-2 pt-5 text-sm font-bold uppercase tracking-wider text-river"
                    >
                      Open deck <ArrowUpRight className="size-4" weight="bold" />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
