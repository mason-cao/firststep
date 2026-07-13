import { Sticker } from "@/components/ui/Sticker";

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ index, eyebrow, title, description, children }: PageHeroProps) {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div
          aria-hidden="true"
          className="halftone absolute -right-10 -top-10 hidden size-64 rounded-full opacity-60 lg:block"
        />
        <div className="page-shell relative">
          <div className="flex flex-wrap items-center gap-4">
            <Sticker color="signal" rotate={-4} className="text-base">
              {index}
            </Sticker>
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h1 className="display-xl max-w-5xl">{title}</h1>
            <p className="copy-lg max-w-xl lg:pb-2">{description}</p>
          </div>
          {children}
        </div>
      </section>
      <div className="tape-seam" aria-hidden="true" />
    </>
  );
}
