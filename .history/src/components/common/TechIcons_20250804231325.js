import { SiPython, SiPandas, SiJupyter, SiPostgresql, SiPlotly, SiReact, SiTailwindcss, SiNetlify } from 'react-icons/si';

// Se quiser usar Seaborn, matplotlib, sqlite, etc., use ícones disponíveis.
// Se não existir um ícone específico, pode criar um placeholder.

export const TechIcons = {
  Python: { icon: SiPython, label: 'Python' },
  Pandas: { icon: SiPandas, label: 'Pandas' },
  Jupyter: { icon: SiJupyter, label: 'Jupyter' },
  PostgreSQL: { icon: SiPostgresql, label: 'PostgreSQL' },
  Plotly: { icon: SiPlotly, label: 'Plotly' },
  React: { icon: SiReact, label: 'React' },
  Tailwind: { icon: SiTailwindcss, label: 'Tailwind CSS' },
  Netlify: { icon: SiNetlify, label: 'Netlify' },
  Seaborn: { icon: SiPython, label: 'Seaborn' }, // placeholder: usa Python icon
  Matplotlib: { icon: SiPython, label: 'Matplotlib' }, // placeholder
  SQLite: { icon: SiPostgresql, label: 'SQLite' } // exemplo, ou pode criar um ícone genérico
};
