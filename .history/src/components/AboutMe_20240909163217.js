import { Fade } from "react-awesome-reveal";
import { aboutMeContent } from '../data/aboutMeContent';
import './styles/about.css';

export const AboutMe = () => {
  return (
    <Fade>
      <section id="about">
        <div className="about_container">
          <h2 className='about_header'>About</h2>
          {aboutMeContent.map((paragraph, index) => (
            <p className='about_paragraph' key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </Fade>
  );
};


