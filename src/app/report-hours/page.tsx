import { CheckCircle, ClockCountdown, FileLock } from "@phosphor-icons/react/dist/ssr";
import { ActivityHoursForm } from "@/components/forms/ActivityHoursForm";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: "Report Activity & Hours",
  description: "Submit a First Step Team activity and volunteer hours for leadership approval.",
};

export default function ReportHoursPage() {
  return (
    <>
      <PageHero
        index="LOG"
        eyebrow="Member reporting"
        title="Log the work. Keep the record honest."
        description="Report an activity, your individual service time, and supporting evidence in one place. Every entry stays pending until a leader reviews it."
      />

      <section className="section-pad px-5">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <aside className="grid gap-6 lg:sticky lg:top-28">
            <div className="rounded-xl border-2 border-ink bg-ink p-6 text-shell shadow-[5px_5px_0_0_var(--color-signal)]">
              <ClockCountdown className="size-9 text-volt" weight="bold" />
              <h2 className="heading-md mt-5">Before you submit</h2>
              <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-shell/75">
                <li className="flex gap-3"><CheckCircle className="mt-0.5 size-5 shrink-0 text-signal" weight="fill" /><span>Use your own name and time. Each member submits a separate hours report.</span></li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 size-5 shrink-0 text-signal" weight="fill" /><span>Include the exact location and what you did, especially for food banks and cleanups.</span></li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 size-5 shrink-0 text-signal" weight="fill" /><span>Add a photo, PDF, or shareable evidence link for leadership to verify.</span></li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-ink bg-sky p-6 shadow-[4px_4px_0_0_var(--color-ink)]">
              <FileLock className="size-7" weight="bold" />
              <h3 className="heading-sm mt-4">Evidence is private</h3>
              <p className="copy mt-2 text-sm">Uploaded files can only be opened by signed-in leadership. Approved hours do not automatically publish personal details.</p>
            </div>
          </aside>

          <ActivityHoursForm />
        </div>
      </section>
    </>
  );
}
