// src/components/pages/ProjectArquive.js
import React, { useMemo } from "react";
import { ArrowLeft } from "../common/ArrowLeft";
import { ArrowUp } from "../common/ArrowUp";
import projectsArchiveData from "../../data/ProjectsArquiveData";
import { IconContext } from "react-icons";

const isExternalUrl = (url = "") => /^https?:\/\//i.test(url);

export const ProjectArquive = () => {
  const items = useMemo(
    () => (Array.isArray(projectsArchiveData) ? projectsArchiveData : []),
    []
  );

  return (
    <main className="w-full px-6 pt-12 pb-20 md:px-16">
      {/* Header */}
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <ArrowLeft to="/" linkText="Alessandro Branco" />
          <h1 className="font-sans text-3xl font-bold tracking-tight text-white">
            All Projects
          </h1>
          <p className="font-sans text-sm text-white/70 max-w-2xl">
            Full archive of projects with tools, year, and links. Featured case studies
            are highlighted on the homepage.
          </p>
        </div>

        <div className="pt-2 sm:pt-0">
          <ArrowUp to="/" linkText="Back to Home" />
        </div>
      </header>

      {/* Table */}
      <section className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-6 text-sm font-semibold text-slate-200">
                Year
              </th>
              <th className="py-4 pr-6 text-sm font-semibold text-slate-200">
                Project
              </th>
              <th className="hidden py-4 pr-6 text-sm font-semibold text-slate-200 lg:table-cell">
                Made At
              </th>
              <th className="hidden py-4 pr-6 text-sm font-semibold text-slate-200 lg:table-cell">
                Built With
              </th>
              <th className="hidden py-4 pr-6 text-sm font-semibold text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>

          <tbody>
            <IconContext.Provider value={{ size: "18px" }}>
              {items.map((project) => {
                const external = isExternalUrl(project.linkAddress);

                return (
                  <tr
                    key={project.id}
                    className="border-b border-slate-300/10 last:border-none hover:bg-white/5 transition"
                  >
                    <td className="py-4 pr-4 align-top text-sm text-slate-200">
                      {project.year}
                    </td>

                    <td className="py-4 pr-4 align-top font-semibold text-slate-200">
                      {/* Mobile: clickable */}
                      <div className="block sm:hidden text-xs">
                        <ArrowUp
                          to={project.linkAddress}
                          linkText={project.projectName}
                          ariaLabel={`View project: ${project.projectName}`}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                        />
                      </div>

                      {/* Desktop: plain text */}
                      <div className="hidden sm:block">{project.projectName}</div>
                    </td>

                    <td className="hidden py-4 pr-4 align-top text-sm text-slate-200 lg:table-cell">
                      {project.madeAt}
                    </td>

                    <td className="hidden py-4 align-top lg:table-cell">
                      <ul className="flex flex-wrap">
                        {(project.technologies || []).map(({ icon: Icon, label }) => (
                          <li
                            key={label}
                            className="flex items-center justify-center w-8 h-8 m-1 rounded-full bg-customGreen bg-opacity-10 text-customGreen"
                            title={label}
                          >
                            <Icon aria-hidden="true" />
                            <span className="sr-only">{label}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="hidden sm:table-cell align-top py-4 pr-4">
                      <ArrowUp
                        to={project.linkAddress}
                        linkText={project.linkName || "Open"}
                        ariaLabel={`Open link for: ${project.projectName}`}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                      />
                    </td>
                  </tr>
                );
              })}
            </IconContext.Provider>
          </tbody>
        </table>
      </section>
    </main>
  );
};
