/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */

export const HERO = {
  name: "Dhruvjyoti Swain",
  tagline: "Python developer · Full-stack · Data engineering",
} as const;

/* -------------------------------------------------------------------------- */
/*                                  SHELL CHROME                              */
/* -------------------------------------------------------------------------- */

export const SHELL = {
  fallbackBoot: "Last login: Apr 26 14:22 on ttys001",
  pathDesktop: "~/dhruvjyoti — zsh — 120×40",
  pathMobile: "~/dhruvjyoti $",
} as const;

/* -------------------------------------------------------------------------- */
/*                                     NAV                                    */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  label: string;
  target: string;
  href?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "./about.md", target: "about" },
  { label: "./experience.log", target: "experience" },
  { label: "./publications.bib", target: "publications" },
  { label: "./tech_stack.json", target: "tech" },
  { label: "./projects/", target: "projects" },
  { label: "./contact.sh", target: "contact" },
  {
    label: "./resume.pdf",
    target: "_resume",
    href: "https://drive.google.com/file/d/13B2fEL67qc-z1EVBlqqpXLEQ4BQnvcmS/view?usp=sharing",
  },
];

export const PHANTOM_CMD: Record<string, string> = {
  about: "cat about.md",
  experience: "tail -f experience.log",
  publications: "cat publications.bib",
  tech: "cat tech_stack.json | jq",
  projects: "ls projects/",
  contact: "./contact.sh",
};

/* -------------------------------------------------------------------------- */
/*                                    ABOUT                                   */
/* -------------------------------------------------------------------------- */

export const ABOUT_INTRO =
  "Data Science graduate student with hands-on experience in full-stack development, machine learning, and data engineering. Passionate about building intelligent systems that connect research with practical applications. Currently pursuing a Master's in Data Science at FAU Erlangen–Nürnberg, with prior industry experience at GE Digital and Moody's Analytics.";

export interface EducationEntry {
  span: string;
  degree: string;
  school: string;
  grade: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    span: "2025-05 → present",
    degree: "M.Sc. Data Science",
    school: "Friedrich-Alexander University, Erlangen-Nürnberg",
    grade: "1.8/5 (lower is better)",
  },
  {
    span: "2020-09 → 2024-06",
    degree: "B.Tech Computer Science & Engineering (AI)",
    school: "Amrita School of Computing, Amritapuri",
    grade: "9.59/10 (higher is better)",
  },
];

export interface Tile {
  label: string;
}

export const TILES: Tile[] = [
  { label: "WEB DEV" },
  { label: "BACKEND" },
  { label: "DATA ENG" },
  { label: "CLOUD" },
];

/* -------------------------------------------------------------------------- */
/*                                 EXPERIENCE                                 */
/* -------------------------------------------------------------------------- */

