import {
  ArrowUpRight,
  FileText,
  GlobeHemisphereWest,
  Handshake,
  Microscope,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resources } from "@/content/resources";

export const metadata = {
  title: "Resources",
  description:
    "First Step Team documents and culture resources for families and community members.",
};

function ResourceRow({
  title,
  url,
  description,
  Icon,
}: {
  title: string;
  url: string;
  description?: string;
  Icon: typeof FileText;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-5 rounded-xl border-2 border-ink bg-shell p-5 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
    >
      <span className="flex min-w-0 items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg border-2 border-ink bg-sky text-ink">
          <Icon className="size-5" weight="bold" />
        </span>
        <span className="min-w-0">
          <span className="heading-sm block">{title}</span>
          {description && <span className="copy mt-1 block text-sm">{description}</span>}
        </span>
      </span>
      <ArrowUpRight
        className="size-5 shrink-0 text-signal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        weight="bold"
      />
    </a>
  );
}

export default function ResourcesPage() {
  const documents = resources.filter((item) => item.category === "document");
  const research = resources.filter((item) => item.category === "research");
  const culture = resources.filter((item) => item.category === "culture");
  const partners = resources.filter((item) => item.category === "partner");

  return (
    <>
      <PageHero
        index="06"
        eyebrow="Resources"
        title="Forms, links, and field guides."
        description="A practical library for members, families, and volunteers: team documents, project links, and clean-up program information."
      />

      <section id="documents" className="section-pad px-5">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Documents"
              title="Core team documents"
              size="md"
            />
          </Reveal>
          <div className="grid gap-5">
            {documents.map((doc, index) => (
              <Reveal key={doc.title} delay={index * 0.05}>
                <ResourceRow {...doc} Icon={FileText} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="border-y-2 border-ink bg-sky px-5 py-20 md:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Research"
              title="Project sites and data"
              size="md"
            />
          </Reveal>
          <div className="grid gap-5">
            {research.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <ResourceRow {...item} Icon={Microscope} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Adopt-a-Spot"
              title="Adopt a spot near you"
              lead="County and city programs where any family can claim a road, park, or stream and keep it clean."
              size="md"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl border-2 border-ink bg-shell p-6 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
                >
                  <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-volt text-ink">
                    <Handshake className="size-5" weight="bold" />
                  </span>
                  <h3 className="heading-sm mt-5">{item.title}</h3>
                  {item.description && <p className="copy mt-2 flex-1 text-sm">{item.description}</p>}
                  <span className="mono-tag mt-4 flex items-center gap-1.5 text-signal">
                    Open
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      weight="bold"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="border-t-2 border-ink bg-river px-5 py-20 text-shell md:py-24">
        <div className="page-shell">
          <Reveal>
            <span className="eyebrow text-shell/80">Culture and diversity</span>
            <h2 className="display-lg mt-4 max-w-3xl">Made for the community</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-shell/85">
              Educational resources created by the team for families and community
              members.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {culture.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl border-2 border-ink bg-shell p-6 text-ink shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
                >
                  <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-sky text-ink">
                    <GlobeHemisphereWest className="size-5" weight="bold" />
                  </span>
                  <h3 className="heading-sm mt-5">{item.title}</h3>
                  {item.description && <p className="copy mt-2 flex-1 text-sm">{item.description}</p>}
                  <span className="mono-tag mt-4 flex items-center gap-1.5 text-signal">
                    Open
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      weight="bold"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
