import project01 from "../assets/projects/project_01.avif";
import project02 from "../assets/projects/project_02.avif";
import project03 from "../assets/projects/project_03.avif";
import project04 from "../assets/projects/project_04.avif";

import { TechIcons } from "../components/common/TechIcons";

const projectsArchive = [
  {
    id: "international-student-mental-health",
    year: 2024,
    projectName: "International Student Mental Health Insights",
    madeAt: "DataCamp",
    technologies: [TechIcons.Python, TechIcons.Pandas, TechIcons.Matplotlib, TechIcons.Jupyter],
    repoUrl:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/students-mental-health",
    image: project01,
  },
  {
    id: "wholesale-revenue",
    year: 2024,
    projectName: "Wholesale Revenue & Product Performance Analysis",
    madeAt: "DataCamp",
    technologies: [TechIcons.Python, TechIcons.Pandas, TechIcons.SQLite, TechIcons.Jupyter],
    repoUrl:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/motorcycle-sales-analysis",
    image: project02,
  },
  {
    id: "nyc-sat",
    year: 2024,
    projectName: "NYC School Performance Analysis (SQL + Python)",
    madeAt: "Portfolio Project",
    technologies: [TechIcons.Python, TechIcons.Pandas, TechIcons.SQLite, TechIcons.Matplotlib, TechIcons.Jupyter],
    repoUrl:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/nyc-sat-analysis",
    image: project03,
  },
  {
    id: "netflix-90s",
    year: 2024,
    projectName: "Netflix 90s Catalog Analysis (SQL + Python)",
    madeAt: "DataCamp",
    technologies: [TechIcons.Python, TechIcons.SQLite, TechIcons.Pandas, TechIcons.Matplotlib, TechIcons.Jupyter],
    repoUrl:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/netflix-movies",
    image: project04,
  },
];

export default projectsArchive;
