// src/components/pages/AboutMe.jsx
import { aboutMeContentMain, aboutMeContentSecondary } from "../../data/aboutMeContent";
import "../styles/about.css";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="section section--first"
      aria-label="About me section"
    >
      <div className="about_container">
        <h2 className="sectionLabel">About</h2>

        {aboutMeContentMain.map((paragraph, index) => (
          <p key={index} className="sectionText">
            {paragraph}
          </p>
        ))}

        {aboutMeContentSecondary.map((paragraph, index) => (
          <p key={`secondary-${index}`} className="sectionText hidden lg:block">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
