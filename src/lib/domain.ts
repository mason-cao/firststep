// Canonical public address for the site. Metadata, the sitemap, and robots.txt
// use it, and next.config.ts redirects the other hosts below to it.
export const siteHost = "firststepatlanta.org";
export const siteUrl = `https://${siteHost}`;

// Hosts that should permanently forward to the canonical address once their DNS
// points at this app. Old Google Sites paths are then remapped by next.config.ts.
export const redirectHosts = [
  "www.firststepatlanta.org",
  "firststepteam.org",
  "www.firststepteam.org",
];
