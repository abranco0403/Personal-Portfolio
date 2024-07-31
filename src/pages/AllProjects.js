import { ArrowLeft } from '../components/common/ArrowLeft';
import { ArrowUp } from '../components/common/ArrowUp';
import projectsData from '../data/ProjectsData';
import '../components/styles/AllProjects.css';


const AllProjects = () => {
  return (
    <div className='w-full h-screen pt-[46px] pb-[96px] px-[24px] bg-[#0C0C0C]'>
      <div className='px-[96px]'>
        <header>
          <ArrowLeft 
            to='/' 
            linkText='Alessandro Branco' 
          />
          <h1 className='text-5xl font-bold text-[#FFFFFF]'>All Projects</h1>
        </header>
        <section className='mt-[40px]'>
          <table className="table-auto">
            <thead>
              <tr>
                <th className='table-head'>Year</th>
                <th className='table-head'>Project</th>
                <th className='table-head'>Made At</th>
                <th className='table-head'>Built With</th>
                <th className='table-head'>Link</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map(project => (
                <tr key={project.id}>
                  <td className='table-data'>{project.year}</td>
                  <td className='table-data'>{project.projectName}</td>
                  <td className='table-data'>{project.madeAt}</td>
                  <td className='table-data'>
                    <ul className='project_tech_container'>
                      {project.technologies.map((tech, index) => (
                        <li key={index} className='project_tech_list'>{tech}</li>
                      ))}
                    </ul>
                  </td>
                  <td className='table-data'>
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
