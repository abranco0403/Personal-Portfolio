import { Experience } from './Experience';
import { AboutMe } from './AboutMe';
import { Projects } from './ProjectsMain';

export const Main = () => {
  return (
    <div className = 'w-ful px-[24px] md:w-1/2 md:py-20 md:px-4'>
      {/* RIGHT SIDE */}
      <div>
            <AboutMe />
            <Experience />
            <Projects />
        </div>
    </div>
  )
}
