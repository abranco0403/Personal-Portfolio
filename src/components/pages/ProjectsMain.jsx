// src/components/pages/ProjectsMain.js
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

const TechList = ({ technologies = [] }) => {
  const safeTech = Array.isArray(technologies)
    ? technologies.filter((t) => t && t.icon && t.label)
    : [];

  if (!safeTech.length) return null;

  return (
    <ul className="project_tech_container" aria-label="Technologies used">
      {safeTech.map(({ icon: TechIcon, label }) => (
        <li key={label} className="project_tech_list" title={label}>
          {/* SVG rendered here */}
          <TechIcon aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
};

const ProjectCard = ({ project }) => {
  const titleId = `project-${project.id}-title`;

  return (
    <li className="project_list_item">
      <GlowCard>
        <article className="project_container" aria-labelledby={titleId}>
          <div className="project_body">
            <h3 id={titleId} className="project_body_title">
              {project.projectName}
            </h3>

            {project.description && (
              <p className="project_body_description">
                {project.description}
              </p>
            )}

            {Array.isArray(project.highlights) &&
              project.highlights.length > 0 && (
                <ul className="project_highlights" aria-label="Key highlights">
                  {project.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="project_highlight_item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

            <TechList technologies={project.technologies} />

            {project.caseStudyPath && (
              <div className="pt-3">
                <ArrowUp
                  to={project.caseStudyPath}
                  linkText="Case Study"
                  ariaLabel={`Open case study for ${project.projectName}`}
                  className="font-semibold"
                />
              </div>
            )}
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
    <section id="projects" className="mt-32" aria-labelledby="projects-title">
      <header className="flex items-end justify-between gap-6">
        <h2 id="projects-title" className="project_title">
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
        <p className="project_empty">No featured projects available yet.</p>
      )}

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
