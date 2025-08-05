import { ArrowLeft } from '../components/common/ArrowLeft';
import { ArrowUp } from '../components/common/ArrowUp';
import projectsData from '../data/ProjectsData';
import '../components/styles/AllProjects.css';


const AllProjects = () => {
  return (
    <div className='main_container'>
      <div className='row'>
        <header>
          <ArrowLeft
            to='/'
            linkText='Alessandro Branco'
          />
          <h1 className='title'>All Projects</h1>
        </header>
        <section className='mt-[40px]'>
          <table className="table_auto">
            <thead>
              <tr>
                <th className='table_head'>Year</th>
                <th className='table_head'>Project</th>
                <th className='table_head'>Made At</th>
                <th className='table_head tech_column'>Built With</th>
                <th className='table_head'>Link</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map(project => (
                <tr key={project.id}>
                  <td className='table_data'>{project.year}</td>
                  <td className='table_data'>{project.projectName}</td>
                  <td className='table_data'>{project.madeAt}</td>
                  <td className='table_data tech_column'>
                    <ul className='project_tech_container'>
                      {project.technologies.map((tech, index) => (
                        <li key={index} className='project_tech_list'>{tech}</li>
                      ))}
                    </ul>
                  </td>
                  <td className='table_data'>
                    <ArrowUp
                      to='/AllProjects' 
                      linkText='Link to the project' 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AllProjects;
