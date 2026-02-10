// src/components/pages/Projects.js
import React from "react";
import { ArrowUp } from "../common/ArrowUp";
import projectsData from "../../data/ProjectsData";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import "../styles/projects.css";
import { IconContext } from "react-icons";

const GLOW_COLOR = "#5D7384";
const DEFAULT_IMG = { width: 400, height: 300 };

const isExternalUrl = (url = "") => /^https?:\/\//i.test(url);

const GlowCard = ({ children }) => (
  <GlowCapture>
    <Glow color={GLOW_COLOR}>{children}</Glow>
  </GlowCapture>
);

const ProjectLink = ({ to, text, className }) => {
  const external = isExternalUrl(to);

  return (
    <ArrowUp
      className={className}
      to={to}
      linkText={text}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    />
  );
};

const TechList = ({ technologies = [] }) => {
  if (!technologies.length) return null;

  return (
    <ul className="project_tech_container" aria-label="Technologies used">
      {technologies.map(({ icon: TechIcon, label }) => (
        <li key={label} className="project_tech_list" title={label}>
          <TechIcon aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
};

const ProjectCard = ({ project }) => {
  const {
    id,
    image,
    projectName,
    description,
    linkAddress,
    technologies,
    highlights, // optional (future): array of short bullets
  } = project;

  const titleId = `project-${id}-title`;

  return (
    <li className="project_list_item">
      <GlowCard>
        <article className="project_container" aria-labelledby={titleId}>
          <header className="project_header">
            <img
              src={image}
              alt={`Screenshot of ${projectName}`}
              className="project_image"
              width={DEFAULT_IMG.width}
              height={DEFAULT_IMG.height}
              loading="lazy"
            />
          </header>

          <div className="project_body">
            <h3 id={titleId} className="project_body_title">
              <ProjectLink
                to={linkAddress}
                text={projectName}
                className="py-3 pr-8 text-xs font-semibold text-slate-200"
              />
            </h3>

            <p className="project_body_description">{description}</p>

            {/* Optional: adds BA-style scannability without changing layout */}
            {Array.isArray(highlights) && highlights.length > 0 && (
              <ul className="project_highlights" aria-label="Key highlights">
                {highlights.slice(0, 3).map((item) => (
                  <li key={item} className="project_highlight_item">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <TechList technologies={technologies} />
          </div>
        </article>
      </GlowCard>
    </li>
  );
};

export const Projects = () => {
  const items = Array.isArray(projectsData) ? projectsData : [];

  return (
    <section id="projects" className="mt-32" aria-labelledby="projects-title">
      <h2 id="projects-title" className="project_title">
        Projects
      </h2>

      <IconContext.Provider value={{ size: "22px" }}>
        {items.length ? (
          <ul className="project_list">
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        ) : (
          <p className="project_empty">No projects available yet.</p>
        )}
      </IconContext.Provider>

      <div className="md:px-6 md:mt-8">
        <ProjectLink to="/AllProjects" text="View Full Project Archive" />
      </div>
    </section>
  );
};
