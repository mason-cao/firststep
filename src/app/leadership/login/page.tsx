import { LockKey, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { redirect } from "next/navigation";
import { getLeadershipSession, leadershipAuthConfigured } from "@/lib/auth";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Leadership Sign In",
  description: "Private First Step Team leadership access.",
  robots: { index: false, follow: false },
};

const errorMessages: Record<string, string> = {
  invalid: "That email and access code combination was not recognized.",
  "rate-limit": "Too many sign-in attempts. Wait 15 minutes and try again.",
  configuration: "Leadership sign-in has not been configured on this deployment yet.",
};

export default async function LeadershipLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await getLeadershipSession();
  if (session) redirect("/leadership");

  const { error } = await searchParams;
  const configured = leadershipAuthConfigured();

  return (
    <section className="min-h-[80vh] px-5 pb-24 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <div className="rounded-xl border-2 border-ink bg-ink p-7 text-shell shadow-[6px_6px_0_0_var(--color-signal)] md:p-9">
          <span className="grid size-12 place-items-center rounded-lg border-2 border-shell/25 bg-signal text-ink">
            <LockKey className="size-6" weight="bold" />
          </span>
          <p className="eyebrow mt-8 text-shell/65">Private workspace</p>
          <h1 className="display-lg mt-4">Leadership review desk</h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-shell/70">
            Review new member applications, verify supporting evidence, and approve or reject submitted service hours.
          </p>
        </div>

        <form method="post" action="/api/leadership/login" className="rounded-xl border-2 border-ink bg-shell p-7 shadow-[6px_6px_0_0_var(--color-ink)] md:p-9">
          <p className="mono-tag text-signal">Authorized team members only</p>
          <h2 className="heading-md mt-3">Sign in</h2>

          {(error || !configured) && (
            <div className="mt-6 flex items-start gap-3 rounded-lg border-2 border-signal bg-signal/10 p-4 text-sm font-semibold" role="alert">
              <WarningCircle className="mt-0.5 size-5 shrink-0 text-signal" weight="fill" />
              <span>{errorMessages[error || "configuration"] || errorMessages.invalid}</span>
            </div>
          )}

          <div className="mt-7 grid gap-5">
            <label className="block text-sm font-bold">
              Leadership email
              <input
                name="email"
                type="email"
                autoComplete="username"
                required
                disabled={!configured}
                className="mt-2 w-full rounded-lg border-2 border-ink/25 bg-paper px-4 py-3 text-base outline-none transition-colors focus:border-signal disabled:cursor-not-allowed disabled:opacity-50"
              />
            </label>
            <label className="block text-sm font-bold">
              Leadership access code
              <input
                name="accessCode"
                type="password"
                autoComplete="current-password"
                required
                disabled={!configured}
                className="mt-2 w-full rounded-lg border-2 border-ink/25 bg-paper px-4 py-3 text-base outline-none transition-colors focus:border-signal disabled:cursor-not-allowed disabled:opacity-50"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={!configured}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-ink bg-signal px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_0_var(--color-ink)] transition-[transform,box-shadow,opacity] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-45"
          >
            Open review desk
          </button>
          <p className="mt-5 text-xs leading-relaxed text-ink/50">
            Sessions expire after 12 hours. Contact the current technology or operations lead if the access code needs to be changed.
          </p>
        </form>
      </div>
    </section>
  );
}
