import { Glow, GlowCapture } from '@codaworks/react-glow'; // Import Glow components
import experienceData from '../data/ExperienceData';
import { Resume } from './Resume';
import './styles/experience.css';

const ExperienceItem = ({ date, position, company, description }) => (
  <GlowCapture>
    {/* Applying Glow effect here */}
    <Glow color="#5D7384"> {/* Set glow color to #5D7384 */}
      <div className="experience_container">
        <div className="experience_year_container">
          <h4 className="experience_year_info">
            {date}
          </h4>
        </div>

        <div className="experience_position_container">
          <h3 className="experience_position">
            {position} / <span className="experience_company">{company}</span>
          </h3>
          <p className="experience_description">
            {description}
          </p>
        </div>
      </div>
    </Glow>
  </GlowCapture>
);

export const Experience = () => {
  return (
    <section id="experience" className="mt-32">
      <h2 className="experience_header">Experience</h2>
      {experienceData.map((experience) => (
        <ExperienceItem
          key={experience.id} // Ensure each ExperienceItem has a unique key
          date={experience.date}
          position={experience.position}
          company={experience.company}
          description={experience.description}
        />
      ))}
      {/* GET RESUME */}
      <div>
        <Resume />
      </div>
    </section>
  );
};