export interface ExperienceEntry {
  span: string;
  company: string;
  role: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    span: "2024-01 → 2024-07",
    company: "GE Digital",
    role: "Digital Technology Intern",
    bullets: [
      "Built CI/CD pipeline (Jenkins) for AWS ELB deployments",
      "Integrated testing tool for 3-point data flow validation",
    ],
  },
  {
    span: "2023-05 → 2023-07",
    company: "Moody's Analytics",
    role: "Software Engineering Intern",
    bullets: [
      "SFTP → AWS Lambda/S3/Glue/Redshift data pipeline",
      "Workflow scheduling + reusable code libraries",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                    TECH                                    */
/* -------------------------------------------------------------------------- */

export type TechCategories = Record<string, string[]>;

export const TECH: TechCategories = {
  languages: ["python", "js", "ts", "rust", "c#"],
  frameworks: ["django", "react", "tailwind", "three.js"],
  data: ["airflow", "sql", "mongodb"],
  infra: ["aws", "docker", "git"],
};

/* -------------------------------------------------------------------------- */
/*                                PUBLICATIONS                                */
/* -------------------------------------------------------------------------- */

export interface Pub {
  type: "article" | "inproceedings";
  key: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  meta?: string;
  href: string;
}

const scholar = (q: string) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(q)}`;

export const PUBS: Pub[] = [
  {
    type: "article",
    key: "sha2024villages",
    title:
      "Machine learning for sustainable development: Ranking villages for rural development initiatives",
    authors:
      "A. Sha, S. Madhan, M. Karthikeya, R. Megha, K. R. Dhanush, D. Swain, G. Gopakumar, M. Geetha",
    venue: "Applied Spatial Analysis and Policy, vol. 18, p. 6",
    year: "2024",
    meta: "Impact Factor 2.00",
    href: scholar(
      "Machine learning for sustainable development Ranking villages for rural development initiatives Applied Spatial Analysis and Policy",
    ),
  },
  {
    type: "inproceedings",
    key: "swain2024community",
    title:
      "A novel architecture for community detection between large social media creators",
    authors: "D. Swain, S. Eesha, G. D. Raj, T. Anjali",
    venue: "Procedia Computer Science, vol. 233, pp. 87–96 · ICIDCA 2024",
    year: "2024",
    href: scholar(
      "A novel architecture for community detection between large social media creators Procedia Computer Science",
    ),
  },
  {
    type: "inproceedings",
    key: "sha2024clustering",
    title: "Data-driven clustering and insights for rural development in India",
    authors: "A. Sha, S. Madhan, M. Karthikeya, R. Megha, D. Swain, G. Gopakumar",
    venue: "Procedia Computer Science, vol. 233, pp. 336–342 · ICIDCA 2024",
    year: "2024",
    href: scholar(
      "Data-driven clustering and insights for rural development in India Procedia Computer Science",
    ),
  },
  {
    type: "inproceedings",
    key: "sha2023neurovascular",
    title:
      "Neuro-vascular mapping of junctions in human brain from MRI scans using image segmentation",
    authors: "A. Sha, D. Swain, S. Yashwanth, T. Anjali",
    venue: "ICACRS 2023, pp. 517–522",
    year: "2023",
    href: scholar(
      "Neuro-vascular mapping of junctions in human brain from MRI scans using image segmentation ICACRS",
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */

export interface Project {
  slug: string;
  name: string;
  desc: string;
  loc: string;
  tags: string[];
  long: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "openjob",
    name: "openjob/",
    desc: "AI job application autopilot · Python · Playwright",
    loc: "—",
    tags: ["Python", "AI Agent", "Playwright"],
    long: "Local, zero-cost AI job application autopilot. Collects postings from Greenhouse, Lever and Ashby boards, scores them against a config, and generates tailored LaTeX resumes and cover letters with a deterministic anti-hallucination guard. Logs every application to a Google Sheets tracker plus SQLite.",
    href: "https://github.com/Darkdriller/openjob",
  },
  {
    slug: "local-llm",
    name: "local-llm/",
    desc: "PowerToys Run plugin · C# .Net · Ollama API",
    loc: "12.4K LOC",
    tags: ["C#", ".Net", "PowerToys", "Ollama"],
    long: "PowerToys Run plugin that lets you query local LLMs through Ollama endpoints from anywhere on your desktop. Built on C#/.Net, talks to Ollama's HTTP API, and surfaces inference results inside the PowerToys Run launcher.",
    href: "https://github.com/Darkdriller/PowerToys-Run-LocalLLm",
  },
  {
    slug: "simple-lang",
    name: "simple-lang/",
    desc: "Compiler for 8-bit CPU · Rust · Verilog",
    loc: "8.1K LOC",
    tags: ["Rust", "Verilog", "Compiler"],
    long: "A minimal compiler for SimpleLang, a small high-level language targeting an 8-bit CPU implemented in Verilog. Supports variable declarations, assignment, arithmetic, and conditionals — end-to-end from source to instruction stream.",
    href: "https://github.com/Darkdriller/SimpleLang",
  },
  {
    slug: "rural-clustering",
    name: "rural-clustering/",
    desc: "SIH 2022 winner · Python regression · React",
    loc: "15.2K LOC",
    tags: ["Python", "Regression", "React"],
    long: "Web app that clusters rural areas by amenities, population density, and connectivity, then ranks each cluster with a polynomial regression model. Winner of Smart India Hackathon 2022.",
    href: "https://github.com/Darkdriller/sih_code_of_duty_1",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   CONTACT                                  */
/* -------------------------------------------------------------------------- */

export const CONTACT = {
  toName: "Dhruvjyoti Swain",
  toEmail: "swaindhruv28@gmail.com",
} as const;
