import BankingImage from "../assets/bank3.png";
import BankingLoanImande from "../assets/loan.png";
import FintechImage from "../assets/atm.svg";
import FbImage from "../assets/cafe.svg";
import FullstackImage from "../assets/fullstack.png";

export interface Skill {
  id: string;
  name: string;
  category: "Banking & Fintech" | "SME" | "WebDev";
  level: number;
  icon: string;
}

export const skills: Skill[] = [
  {
    id: "1",
    name: "Banking Operation",
    category: "Banking & Fintech",
    level: 90,
    icon: BankingImage,
  },
  {
    id: "2",
    name: "Bank Loans",
    category: "Banking & Fintech",
    level: 90,
    icon: BankingLoanImande,
  },
  {
    id: "3",
    name: "Fintech",
    category: "Banking & Fintech",
    level: 80,
    icon: FintechImage,
  },
  {
    id: "4",
    name: "Food and Beverage",
    category: "SME",
    level: 80,
    icon: FbImage,
  },
  {
    id: "5",
    name: "Full Stack Web Dev",
    category: "WebDev",
    level: 70,
    icon: FullstackImage,
  },
];
