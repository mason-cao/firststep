# First Step Team

Website for `mason-cao/firststep`: a youth-led nonprofit in Metro Atlanta.

## Stack

- Next.js 16 (App Router, static prerender) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Motion (scroll reveals, count-ups) + Lenis (smooth scrolling)
- Phosphor icons; League Spartan / Archivo / IBM Plex Mono / Shantell Sans via `next/font`

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Design

The "Field Day Poster" system: hi-vis orange, river blue, and deep petrol ink on
warm paper, with condensed poster type, ledger-style mono records, ticker-tape
marquees, and taped polaroid photo frames. See `DESIGN.md` for tokens and rules.

## Content and photos

All site copy and records live as typed data in `src/content/`. Dashed "photo slot"
frames across the site are placeholders: add real photos to `public/photos/` and
wire them up per `PHOTO_GUIDE.md`. The four images in `public/images` are generated
stand-ins awaiting real team photos.
