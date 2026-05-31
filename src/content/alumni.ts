export interface Alumnus {
  name: string;
  role?: string;
  years?: string;
  classYear: number;
}

export const alumni: Alumnus[] = [
  // Class of 2024
  { name: "Annie Lin", role: "Founder and President", years: "2020-2024", classYear: 2024 },
  { name: "Grace Ling", role: "Treasurer and VP of MedShare Volunteering", years: "2022-2024", classYear: 2024 },
  { name: "Jason Zhang", years: "2022-2024", classYear: 2024 },
  { name: "Carol Li", role: "VP of Food Bank Volunteering", years: "2022-2024", classYear: 2024 },
  { name: "Rachel Li", role: "VP of Culture and Diversity", years: "2023-2024", classYear: 2024 },
  { name: "Karen Yan", role: "Founding member", classYear: 2024 },
  // Class of 2025
  { name: "Evelyn Jin", classYear: 2025 },
  { name: "Michelle Hu", classYear: 2025 },
  { name: "Emily Song", role: "Co-President", years: "2024-2025", classYear: 2025 },
  { name: "Claire Jing", role: "VP of Fundraising CFF", years: "2022-2025", classYear: 2025 },
  { name: "Luke Xu", role: "VP of Performance Team", years: "2024-2025", classYear: 2025 },
  { name: "William Xu", role: "First Step Member", years: "2023-2025", classYear: 2025 },
];
