# First Step Team

Website for `mason-cao/firststep`: a youth-led nonprofit in Metro Atlanta.

## Stack

- Next.js 16 (App Router, static prerender) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Motion (scroll reveals, count-ups) + Lenis (smooth scrolling)
- Phosphor icons; League Spartan / Archivo / IBM Plex Mono / Shantell Sans via `next/font`
- PostgreSQL on Railway for private member applications and activity-hour approvals

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run db:init
```

## Member forms and leadership review

- `/join` saves new member applications and contact information.
- `/report-hours` saves one member's activity, service time, and evidence per report.
- `/leadership` is the private review desk for member intake and hours approval.

### Local configuration

Copy `.env.example` to `.env.local`. Set `DATABASE_URL` to a PostgreSQL
connection string, add the allowed `LEADERSHIP_EMAILS`, choose a strong
`LEADERSHIP_ACCESS_CODE`, and generate a long `AUTH_SECRET` with:

```bash
openssl rand -base64 48
```

When using Railway's public database URL locally, set `DATABASE_SSL=require`.
Then initialize the tables with `npm run db:init`.

### Railway deployment

1. Create a Railway project and add a PostgreSQL service.
2. Add this GitHub repository as the web service.
3. On the web service's **Variables** tab, add a `DATABASE_URL` reference to the
   PostgreSQL service's `DATABASE_URL`.
4. Add `LEADERSHIP_EMAILS`, `LEADERSHIP_ACCESS_CODE`, and `AUTH_SECRET` to the
   web service. Do not add `DATABASE_SSL` when using Railway's private network.
5. Deploy and generate a public domain from the web service's Networking tab.

`railway.json` runs the build, applies `db/schema.sql` before each deployment,
starts Next.js, and checks `/api/health` before Railway sends traffic to it.

## Design

The "Field Day Poster" system: hi-vis orange, river blue, and deep petrol ink on
warm paper, with condensed poster type, ledger-style mono records, ticker-tape
marquees, and taped polaroid photo frames.

## Content and photos

All site copy and records live as typed data in `src/content/`. Dashed "photo slot"
frames across the site are placeholders: add real photos to `public/photos/` and
connect them to the relevant content records. Approved photos in `public/photos/`
supply the home page, Impact page, gallery, leadership cards, official navbar mark,
and social sharing preview. Temporary generated image files in `public/images/` are
not used.
