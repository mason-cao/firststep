"use client";

import { useMemo, useState } from "react";
import { CalendarBlank, FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { activities, featuredActivities, reportTemplateUrl } from "@/content/activities";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

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
  const years = useMemo(() => [...new Set(activities.map((activity) => activity.year))].sort((a, b) => b - a), []);
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
        eyebrow="Activity ledger"
        title="A chronological record of service, cleanups, fundraising, and youth leadership."
        description="Filter the public activity archive by year or search across event titles, dates, and descriptions."
      />

      <section className="px-4 pb-24">
        <div className="page-shell">
          <div className="mb-12 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-[1.5rem] bg-ink p-6 text-shell">
              <p className="text-sm font-extrabold uppercase text-shell/64">Member reporting</p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight">Use the template to report new activities.</h2>
              <p className="mt-4 text-sm leading-6 text-shell/68">
                New member activity reports can be added to the ledger after review.
              </p>
              <div className="mt-6">
                <PrimaryLink href={reportTemplateUrl} external>Open Report Template</PrimaryLink>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {featuredActivities.map((activity) => (
                <div key={`${activity.title}-${activity.date}`} className="rounded-[1.5rem] border border-ink/10 bg-shell p-5">
                  <p className="text-xs font-extrabold uppercase text-moss">{activity.date}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold">{activity.title}</h3>
                  {activity.description && <p className="copy mt-3 text-sm">{activity.description}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-24 z-20 rounded-[1.5rem] border border-ink/10 bg-paper/90 p-3 shadow-[0_20px_80px_color-mix(in_oklch,var(--color-ink)_8%,transparent)] backdrop-blur-xl">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <label className="focus-within:ring-clay/70 flex items-center gap-3 rounded-full border border-ink/12 bg-shell px-4 py-3 ring-2 ring-transparent transition">
                <MagnifyingGlass className="size-5 text-moss" />
                <span className="sr-only">Search activities</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search activities"
                  className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-ink/42"
                />
              </label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setSelectedYear("all")}
                  className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                    selectedYear === "all" ? "bg-ink text-shell" : "bg-shell text-ink/68 hover:text-ink"
                  }`}
                >
                  All
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                      selectedYear === year ? "bg-ink text-shell" : "bg-shell text-ink/68 hover:text-ink"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-16">
            {Object.keys(grouped)
              .map(Number)
              .sort((a, b) => b - a)
              .map((year) => (
                <section key={year} className="grid gap-6 lg:grid-cols-[14rem_1fr]">
                  <div className="lg:sticky lg:top-44 lg:self-start">
                    <div className="inline-flex items-center gap-3 rounded-full bg-ink px-4 py-3 text-shell">
                      <FunnelSimple className="size-4 text-harvest" weight="bold" />
                      <span className="font-display text-3xl font-extrabold leading-none">{year}</span>
                    </div>
                  </div>
                  <div className="border-t border-ink/16">
                    {grouped[year].map((activity, index) => (
                      <motion.article
                        key={`${activity.title}-${activity.date}-${index}`}
                        className="grid gap-4 border-b border-ink/12 py-6 md:grid-cols-[8rem_1fr_9rem]"
                        initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-12% 0px" }}
                        transition={{ duration: 0.7, delay: Math.min(index * 0.025, 0.18), ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="flex items-center gap-2 text-sm font-extrabold text-moss">
                          <CalendarBlank className="size-4" />
                          {activity.date}
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-extrabold">{activity.title}</h2>
                          {activity.description && <p className="copy mt-2 text-sm">{activity.description}</p>}
                        </div>
                        <span className="h-max w-max rounded-full bg-mist px-3 py-2 text-xs font-extrabold text-moss">
                          {activityCategory(activity.title)}
                        </span>
                      </motion.article>
                    ))}
                  </div>
                </section>
              ))}

            {filtered.length === 0 && (
              <div className="rounded-[2rem] bg-shell p-10 text-center">
                <h2 className="heading-md">No matching activities.</h2>
                <p className="copy mx-auto mt-3 max-w-lg">Try a different year or search term.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
