export interface Skill {
  id: string;
  name: string;
  category: "Banking & Fintech" | "SME" | "WebDev";
  level: number;
}

export const skills: Skill[] = [
  {
    id: "1",
    name: "Banking Operation",
    category: "Banking & Fintech",
    level: 90,
  },
  {
    id: "2",
    name: "Bank Loans",
    category: "Banking & Fintech",
    level: 90,
  },
  {
    id: "3",
    name: "Fintech",
    category: "Banking & Fintech",
    level: 80,
  },
  {
    id: "4",
    name: "Food and Beverage",
    category: "SME",
    level: 80,
  },
  {
    id: "5",
    name: "Full Stack Web Development",
    category: "WebDev",
    level: 70,
  },
];
