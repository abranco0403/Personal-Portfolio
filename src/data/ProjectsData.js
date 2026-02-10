// import project01 from "../assets/projects/project_01.avif";
// import project02 from "../assets/projects/project_02.avif";
// import project03 from "../assets/projects/project_03.avif";
// import project04 from "../assets/projects/project_04.avif";
import project05 from "../assets/projects/project_05.avif";

import resumeProject01 from "../assets/projects/project_inProgress.jpg";
import resumeProject02 from "../assets/projects/project_inProgress.jpg";
// import resumeProject03 from "../assets/projects/project_inProgress.jpg";

import { TechIcons } from "../components/common/TechIcons";

const projectsData = [
  {
    id: "resume-retail-ops-dashboard",
    image: resumeProject01,
    projectName: "Retail Operations Performance Dashboard",
    description:
      "Built an interactive dashboard to monitor sales and operational KPIs across in-store and ecommerce performance.",
    madeAt: "Portfolio Project",
    year: 2024,
    technologies: [TechIcons.PowerBI, TechIcons.SQL, TechIcons.Excel],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/retail-operations-performance-dashboard",
    linkName: "View Project on GitHub",
  },
  {
    id: "resume-customer-rfm-segmentation",
    image: resumeProject02,
    projectName: "Customer Retention & Segmentation Analysis (RFM)",
    description:
      "Segmented customers using transaction-level data to support retention planning.",
    madeAt: "Portfolio Project",
    year: 2024,
    technologies: [TechIcons.Python, TechIcons.Pandas, TechIcons.Excel],
    linkAddress:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/customer-retention-segmentation-rfm",
    linkName: "View Project on GitHub",
  },
  {
    id: "personal-portfolio-react-tailwind",
    image: project05,
    projectName: "Personal Portfolio Website (React + Tailwind)",
    description:
      "Designed and built a recruiter-friendly portfolio focused on storytelling and clarity.",
    madeAt: "VS Code",
    year: 2024,
    technologies: [TechIcons.React, TechIcons.Tailwind, TechIcons.Netlify],
    linkAddress: "https://alessandrobranco.com/",
    linkName: "alessandrobranco.com",
  },
];

export default projectsData;
