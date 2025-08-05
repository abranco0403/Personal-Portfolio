import { Slide } from "react-awesome-reveal";
import { aboutMeContent } from '../data/aboutMeContent';
import './styles/about.css';

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="about_container">
        <h2 className='about_header'>About</h2>
        {aboutMeContent.map((paragraph, index) => (
          <Slide
            key={index}
            direction="right" // Slide from right to left
            delay={index * 200} // Stagger animations by 200ms
            duration={1200} // Duration of the animation in milliseconds
            triggerOnce={true} // Ensure animation can be triggered multiple times
          >
            <p className='about_paragraph'>{paragraph}</p>
          </Slide>
        ))}
      </div>
    </section>
  );
};
