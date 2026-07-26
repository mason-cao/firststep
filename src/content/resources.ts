export interface Resource {
  title: string;
  url: string;
  category: "document" | "culture" | "research" | "partner";
  description?: string;
}

export const resources: Resource[] = [
  {
    title: "Report Activity & Hours",
    url: "/report-hours",
    category: "document",
    description: "Members submit activities, individual service time, and evidence for leadership approval.",
  },
  {
    title: "Join First Step",
    url: "/join",
    category: "document",
    description: "Apply to join the team without leaving the First Step website.",
  },
  {
    title: "Information for Parents",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vRlO49lRmkKXxKU7hjQ8lBRbc3Ics9t9Zh6j524bsDxC4bnOoil_GSWcSG_92gTug/pub?start=false&loop=false&delayms=3000&slide=id.p1",
    category: "document",
    description: "Overview for families learning how First Step Team works.",
  },
  {
    title: "Microplastics Mapping in Natural Waters",
    url: "https://sites.google.com/view/microplastics-ycaf2025/home",
    category: "research",
    description: "Youth Climate Action Fund 2025 project site and public data record.",
  },
  {
    title: "Chinese Symbols",
    url: "https://drive.google.com/file/d/1PDAWtxMA8rVzPw2eAnx-6V7mBt8QAuLg/preview",
    category: "culture",
    description: "Culture and diversity learning material.",
  },
  {
    title: "Chinese Food",
    url: "https://drive.google.com/file/d/1DR6QQm7o2PwdxJ0HqaC9mOOhCrUO5DGV/preview",
    category: "culture",
    description: "Culture and diversity learning material.",
  },
  {
    title: "Four Inventions",
    url: "https://drive.google.com/file/d/1i93OwjQPxmfOU_LViOYfGnQfuPkCj04W/preview",
    category: "culture",
    description: "Culture and diversity learning material.",
  },
  {
    title: "Musical Instruments",
    url: "https://drive.google.com/file/d/1rXHZ-N_0pt5dt9PGFljJwB24izsG1P8j/preview",
    category: "culture",
    description: "Culture and diversity learning material.",
  },
  {
    title: "Animes and Games",
    url: "https://drive.google.com/file/d/1s7PBJxGqQbdD3fFqWwKNIV_ufaPn7Ykq/preview",
    category: "culture",
    description: "Culture and diversity learning material.",
  },
  {
    title: "DeKalb County Beautification",
    url: "https://dekalbcountyga.gov/departments/beautification",
    category: "partner",
    description: "Adopt-a-spot and beautification information for DeKalb County.",
  },
  {
    title: "Keep North Fulton Beautiful Adopt-a-Road",
    url: "https://keepnorthfultonbeautiful.org/adopt-a-road",
    category: "partner",
    description: "Adopt-a-road information for North Fulton.",
  },
  {
    title: "Keep Forsyth County Beautiful Adopt-a-Road",
    url: "https://www.keepforsythcountybeautiful.org/adopt-a-road",
    category: "partner",
    description: "Adopt-a-road information for Forsyth County.",
  },
  {
    title: "City of Atlanta Adopt-a-Spot",
    url: "https://www.atlantaga.gov/government/departments/public-works/office-of-solid-waste-services/adopt-a-spot-program",
    category: "partner",
    description: "Adopt-a-Spot program from Atlanta Public Works.",
  },
  {
    title: "Gwinnett Clean & Beautiful Adopt-a-Road",
    url: "https://gwinnettcb.org/programs/adopt-a-road/",
    category: "partner",
    description: "Adopt-a-road information for Gwinnett County.",
  },
];
