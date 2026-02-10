// src/layout/Main.js
import { Experience } from '../pages/Experience';
import { AboutMe } from '../pages/AboutMe';
import { Projects } from '../pages/ProjectsMain';
import { Footer } from '../layout/Footer';

export const Main = () => {
  return (
    <div className="w-full px-6 py-10 md:w-1/2 md:py-20 md:px-12 md:ml-auto">
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};
