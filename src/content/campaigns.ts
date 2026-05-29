export interface Campaign {
  name: string;
  description: string;
  details?: string;
  link?: string;
  stats?: string;
  links?: { label: string; url: string }[];
}

export const campaigns: Campaign[] = [
  {
    name: "One Degree Campaign",
    description:
      "Save energy, starting from a small step at home! Set thermostat 1 degree higher in summer, 1 degree lower in winter.",
    details: "As of April 2023, 80 individuals and 3 companies have signed up for the pledge.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdNapBkkOAPPm8PpY13_udOmH-DW89shLxxlEo91hC5tGjoWg/viewform",
  },
  {
    name: "Keep America Beautiful Adopt A Spot",
    description:
      "Find the link for your county, choose a spot to adopt, and start cleaning up trash. Available in DeKalb, Forsyth, North Fulton, Atlanta, and Gwinnett counties.",
    details: "The Lin Family (Atlanta) has already signed up.",
    links: [
      { label: "DeKalb County", url: "https://dekalbcountyga.gov/departments/beautification" },
      { label: "North Fulton", url: "https://keepnorthfultonbeautiful.org/adopt-a-road" },
      { label: "Forsyth County", url: "https://www.keepforsythcountybeautiful.org/adopt-a-road" },
      { label: "City of Atlanta", url: "https://www.atlantaga.gov/government/departments/public-works/office-of-solid-waste-services/adopt-a-spot-program" },
      { label: "Gwinnett County", url: "https://gwinnettcb.org/programs/adopt-a-road/" },
    ],
  },
  {
    name: "Water Warriors",
    description:
      "With the future of our waterways at stake, what would happen if each and every young person living within our watershed learned how to protect their local creeks, lakes, and rivers? The goal of Water Warriors is to inspire and empower student river advocates and help them find their own personal connection to the great outdoors, including the Chattahoochee River.",
    link: "https://chattahoochee.org/waterwarriors/",
  },
];
