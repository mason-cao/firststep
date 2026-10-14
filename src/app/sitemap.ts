import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/domain";

const routes = [
  "",
  "/impact",
  "/activities",
  "/team",
  "/gallery",
  "/publications",
  "/resources",
  "/contact",
  "/join",
  "/report-hours",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
