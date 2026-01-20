import { Glow, GlowCapture } from '@codaworks/react-glow';
import experienceData from '../data/ExperienceData';
import { Resume } from './Resume';
import './styles/experience.css';
// import './styles/glowEffect.css';

const ExperienceItem = ({ date, position, company, description }) => (
  <GlowCapture>
    {/* Applying Glow effect here */}
    <Glow color="#2dd4bf"> {/* Set glow color to #2dd4bf */}
      <div className="experience_container hover:bg-[#1f1d1d] hover:bg-opacity-60 transition duration-300 glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
        <div className='experience_year_container'>
          <h4 className="experience_year_info">
            {date}
          </h4>
        </div>

        <div className='experience_position_container'>
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
    <section id='experience' className='mt-32'>
      <h2 className='experience_header'>Experience</h2>
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
}
