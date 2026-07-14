import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CurrencyDollar,
  Medal,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sticker } from "@/components/ui/Sticker";
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
        index="01"
        eyebrow="Impact hub"
        title="Proof that youth-led work can become a public record."
        description="The measurable record in one place: events, fundraising, awards, campaigns, partner causes, and environmental data."
      />

      {/* ---------- scoreboard ---------- */}
      <section className="section-pad px-5">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <div className="rounded-xl border-2 border-ink bg-ink p-6 text-shell shadow-[6px_6px_0_0_var(--color-signal)] md:p-9">
              <span className="eyebrow text-shell/70">Measured impact</span>
              <div className="mt-6 grid gap-0 border-y-2 border-shell/15">
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="grid gap-2 border-b-2 border-shell/15 py-5 last:border-b-0 sm:grid-cols-[minmax(11rem,0.55fr)_1fr] sm:items-baseline"
                  >
                    <AnimatedCounter
                      value={stat.value}
                      className="font-display text-5xl font-extrabold leading-none text-volt md:text-6xl"
                    />
                    <p className="mono-data text-shell/75">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.1} rotate={2}>
              <div className="rounded-xl border-2 border-ink bg-volt p-6 shadow-[5px_5px_0_0_var(--color-ink)] md:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg border-2 border-ink bg-shell text-ink">
                    <Trophy className="size-6" weight="bold" />
                  </span>
                  <Sticker color="signal" rotate={3}>
                    3 years running
                  </Sticker>
                </div>
                <h2 className="heading-md mt-5">Constellation Community Champions</h2>
                <p className="copy mt-3 text-sm">
                  First Step Team has been named Constellation Community Champions for
                  the third year in a row. Thank you Constellation for the grant.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18} rotate={-2}>
              <PhotoSlot
                src="/photos/shine_a_light_ceremony.png"
                alt="First Step volunteers holding certificates at the Shine A Light ceremony"
                label="Volunteer recognition ceremony"
                rotate={-1.5}
                sizes="(min-width: 1024px) 28rem, 94vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- microplastics ---------- */}
      <section id="microplastics" className="border-y-2 border-ink bg-river px-5 py-20 text-shell md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Sticker color="volt" rotate={-3}>
                  Public data
                </Sticker>
                <span className="eyebrow text-shell/80">Research and data</span>
              </div>
              <h2 className="display-lg mt-5">{microplastics.title}</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-shell/85 md:text-lg">
                {microplastics.description} {microplastics.impact}
              </p>
              <p className="mono-data mt-5 max-w-xl text-shell/65">
                {microplastics.acknowledgment}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <ButtonLink href={microplastics.url} variant="paper" external>
                  Open Microplastics Site
                </ButtonLink>
                <ButtonLink href="/resources#research" variant="light">
                  View Research Links
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} rotate={2}>
            <PhotoSlot
              src="/photos/microplastics_research.jpg"
              alt="Students processing water samples in a laboratory"
              label="Processing water samples in the lab"
              rotate={1.5}
              sizes="(min-width: 1024px) 30rem, 94vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- fundraising ledger ---------- */}
      <section id="fundraising" className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Money matters"
              title="The fundraising ledger"
              lead="Yard sales, bake sales, bell ringing, and walks: small events, tallied year by year and sent to local nonprofits."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {fundraising.map((org, index) => (
              <Reveal key={org.organization} delay={index * 0.07} rotate={index % 2 === 0 ? -1 : 1}>
                <div className="h-full rounded-xl border-2 border-ink bg-shell p-6 shadow-[5px_5px_0_0_var(--color-ink)] md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg border-2 border-ink bg-signal text-ink">
                      <CurrencyDollar className="size-5" weight="bold" />
                    </span>
                    <h3 className="heading-md">{org.organization}</h3>
                  </div>
                  <table className="mt-6 w-full border-collapse">
                    <caption className="sr-only">
                      Fundraising totals for {org.organization} by year
                    </caption>
                    <tbody>
                      {org.records.map((record) => (
                        <tr key={record.year} className="border-t-2 border-ink/10">
                          <td className="mono-data py-2.5 text-ink/60">{record.year}</td>
                          <td className="py-2.5 text-right font-display text-2xl font-extrabold text-river">
                            {record.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- campaigns ---------- */}
      <section id="campaigns" className="border-y-2 border-ink bg-ink px-5 py-20 text-shell md:py-28">
        <div className="page-shell">
          <Reveal>
            <span className="eyebrow text-shell/70">Campaigns</span>
            <h2 className="display-lg mt-4 max-w-3xl">
              Daily choices, made <span className="text-signal">visible</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {campaigns.map((campaign, index) => (
              <Reveal key={campaign.name} delay={index * 0.07}>
                <article className="flex h-full flex-col rounded-xl border-2 border-shell/25 bg-shell/5 p-6 md:p-7">
                  <span className="mono-tag text-volt">Campaign {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="heading-md mt-4">{campaign.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-shell/75">{campaign.description}</p>
                  {campaign.details && (
                    <p className="mono-data mt-4 text-signal">{campaign.details}</p>
                  )}
                  <div className="mt-auto pt-6">
                    {campaign.link && (
                      <a
                        href={campaign.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animated-underline inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-shell"
                      >
                        Learn more <ArrowRight className="size-4" weight="bold" />
                      </a>
                    )}
                    {campaign.links && (
                      <div className="flex flex-wrap gap-2">
                        {campaign.links.map((item) => (
                          <a
                            key={item.url}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border-2 border-shell/30 px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider text-shell/80 transition-colors hover:border-shell hover:bg-shell hover:text-ink"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- awards ---------- */}
      <section id="awards" className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Awards"
              title="Recognition, kept as evidence"
              lead="Shine A Light awards and volunteer recognition are archived by year as proof that the work was seen."
            />
          </Reveal>
          <div className="mt-12 grid gap-8">
            {latestAwards.map((yearData, index) => (
              <Reveal key={yearData.year} delay={index * 0.06}>
                <div className="rounded-xl border-2 border-ink bg-shell p-6 shadow-[5px_5px_0_0_var(--color-ink)] md:p-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-display text-5xl font-extrabold leading-none text-signal md:text-6xl">
                      {yearData.year}
                    </span>
                    <div>
                      <h3 className="heading-sm">Shine A Light Awards</h3>
                      <span className="mono-tag text-ink/50">
                        {yearData.shineALight.length} categories
                      </span>
                    </div>
                    <Medal className="ml-auto size-9 text-volt" weight="fill" aria-hidden="true" />
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {yearData.shineALight.slice(0, 4).map((group) => (
                      <div key={group.category} className="rounded-lg border-2 border-ink/12 bg-paper p-4">
                        <p className="mono-tag text-river">{group.category}</p>
                        <p className="copy mt-2 text-sm">
                          {group.winners
                            .map((winner) =>
                              winner.award ? `${winner.name} (${winner.award})` : winner.name
                            )
                            .join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- causes ---------- */}
      <section id="causes" className="border-t-2 border-ink bg-sky px-5 py-20 md:py-28">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Causes we support"
              title="Understanding the problem is the first step to solving it"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause, index) => (
              <Reveal key={cause.name} delay={index * 0.05}>
                <Link
                  href={cause.url}
                  target="_blank"
                  className="group flex h-full flex-col rounded-xl border-2 border-ink bg-shell p-6 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="heading-sm">{cause.name}</h3>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-signal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      weight="bold"
                    />
                  </div>
                  {cause.description && <p className="copy mt-3 text-sm">{cause.description}</p>}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
