import Link from "next/link";
import { EnvelopeSimple, InstagramLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { contactEmail, instagramUrl, navItems } from "@/content/site";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

export function Footer() {
  return (
    <footer className="bg-ink text-shell">
      <div className="page-shell py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="eyebrow border-shell/18 text-shell/72">Everything begins with a First Step</span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.06] md:text-5xl">
              Follow the work. Take the next step.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-shell/68">
              Review the impact record, follow new projects, or email the team to get involved with service across Metro Atlanta.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryLink href="/impact">Explore Impact</PrimaryLink>
              <PrimaryLink href={`mailto:${contactEmail}`} variant="outline" external>
                Email First Step
              </PrimaryLink>
            </div>
          </div>

          <div className="grid gap-8 border-t border-shell/12 pt-8 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
            <div>
              <h3 className="font-display text-xl font-bold">Navigate</h3>
              <ul className="mt-4 grid gap-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="animated-underline text-shell/70 hover:text-shell">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold">Contact</h3>
              <div className="mt-4 grid gap-3 text-sm text-shell/70">
                <a href={`mailto:${contactEmail}`} className="group flex items-start gap-3 hover:text-shell">
                  <EnvelopeSimple className="mt-1 size-5 text-harvest" />
                  <span>{contactEmail}</span>
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 hover:text-shell">
                  <InstagramLogo className="mt-1 size-5 text-harvest" />
                  <span>@first.step.team</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 text-harvest" />
                  <span>Metro Atlanta, Georgia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-shell/12 pt-5 text-xs text-shell/46 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} First Step Team. Youth-led community impact in Metro Atlanta.</span>
          <span>Website by Mason Cao.</span>
        </div>
      </div>
    </footer>
  );
}
