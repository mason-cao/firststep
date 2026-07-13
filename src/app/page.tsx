import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sticker } from "@/components/ui/Sticker";
import { activities } from "@/content/activities";
import { microplastics } from "@/content/microplastics";
import { contactEmail, evidenceLinks, impactStats, programs } from "@/content/site";
import { mission } from "@/content/stats";

const recentActivities = activities.slice(0, 5);
const tickerItems = impactStats.map((stat) => `${stat.value} ${stat.label}`);

const programTiles = ["bg-sky", "bg-volt/45", "bg-signal/12", "bg-shell"];

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden px-5 pb-16 pt-28 md:pt-36 lg:pb-24">
        <div
          aria-hidden="true"
          className="halftone absolute -left-16 top-20 hidden size-72 rounded-full opacity-50 lg:block"
        />
        <div className="page-shell relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Sticker color="volt" rotate={-3}>
                  Est. 2020
                </Sticker>
                <Sticker color="sky" rotate={2}>
                  Student run
                </Sticker>
                <span className="eyebrow">Youth-led nonprofit · Metro Atlanta</span>
              </div>
            </Reveal>
            <h1 className="display-hero mt-6">
              <Reveal delay={0.05}>Everything</Reveal>
              <Reveal delay={0.12}>begins with a</Reveal>
              <Reveal delay={0.19}>
                <span className="text-signal">first step.</span>
              </Reveal>
            </h1>
            <Reveal delay={0.28}>
              <p className="copy-lg mt-7 max-w-xl">
                First Step Team turns cleanups, service, culture, and environmental
                research into measurable local action, recorded in public and run by
                students.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/impact">Explore Impact</ButtonLink>
                <ButtonLink href={`mailto:${contactEmail}`} variant="paper" external>
                  Join the Team
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Reveal delay={0.15} rotate={-4}>
              <PhotoSlot
                src="/images/service-cleanup.png"
                alt="First Step Team volunteers at a river cleanup"
                label="Cleanup crew on the water"
                rotate={-2}
                priority
                sizes="(min-width: 1024px) 34rem, 94vw"
              />
            </Reveal>
            <div className="mt-6 grid grid-cols-2 items-start gap-6">
              <Reveal delay={0.28} rotate={3}>
                <PhotoSlot
                  src="/images/research-water.png"
                  alt="Water sampling for microplastics research"
                  label="Sampling the water"
                  aspect="square"
                  rotate={2}
                  sizes="(min-width: 1024px) 16rem, 45vw"
                />
              </Reveal>
              <Reveal delay={0.38} rotate={-3}>
                <PhotoSlot
                  label="Your photo here!"
                  hint="Swap in a team photo from public/photos"
                  aspect="square"
                  rotate={-2}
                  className="lg:translate-y-6"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- signature ticker tape ---------- */}
      <div className="relative -mx-1 -rotate-1 py-2">
        <Marquee
          items={tickerItems}
          duration={40}
          className="border-y-2 border-ink bg-signal py-3 text-ink"
          itemClassName="font-display text-2xl font-extrabold uppercase md:text-4xl"
        />
      </div>

      {/* ---------- the record ---------- */}
      <section className="section-pad border-y-2 border-ink bg-ink px-5 text-shell">
        <div className="page-shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow text-shell/70">Accomplishments, on the record</span>
                <h2 className="display-lg mt-4">
                  The <span className="text-volt">record</span> so far
                </h2>
              </div>
              <p className="mono-data max-w-xs pb-2 text-shell/60">
                Counted from 2020 to 2026: events, volunteers, fundraising, and trash
                pulled out of public places.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {impactStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.05}
                className="rounded-xl border-2 border-shell/20 p-5 md:p-7"
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-display text-4xl font-extrabold leading-none text-volt md:text-6xl"
                />
                <span className="mono-tag mt-3 block text-shell/65">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- programs ---------- */}
      <section className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="What the team does"
              title="Four kinds of work, one public record"
              lead="Every event lands in the ledger: what happened, when, who led it, and what it added up to."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programs.map(({ title, description, label, Icon }, index) => (
              <Reveal key={title} delay={index * 0.06} rotate={index % 2 === 0 ? -1 : 1}>
                <article
                  className={`h-full rounded-xl border-2 border-ink p-6 shadow-[5px_5px_0_0_var(--color-ink)] md:p-8 ${programTiles[index]}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-lg border-2 border-ink bg-shell text-ink">
                      <Icon className="size-6" weight="bold" />
                    </span>
                    <Sticker color="shell" rotate={index % 2 === 0 ? 2 : -2}>
                      {label}
                    </Sticker>
                  </div>
                  <h3 className="heading-md mt-6">{title}</h3>
                  <p className="copy mt-3 max-w-md">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- microplastics / river section ---------- */}
      <section className="border-y-2 border-ink bg-river px-5 py-20 text-shell md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Sticker color="volt" rotate={-3}>
                  2025 cohort
                </Sticker>
                <span className="eyebrow text-shell/80">Research and data</span>
              </div>
              <h2 className="display-lg mt-5">
                The first public microplastics data for Metro Atlanta.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-shell/85 md:text-lg">
                {microplastics.description} Students mapped pollution across natural
                waters and published the results for anyone to use.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <ButtonLink href={microplastics.url} variant="paper" external>
                  Open the Data
                </ButtonLink>
                <ButtonLink href="/impact#microplastics" variant="light">
                  How It Was Made
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} rotate={3}>
            <PhotoSlot
              src="/images/research-water.png"
              alt="Students testing water samples in the field"
              label="Field sampling day at the Chattahoochee watershed"
              rotate={1.5}
              sizes="(min-width: 1024px) 32rem, 94vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- recent activity ledger ---------- */}
      <section className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Fresh off the ledger"
                title="Recent activity"
                size="md"
              />
              <ButtonLink href="/activities" variant="paper">
                View All 240+ Events
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-xl border-2 border-ink bg-shell shadow-[5px_5px_0_0_var(--color-ink)]">
            {recentActivities.map((activity, index) => (
              <Reveal key={`${activity.title}-${activity.date}`} delay={index * 0.04}>
                <Link
                  href="/activities"
                  className="group grid gap-2 border-b-2 border-ink/10 px-5 py-4 transition-colors last:border-b-0 hover:bg-sky/60 md:grid-cols-[9rem_1fr_auto] md:items-center md:gap-5 md:px-7"
                >
                  <span className="mono-data text-signal">{activity.date}</span>
                  <span className="font-display text-xl font-bold leading-tight md:text-2xl">
                    {activity.title}
                  </span>
                  <span className="mono-tag flex items-center gap-2 text-ink/55 group-hover:text-ink">
                    {activity.year}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      weight="bold"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- founder quote ---------- */}
      <section className="border-y-2 border-ink bg-sky px-5 py-20 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <Reveal rotate={-3} className="mx-auto w-full max-w-72">
            <PhotoSlot
              label="Annie, founder"
              hint="Add a founder photo to public/photos"
              aspect="portrait"
              rotate={-2}
              sizes="18rem"
            />
          </Reveal>
          <div>
            <Reveal>
              <span aria-hidden="true" className="font-display text-7xl font-extrabold leading-none text-signal">
                “
              </span>
              <blockquote className="max-w-3xl text-xl font-semibold leading-relaxed text-ink/90 md:text-2xl">
                {mission.founderQuote.text}
              </blockquote>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Sticker color="signal" rotate={-2}>
                  {mission.founderQuote.author}
                </Sticker>
                <span className="mono-tag text-ink/60">{mission.founderQuote.title}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- explore the record ---------- */}
      <section className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Where to dig in"
              title="Explore the whole record"
              size="md"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {evidenceLinks.map(({ href, title, description, Icon }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-xl border-2 border-ink bg-shell p-5 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
                >
                  <span className="grid size-10 place-items-center rounded-lg border-2 border-ink bg-volt text-ink">
                    <Icon className="size-5" weight="bold" />
                  </span>
                  <h3 className="heading-sm mt-5">{title}</h3>
                  <p className="copy mt-2 flex-1 text-sm">{description}</p>
                  <span className="mono-tag mt-4 flex items-center gap-1.5 text-signal">
                    Open
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" weight="bold" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
