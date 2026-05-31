"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/content/gallery";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (active === null) return;
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % galleryImages.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Photo gallery"
        title="A visual record of service, performances, cleanups, and team life."
        description="The gallery is shaped as an immersive image wall with a keyboard-accessible lightbox for the team archive."
        motif="frames"
      />

      <section className="px-4 pb-24">
        <div className="page-shell columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, index) => (
            <Reveal key={src} delay={(index % 6) * 0.035} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setActive(index)}
                className="focus-ring group relative block w-full overflow-hidden rounded-[1.5rem] bg-mist text-left"
                aria-label={`Open gallery image ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`First Step Team gallery image ${index + 1}`}
                  width={900}
                  height={index % 3 === 0 ? 1120 : 760}
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 94vw"
                  className="h-auto w-full object-cover transition duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-ink/0 transition duration-700 group-hover:bg-ink/14" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink/94 p-4 text-shell"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
          >
            <button
              className="focus-ring absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-shell text-ink"
              onClick={() => setActive(null)}
              aria-label="Close gallery"
            >
              <X className="size-5" weight="bold" />
            </button>
            <button
              className="focus-ring absolute left-5 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-shell text-ink"
              onClick={() => setActive((active - 1 + galleryImages.length) % galleryImages.length)}
              aria-label="Previous image"
            >
              <ArrowLeft className="size-5" weight="bold" />
            </button>
            <button
              className="focus-ring absolute right-5 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-shell text-ink"
              onClick={() => setActive((active + 1) % galleryImages.length)}
              aria-label="Next image"
            >
              <ArrowRight className="size-5" weight="bold" />
            </button>
            <motion.div
              className="relative h-[82dvh] w-[min(100%,1080px)]"
              initial={reduceMotion ? false : { scale: 0.96, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 24 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={galleryImages[active]}
                alt={`First Step Team gallery image ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
