
import { ArrowUp } from './common/ArrowUp.js';
import projectsData from '../data/ProjectsData.js';

import './styles/projects.css';

const Project = ({ image, projectName, description, madeAt, technologies }) => (

  <div className="project_container">
    <div className='project_header'>
      <img src={image} alt={projectName} />
    </div>
    <div className='project_body'>
      <h3 className="project_body_title">
        {projectName} / <span className="font-thin text-white text-opacity-90">{madeAt}</span>
      </h3>
      <p className="project_body_description">
        {description}
      </p>
      <div>
        <ul className='project_tech_container'>
          {technologies.map((tech, index) => (
            <li key={index} className='project_tech_list'>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>

);

// Ensure your Projects component is properly structured
export const Projects = () => {
  return (
    <Fade>
      <section id='projects' className='mt-32'>
        <h2 className='project_title'>Projects</h2>
        {projectsData.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            projectName={project.projectName}
            description={project.description}
            madeAt={project.madeAt}
            technologies={project.technologies}
          />
        ))}
        <div className='md:px-6 md:mt-8'>
          <ArrowUp 
            to='/AllProjects' 
            linkText='View Full Project Archive' 
          />
        </div>
      </section>
    <Fade/>
  );
}
