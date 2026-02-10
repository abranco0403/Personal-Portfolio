import {
  FaPython,
  FaReact,
  FaGithub,
  FaChartBar,
  FaDatabase,
} from "react-icons/fa";

import {
  SiPandas,
  SiSqlite,
  SiMysql,
  SiJupyter,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";

/**
 * TechIcons
 * - Uses only verified exports from react-icons
 * - Avoids fake / non-existent Microsoft brand icons
 * - Optimized for Business Analyst portfolios
 */
export const TechIcons = {
  // Analytics & Data
  Python: { icon: FaPython, label: "Python" },
  Pandas: { icon: SiPandas, label: "Pandas" },
  SQL: { icon: FaDatabase, label: "SQL" },
  SQLite: { icon: SiSqlite, label: "SQLite" },
  MySQL: { icon: SiMysql, label: "MySQL" },
  Jupyter: { icon: SiJupyter, label: "Jupyter Notebook" },

  // BI & Reporting (Power BI represented semantically)
  PowerBI: { icon: FaChartBar, label: "Power BI" },
  Excel: { icon: FaChartBar, label: "Excel" },

  // Frontend / Platform
  React: { icon: FaReact, label: "React" },
  Tailwind: { icon: SiTailwindcss, label: "Tailwind CSS" },
  Netlify: { icon: SiNetlify, label: "Netlify" },
  GitHub: { icon: FaGithub, label: "GitHub" },
};
