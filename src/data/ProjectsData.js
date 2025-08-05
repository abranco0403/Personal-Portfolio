// src/data/ProjectsData.js

import project01 from '../assets/projects/project_01.avif';
import project02 from '../assets/projects/project_02.avif';
import project03 from '../assets/projects/project_03.avif';
import project04 from '../assets/projects/project_04.avif';
import project05 from '../assets/projects/project_05.avif';

import { TechIcons } from '../components/common/TechIcons';

const projectsData = [
  {
    id: 1,
    image: project01,
    projectName: "Mental Health of International Students",
    description:
      "Studied how mental health indicators such as depression, social connectedness, and acculturative stress vary based on the length of stay abroad. This analysis of survey data from a Japanese international university highlights actionable insights for student wellbeing programs.",
    madeAt: "DataCamp",
    year: 2024,
    technologies: [
      TechIcons.Python,
      TechIcons.Pandas,
      TechIcons.Matplotlib,
      TechIcons.Jupyter
    ],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/students-mental-health",
    linkName: "View Project on GitHub"
  },
  {
    id: 2,
    image: project02,
    projectName: "Motorcycle Parts Wholesale Revenue Analysis",
    description:
      "Explored three-month wholesale sales from a multi-warehouse motorcycle parts business. Uncovered top-performing product lines and seasonal trends that informed inventory and marketing strategies.",
    madeAt: "DataCamp",
    year: 2024,
    technologies: [
      TechIcons.Python,
      TechIcons.Pandas,
      TechIcons.SQLite,
      TechIcons.Jupyter
    ],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/motorcycle-sales-analysis",
    linkName: "View Project on GitHub"
  },
  {
    id: 3,
    image: project03,
    projectName: "Exploring NYC Public School Test Scores",
    description:
      "Investigated SAT score trends across NYC public schools using SQL and Pandas. Identified top-performing schools in Math, borough disparities, and total score rankings to inform education equity efforts.",
    madeAt: "Portfolio Project",
    year: 2024,
    technologies: [
      TechIcons.Python,
      TechIcons.Pandas,
      TechIcons.SQLite,
      TechIcons.Matplotlib,
      TechIcons.Jupyter
    ],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/nyc-sat-analysis",
    linkName: "View Project on GitHub"
  },
  {
    id: 4,
    image: project04,
    projectName: "Investigating Netflix Movies (90s Edition)",
    description:
      "Explored Netflix's 1990s catalog using SQL in Jupyter. Answered questions such as: What’s the average movie duration? Which genres dominated? Who directed the most 90s content? Designed for content producers targeting nostalgia-driven strategy.",
    madeAt: "DataCamp",
    year: 2024,
    technologies: [
      TechIcons.Python,
      TechIcons.SQLite,
      TechIcons.Pandas,
      TechIcons.Matplotlib,
      TechIcons.Jupyter
    ],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/netflix-movies",
    linkName: "View Project on GitHub"
  },
  {
    id: 5,
    image: project05,
    projectName: "Personal Portfolio Website",
    description:
      "Fully responsive personal website showcasing analytics projects, skills, and resume. Built using React and Tailwind CSS, deployed via Netlify. Focused on clean UI/UX, fast load, and recruiter-friendly structure.",
    madeAt: "VSCode",
    year: 2024,
    technologies: [
      TechIcons.React,
      TechIcons.Tailwind,
      TechIcons.Netlify
    ],
    linkAddress: "https://alessandrobranco.com/",
    linkName: "alessandrobranco.com"
  }
];

export default projectsData;
