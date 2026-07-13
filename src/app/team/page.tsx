import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sticker } from "@/components/ui/Sticker";
import { alumni } from "@/content/alumni";
import { leadership } from "@/content/leadership";
import { members } from "@/content/members";

export const metadata = {
  title: "Team",
  description: "Meet First Step Team leadership, alumni, and the full member roster.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function groupByYear<T extends { classYear?: number; graduationYear?: number | null }>(
  rows: T[],
  key: "classYear" | "graduationYear"
) {
  return rows.reduce<Record<string, T[]>>((acc, row) => {
    const value = row[key];
    const label = value ? `Class of ${value}` : "Other Members";
    acc[label] ??= [];
    acc[label].push(row);
    return acc;
  }, {});
}

export default function TeamPage() {
  const alumniByYear = groupByYear(alumni, "classYear");
  const membersByYear = groupByYear(members, "graduationYear");

  return (
    <>
      <PageHero
        index="03"
        eyebrow="Team"
        title="Run by students, start to finish."
        description="Operations, outreach, records, fundraising, events, design, and the service calendar, all organized by student leaders with a K-12 volunteer community behind them."
      />

      {/* ---------- leadership ---------- */}
      <section className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership team"
              title="Who keeps the record running"
              size="md"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {leadership.map((leader, index) => (
              <Reveal key={`${leader.name}-${leader.role}`} delay={index * 0.04}>
                <article className="h-full rounded-xl border-2 border-ink bg-shell p-6 shadow-[5px_5px_0_0_var(--color-ink)] md:p-7">
                  <div className="flex items-start gap-5">
                    <span
                      className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-dashed border-ink/40 bg-paper font-display text-xl font-bold text-ink/70"
                      title="Add a headshot to public/photos"
                    >
                      {initials(leader.name)}
                    </span>
                    <div className="min-w-0">
                      <h3 className="heading-md">{leader.name}</h3>
                      <p className="mono-tag mt-2 text-signal">{leader.role}</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-2.5">
                    {leader.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="copy border-t-2 border-ink/8 pt-2.5 text-sm first:border-t-0 first:pt-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- alumni ---------- */}
      <section id="alumni" className="border-y-2 border-ink bg-sky px-5 py-20 md:py-28">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Alumni"
              title="The continuity record"
              lead="Founders and past leaders stay on the record. The team is built to outlast every graduating class."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {Object.entries(alumniByYear)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([year, rows], index) => (
                <Reveal key={year} delay={index * 0.06} rotate={index % 2 === 0 ? -1 : 1}>
                  <div className="h-full rounded-xl border-2 border-ink bg-shell p-6 shadow-[5px_5px_0_0_var(--color-ink)]">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="heading-md">{year}</h3>
                      <Sticker color="volt" rotate={index % 2 === 0 ? 2 : -2}>
                        {rows.length} alumni
                      </Sticker>
                    </div>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {rows.map((person) => (
                        <div key={person.name} className="border-t-2 border-ink/10 pt-3">
                          <p className="font-bold">{person.name}</p>
                          {(person.role || person.years) && (
                            <p className="mono-data mt-1 text-ink/55">
                              {[person.role, person.years].filter(Boolean).join(" · ")}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* ---------- member roster ---------- */}
      <section id="members" className="section-pad px-5">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Member roster"
              title="The wider crew"
              lead="The broader volunteer community, grouped by graduation year for quick scanning."
              size="md"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {Object.entries(membersByYear)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([year, rows], index) => (
                <Reveal key={year} delay={index * 0.03}>
                  <div className="h-full rounded-xl border-2 border-ink bg-shell p-6 shadow-[4px_4px_0_0_var(--color-ink)]">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="heading-sm">{year}</h3>
                      <span className="mono-tag text-ink/50">{rows.length} members</span>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {rows.map((member, memberIndex) => (
                        <span
                          key={`${member.name}-${member.school ?? ""}-${memberIndex}`}
                          className="mono-data rounded-md border-2 border-ink/12 bg-paper px-2.5 py-1 text-ink/75"
                        >
                          {member.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
