import Link from "next/link";
import { EnvelopeSimple, InstagramLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { contactEmail, instagramUrl, navItems } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-shell">
      <Marquee
        items={["Take the first step", "Join the crew", "Metro Atlanta", "Est. 2020"]}
        duration={28}
        className="border-b-2 border-shell/20 bg-signal py-2.5 text-ink"
        itemClassName="font-display text-xl font-extrabold uppercase md:text-2xl"
      />

      <div className="page-shell py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="eyebrow text-shell/70">Everything begins with a first step</span>
            <h2 className="display-lg mt-5 max-w-2xl">
              Follow the work.
              <br />
              <span className="text-signal">Take the next step.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-shell/70">
              Review the impact record, follow new projects, or email the team to get
              involved with service across Metro Atlanta.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/impact">Explore Impact</ButtonLink>
              <ButtonLink href="/join" variant="light">
                Join First Step
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mono-tag text-signal">Navigate</h3>
              <ul className="mt-5 grid gap-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="animated-underline text-sm font-bold uppercase tracking-wider text-shell/75 hover:text-shell"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mono-tag text-signal">Contact</h3>
              <div className="mt-5 grid gap-3.5 text-sm text-shell/75">
                <a href={`mailto:${contactEmail}`} className="flex items-start gap-3 hover:text-shell">
                  <EnvelopeSimple className="mt-0.5 size-5 shrink-0 text-volt" weight="bold" />
                  <span className="break-all">{contactEmail}</span>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-shell"
                >
                  <InstagramLogo className="mt-0.5 size-5 shrink-0 text-volt" weight="bold" />
                  <span>@first.step.team</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-volt" weight="bold" />
                  <span>Metro Atlanta, Georgia</span>
                </div>
                <Link href="/leadership/login" className="mono-tag pt-2 text-shell/50 hover:text-shell">
                  Leadership sign in
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t-2 border-shell/15 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="mono-tag text-shell/50">
            © {new Date().getFullYear()} First Step Team · Youth-led community impact
          </span>
          <span className="mono-tag text-shell/50">Website by Mason Cao</span>
        </div>
      </div>
    </footer>
  );
}
