export interface GalleryPhoto {
  src: string;
  caption: string;
}

// Add real photos to public/photos/ and list them here (see PHOTO_GUIDE.md).
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/service-cleanup.png", caption: "River cleanup crew" },
  { src: "/images/culture-service.png", caption: "Culture and service day" },
  { src: "/images/research-water.png", caption: "Water sampling for microplastics" },
  { src: "/images/donation-packing.png", caption: "Packing donations" },
];

// Labeled empty slots shown on the gallery page until real photos replace them.
export const galleryPlaceholders: string[] = [
  "Shore sweep on Lake Lanier",
  "CFF Great Strides walk",
  "Senior home performance",
  "Food bank shift",
  "Lemonade stand fundraiser",
  "MedShare volunteering",
  "Speech night",
  "Team celebration",
];
