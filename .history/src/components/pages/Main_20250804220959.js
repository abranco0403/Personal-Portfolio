import { Experience } from './pages/Experience';
import { AboutMe } from './AboutMe';
import { Projects } from './ProjectsMain';
import { Footer } from './Footer'

export const Main = () => {
  return (
    <div className = 'w-ful px-[24px] md:w-1/2 md:py-20 md:px-4'>
      {/* RIGHT SIDE */}
      <div>
            <AboutMe />
            <Experience />
            <Projects />
            <Footer />
        </div>
    </div>
  )
}
