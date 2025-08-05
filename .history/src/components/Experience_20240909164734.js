import { Slide } from "react-awesome-reveal";
import experienceData from '../data/ExperienceData';
import { Resume } from './Resume';
import './styles/experience.css';

const ExperienceItem = ({ date, position, company, description }) => (
  <div className="experience_container hover:bg-[#1f1d1d] hover:bg-opacity-60 transition duration-300">
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
);

export const Experience = () => {
  return (
    <section id='experience' className='mt-32'>
      <h2 className='experience_header'>Experience</h2>
      {experienceData.map((experience, index) => (
        <Slide
          key={experience.id}
          direction="right"
          delay={index * 100} // Stagger animations by 100ms per item
          duration={1500} // Duration of the animation in milliseconds
          triggerOnce={true} // Ensure the animation can be triggered multiple times
        >
          <ExperienceItem
            date={experience.date}
            position={experience.position}
            company={experience.company}
            description={experience.description}
          />
        </Slide>
      ))}
      {/* GET RESUME */}
      <div>
        <Resume />
      </div>
    </section>
  );
}
