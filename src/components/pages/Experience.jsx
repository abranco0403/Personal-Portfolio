// src/components/pages/Experience.js
import { Glow, GlowCapture } from "@codaworks/react-glow";
import experienceData from "../../data/ExperienceData";
import { Resume } from "./Resume";
import "../styles/experience.css";

// Reusable wrapper to avoid repeating Glow boilerplate
const GlowCard = ({ children }) => (
  <GlowCapture>
    <Glow color="#5D7384">{children}</Glow>
  </GlowCapture>
);

const ExperienceItem = ({ item }) => {
  const { date, position, company, description } = item;

  return (
    <li className="experience_item">
      <GlowCard>
        <article className="experience_container">
          <div className="experience_year_container">
            <h3 className="experience_year_info">{date}</h3>
          </div>

          <div className="experience_position_container">
            <h4 className="experience_position">
              {position} <span aria-hidden="true">/</span>{" "}
              <span className="experience_company">{company}</span>
            </h4>

            <p className="experience_description">{description}</p>
          </div>
        </article>
      </GlowCard>
    </li>
  );
};

export const Experience = () => {
  const items = Array.isArray(experienceData) ? experienceData : [];

  return (
    <section
      id="experience"
      className="mt-32"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className="experience_header">
        Experience
      </h2>

      {items.length > 0 ? (
        // ✅ No role="list" (UL already has implicit list role)
        <ul className="experience_list">
          {items.map((item) => (
            <ExperienceItem key={item.id} item={item} />
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
