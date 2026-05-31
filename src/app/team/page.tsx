import { UsersThree } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { alumni } from "@/content/alumni";
import { leadership } from "@/content/leadership";
import { members } from "@/content/members";

export const metadata = {
  title: "Team",
  description:
    "Meet First Step Team leadership, alumni, and the full member roster.",
};

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
        eyebrow="Team"
        title="Students run the operations, outreach, design, and service calendar."
        description="First Step Team is organized by student leaders, alumni continuity, and a broad K to 12 volunteer community across Metro Atlanta."
        motif="person-step"
      />

      <section className="px-4 pb-20 md:pb-28">
        <div className="page-shell">
          <Reveal className="mb-6">
            <span className="eyebrow">Leadership team</span>
            <p className="copy mt-4 max-w-2xl text-sm">
              Operations, outreach, records, fundraising, events, design, and service programs.
            </p>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {leadership.map((leader, index) => (
              <Reveal
                key={`${leader.name}-${leader.role}`}
                delay={index * 0.025}
                className="rounded-[1.5rem] border border-ink/10 bg-shell p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{leader.name}</h3>
                    <p className="mt-1 text-sm font-extrabold text-moss">{leader.role}</p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mist text-moss">
                    <UsersThree className="size-5" weight="bold" />
                  </span>
                </div>
                <ul className="mt-6 grid gap-2.5">
                  {leader.responsibilities.map((item) => (
                    <li key={item} className="copy border-t border-ink/8 pt-2.5 text-sm first:border-t-0 first:pt-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="alumni" className="bg-mist px-4 py-20 md:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <span className="eyebrow">Alumni</span>
            <h2 className="heading-md mt-6">The continuity record comes next.</h2>
          </Reveal>
          <div className="grid gap-6">
            {Object.entries(alumniByYear)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([year, rows]) => (
                <Reveal key={year} className="rounded-[1.5rem] bg-shell p-6">
                  <h3 className="font-display text-3xl font-bold">{year}</h3>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {rows.map((person) => (
                      <div key={person.name} className="border-t border-ink/10 pt-3">
                        <p className="font-extrabold">{person.name}</p>
                        {(person.role || person.years) && (
                          <p className="copy mt-1 text-sm">
                            {[person.role, person.years].filter(Boolean).join(", ")}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <section id="members" className="section-pad px-4">
        <div className="page-shell">
          <Reveal className="mb-10 max-w-3xl">
            <span className="eyebrow">Member roster</span>
            <h2 className="heading-md mt-6">A compact archive of the broader volunteer community.</h2>
            <p className="copy mt-4">Student names are grouped by graduation year for quick scanning.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(membersByYear)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([year, rows], index) => (
                <Reveal key={year} delay={index * 0.025} className="rounded-[1.35rem] bg-shell p-6">
                  <h3 className="font-display text-2xl font-bold">{year}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {rows.map((member, memberIndex) => (
                      <span key={`${member.name}-${member.school ?? ""}-${memberIndex}`} className="rounded-full bg-paper px-3 py-2 text-xs font-bold text-ink/72">
                        {member.name}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
