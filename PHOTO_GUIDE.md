# First Step Photo Guide

The site does not have a browser-based uploader. Add approved image files to
`public/photos/`, then connect each file to its placement in the code.

## Add a Photo

1. Copy or drag the image into `public/photos/`.
2. Give it a lowercase, descriptive filename with no spaces, such as
   `cleanup-crew-2026.jpg`.
3. Reference it on the site as `/photos/cleanup-crew-2026.jpg`. The web path starts
   at `public`, so the word `public` is not included.
4. Add specific alt text that describes what is visible in the photo.

Run `npm run dev` and open the affected page to check the crop before publishing.

## Best Format

- Use JPG or WebP for photos.
- Keep files under about 1 MB when possible.
- Resize wide event photos to roughly 1800-2400 px wide.
- Use clear names: `2025-shore-sweep-01.jpg`, `2024-cff-walk-01.webp`, `team-leadership-2026.jpg`.
- Do not upload photos that show private forms, personal phone numbers, private emails, or waiver documents.

## Fill a Home or Impact Photo Slot

Open `src/app/page.tsx` or `src/app/impact/page.tsx`, find the `PhotoSlot` by its
`label`, then add `src` and `alt`:

```tsx
<PhotoSlot
  src="/photos/cleanup-crew-2026.jpg"
  alt="First Step Team volunteers collecting trash from the riverbank"
  label="Cleanup crew on the water"
/>
```

Leave the existing `rotate`, `sizes`, `aspect`, and `priority` settings in place.

## Fill a Gallery Slot

Open `src/content/gallery.ts`. Add the photo to `galleryPhotos`:

```ts
export const galleryPhotos = [
  {
    src: "/photos/shore-sweep-2025.jpg",
    alt: "First Step volunteers holding filled cleanup bags at Lake Lanier",
    caption: "Shore sweep on Lake Lanier",
  },
];
```

Use `fit: "contain"` for unusually wide group photos when a 4:3 crop would remove
people from the edges.

## Fill a Leadership Photo Slot

Open `src/content/leadership.ts`, find the leader, and add a `photos` array:

```ts
{
  name: "Dennis Xu",
  role: "Co-President & VP of First Step Fundraising and Entrepreneurship",
  photos: [
    {
      src: "/photos/leadership-dennis-xu.jpg",
      alt: "Dennis Xu, First Step Team co-president",
    },
  ],
  responsibilities: [
    // Keep the existing responsibilities here.
  ],
}
```

The array supports two portraits for a shared leadership card, as used for Nick Xu
and Mitchell Kuang. Until `photos` is added, the card shows a dashed placeholder.

## Current Placeholder Locations

All submitted event and portrait files are now connected to the site:

- **Home page**: river cleanup, research presentation, team rafting, field sampling,
  and founder portrait.
- **Impact page**: volunteer recognition and laboratory research.
- **Gallery page**: all 45 submitted event and activity photos.
- **Team page**: all submitted current-leadership portraits. Mathew Jiang remains
  the only leadership photo placeholder because no matching portrait was supplied.

Use horizontal group/action photos for the hero and gallery first. Portraits and
smaller vertical photos work better for the founder quote and team sections.
