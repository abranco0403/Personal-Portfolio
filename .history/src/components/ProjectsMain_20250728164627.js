import { ArrowUp } from './common/ArrowUp.js';
import projectsData from '../data/ProjectsData.js';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import './styles/projects.css';

// Import the React Icons library styles (make sure it's installed)
import { IconContext } from 'react-icons';

const Project = ({ image, projectName, description, linkAddress, technologies, imageWidth, imageHeight }) => (
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

          {/* Icon rendering using react-icons */}
          <ul className="project_tech_container">
            <IconContext.Provider value={{ size: '22px' }}>
              {technologies.map((TechIcon, index) => (
                <li key={index} className="project_tech_list" title={TechIcon.name.replace('Si', '')}>
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
  return (
    <section id="projects" className="mt-32">
      <h2 className="project_title">Projects</h2>
      {projectsData.map((project) => (
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
      ))}
      <div className="md:px-6 md:mt-8">
        <ArrowUp to="/AllProjects" linkText="View Full Project Archive" />
      </div>
    </section>
  );
};
