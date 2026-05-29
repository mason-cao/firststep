import { EnvelopeSimple, InstagramLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { Reveal } from "@/components/ui/Reveal";
import { contactEmail, instagramUrl } from "@/content/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact First Step Team by email or Instagram.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a clear message, and the team can help with the next step."
        description="Families, students, and community partners can contact First Step Team by email. Instagram is available for public updates."
      />

      <section className="px-4 pb-24">
        <div className="page-shell grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-[1.7rem] bg-ink p-7 text-shell lg:col-span-2">
            <EnvelopeSimple className="size-10 text-harvest" weight="duotone" />
            <h2 className="display-lg mt-8 max-w-3xl">Email is the main join and contact path.</h2>
            <p className="mt-6 max-w-2xl text-shell/70">
              Include your name, student grade if relevant, and what kind of service or collaboration you are interested in.
            </p>
            <div className="mt-8">
              <PrimaryLink href={`mailto:${contactEmail}`} external>
                Email First Step
              </PrimaryLink>
            </div>
          </Reveal>

          <Reveal className="grid gap-4">
            <a href={`mailto:${contactEmail}`} className="rounded-[1.5rem] bg-shell p-6">
              <EnvelopeSimple className="size-8 text-moss" weight="duotone" />
              <h3 className="mt-6 font-display text-3xl font-extrabold">Email</h3>
              <p className="copy mt-2 break-words text-sm">{contactEmail}</p>
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] bg-mist p-6">
              <InstagramLogo className="size-8 text-moss" weight="duotone" />
              <h3 className="mt-6 font-display text-3xl font-extrabold">Instagram</h3>
              <p className="copy mt-2 text-sm">@first.step.team</p>
            </a>
            <div className="rounded-[1.5rem] bg-shell p-6">
              <MapPin className="size-8 text-moss" weight="duotone" />
              <h3 className="mt-6 font-display text-3xl font-extrabold">Location</h3>
              <p className="copy mt-2 text-sm">Metro Atlanta, Georgia</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
