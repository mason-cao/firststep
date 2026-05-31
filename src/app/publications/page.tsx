import { ArrowUpRight, BookOpen, PresentationChart } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
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
        eyebrow="Publications and presentations"
        title="Articles, presentations, and public voice are part of the impact record."
        description="Team members and parents have written in English and Chinese to promote community service participation among Chinese Americans in Atlanta."
        motif="notes"
      />

      <section className="px-4 pb-24">
        <div className="page-shell grid gap-14">
          {years.map((year) => (
            <section key={year} className="grid gap-6 lg:grid-cols-[10rem_1fr]">
              <Reveal>
                <div className="sticky top-36 inline-flex rounded-full bg-ink px-5 py-3 font-display text-3xl font-extrabold text-shell">
                  {year}
                </div>
              </Reveal>
              <div className="border-t border-ink/14">
                {publications
                  .filter((item) => item.year === year)
                  .map((publication, index) => (
                    <Reveal key={`${publication.title}-${index}`} delay={index * 0.02}>
                      <a
                        href={publication.url ?? "#"}
                        target={publication.url ? "_blank" : undefined}
                        rel={publication.url ? "noopener noreferrer" : undefined}
                        className="group grid gap-4 border-b border-ink/10 py-5 md:grid-cols-[1fr_11rem_2rem] md:items-center"
                      >
                        <div>
                          <h2 className="font-display text-2xl font-extrabold">{publication.title}</h2>
                          <p className="copy mt-1 text-sm">{publication.authors}</p>
                        </div>
                        <span className="text-sm font-extrabold text-moss">{publication.date ?? year}</span>
                        <ArrowUpRight className="size-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    </Reveal>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="decks" className="relative overflow-hidden border-t border-ink/10 bg-mist px-4 py-24 text-ink">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <span className="eyebrow">Meetings and decks</span>
            <h2 className="heading-md mt-6">Presentations preserve how the team shares its work internally and publicly.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {presentations.map((deck, index) => (
              <Reveal key={deck.title} delay={index * 0.04} className="rounded-[1.4rem] border border-ink/10 bg-shell p-5">
                <PresentationChart className="size-8 text-clay" weight="duotone" />
                <h3 className="mt-4 font-display text-2xl font-extrabold">{deck.title}</h3>
                <p className="copy mt-2 text-sm">
                  {[deck.authors, deck.date].filter(Boolean).join(", ")}
                </p>
                {"url" in deck && deck.url && (
                  <a href={deck.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">
                    Open <BookOpen className="size-4" />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
