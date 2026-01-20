// src/data/ProjectsData.js

import project01 from "../assets/projects/project_01.avif";
import project02 from "../assets/projects/project_02.avif";
import project03 from "../assets/projects/project_03.avif";
import project04 from "../assets/projects/project_04.avif";
import project05 from "../assets/projects/project_05.avif";

import { TechIcons } from "../components/common/TechIcons";

const projectsData = [
  {
    id: 1,
    image: project01,
    projectName: "International Student Mental Health Insights",
    description:
      "Analyzed survey data to understand how depression, social connectedness, and acculturative stress vary with length of stay abroad. Identified key patterns and risk signals that can inform student wellbeing programs and targeted support initiatives.",
    madeAt: "DataCamp",
    year: 2024,
    technologies: [TechIcons.Python, TechIcons.Pandas, TechIcons.Matplotlib, TechIcons.Jupyter],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/students-mental-health",
    linkName: "View Project on GitHub"
  },
  {
    id: 2,
    image: project02,
    projectName: "Wholesale Revenue & Product Performance Analysis",
    description:
      "Explored three months of multi-warehouse wholesale sales to identify top-performing product lines, revenue drivers, and short-term seasonality. Delivered insights to support inventory prioritization and marketing focus.",
    madeAt: "DataCamp",
    year: 2024,
    technologies: [TechIcons.Python, TechIcons.Pandas, TechIcons.SQLite, TechIcons.Jupyter],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/motorcycle-sales-analysis",
    linkName: "View Project on GitHub"
  },
  {
    id: 3,
    image: project03,
    projectName: "NYC School Performance Analysis (SQL + Python)",
    description:
      "Combined SQL and Python analysis to evaluate SAT performance across NYC public schools. Highlighted borough-level differences, top performers by subject, and overall ranking patterns to support data-informed discussions around education outcomes.",
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
    projectName: "Netflix 90s Catalog Analysis (SQL in Jupyter)",
    description:
      "Used SQL and Python to explore Netflix’s 1990s movie catalog. Answered key questions on duration, genre distribution, and director output, demonstrating an analytics workflow for content strategy and audience-driven planning.",
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
    projectName: "Personal Portfolio Website (React + Tailwind)",
    description:
      "Designed and built a responsive portfolio to showcase analytics and business analysis projects. Implemented a clean, recruiter-friendly layout and deployed the site for fast access and easy navigation.",
    madeAt: "VS Code",
    year: 2024,
    technologies: [TechIcons.React, TechIcons.Tailwind, TechIcons.Netlify],
    linkAddress: "https://alessandrobranco.com/",
    linkName: "alessandrobranco.com"
  }
];

export default projectsData;
