# First Step Team

Clean rebuild of the First Step Team website for `mason-cao/firststep`.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Notes

This repo intentionally excludes the old Stitch files, HTTrack cache, legacy Google Sites mirror, and prior Next.js rebuild. The old crawl and app data were used only as source material for the new typed content inventory.

The crawl's Google-hosted gallery image URLs reject direct access, so the first implementation uses four generated editorial placeholder photos in `public/images`. Replace those with exported real First Step photos when you have downloadable originals. See `PHOTO_GUIDE.md` for the upload format.
