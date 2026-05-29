import type { MetadataRoute } from "next";

const routes = ["", "/impact", "/activities", "/team", "/gallery", "/publications", "/resources", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.firststepteam.org${route}`,
    lastModified: new Date(),
  }));
}
