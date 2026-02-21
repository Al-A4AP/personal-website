export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Chief Operating Officer",
    company: "PT. Waralaba Anak Bangsa",
    location: "Jakarta",
    period: "2022 - 2023",
    description: [
      "Managing operations, logistics, and HR across 20+ outlets located in Jakarta, Depok, Surabaya, and Malang.",
    ],
  },
  {
    id: "2",
    role: "Senior Lending Advisor",
    company: "Bangku - Fintech",
    location: "Remote",
    period: "2021",
    description: [
      "Bangku is a fintech lending marketplace designed to empower MSMEs by providing streamlined access to business capital.",
    ],
  },
  {
    id: "3",
    role: "Commercial",
    company: "depositobpr.id - Fintech",
    location: "Hybrid",
    period: "2020 - 2021",
    description: [
      "Identifying and securing strategic partnerships with Rural Banks (BPR) in West Java and Banten to integrate them as institutional lenders and funding sources on the DepositoBPR.id platform.",
    ],
  },
  {
    id: "4",
    role: "Sub Branch Manager",
    company: "bank bjb",
    location: "Jakarta",
    period: "2012 - 2019",
    description: [
      "Managed sub-branches in high-tier business districts across Jakarta—including Sudirman Plaza Semanggi, Arteri Pondok Indah, Tebet, and Kemang—with a core focus on driving portfolio growth and maintaining operational excellence.",
    ],
  },
  {
    id: "5",
    role: "Officer",
    company: "bank bjb",
    location: "Jakarta - Indramayu",
    period: "2011",
    description: [
      "Served as a bank bjb Officer with a dual-track specialization, overseeing branch operations at the Pasar Minggu Jakarta Sub-Branch and managing commercial and consumer credit portfolios at the Pemkab Indramayu Sub-Branch.",
    ],
  },
  {
    id: "6",
    role: "Staff",
    company: "bank bjb",
    location: "Purwakarta",
    period: "2006 - 2011",
    description: [
      "I progressed through several key banking functions, starting in General Administration and Compliance, moving into Marketing, and ultimately specializing as a Credit Analyst and Credit Supervision Staff to ensure high-quality loan portfolios.",
    ],
  },
];
