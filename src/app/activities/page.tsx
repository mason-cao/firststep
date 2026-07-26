"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { activities, featuredActivities, reportTemplateUrl } from "@/content/activities";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Sticker } from "@/components/ui/Sticker";

function activityCategory(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes("cleanup") || lower.includes("sweep") || lower.includes("clean")) return "Cleanups";
  if (lower.includes("fund") || lower.includes("sale") || lower.includes("bell") || lower.includes("cff")) return "Fundraising";
  if (lower.includes("performance") || lower.includes("senior")) return "Performances";
  if (lower.includes("speech") || lower.includes("shine")) return "Voice";
  if (lower.includes("water") || lower.includes("microplastic") || lower.includes("climate")) return "Research";
  return "Service";
}

export default function ActivitiesPage() {
  const reduceMotion = useReducedMotion();
  const years = useMemo(
    () => [...new Set(activities.map((activity) => activity.year))].sort((a, b) => b - a),
    []
  );
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = activities.filter((activity) => {
    const matchesYear = selectedYear === "all" || activity.year === selectedYear;
    const haystack = `${activity.title} ${activity.date} ${activity.description ?? ""}`.toLowerCase();
    return matchesYear && haystack.includes(query.toLowerCase());
  });

  const grouped = filtered.reduce<Record<number, typeof activities>>((acc, activity) => {
    acc[activity.year] ??= [];
    acc[activity.year].push(activity);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        index="02"
        eyebrow="Activity ledger"
        title="Every event since 2020, on the record."
        description="A chronological archive of cleanups, fundraising, performances, and youth leadership. Filter by year or search the whole ledger."
      />

      <section className="px-5 pb-24 pt-14 md:pt-20">
        <div className="page-shell">
          {/* featured + reporting */}
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-xl border-2 border-ink bg-ink p-6 text-shell shadow-[5px_5px_0_0_var(--color-signal)] md:p-7">
              <span className="eyebrow text-shell/70">Member reporting</span>
              <h2 className="heading-md mt-5">Ran something? Report it.</h2>
              <p className="mt-4 text-sm leading-relaxed text-shell/75">
                Submit the activity, your individual service time, and evidence in one
                place. Leadership approves every report before it joins the record.
              </p>
              <div className="mt-7">
                <ButtonLink href={reportTemplateUrl}>
                  Submit Activity & Hours
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {featuredActivities.map((activity, index) => (
                <article
                  key={`${activity.title}-${activity.date}`}
                  className="rounded-xl border-2 border-ink bg-shell p-5 shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="mono-tag text-signal">{activity.date}</span>
                    <Sticker color={index % 2 === 0 ? "volt" : "sky"} rotate={index % 2 === 0 ? 2 : -2}>
                      Featured
                    </Sticker>
                  </div>
                  <h3 className="heading-sm mt-4">{activity.title}</h3>
                  {activity.description && (
                    <p className="copy mt-3 text-sm">{activity.description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* sticky filter bar */}
          <div className="sticky top-20 z-30 rounded-xl border-2 border-ink bg-shell p-3 shadow-[4px_4px_0_0_var(--color-ink)] md:top-24">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <label className="flex items-center gap-3 rounded-lg border-2 border-ink/15 bg-paper px-4 py-2.5 transition-colors focus-within:border-signal">
                <MagnifyingGlass className="size-5 shrink-0 text-signal" weight="bold" />
                <span className="sr-only">Search activities</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search the ledger"
                  className="mono-data w-full bg-transparent outline-none placeholder:text-ink/40"
                />
              </label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {["all" as const, ...years].map((year) => {
                  const active = selectedYear === year;
                  return (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`shrink-0 rounded-md border-2 px-3.5 py-1.5 text-sm font-bold uppercase tracking-wider transition-all duration-150 ${
                        active
                          ? "border-ink bg-signal text-ink shadow-[2px_2px_0_0_var(--color-ink)]"
                          : "border-transparent text-ink/60 hover:border-ink/20 hover:text-ink"
                      }`}
                    >
                      {year === "all" ? "All" : year}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* year groups */}
          <div className="mt-14 grid gap-16">
            {Object.keys(grouped)
              .map(Number)
              .sort((a, b) => b - a)
              .map((year) => (
                <section key={year} className="grid gap-6 lg:grid-cols-[11rem_1fr]">
                  <div className="lg:sticky lg:top-44 lg:self-start">
                    <span className="font-display text-6xl font-extrabold leading-none text-signal md:text-7xl">
                      {year}
                    </span>
                    <span className="mono-tag mt-2 block text-ink/50">
                      {grouped[year].length} records
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-xl border-2 border-ink bg-shell shadow-[5px_5px_0_0_var(--color-ink)]">
                    {grouped[year].map((activity, index) => (
                      <motion.article
                        key={`${activity.title}-${activity.date}-${index}`}
                        className="grid gap-2 border-b-2 border-ink/10 px-5 py-5 last:border-b-0 md:grid-cols-[8.5rem_1fr_auto] md:gap-5 md:px-6"
                        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                          duration: 0.55,
                          delay: Math.min(index * 0.02, 0.15),
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <span className="mono-data text-signal">{activity.date}</span>
                        <div>
                          <h2 className="font-display text-xl font-bold leading-tight md:text-2xl">
                            {activity.title}
                          </h2>
                          {activity.description && (
                            <p className="copy mt-2 max-w-3xl text-sm">{activity.description}</p>
                          )}
                        </div>
                        <span className="mono-tag h-max w-max rounded-md border-2 border-ink/15 bg-sky px-2.5 py-1 text-ink/70">
                          {activityCategory(activity.title)}
                        </span>
                      </motion.article>
                    ))}
                  </div>
                </section>
              ))}

            {filtered.length === 0 && (
              <div className="rounded-xl border-2 border-dashed border-ink/30 bg-shell p-12 text-center">
                <h2 className="heading-md">Nothing in the ledger matches.</h2>
                <p className="copy mx-auto mt-3 max-w-md">
                  Try a different year or search term. There are {activities.length} records
                  in total.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
