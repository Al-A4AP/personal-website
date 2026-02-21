export interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
}

export const portfolios: Portfolio[] = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "../src/assets/portfolio1.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "../src/assets/portfolio2.png",
    techStack: ["React", "Vite", "Tailwindcss"],
    githubUrl: "#",
  },
];
