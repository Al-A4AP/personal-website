import { create } from "zustand";
import type { Project, Skill, Experience, Testimonial } from "../types";

interface PortfolioState {
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  testimonials: Testimonial[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  addProject: (project: Project) => void;
  getProjectById: (id: string) => Project | undefined;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  activeSection: "hero",

  projects: [
    {
      id: "1",
      title: "E-commerce Platform for XYZ Retail",
      technologies: ["React", "Tailwind CSS", "API", "Database", "Docker"],
      description:
        "A scalable, user-friendly e-commerce platform with real-time inventory updates",
      image:
        "https://res.cloudinary.com/dr7xrzaqe/image/upload/v1772790878/samples/cloudinary-group.jpg",
      situation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      action:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      result:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://example.com",
      github: "https://github.com/example",
    },
    {
      id: "2",
      title: "Real-Time Collaboration Tool",
      technologies: [
        "React",
        "Tailwind CSS",
        "Express",
        "PostgreSQL",
        "Docker",
      ],
      description:
        "A real-time collaboration platform for teams to work together seamlessly",
      image:
        "https://res.cloudinary.com/dr7xrzaqe/image/upload/v1772790877/samples/imagecon-group.jpg",
      situation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      action:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      result:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://example.com",
      github: "https://github.com/example",
    },
    {
      id: "3",
      title: "Healthcare Management System",
      technologies: ["React", "Tailwind CSS", "Prisma", "PostgreSQL", "Docker"],
      description:
        "A comprehensive healthcare management system for clinics and hospitals",
      image:
        "https://res.cloudinary.com/dr7xrzaqe/image/upload/v1772790876/samples/people/bicycle.jpg",
      situation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      action:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      result:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://example.com",
      github: "https://github.com/example",
    },
  ],

  skills: [
    {
      category: "Front-End",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Axios",
        "Formik Yup",
        "Zustand",
      ],
    },
    {
      category: "Back-End",
      items: [
        "Node.js",
        "Express",
        "Backendless",
        "REST API",
        "Supabase",
        "Prisma",
      ],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "Terraform", "Sentry", "Vercel"],
    },
    {
      category: "Business & Domain",
      items: [
        "Banking Operations",
        "Credit Analysis",
        "FinTech & Digital Products",
        "Team Leadership",
        "Multi-outlet Operations",
        "SME Development",
        "Business Development",
      ],
    },
  ],

  experiences: [
    {
      id: "1",
      title: "COO",
      company: "PT. Waralaba Anak Bangsa.",
      location: "Jakarta, Indonesia",
      startDate: "2022",
      endDate: "2023",
      responsibilities: [
        "Managed 20+ outlets across 4 cities (Jakarta, Depok, Surabaya, Malang)",
        "Optimized logistics and supply chain",
        "Led HR initiatives and team development",
      ],
    },
    {
      id: "2",
      title: "Senior Lending Advisor",
      company: "bangku.id (PT Bangku Teknologi Pemberdaya)",
      location: "Jakarta, Indonesia",
      startDate: "2021",
      endDate: "2022",
      responsibilities: [
        "Advised SMEs on optimal financing solutions",
        "Collaborated with banks and P2P lenders",
        "Evaluated creditworthiness and risk",
      ],
    },
    {
      id: "3",
      title: "Commercial",
      company: "Komunal.co.id (PT Komunal Teknologi Finansial)",
      location: "Jakarta, Indonesia",
      startDate: "2020",
      endDate: "2021",
      responsibilities: [
        "Contributed to DepositoBPR.id launch",
        "Ensured OJK compliance",
        "Developed commercial strategies",
        "Managed key partnerships",
      ],
    },

    {
      id: "4",
      title: "Sub Branch Manager",
      company:
        "Bank bjb (PT Bank Pembangunan Daerah Jawa Barat dan Banten Tbk.)",
      location: "Jakarta, Indonesia",
      startDate: "2012",
      endDate: "2019",
      responsibilities: [
        "Managed 4 different sub-branches",
        "Achieved consistent growth targets",
        "Led teams of 10-15 staff members",
      ],
    },

    {
      id: "5",
      title: "Officer",
      company:
        "Bank bjb (PT Bank Pembangunan Daerah Jawa Barat dan Banten Tbk.)",
      location: "Indramayu -Jakarta, Indonesia",
      startDate: "2011",
      endDate: "2012",
      responsibilities: [
        "Supervised commercial operations",
        "Managed consumer banking",
        "Streamlined operational processes",
      ],
    },
    {
      id: "6",
      title: "Staff",
      company:
        "Bank bjb (PT Bank Pembangunan Daerah Jawa Barat dan Banten Tbk.)",
      location: "Purwakarta, Indonesia",
      startDate: "2007",
      endDate: "2011",
      responsibilities: [
        "Developed diverse banking skills (General Administration, Sales, Credit Analysis, Supervision)",
        "Conducted credit analysis",
        "Ensured compliance standards",
      ],
    },
  ],

  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Solutions Inc.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/testimonial1.jpg",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "CEO",
      company: "XYZ Retail",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/testimonial2.jpg",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Digital Agency Co.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/testimonial3.jpg",
    },
  ],

  setActiveSection: (section: string) => set({ activeSection: section }),

  addProject: (project: Project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),

  getProjectById: (id: string) => {
    return get().projects.find((project) => project.id === id);
  },
}));
