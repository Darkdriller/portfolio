import {
  javascript,
  python,
  django,
  aws,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  airflow,
  threejs,
  // sql,
  docker,
  ge_digital,
  moodys,
  simple_lang,
  localllm,
  sih,
} from "@/public/assets";

interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

interface Service {
  title: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Web Developer",
    icon: reactjs.src,
  },
  {
    title: "Backend Developer",
    icon: django.src,
  },
  {
    title: "Data Engineer",
    icon: python.src,
  },
  {
    title: "Cloud Engineer",
    icon: aws.src,
  },
];

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    name: "Python",
    icon: python.src,
  },
  {
    name: "Django",
    icon: django.src,
  },
  {
    name: "AWS",
    icon: aws.src,
  },
  {
    name: "Airflow",
    icon: airflow.src,
  },
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
  {
    name: "HTML 5",
    icon: html.src,
  },
  {
    name: "CSS 3",
    icon: css.src,
  },
  {
    name: "JavaScript",
    icon: javascript.src,
  },
  {
    name: "React JS",
    icon: reactjs.src,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind.src,
  },
  {
    name: "MongoDB",
    icon: mongodb.src,
  },
  {
    name: "Three JS",
    icon: threejs.src,
  },
  {
    name: "Git",
    icon: git.src,
  },
  {
    name: "Docker",
    icon: docker.src,
  },
];

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Digital Technology Intern",
    company_name: "GE Digital",
    icon: ge_digital.src,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - July 2024",
    points: [ 
      "Developed a comprehensive CI/CD pipeline solution using Jenkins from the ground up to streamline deployment processes, reducing deployment time for artifacts to AWS ELB",
      "Developed a integrated testing tool to test availability of data from 3 points in the data flow for a large Data pipeline in Python."
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Moodys Analytics",
    icon: moodys.src,
    iconBg: '#E6DEDD',
    date: "May 2023 - July 2023",
    points: [
      "Worked on a creating a Data Pipeline from sftp to AWS infrastructure using Lambda, AWS S3, AWS Glue  and Redshift.",
      "Scheduled and monitored workflows to ensure that all processes are running smoothly and on time.",
      "Developed reusable code libraries to expedite future development efforts, reducing time-to-market for new features."
    ],
  },
];


interface Tag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

const projects: Project[] = [
  {
    name: "Local LLM",
    description:
      "PowerToys Run plugin which will enable to use LLMs on Ollama endpoints locally. Built on C# and .Net and uses Ollama's API to run inference on local LLMs. Built for PowerToys Run.",
    tags: [
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "blue-text-gradient",
      },
      {
        name: " Microsoft PowerToys Run",
        color: "pink-text-gradient",
      },
    ],
    image: localllm.src,
    source_code_link: "https://github.com/Darkdriller/PowerToys-Run-LocalLLm",
  },
  {
    name: "Simple Lang",
    description:
      "This project implements a basic compiler for a minimalistic high-level language called SimpleLang designed to run on an 8-bit CPU. The language includes basic constructs such as variable declarations, assignments, arithmetic operations, and conditional statements.",
    tags: [
      {
        name: "Rust",
        color: "green-text-gradient",
      },
      {
        name: "verilog",
        color: "blue-text-gradient",
      },
    ],
    image: simple_lang.src,
    source_code_link: "https://github.com/Darkdriller/SimpleLang",
  },
  {
    name: "Rural Clustering",
    description:
      "A web app to cluster rural areas based on their amenities, population density and connectivity. Also uses a polynomial regression model to predict the ranking of a cluster based on the amenities in the area. Winner of Smart India Hackathon 2022.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Regression",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: sih.src,
    source_code_link: "https://github.com/Darkdriller/sih_code_of_duty_1",
  }
];

export { services, technologies, experiences, projects };