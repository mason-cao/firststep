import Image from "next/image";
import { Camera } from "@phosphor-icons/react/dist/ssr";

type PhotoSlotProps = {
  src?: string;
  alt?: string;
  label: string;
  hint?: string;
  aspect?: "landscape" | "portrait" | "square";
  rotate?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const aspects = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

/**
 * A taped polaroid frame. With `src` it renders the photo; without it, a
 * dashed "add photo" slot pointing at public/photos/ (see PHOTO_GUIDE.md).
 */
export function PhotoSlot({
  src,
  alt = "",
  label,
  hint = "Drop a photo into public/photos",
  aspect = "landscape",
  rotate = 0,
  className = "",
  sizes = "(min-width: 1024px) 32rem, 94vw",
  priority = false,
}: PhotoSlotProps) {
  return (
    <figure
      className={`relative rounded-lg border-2 border-ink bg-shell p-2.5 pb-2 shadow-[5px_5px_0_0_var(--color-ink)] ${className}`}
      style={rotate ? { rotate: `${rotate}deg` } : undefined}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-5 z-10 h-5 w-16 -rotate-6 rounded-[2px] border border-ink/15 bg-volt/80"
      />
      <span
        aria-hidden="true"
        className="absolute -top-2.5 right-5 z-10 h-5 w-16 rotate-6 rounded-[2px] border border-ink/15 bg-sky/90"
      />

      <div className={`relative overflow-hidden rounded-md ${aspects[aspect]}`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="grid size-full content-center justify-items-center gap-2 border-2 border-dashed border-ink/30 bg-paper p-4 text-center">
            <span className="grid size-11 place-items-center rounded-full border-2 border-ink bg-shell text-ink">
              <Camera className="size-5" weight="bold" />
            </span>
            <span className="mono-tag text-ink/60">Photo slot</span>
            <span className="max-w-44 text-xs leading-snug text-ink/45">{hint}</span>
          </div>
        )}
      </div>

      <figcaption className="marker-note px-1 pt-2 text-sm text-ink/75">
        {label}
      </figcaption>
    </figure>
  );
}
