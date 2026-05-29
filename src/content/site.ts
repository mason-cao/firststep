import {
  BookOpen,
  ChartLineUp,
  Drop,
  HandsPraying,
  Leaf,
  Megaphone,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export const contactEmail = "firststepteam2020@gmail.com";
export const instagramUrl = "https://www.instagram.com/first.step.team/";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/impact", label: "Impact" },
  { href: "/activities", label: "Activities" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/publications", label: "Publications" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export const impactStats = [
  { value: "250+", label: "Registered members" },
  { value: "300+", label: "Student and family volunteers" },
  { value: "240+", label: "Events organized" },
  { value: "$17.9k", label: "Raised for nonprofits" },
  { value: "3,000+", label: "Pounds of trash cleared" },
  { value: "35+", label: "Published articles and presentations" },
];

export const programs = [
  {
    title: "Clean Environment",
    label: "3k+ lbs in one cleanup",
    description:
      "River, lake, park, street, and neighborhood cleanups that turn local places into shared responsibility.",
    Icon: Leaf,
  },
  {
    title: "Service and Care",
    label: "$17.9k raised",
    description:
      "Food banks, senior performances, MedShare volunteering, bell ringing, and community support work.",
    Icon: HandsPraying,
  },
  {
    title: "Culture and Voice",
    label: "35+ works",
    description:
      "Public speaking, publications, cultural resources, team presentations, and youth leadership practice.",
    Icon: Megaphone,
  },
  {
    title: "Research and Data",
    label: "2025 cohort",
    description:
      "Microplastics mapping and public waterway data that make environmental problems easier to see.",
    Icon: Drop,
  },
];

export const evidenceLinks = [
  { href: "/activities", title: "Activity Ledger", description: "Chronological service records from 2020 through 2026.", Icon: ChartLineUp },
  { href: "/impact#microplastics", title: "Microplastics Data", description: "Public data from the Youth Climate Action Fund 2025 Atlanta Cohort.", Icon: Drop },
  { href: "/impact#awards", title: "Awards", description: "Volunteer and Shine A Light recognition preserved as proof.", Icon: Sparkle },
  { href: "/publications", title: "Publications", description: "Articles and presentations in English and Chinese.", Icon: BookOpen },
  { href: "/team", title: "Team", description: "Leadership, alumni, and the full member roster.", Icon: UsersThree },
];
