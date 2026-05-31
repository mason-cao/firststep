import { ArrowUpRight, FileText, GlobeHemisphereWest, Handshake, Microscope } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { resources } from "@/content/resources";

export const metadata = {
  title: "Resources",
  description:
    "First Step Team documents and culture resources for families and community members.",
};

export default function ResourcesPage() {
  const documents = resources.filter((item) => item.category === "document");
  const research = resources.filter((item) => item.category === "research");
  const culture = resources.filter((item) => item.category === "culture");
  const partners = resources.filter((item) => item.category === "partner");

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Team documents, research links, and partner programs."
        description="A practical library for members, families, and volunteers who need forms, project links, and clean-up program information."
        motif="map"
      />

      <section id="documents" className="px-4 pb-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <span className="eyebrow">Documents</span>
            <h2 className="heading-md mt-6">Core team documents for families and members.</h2>
          </Reveal>
          <div className="grid gap-4">
            {documents.map((doc, index) => (
              <Reveal key={doc.title} delay={index * 0.04}>
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-5 rounded-[1.35rem] bg-shell p-5">
                  <span className="flex items-start gap-4">
                    <span className="grid size-11 place-items-center rounded-full bg-mist text-moss">
                      <FileText className="size-5" weight="bold" />
                    </span>
                    <span>
                      <span className="block font-display text-2xl font-bold">{doc.title}</span>
                      {doc.description && <span className="copy mt-1 block text-sm">{doc.description}</span>}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="bg-mist px-4 py-20 md:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <span className="eyebrow">Research</span>
            <h2 className="heading-md mt-6">Project sites and data records.</h2>
          </Reveal>
          <div className="grid gap-4">
            {research.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-5 rounded-[1.35rem] bg-shell p-5">
                  <span className="flex items-start gap-4">
                    <span className="grid size-11 place-items-center rounded-full bg-paper text-moss">
                      <Microscope className="size-5" weight="bold" />
                    </span>
                    <span>
                      <span className="block font-display text-2xl font-bold">{item.title}</span>
                      {item.description && <span className="copy mt-1 block text-sm">{item.description}</span>}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="px-4 py-20 md:py-24">
        <div className="page-shell">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow">Adopt-a-Spot</span>
            <h2 className="heading-md mt-6">County and city programs for clean-up adoption.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block min-h-48 rounded-[1.4rem] border border-ink/10 bg-shell p-6">
                  <Handshake className="size-8 text-clay" weight="duotone" />
                  <h3 className="mt-6 font-display text-2xl font-bold">{item.title}</h3>
                  {item.description && <p className="copy mt-3 text-sm">{item.description}</p>}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="bg-mist px-4 py-20 md:py-24">
        <div className="page-shell">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow">Culture and Diversity</span>
            <h2 className="heading-md mt-6">Educational resources created for the team and community.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {culture.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block min-h-52 rounded-[1.5rem] bg-shell p-6">
                  <GlobeHemisphereWest className="size-9 text-clay" weight="duotone" />
                  <h3 className="mt-8 font-display text-3xl font-bold">{item.title}</h3>
                  {item.description && <p className="copy mt-3 text-sm">{item.description}</p>}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
