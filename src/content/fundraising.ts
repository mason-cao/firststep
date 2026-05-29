export interface FundraisingRecord {
  organization: string;
  records: { year: number; amount: string }[];
}

export const fundraising: FundraisingRecord[] = [
  {
    organization: "Cystic Fibrosis Foundation",
    records: [
      { year: 2024, amount: "$1,165" },
      { year: 2023, amount: "$1,000" },
      { year: 2022, amount: "$500" },
      { year: 2021, amount: "$460" },
    ],
  },
  {
    organization: "Salvation Army",
    records: [
      { year: 2024, amount: "$3,800+" },
      { year: 2023, amount: "$4,000+" },
      { year: 2022, amount: "$2,000+" },
      { year: 2021, amount: "$1,500+" },
      { year: 2020, amount: "$1,000+" },
    ],
  },
];
