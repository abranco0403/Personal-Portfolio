import { aboutMeContentMain, aboutMeContentSecondary } from '../../data/aboutMeContent';
import '../styles/about.css';

export const AboutMe = () => {
  return (
    <section id="about" aria-label="About me section">
      <div className="about_container">
        <h2 className="about_header">About</h2>
        {aboutMeContentMain.map((paragraph, index) => (
          <p key={index} className="about_paragraph mb-4">
            {paragraph}
          </p>
        ))}
        {aboutMeContentSecondary.map((paragraph, index) => (
          <p key={`secondary-${index}`} className="about_paragraph mb-4 hidden lg:block">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
