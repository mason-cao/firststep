export interface Cause {
  name: string;
  url: string;
  description?: string;
}

export const causes: Cause[] = [
  { name: "Chattahoochee Riverkeeper", url: "https://chattahoochee.org/", description: "Protecting the Chattahoochee River and its watershed for people, fish, and wildlife." },
  { name: "Cystic Fibrosis Foundation", url: "https://www.cff.org/", description: "Funding research and drug development to improve the lives of those with cystic fibrosis." },
  { name: "The Salvation Army", url: "https://salvationarmyatlanta.org/", description: "Providing shelter, meals, and support to those in need in the Atlanta area." },
  { name: "Clean Coast", url: "https://cleancoast.org/mission.ejs?category", description: "Protecting coastal environments and promoting ocean conservation." },
  { name: "Sino-USA Next Generation Foundation", url: "http://www.fornextgen.org", description: "Supporting the next generation of Asian American community leaders." },
  { name: "Lake Lanier Association", url: "https://lakelanier.org/our-work/clean-lake/shore-sweep/", description: "Preserving Lake Lanier through shore sweeps and conservation efforts." },
];
