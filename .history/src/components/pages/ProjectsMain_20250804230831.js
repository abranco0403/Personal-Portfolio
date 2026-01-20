import { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowUp } from '../common/ArrowUp.js';
import projectsData from '../../data/ProjectsData.js';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import '../styles/projects.css';
import { IconContext } from 'react-icons';

const Project = ({
  image,
  projectName,
  description,
  linkAddress,
  technologies,
  imageWidth,
  imageHeight
}) => (
  <GlowCapture>
    <Glow color="#5D7384">
      <div className="project_container">
        <header className="project_header">
          <img
            src={image}
            alt={`Screenshot of ${projectName}`}
            className="project_image"
            width={imageWidth}
            height={imageHeight}
          />
        </header>
        <div className="project_body">
          <h3 className="project_body_title">
            <ArrowUp
              className="py-4 pr-8 text-xs font-semibold text-slate-200"
              to={linkAddress}
              linkText={projectName}
            />
          </h3>
          <p className="project_body_description">{description}</p>
          <ul className="project_tech_container">
            <IconContext.Provider value={{ size: '22px' }}>
              {technologies
                .filter(Boolean)
                .map(({ icon: TechIcon, label }) => (
                  <li
                    key={label}
                    className="project_tech_list"
                    title={label || 'Tech'}
                  >
                    <TechIcon />
                  </li>
                ))}
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </Glow>
  </GlowCapture>
);

export const Projects = () => {
  const [filterYears, setFilterYears] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const years = useMemo(() => {
    const allYears = projectsData.map(p => p.year);
    return [...new Set(allYears)].sort((a, b) => b - a);
  }, []);

  // Filtra e ordena projetos
  const filteredProjects = useMemo(() => {
    if (filterYears.length === 0) return [...projectsData].sort((a, b) => b.year - a.year);
    return projectsData
      .filter(p => filterYears.includes(p.year))
      .sort((a, b) => b.year - a.year);
  }, [filterYears]);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleYear = (year) => {
    setFilterYears((prev) =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const clearFilters = () => setFilterYears([]);

  return (
    <section id="projects" className="mt-32">
      <h2 className="project_title">Projects</h2>

      {/* Filtro de anos */}
      <div className="relative inline-block text-left mb-6" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          className="inline-flex justify-center w-56 rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          {filterYears.length > 0
            ? `Year${filterYears.length > 1 ? 's' : ''}: ${filterYears.join(', ')}`
            : 'Filter by Year'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {dropdownOpen && (
          <div
            className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-menu"
          >
            <div className="py-1 max-h-48 overflow-auto">
              {years.map(year => (
                <label
                  key={year}
                  className="flex items-center px-4 py-2 text-sm text-white cursor-pointer hover:bg-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={filterYears.includes(year)}
                    onChange={() => toggleYear(year)}
                    className="mr-2"
                  />
                  {year}
                </label>
              ))}
              <button
                onClick={clearFilters}
                className="w-full text-center text-sm text-indigo-400 hover:text-indigo-600 py-2 border-t border-gray-700"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lista de projetos */}
      {filteredProjects.length === 0 ? (
        <p className="text-white">No projects found for the selected year(s).</p>
      ) : (
        filteredProjects.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            projectName={project.projectName}
            description={project.description}
            linkAddress={project.linkAddress}
            technologies={project.technologies}
            imageWidth={400}
            imageHeight={300}
          />
        ))
      )}

      <div className="md:px-6 md:mt-8">
        <ArrowUp to="/AllProjects" linkText="View Full Project Archive" />
      </div>
    </section>
  );
};
