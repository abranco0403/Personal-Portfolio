import { ArrowLeft } from '../components/common/ArrowLeft';
import { ArrowUp } from '../components/common/ArrowUp';
import projectsData from '../data/ProjectsData';
import '../components/styles/AllProjects.css';

const AllProjects = () => {
  return (
    <div className='main_container'>
      <div className='row'>
        <header className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <ArrowLeft to='/' linkText='Alessandro Branco' />
          <h1 className='title'>All Projects</h1>
        </header>

        <section className='mt-10 overflow-x-auto'>
          <table className='w-full border-collapse text-left'>
            <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur'>
              <tr className="px-4">
                <th className='py-4 pr-6 text-sm font-semibold text-slate-200'>Year</th>
                <th className='py-4 pr-6 text-sm font-semibold text-slate-200'>Project</th>
                <th className='hidden py-4 pr-6 text-sm font-semibold text-slate-200 lg:table-cell'>Made At</th>
                <th className='hidden py-4 pr-6 text-sm font-semibold text-slate-200 lg:table-cell'>Built With</th>
                <th className='hidden py-4 pr-6 text-sm font-semibold text-slate-200 sm:table-cell'>Link</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project) => (
                <tr
                  key={project.id}
                  className='border-b border-slate-300/10 last:border-none'
                >
                  <td className='py-4 pr-4 align-top text-sm text-slate-200'>
                    {project.year}
                  </td>
                  <td className='py-4 pr-4 align-top font-semibold text-slate-200'>
                    <div className='block sm:hidden text-xs'>
                      <ArrowUp
                        to={project.linkAddress}
                        linkText={project.projectName}
                        ariaLabel={`View project: ${project.projectName}`}
                      />
                    </div>
                    <div className='hidden sm:block'>{project.projectName}</div>
                  </td>
                  <td className='hidden py-4 pr-4 align-top text-sm text-slate-200 lg:table-cell'>
                    {project.madeAt}
                  </td>
                  <td className='hidden py-4 align-top lg:table-cell'>
                    <ul className='flex flex-wrap'>
                      {project.technologies.map(({ icon: Icon, label }, index) => (
                        <li
                          key={index}
                          className='flex items-center justify-center w-8 h-8 m-1 rounded-full bg-customGreen bg-opacity-10 text-customGreen'
                          title={label}
                        >
                          <Icon className='w-5 h-5' />
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className='hidden sm:table-cell align-top py-4 pr-4'>
                    <ArrowUp
                      to={project.linkAddress}
                      linkText={project.linkName}
                      ariaLabel={`Link to project: ${project.projectName}`}
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
