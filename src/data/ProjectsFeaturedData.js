// src/data/ProjectsFeaturedData.js
import { TechIcons } from "../components/common/TechIcons";

const featuredProjects = [
  {
    id: "resume-retail-ops-dashboard",
    year: 2025,
    projectName: "Retail Operations Performance Dashboard",
    description:
      "Power BI dashboard to track sales + operational KPIs across in-store and ecommerce channels for weekly decision support.",
    technologies: [TechIcons.PowerBI, TechIcons.SQL, TechIcons.Excel],
    highlights: [
      "Defined KPI requirements and success metrics.",
      "Built DAX measures for trends and comparisons.",
      "Enabled drill-downs by channel and category.",
    ],
    caseStudyPath: "/projects/retail-ops-dashboard",
    repoUrl:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/retail-operations-performance-dashboard",
  },
  {
    id: "resume-customer-rfm-segmentation",
    year: 2025,
    projectName: "Customer Retention & Segmentation (RFM)",
    description:
      "Segmented customers with RFM to identify high-value and at-risk cohorts and support retention planning.",
    technologies: [TechIcons.Python, TechIcons.Pandas, TechIcons.Excel],
    highlights: [
      "Created RFM scoring and segments.",
      "Identified key cohorts for targeting.",
      "Delivered recommendations with clear business framing.",
    ],
    caseStudyPath: "/projects/customer-rfm-segmentation",
    repoUrl:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/customer-retention-segmentation-rfm",
  },
  {
    id: "healthcare-revenue-cycle-analytics",
    year: 2025,
    projectName: "Healthcare Revenue Cycle Analytics Dashboard",
    description:
      "Power BI dashboard for denial rate, AR aging, payer mix, and revenue leakage signals to prioritize actions.",
    technologies: [TechIcons.PowerBI, TechIcons.Excel],
    highlights: [
      "Standardized revenue cycle KPIs (denials, aging, at-risk).",
      "Modeled claims-style data for reporting.",
      "Enabled payer/segment drilldowns to isolate drivers.",
    ],
    caseStudyPath: "/projects/healthcare-revenue-cycle",
    repoUrl:
      "https://github.com/abranco0403/data-analytics-portfolio/tree/main/healthcare-revenue-cycle-analytics",
  },
  {
    id: "personal-portfolio-react-tailwind",
    year: 2024,
    projectName: "Personal Portfolio Website (React + Tailwind)",
    description:
      "Recruiter-first portfolio built for quick scanning, clear hierarchy, and strong technical credibility.",
    technologies: [TechIcons.React, TechIcons.Tailwind, TechIcons.Netlify],
    highlights: [
      "Projects structured like resume evaluation.",
      "Clean navigation and consistent UI patterns.",
      "Deployed with performance + accessibility in mind.",
    ],
    caseStudyPath: "/projects/portfolio-website",
    repoUrl: "https://github.com/abranco0403/Personal-Portfolio",
  },
];

export default featuredProjects;
