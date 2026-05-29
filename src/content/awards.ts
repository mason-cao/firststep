export interface AwardCategory {
  category: string;
  winners: { name: string; award?: string }[];
}

export interface AwardYear {
  year: number;
  shineALight: AwardCategory[];
  pvsa?: string[];
}

export const awards: AwardYear[] = [
  {
    year: 2026,
    shineALight: [
      {
        category: "1st Grade - 3rd Grade",
        winners: [
          { name: "Leo Wang", award: "Rising Star Award" },
          { name: "Belina Ge", award: "Voice Of Impact Award" },
        ],
      },
      {
        category: "4th Grade - 5th Grade",
        winners: [
          { name: "Benjamin Lu", award: "3rd Place" },
          { name: "Abigail Cai", award: "Most Memorable Voice Award" },
        ],
      },
      {
        category: "Middle School",
        winners: [
          { name: "Blair Zhu", award: "2nd Place" },
          { name: "Shiou Li", award: "Rising Star Award" },
          { name: "Michael Chen Foley", award: "Most Memorable Speech Award" },
          { name: "Jolin Zhang", award: "Most Confidence On Stage Award" },
        ],
      },
      {
        category: "High School",
        winners: [
          { name: "Sophie Zhou", award: "2nd Place" },
          { name: "Mitchell Kuang", award: "Most Memorable Speech Award" },
          { name: "Richard Li", award: "Best Stage Presence Award" },
          { name: "Andrew Kuang", award: "Inspiring Voice Award" },
          { name: "Eric Lin", award: "Voice of Impact Award" },
        ],
      },
    ],
  },
  {
    year: 2024,
    shineALight: [
      {
        category: "Elementary School 4th-5th Grade",
        winners: [
          { name: "Jolin Zhang", award: "3rd Place" },
          { name: "Shana Ji", award: "Outstanding" },
          { name: "Esther Li", award: "Outstanding" },
        ],
      },
      {
        category: "Elementary School 1st-3rd Grade",
        winners: [{ name: "Corey Chen", award: "Outstanding" }],
      },
      {
        category: "High School",
        winners: [
          { name: "William Xu", award: "1st Place" },
          { name: "Annie Lin", award: "3rd Place" },
          { name: "Angela Zhou", award: "Outstanding" },
          { name: "Brady Zhou", award: "Outstanding" },
        ],
      },
      {
        category: "Middle School",
        winners: [
          { name: "Sophie Zhou", award: "2nd Place" },
          { name: "Shawn Ji", award: "3rd Place" },
          { name: "Thomas Bai", award: "Outstanding" },
          { name: "George Zhang", award: "Outstanding" },
        ],
      },
    ],
  },
  {
    year: 2023,
    shineALight: [
      {
        category: "All Categories",
        winners: [
          "Aaron Chen", "Alex Sun", "Allison Yang", "Angela Zhou", "Anna Hu",
          "Anna Jing", "Annie Lin", "Bella Jing", "Brady Zhou", "Chloe Lin",
          "Claire Jing", "Claire Ling", "Dennis Xu", "Emily Song", "Erica Ng",
          "Grace Ling", "Hannah Gao", "Hope Liu", "Janelle Yuan", "Jason Ling",
          "Jeremy Wu", "Jiayi Chen", "Kellyn Fan", "Kevin Fan", "Mason Cao",
          "Michelle Hu", "Nathan Deng", "Qiushi (Rachel) Li", "Shana Ji",
          "Shawn Ji", "Shiou (Esther) Li", "Sophia Zheng", "Sophie Yang",
          "Sophie Zhou", "Vincent Ng",
        ].map((name) => ({ name })),
      },
    ],
    pvsa: [
      "Mason Cao", "Aaron Chen", "Nathan Deng", "Kellyn Fan", "Kevin Fan",
      "Anna Hu", "Michelle Hu", "Shana Ji", "Shawn Ji", "Anna Jing",
      "Bella Jing", "Claire Jing", "Shiou (Esther) Li", "Annie Lin",
      "Chloe Lin", "Grace Ling", "Claire Ling", "Jason Ling", "Hope Liu",
      "Erica Ng", "Emily Song", "Alex Sun", "Sophia Zheng", "Angela Zhou",
      "Brady Zhou", "Sophie Zhou",
    ],
  },
];
