import { Glow, GlowCapture } from "@codaworks/react-glow";
import experienceData from "../../data/ExperienceData";
import { Resume } from "./Resume";
import "../styles/experience.css";

const ExperienceItem = ({ date, position, company, description }) => (
  <li className="experience_item">
    <GlowCapture>
      <Glow color="#5D7384">
        <div className="experience_container">
          <div className="experience_year_container">
            <h3 className="experience_year_info">{date}</h3>
          </div>

          <div className="experience_position_container">
            <h4 className="experience_position">
              {position} / <span className="experience_company">{company}</span>
            </h4>
            <p className="experience_description">{description}</p>
          </div>
        </div>
      </Glow>
    </GlowCapture>
  </li>
);

export const Experience = () => {
  const hasExperience = Array.isArray(experienceData) && experienceData.length > 0;

  return (
    <section id="experience" className="mt-32" aria-labelledby="experience-title">
      <h2 id="experience-title" className="experience_header">
        Experience
      </h2>

      {hasExperience ? (
        <ul className="experience_list">
          {experienceData.map(({ id, date, position, company, description }) => (
            <ExperienceItem
              key={id}
              date={date}
              position={position}
              company={company}
              description={description}
            />
          ))}
        </ul>
      ) : (
        <p className="experience_description">No experience entries available yet.</p>
      )}

      {/* Resume Section */}
      <Resume />
    </section>
  );
};
