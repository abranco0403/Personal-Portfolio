import project01 from '../assets/project_01.jpg';
import project02 from '../assets/project_02.jpg';
import project03 from '../assets/project_03.jpg';
import project04 from '../assets/project_04.jpg';

const projectsData = [
  {
    id: 1,
    image: project01,
    projectName: "Analyzing Students' Mental Health",
    description: "This project involves exploring and analyzing data from a study on international students to understand how their length of stay impacts their average mental health diagnostic scores. The study includes three diagnostic scores: PHQ-9 (todep), SCS (tosc), and ASISS (toas).",
    madeAt: "DataCamp",
    year: 2024,
    technologies: ["SQL", "Python", "Jupyter", "Pandas"],
  },
  {
    id: 2,
    image: project02,
    projectName: "Motorcycle Parts Sales Analysis",
    description: "This project analyzes sales data for a company selling motorcycle parts across three warehouses in retail and wholesale markets. It focuses on understanding wholesale revenue by product line, examining monthly variations and differences across warehouses",
    madeAt: "DataCamp",
    year: 2024,
    technologies: ["SQL", "Python", "Jupyter", "Pandas"],
  },
  {
    id: 3,
    image: project03,
    projectName: "What and Where are the World's Oldest Businesses",
    description: "This project explores data from BusinessFinancing.co.uk on the world's oldest businesses to understand their longevity and resilience in changing market conditions. By analyzing founding dates and industries, we uncover insights into historical contexts and survival factors.",
    madeAt: "DataCamp",
    year: 2024,
    technologies: ["SQL", "Python", "Pandas", "Jupyter" ],
  },
  {
    id: 4,
    image: project04,
    projectName: "Investigating Netflix Movies",
    description: "In this project, I explore Netflix's movie data to uncover insights about films from the 1990s. By examining movie durations and counting short action films, I aim to understand the trends and characteristics of this nostalgic decade. Through this analysis, I reveal key patterns and statistics that highlight what made 1990s cinema unique.",
    madeAt: "DataCamp",
    year: 2024,
    technologies: ["Python", "Matplotlib", "Jupyter", "Pandas"],
  }
];
export default projectsData;