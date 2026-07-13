# First Step Team Design System

## Direction
"Field Day Poster." The identity comes from the team's real world: hi-vis vests at river
cleanups, community flyers stapled to poles, taped-up photo walls, and a public ledger of
service records. Loud like a poster, disciplined like a record book.

## Color Tokens
- `paper`: `#FAF4E7`: bright warm page field.
- `shell`: `#FFFDF6`: raised surface (cards, polaroid frames).
- `ink`: `#12303A`: deep river petrol. Text and dark poster sections. Never pure black.
- `river`: `#1D6FD1`: vivid civic blue. Water, research, links, big spot fields.
- `sky`: `#D8EAF7`: pale river tint for quiet section fields.
- `signal`: `#FF5320`: hi-vis safety orange. CTAs, ticker tape, loud moments.
- `volt`: `#DCE94B`: safety-vest chartreuse. Small stickers and highlights on light
  surfaces only; never body text, never paired with dark backgrounds at size.

## Typography
- Display: `League Spartan` ExtraBold. Bold geometric, round and friendly, no quirky
  glyphs. Sentence case, tight leading, slight negative tracking. Headlines stay the
  loudest element on every page. Ticker tape and stickers remain uppercase.
- Body: `Archivo` (variable). Sturdy grotesk, 400-700.
- Ledger: `IBM Plex Mono`: dates, record numbers, eyebrows ("REC. 041: 2025").
  Everything that reads as "public record" is set in mono.
- Marker: `Shantell Sans`: handwritten annotations on polaroids and stickers only.

## Surfaces and Borders
Flat spot-color fields, `2px` ink borders, hard offset shadows
(`0.3rem 0.3rem 0 ink`), small radii (`0.4-1rem`). Stickers and polaroids get slight
rotations (±1-3°). No glassmorphism, no soft blur shadows, no gradients as decoration.

## Signature
The impact ticker tape: full-bleed, slightly rotated marquee bands of real impact
records set in the display font on signal orange (or ink), recurring across pages like crew tape.
Photos live in taped polaroid frames; empty slots render as dashed "add photo" frames
pointing at `public/photos/` (see PHOTO_GUIDE.md).

## Motion
Marquee tape loops, headline rise-ins on load, scroll reveals with slight rotation
settle, metric count-ups, sticker wiggle on hover, Lenis smooth scrolling. All motion
respects `prefers-reduced-motion`.

## Interaction
Buttons are chunky bordered blocks with offset shadows that press flat on `:active`.
Primary CTA stays `Explore Impact`; contact path is `firststepteam2020@gmail.com`.
Focus states are always visible (2px signal outline).
