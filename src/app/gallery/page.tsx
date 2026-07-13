"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { galleryPhotos, galleryPlaceholders } from "@/content/gallery";

const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 2];

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (active === null) return;
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % galleryPhotos.length);
      if (event.key === "ArrowLeft")
        setActive((active - 1 + galleryPhotos.length) % galleryPhotos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <PageHero
        index="04"
        eyebrow="Photo gallery"
        title="The photo wall."
        description="Service days, performances, cleanups, and team life, taped up as the visual record. Empty frames are waiting for your uploads."
      />

      <section className="px-5 pb-24 pt-14 md:pt-20">
        <div className="page-shell grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((photo, index) => (
            <Reveal
              key={photo.src}
              delay={(index % 6) * 0.05}
              rotate={rotations[index % rotations.length] * 2}
            >
              <button
                onClick={() => setActive(index)}
                className="group block w-full text-left"
                aria-label={`Open photo: ${photo.caption}`}
              >
                <figure
                  className="relative rounded-lg border-2 border-ink bg-shell p-2.5 pb-2 shadow-[5px_5px_0_0_var(--color-ink)] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-0"
                  style={{ rotate: `${rotations[index % rotations.length]}deg` }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 left-5 z-10 h-5 w-16 -rotate-6 rounded-[2px] border border-ink/15 bg-volt/80"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(min-width: 1024px) 30rem, (min-width: 640px) 45vw, 94vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="marker-note px-1 pt-2 text-sm text-ink/75">
                    {photo.caption}
                  </figcaption>
                </figure>
              </button>
            </Reveal>
          ))}

          {galleryPlaceholders.map((label, index) => (
            <Reveal
              key={label}
              delay={((index + galleryPhotos.length) % 6) * 0.05}
              rotate={rotations[(index + 3) % rotations.length] * 2}
            >
              <PhotoSlot
                label={label}
                hint="Add this photo to public/photos and list it in gallery.ts"
                rotate={rotations[(index + 3) % rotations.length]}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4 text-shell"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery photo viewer"
          >
            <button
              className="absolute right-5 top-5 grid size-12 place-items-center rounded-md border-2 border-ink bg-shell text-ink shadow-[3px_3px_0_0_var(--color-signal)]"
              onClick={() => setActive(null)}
              aria-label="Close gallery"
            >
              <X className="size-5" weight="bold" />
            </button>
            <button
              className="absolute left-5 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-md border-2 border-ink bg-shell text-ink shadow-[3px_3px_0_0_var(--color-signal)]"
              onClick={() => setActive((active - 1 + galleryPhotos.length) % galleryPhotos.length)}
              aria-label="Previous photo"
            >
              <ArrowLeft className="size-5" weight="bold" />
            </button>
            <button
              className="absolute right-5 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-md border-2 border-ink bg-shell text-ink shadow-[3px_3px_0_0_var(--color-signal)]"
              onClick={() => setActive((active + 1) % galleryPhotos.length)}
              aria-label="Next photo"
            >
              <ArrowRight className="size-5" weight="bold" />
            </button>
            <motion.figure
              key={active}
              className="w-[min(100%,1000px)]"
              initial={reduceMotion ? false : { scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative h-[74dvh]">
                <Image
                  src={galleryPhotos[active].src}
                  alt={galleryPhotos[active].caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="marker-note mt-4 text-center text-lg text-shell/85">
                {galleryPhotos[active].caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
