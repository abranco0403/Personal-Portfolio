// src/components/pages/ProjectsMain.jsx
import React, { useMemo } from "react";
import { ArrowUp } from "../common/ArrowUp";
import featuredProjects from "../../data/ProjectsFeaturedData";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import "../styles/projects.css";

const GLOW_COLOR = "#5D7384";

const GlowCard = ({ children }) => (
  <GlowCapture>
    <Glow color={GLOW_COLOR}>{children}</Glow>
  </GlowCapture>
);

/**
 * TechList
 * - Main Projects page shows TECHNOLOGY NAMES (pills)
 * - Icons are reserved for the Project Archive
 */
const TechList = ({ technologies = [] }) => {
  const safeTech = Array.isArray(technologies)
    ? technologies.filter((t) => t && t.label)
    : [];

  if (!safeTech.length) return null;

  return (
    <ul className="project_tech_pills" aria-label="Technologies used">
      {safeTech.map(({ label }) => (
        <li key={label} className="project_tech_pill">
          {label}
        </li>
      ))}
    </ul>
  );
};

const ProjectTitle = ({ project }) => {
  if (project.caseStudyPath) {
    return (
      <ArrowUp
        to={project.caseStudyPath}
        linkText={project.projectName}
        ariaLabel={`Open details for ${project.projectName}`}
        className="project_title_link font-semibold"
      />
    );
  }

  return <span>{project.projectName}</span>;
};

const ProjectCard = ({ project }) => {
  const titleId = `project-${project.id}-title`;

  return (
    <li className="project_list_item">
      <GlowCard>
        <article className="project_container" aria-labelledby={titleId}>
          <div className="project_body">
            <h3 id={titleId} className="project_body_title">
              <ProjectTitle project={project} />
            </h3>

            {project.description && (
              <p className="project_body_description">
                {project.description}
              </p>
            )}

            {Array.isArray(project.highlights) &&
              project.highlights.length > 0 && (
                <ul
                  className="project_highlights"
                  aria-label="Key highlights"
                >
                  {project.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="project_highlight_item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

            {/* Technology names as pills */}
            <TechList technologies={project.technologies} />
          </div>
        </article>
      </GlowCard>
    </li>
  );
};

export const ProjectsMain = () => {
  const items = useMemo(() => {
    const safe = Array.isArray(featuredProjects) ? featuredProjects : [];
    return safe.slice().sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }, []);

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-title"
    >
      <header className="flex items-end justify-between gap-6">
        <h2 id="projects-title" className="sectionLabel">
          Projects
        </h2>
      </header>

      {items.length ? (
        <ul className="project_list mt-6">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      ) : (
        <p className="sectionText">
          No featured projects available yet.
        </p>
      )}

      {/* Archive link (secondary action) */}
      <div className="mt-8">
        <ArrowUp
          to="/allprojects"
          linkText="View Full Project Archive"
          className="font-semibold"
          ariaLabel="Open full project archive"
        />
      </div>
    </section>
  );
};
