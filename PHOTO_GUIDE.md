# First Step Photo Guide

Put real website photos in `public/photos/`.

## Best Format

- Use JPG or WebP for photos.
- Keep files under about 1 MB when possible.
- Resize wide event photos to roughly 1800-2400 px wide.
- Use clear names: `2025-shore-sweep-01.jpg`, `2024-cff-walk-01.webp`, `team-leadership-2026.jpg`.
- Do not upload photos that show private forms, personal phone numbers, private emails, or waiver documents.

## Where the photo slots are

Every dashed "Photo slot" frame on the site is a placeholder waiting for a real image:

- **Gallery page**: edit `src/content/gallery.ts`. Add entries to `galleryPhotos`
  (`{ src: "/photos/....jpg", caption: "..." }`) and remove the matching label from
  `galleryPlaceholders`.
- **Home + Impact pages**: `PhotoSlot` components in `src/app/page.tsx` and
  `src/app/impact/page.tsx`. Give an empty slot a `src` and `alt` to fill it.
- **Team page**: leader avatars show initials until headshots exist; swap the dashed
  circle for an `Image` when you have photos.

Example:

```ts
export const galleryPhotos = [
  { src: "/photos/2025-shore-sweep-01.jpg", caption: "Shore sweep on Lake Lanier" },
  { src: "/photos/2024-cff-walk-01.webp", caption: "CFF Great Strides walk" },
];
```

Use horizontal group/action photos for the hero and gallery first. Portraits and
smaller vertical photos work better for the founder quote and team sections.
