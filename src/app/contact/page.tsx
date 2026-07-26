import { EnvelopeSimple, InstagramLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Sticker } from "@/components/ui/Sticker";
import { contactEmail, instagramUrl } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Contact First Step Team by email or Instagram.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="07"
        eyebrow="Contact"
        title="Say hello. Take the first step."
        description="Apply to join online, email the team about a partnership, or follow the public work on Instagram."
      />

      <section className="section-pad px-5">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-xl border-2 border-ink bg-ink p-7 text-shell shadow-[6px_6px_0_0_var(--color-signal)] md:p-10">
              <div
                aria-hidden="true"
                className="halftone absolute -bottom-8 -right-8 size-48 rounded-full opacity-30"
              />
              <Sticker color="volt" rotate={-3}>
                We reply!
              </Sticker>
              <h2 className="display-lg mt-6 max-w-2xl">
                Ready to <span className="text-signal">join?</span> Start right here.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-shell/80">
                The member application sends your contact information directly to leadership.
                For partnerships and general questions, email still works best.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/join">
                  Join First Step
                </ButtonLink>
                <ButtonLink href={`mailto:${contactEmail}`} variant="light" external>
                  Email the Team
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08} rotate={2}>
              <a
                href={`mailto:${contactEmail}`}
                className="group block rounded-xl border-2 border-ink bg-shell p-6 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
              >
                <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-signal text-ink">
                  <EnvelopeSimple className="size-5" weight="bold" />
                </span>
                <h3 className="heading-sm mt-4">Email</h3>
                <p className="mono-data mt-1.5 break-all text-ink/60">{contactEmail}</p>
              </a>
            </Reveal>
            <Reveal delay={0.16} rotate={-2}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border-2 border-ink bg-sky p-6 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
              >
                <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-shell text-ink">
                  <InstagramLogo className="size-5" weight="bold" />
                </span>
                <h3 className="heading-sm mt-4">Instagram</h3>
                <p className="mono-data mt-1.5 text-ink/60">@first.step.team</p>
              </a>
            </Reveal>
            <Reveal delay={0.24} rotate={2}>
              <div className="rounded-xl border-2 border-ink bg-volt/50 p-6 shadow-[4px_4px_0_0_var(--color-ink)]">
                <span className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-shell text-ink">
                  <MapPin className="size-5" weight="bold" />
                </span>
                <h3 className="heading-sm mt-4">Location</h3>
                <p className="mono-data mt-1.5 text-ink/60">Metro Atlanta, Georgia</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="relative -mx-1 rotate-1 pb-16 pt-2">
        <Marquee
          items={["Say hello", "Join the crew", "Volunteer", "Partner with us"]}
          duration={30}
          className="border-y-2 border-ink bg-volt py-2.5 text-ink"
          itemClassName="font-display text-xl font-extrabold uppercase md:text-2xl"
        />
      </div>
    </>
  );
}
