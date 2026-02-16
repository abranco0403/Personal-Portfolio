// src/layout/Main.js
import { Experience } from './Experience';
import { AboutMe } from './AboutMe';
import { ProjectsMain } from './ProjectsMain';
import { Footer } from '../layout/Footer';

export const Main = () => {
  return (
    <div className="w-full px-6 py-10 md:w-1/2 md:py-20 md:px-12 md:ml-auto">
      <AboutMe />
      <Experience />
      <ProjectsMain />
      <Footer />
    </div>
  );
};
