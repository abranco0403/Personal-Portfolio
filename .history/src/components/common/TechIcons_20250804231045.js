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

import { DiSeaborn } from 'react-icons/di';
import { FaChartBar } from 'react-icons/fa';

export const TechIcons = {
  Python: { icon: SiPython, label: 'Python' },
  Pandas: { icon: SiPandas, label: 'Pandas' },
  Jupyter: { icon: SiJupyter, label: 'Jupyter' },
  PostgreSQL: { icon: SiPostgresql, label: 'PostgreSQL' },
  Plotly: { icon: SiPlotly, label: 'Plotly' },
  React: { icon: SiReact, label: 'React' },
  Tailwind: { icon: SiTailwindcss, label: 'Tailwind CSS' },
  Netlify: { icon: SiNetlify, label: 'Netlify' },

  Seaborn: { icon: DiSeaborn, label: 'Seaborn' },
  Matplotlib: { icon: FaChartBar, label: 'Matplotlib' }
};
