import { CheckCircle, LockKey, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { MemberSignupForm } from "@/components/forms/MemberSignupForm";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: "Join First Step",
  description: "Apply to join First Step Team and send your contact information securely to team leadership.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        index="JOIN"
        eyebrow="Member application"
        title="Take the first step with us."
        description="Students, families, and community members can apply here. Your contact information goes straight to the leadership team, not a public spreadsheet."
      />

      <section className="section-pad px-5">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <aside className="grid gap-6 lg:sticky lg:top-28">
            <div className="rounded-xl border-2 border-ink bg-ink p-6 text-shell shadow-[5px_5px_0_0_var(--color-signal)]">
              <UsersThree className="size-9 text-volt" weight="bold" />
              <h2 className="heading-md mt-5">What happens next</h2>
              <ol className="mt-6 grid gap-4 text-sm leading-relaxed text-shell/75">
                <li className="flex gap-3"><span className="mono-tag text-signal">01</span><span>Leadership reviews your application and contact details.</span></li>
                <li className="flex gap-3"><span className="mono-tag text-signal">02</span><span>A team leader follows up with current activities and onboarding information.</span></li>
                <li className="flex gap-3"><span className="mono-tag text-signal">03</span><span>Once active, you can report service activities and hours on this site.</span></li>
              </ol>
            </div>
            <div className="rounded-xl border-2 border-ink bg-sky p-6 shadow-[4px_4px_0_0_var(--color-ink)]">
              <LockKey className="size-7" weight="bold" />
              <h3 className="heading-sm mt-4">Contact details stay private</h3>
              <p className="copy mt-2 text-sm">Applications are visible only inside the leadership review desk. They are never added to the public member roster automatically.</p>
            </div>
            <div className="flex items-start gap-3 px-2 text-sm font-semibold text-ink/65">
              <CheckCircle className="mt-0.5 size-5 shrink-0 text-signal" weight="fill" />
              No Google account is required.
            </div>
          </aside>

          <MemberSignupForm />
        </div>
      </section>
    </>
  );
}
