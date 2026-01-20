import { Experience } from '../pages/Experience';
import { AboutMe } from '../pages/AboutMe';
import { Projects } from '../pages/ProjectsMain';
import { Footer } from '../layout/Footer';
;

export const Main = () => {
  return (
    <div className="w-full px-[24px] md:w-1/2 md:py-20 md:px-4">
      {/* RIGHT SIDE */}
      <div>
        <AboutMe />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};
