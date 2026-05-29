import Link from "next/link";
import { ArrowRight, CurrencyDollar, Medal, Microscope, Quotes, SealCheck, Tree, Trophy } from "@phosphor-icons/react/dist/ssr";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { Reveal } from "@/components/ui/Reveal";
import { awards } from "@/content/awards";
import { campaigns } from "@/content/campaigns";
import { causes } from "@/content/causes";
import { fundraising } from "@/content/fundraising";
import { microplastics } from "@/content/microplastics";
import { impactStats } from "@/content/site";

export const metadata = {
  title: "Impact",
  description:
    "Explore First Step Team's public impact record: metrics, fundraising, awards, campaigns, causes, and microplastics data.",
};

export default function ImpactPage() {
  const latestAwards = awards.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Impact hub"
        title="Proof that youth-led work can become a public record."
        description="This hub gathers the measurable record: events, fundraising, awards, campaigns, partner causes, and environmental data."
      />

      <section className="px-4 pb-24">
        <div className="page-shell grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="noise-card rounded-[2rem] bg-ink p-5 text-shell md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-harvest text-ink">
                <SealCheck className="size-5" weight="bold" />
              </span>
              <span className="text-sm font-extrabold uppercase text-shell/68">Measured impact</span>
            </div>
            <div className="grid gap-0 border-y border-shell/12">
              {impactStats.map((stat) => (
                <div key={stat.label} className="grid gap-3 border-b border-shell/12 py-5 last:border-b-0 sm:grid-cols-[minmax(15rem,0.64fr)_1fr] sm:items-center">
                  <AnimatedCounter value={stat.value} className="font-display text-5xl font-bold leading-none text-harvest md:text-6xl" />
                  <p className="text-base font-bold leading-snug text-shell/74">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal className="rounded-[2rem] bg-harvest p-6 text-ink md:p-8">
              <Trophy className="size-10" weight="duotone" />
              <h2 className="mt-8 font-display text-4xl font-bold leading-tight">Constellation Community Champions</h2>
              <p className="mt-4 text-sm font-bold leading-6 text-ink/72">
                Congratulations First Step Team on being Constellation Community Champions for the third year in a row. Thank you Constellation for the grant.
              </p>
            </Reveal>

            <Reveal className="rounded-[2rem] border border-ink/10 bg-shell p-6 md:p-8">
              <Quotes className="size-10 text-clay" weight="duotone" />
              <blockquote className="mt-7 space-y-4 font-display text-2xl font-bold leading-tight md:text-3xl">
                <p>{"I envision a future where we all think about how to make the world a better place and start by taking small but concrete steps."}</p>
                <p>{"I have always wanted to clean up trash, save coral reefs, solve hunger and other large scale problems."}</p>
                <p>{"That's why I founded this team. Let's all take the First Step to a better future."}</p>
              </blockquote>
              <p className="mt-5 text-sm font-extrabold text-moss">Annie Lin, founder and president from 2020-2024</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="microplastics" className="bg-mist px-4 py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Research and data</span>
            <h2 className="heading-md mt-6">{microplastics.title}</h2>
            <p className="copy-lg mt-5">{microplastics.description}</p>
            <p className="copy mt-4">{microplastics.acknowledgment}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink href={microplastics.url} external>Open Microplastics Site</PrimaryLink>
              <PrimaryLink href="/resources#research" variant="outline">View Research Links</PrimaryLink>
            </div>
          </Reveal>
          <Reveal className="rounded-[2rem] bg-shell p-3 shadow-[0_30px_100px_color-mix(in_oklch,var(--color-ink)_10%,transparent)]">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[1.55rem] bg-paper p-7">
              <Microscope className="size-12 text-moss" weight="duotone" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_32%,var(--color-clay)_0_0.55rem,transparent_0.6rem),radial-gradient(circle_at_76%_58%,var(--color-moss)_0_1rem,transparent_1.05rem),radial-gradient(circle_at_50%_75%,var(--color-sage)_0_0.75rem,transparent_0.8rem)] opacity-70" />
              <svg className="absolute inset-0 h-full w-full text-moss/45" viewBox="0 0 600 420" aria-hidden="true">
                <path d="M68 302 C140 170 252 260 320 146 S462 104 544 206" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10 12" />
              </svg>
              <div className="absolute bottom-7 left-7 right-7 rounded-[1.25rem] bg-ink p-6 text-shell">
                <p className="text-lg font-extrabold leading-snug">{microplastics.impact}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="fundraising" className="section-pad px-4">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <span className="eyebrow">Money matters</span>
            <h2 className="heading-md mt-6">Fundraising that turns small events into local support.</h2>
          </Reveal>
          <div className="grid gap-5">
            {fundraising.map((org, index) => (
              <Reveal key={org.organization} delay={index * 0.05} className="rounded-[1.5rem] border border-ink/10 bg-shell p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-mist text-moss">
                    <CurrencyDollar className="size-5" weight="bold" />
                  </span>
                  <h3 className="font-display text-3xl font-extrabold">{org.organization}</h3>
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {org.records.map((record) => (
                    <div key={record.year} className="rounded-[1rem] bg-paper p-4">
                      <p className="text-xs font-extrabold uppercase text-ink/48">{record.year}</p>
                      <p className="mt-2 font-display text-3xl font-extrabold text-moss">{record.amount}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="campaigns" className="bg-ink px-4 py-24 text-shell">
        <div className="page-shell">
          <Reveal className="mb-12 max-w-3xl">
            <span className="eyebrow border-shell/18 text-shell/72">Campaigns</span>
            <h2 className="heading-md mt-6">The campaigns turn daily choices into visible action.</h2>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {campaigns.map((campaign, index) => (
              <Reveal key={campaign.name} delay={index * 0.05} className="rounded-[1.5rem] border border-shell/12 bg-shell/8 p-6">
                <Tree className="size-8 text-harvest" weight="duotone" />
                <h3 className="mt-5 font-display text-3xl font-extrabold">{campaign.name}</h3>
                <p className="mt-4 text-sm leading-6 text-shell/70">{campaign.description}</p>
                {campaign.details && <p className="mt-4 text-sm font-bold text-harvest">{campaign.details}</p>}
                {campaign.link && (
                  <a href={campaign.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-shell">
                    Learn more <ArrowRight className="size-4" />
                  </a>
                )}
                {campaign.links && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {campaign.links.map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-shell/16 px-3 py-2 text-xs font-extrabold text-shell/78 transition hover:bg-shell hover:text-ink"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="section-pad px-4">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <span className="eyebrow">Awards</span>
            <h2 className="heading-md mt-6">Recognition is documented as evidence, not decoration.</h2>
          </Reveal>
          <div className="grid gap-6">
            {latestAwards.map((yearData, index) => (
              <Reveal key={yearData.year} delay={index * 0.05} className="rounded-[1.5rem] bg-shell p-6">
                <div className="flex items-center gap-3">
                  <Trophy className="size-8 text-clay" weight="duotone" />
                  <h3 className="font-display text-3xl font-extrabold">{yearData.year} Shine A Light Awards</h3>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {yearData.shineALight.slice(0, 4).map((group) => (
                    <div key={group.category} className="rounded-[1rem] bg-paper p-4">
                      <p className="text-xs font-extrabold uppercase text-moss">{group.category}</p>
                      <p className="mt-2 text-sm leading-6 text-ink/70">
                        {group.winners.map((winner) => winner.award ? `${winner.name} (${winner.award})` : winner.name).join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="causes" className="bg-mist px-4 py-24">
        <div className="page-shell">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow">Causes we support</span>
            <h2 className="heading-md mt-6">Understanding the problem is the First Step to finding a solution.</h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause, index) => (
              <Reveal key={cause.name} delay={index * 0.04}>
                <Link href={cause.url} target="_blank" className="group block rounded-[1.25rem] bg-shell p-5">
                  <Medal className="size-7 text-moss" weight="duotone" />
                  <h3 className="mt-4 font-display text-2xl font-extrabold">{cause.name}</h3>
                  <p className="copy mt-2 text-sm">{cause.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
