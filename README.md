# First Step Team

Official website of First Step Team, a youth-led nonprofit in Metro Atlanta:
**[firststepatlanta.org](https://firststepatlanta.org)**

Since 2020, members have organized 250+ events and raised $18k+ for nonprofits
through cleanups, food bank service, senior performances, fundraising, and
environmental research.

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
5. Deploy, then connect the custom domain (below).

`railway.json` runs the build, applies `db/schema.sql` before each deployment,
starts Next.js, and checks `/api/health` before Railway sends traffic to it.

### Domain

The canonical address is `https://firststepatlanta.org`, set once in
`src/lib/domain.ts`. Page metadata, social previews, `sitemap.xml`, and
`robots.txt` all build their URLs from it.

1. In the Railway web service, open **Settings → Networking → Custom Domain** and
   add both `firststepatlanta.org` and `www.firststepatlanta.org`.
2. At the domain registrar, add the DNS records Railway shows for each. The apex
   domain needs a provider that supports CNAME flattening or ALIAS/ANAME records
   (Cloudflare, for example).
3. Wait for Railway to mark both domains as verified and issue certificates.

Requests to `www.firststepatlanta.org`, `firststepteam.org`, or
`www.firststepteam.org` permanently redirect to the canonical domain with the
same path, so old links keep working once those hosts point at this service.
Legacy Google Sites paths such as `/members-leadership` and `/contact-us` are
then remapped to their new pages by the redirects in `next.config.ts`.

Leadership sign-in cookies are tied to the host, so leaders signed in on the
Railway-provided domain need to sign in again on the custom domain.

## Design

The "Field Day Poster" system: hi-vis orange, river blue, and deep petrol ink on
warm paper, with condensed poster type, ledger-style mono records, ticker-tape
marquees, and taped polaroid photo frames.

## Content and photos

All site copy and records live as typed data in `src/content/`. Headline numbers
(members, events, money raised) are in `src/content/site.ts`, and the activity
ledger is in `src/content/activities.ts`, newest first. Dashed "photo slot"
frames across the site are placeholders: add real photos to `public/photos/` and
connect them to the relevant content records. Approved photos in `public/photos/`
supply the home page, Impact page, gallery, leadership cards, official navbar mark,
and social sharing preview. Temporary generated image files in `public/images/` are
not used.
