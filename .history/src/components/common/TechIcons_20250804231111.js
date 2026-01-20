import {
  SiPython,
  SiPandas,
  SiJupyter,
  SiPostgresql,
  SiPlotly,
  SiReact,
  SiTailwindcss,
  SiNetlify
} from 'react-icons/si';

import { FaChartBar, FaWaveSquare } from 'react-icons/fa'; // Ícones genéricos para dados e gráficos

export const TechIcons = {
  Python: { icon: SiPython, label: 'Python' },
  Pandas: { icon: SiPandas, label: 'Pandas' },
  Jupyter: { icon: SiJupyter, label: 'Jupyter' },
  PostgreSQL: { icon: SiPostgresql, label: 'PostgreSQL' },
  Plotly: { icon: SiPlotly, label: 'Plotly' },
  React: { icon: SiReact, label: 'React' },
  Tailwind: { icon: SiTailwindcss, label: 'Tailwind CSS' },
  Netlify: { icon: SiNetlify, label: 'Netlify' },

  Seaborn: { icon: FaWaveSquare, label: 'Seaborn' },    // Ícone genérico para Seaborn
  Matplotlib: { icon: FaChartBar, label: 'Matplotlib' } // Ícone genérico para Matplotlib
};
