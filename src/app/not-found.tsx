import { ButtonLink } from "@/components/ui/Button";
import { Sticker } from "@/components/ui/Sticker";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32 md:pt-44">
      <div
        aria-hidden="true"
        className="halftone absolute -right-12 top-16 hidden size-72 rounded-full opacity-50 lg:block"
      />
      <div className="page-shell relative">
        <Sticker color="signal" rotate={-4} className="text-base">
          404
        </Sticker>
        <h1 className="display-hero mt-6 max-w-4xl">
          Wrong <span className="text-signal">turn.</span>
        </h1>
        <p className="copy-lg mt-7 max-w-xl">
          This page is not in the current impact record. Start from the homepage or
          explore the archive.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Go Home</ButtonLink>
          <ButtonLink href="/impact" variant="paper">
            Explore Impact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
