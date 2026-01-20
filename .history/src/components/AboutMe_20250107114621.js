import { aboutMeContentMain } from '../data/aboutMeContent';
import { aboutMeContentSecondary } from '../data/aboutMeContent';
import './styles/about.css';

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="about_container">
        <h2 className='about_header'>About</h2>
        {aboutMeContentMain.map((paragraph, index) => (
          <p key={index} className='about_paragraph'>{paragraph}</p>
        ))}
        {aboutMeContentSecondary.map((paragraph, index) => (
          <p key={index} className='hidden lg:about_paragraph'>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};
