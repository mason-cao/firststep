# First Step Photo Guide

Put real website photos in `public/photos/`.

## Best Format

- Use JPG or WebP for photos.
- Keep files under about 1 MB when possible.
- Resize wide event photos to roughly 1800-2400 px wide.
- Use clear names: `2025-shore-sweep-01.jpg`, `2024-cff-walk-01.webp`, `team-leadership-2026.jpg`.
- Do not upload photos that show private forms, personal phone numbers, private emails, or waiver documents.

## How To Replace Placeholders

1. Add the image files to `public/photos/`.
2. Open `src/content/gallery.ts`.
3. Replace the current `/images/...` paths with `/photos/...` paths.

Example:

```ts
export const galleryImages = [
  "/photos/2025-shore-sweep-01.jpg",
  "/photos/2024-cff-walk-01.webp",
  "/photos/team-leadership-2026.jpg",
];
```

Use horizontal group/action photos for the hero and gallery first. Portraits and smaller vertical photos work better inside team or activity detail sections later.
