import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarBlank, MapTrifold } from "@phosphor-icons/react/dist/ssr";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ParallaxPanel } from "@/components/ui/ParallaxPanel";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { Reveal } from "@/components/ui/Reveal";
import { activities } from "@/content/activities";
import { galleryImages } from "@/content/gallery";
import { evidenceLinks, impactStats, programs } from "@/content/site";
import { microplastics } from "@/content/microplastics";

const recentActivities = activities.slice(0, 5);

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden px-4 pb-16 pt-32 md:pt-36">
        <div className="page-shell grid min-h-[calc(100dvh-9rem)] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="hero-enter relative z-10 max-w-5xl">
            <span className="eyebrow">Youth-led service in Metro Atlanta</span>
            <h1 className="display-xl mt-7 max-w-5xl">
              Every first step becomes public impact.
            </h1>
            <p className="copy-lg mt-7 max-w-xl">
              First Step Team turns cleanups, service, culture, and environmental research into measurable local action.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap [&>a]:w-full [&>a]:justify-center sm:[&>a]:w-auto">
              <PrimaryLink href="/impact">Explore Impact</PrimaryLink>
              <PrimaryLink href="mailto:firststepteam2020@gmail.com" variant="outline" external>
                Email First Step
              </PrimaryLink>
            </div>
          </div>

          <ParallaxPanel className="relative z-0">
            <div className="noise-card rounded-[2rem] border border-ink/10 bg-mist p-2 shadow-[0_40px_120px_color-mix(in_oklch,var(--color-ink)_16%,transparent)]">
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.55rem] bg-moss">
                <Image
                  src={galleryImages[0]}
                  alt="First Step Team volunteers at a community event"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="object-cover opacity-88 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/12 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-shell/16 bg-ink/80 p-5 text-shell">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-extrabold uppercase text-harvest">Impact record</p>
                      <p className="mt-2 max-w-72 text-sm leading-6 text-shell/72">
                        A living archive of service, fundraising, research, awards, publications, and team leadership.
                      </p>
                    </div>
                    <MapTrifold className="size-8 shrink-0 text-harvest" />
                  </div>
                </div>
              </div>
            </div>
          </ParallaxPanel>
        </div>
      </section>

      <section className="bg-ink px-4 py-8 text-shell">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.9fr_repeat(6,1fr)]">
          <div className="flex items-center">
            <h2 className="font-display text-2xl font-extrabold leading-none">
              Accomplishments by the numbers
            </h2>
          </div>
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.04} className="border-t border-shell/14 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              <AnimatedCounter value={stat.value} className="block font-display text-4xl font-extrabold leading-none text-harvest" />
              <span className="mt-2 block text-xs font-bold leading-tight text-shell/68">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad px-4">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <span className="eyebrow">What the team does</span>
            <h2 className="heading-md mt-6">Four kinds of work, one public record.</h2>
            <p className="copy mt-5 max-w-md">
              The site is organized around proof: what happened, when it happened, who led it, and why it mattered.
            </p>
          </Reveal>
          <div className="grid gap-3">
            {programs.map(({ title, description, label, Icon }, index) => (
              <Reveal
                key={title}
                delay={index * 0.05}
                className="group grid gap-4 rounded-[1.4rem] border border-ink/10 bg-shell/64 p-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-shell md:grid-cols-[6rem_1fr_auto] md:items-center"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold uppercase text-ink/46">0{index + 1}</span>
                  <span className="grid size-11 place-items-center rounded-full bg-moss text-shell">
                    <Icon className="size-5" weight="bold" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-extrabold">{title}</h3>
                  <p className="copy mt-1 max-w-3xl text-sm">{description}</p>
                </div>
                <span className="w-max rounded-full bg-mist px-3 py-2 text-xs font-extrabold text-moss">{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-20 md:py-28">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="noise-card min-h-[25rem] rounded-[2rem] border border-ink/10 bg-shell p-5 md:p-8">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.5rem] bg-paper">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_38%,var(--color-clay)_0_0.55rem,transparent_0.6rem),radial-gradient(circle_at_68%_22%,var(--color-moss)_0_0.8rem,transparent_0.85rem),radial-gradient(circle_at_58%_72%,var(--color-sage)_0_1.1rem,transparent_1.15rem)] opacity-75" />
              <div className="absolute left-8 top-8 rounded-full bg-ink px-4 py-2 text-xs font-extrabold uppercase text-shell">
                Public data
              </div>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 420" aria-hidden="true">
                <path
                  d="M58 306 C160 220 188 246 250 148 S420 92 520 170"
                  fill="none"
                  stroke="currentColor"
                  className="text-moss/45"
                  strokeWidth="3"
                  strokeDasharray="8 12"
                />
                <path
                  d="M80 332 C168 272 224 310 310 240 S430 206 548 256"
                  fill="none"
                  stroke="currentColor"
                  className="text-clay/50"
                  strokeWidth="3"
                  strokeDasharray="2 10"
                />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.25rem] bg-ink p-5 text-shell">
                <h3 className="font-display text-3xl font-extrabold">{microplastics.title}</h3>
                <p className="mt-3 text-sm leading-6 text-shell/70">{microplastics.impact}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-center">
            <span className="eyebrow">Impact evidence</span>
            <h2 className="heading-md mt-6">A living ledger of service.</h2>
            <div className="mt-8 grid gap-4">
              {evidenceLinks.slice(0, 4).map(({ href, title, description, Icon }) => (
                <Link key={title} href={href} className="group border-b border-ink/12 pb-4">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-paper text-moss transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[-8deg]">
                      <Icon className="size-5" weight="bold" />
                    </span>
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-2xl font-extrabold">
                        {title}
                        <ArrowRight className="size-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                      </h3>
                      <p className="copy mt-1 text-sm">{description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad px-4">
        <div className="page-shell">
          <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Recent activity ledger</span>
              <h2 className="heading-md mt-6 max-w-3xl">The archive should feel useful, not ornamental.</h2>
            </div>
            <PrimaryLink href="/activities" variant="outline">View Activities</PrimaryLink>
          </Reveal>
          <div className="border-y border-ink/14">
            {recentActivities.map((activity, index) => (
              <Reveal key={`${activity.title}-${activity.date}`} delay={index * 0.04}>
                <Link
                  href="/activities"
                  className="grid gap-3 border-b border-ink/10 py-5 last:border-b-0 md:grid-cols-[8rem_1.4fr_0.7fr_auto] md:items-center"
                >
                  <span className="flex items-center gap-2 text-sm font-extrabold text-moss">
                    <CalendarBlank className="size-4" />
                    {activity.date}
                  </span>
                  <strong className="font-display text-2xl font-extrabold">{activity.title}</strong>
                  <span className="copy text-sm">{activity.year}</span>
                  <span className="text-sm font-extrabold">Details</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="people" className="section-pad border-t border-ink/10 bg-mist px-4 text-ink">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">People behind the work</span>
            <h2 className="display-lg mt-6 max-w-3xl">Students organize the record, not just the events.</h2>
            <p className="copy-lg mt-6 max-w-xl">
              Leadership is featured first, then alumni and the full member roster are preserved as part of the team archive.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap [&>a]:w-full [&>a]:justify-center sm:[&>a]:w-auto">
              <PrimaryLink href="/team">Meet the Team</PrimaryLink>
              <PrimaryLink href="/team#alumni" variant="outline">View Alumni</PrimaryLink>
            </div>
          </Reveal>
          <Reveal className="grid grid-cols-4 items-end gap-3">
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-full rounded-b-[1.25rem] border border-shell/12 bg-gradient-to-br from-sage via-moss to-clay"
                style={{ height: [170, 245, 205, 140][item] }}
              />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
