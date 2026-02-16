// src/pages/AllProjects.js
import React, { useMemo, useState } from "react";
import { ArrowLeft } from "../components/common/ArrowLeft";
import { ArrowUp } from "../components/common/ArrowUp";
import projectsData from "../data/ProjectsArchiveData";
import "../components/styles/AllProjects.css";

/**
 * AllProjects (Archive)
 * - Fast scanning: year, project name, tools, GitHub
 * - Robust against missing/undefined technologies
 * - Search + filter + sort
 */

const isExternalUrl = (url = "") => /^https?:\/\//i.test(url);

const LinkOut = ({ to, text, ariaLabel }) => {
  const external = isExternalUrl(to);

  return (
    <ArrowUp
      to={to}
      linkText={text}
      ariaLabel={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    />
  );
};

const getTechLabels = (technologies = []) =>
  (Array.isArray(technologies) ? technologies : [])
    .map((t) => (t && t.label ? t.label : ""))
    .filter(Boolean);

const matchesQuery = (project, q) => {
  if (!q) return true;
  const query = q.toLowerCase().trim();
  if (!query) return true;

  const tech = getTechLabels(project.technologies).join(" ").toLowerCase();

  const haystack = [
    project.projectName,
    project.madeAt,
    tech,
    String(project.year ?? ""),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
};

const SORTS = {
  newest: { label: "Newest", fn: (a, b) => (b.year ?? 0) - (a.year ?? 0) },
  oldest: { label: "Oldest", fn: (a, b) => (a.year ?? 0) - (b.year ?? 0) },
  name: {
    label: "Name (A–Z)",
    fn: (a, b) => (a.projectName || "").localeCompare(b.projectName || ""),
  },
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "sql", label: "SQL" },
  { id: "python", label: "Python" },
  { id: "powerbi", label: "Power BI" },
  { id: "excel", label: "Excel" },
  { id: "react", label: "React" },
];

const hasTech = (project, techLabel) => {
  const labels = getTechLabels(project.technologies).map((s) => s.toLowerCase());
  return labels.some((l) => l.includes(techLabel.toLowerCase()));
};

const passesFilter = (project, filterId) => {
  if (filterId === "all") return true;
  if (filterId === "sql") return hasTech(project, "sql");
  if (filterId === "python") return hasTech(project, "python");
  if (filterId === "powerbi") return hasTech(project, "power bi");
  if (filterId === "excel") return hasTech(project, "excel");
  if (filterId === "react") return hasTech(project, "react");
  return true;
};

const TechIconsList = ({ technologies = [] }) => {
  const safeTech = Array.isArray(technologies)
    ? technologies.filter((t) => t && t.icon && t.label)
    : [];

  if (!safeTech.length) return <span className="text-sm text-white/40">—</span>;

  return (
    <ul className="flex flex-wrap gap-2">
      {safeTech.map((t) => {
        const Icon = t.icon;
        return (
          <li
            key={t.label}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-customGreen bg-opacity-10 text-customGreen"
            title={t.label}
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
            <span className="sr-only">{t.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

const dedupeById = (items = []) =>
  items.filter((p, idx, arr) => arr.findIndex((x) => x.id === p.id) === idx);

const normalizeItems = (items) => {
  const safe = Array.isArray(items) ? items : [];
  return dedupeById(safe).map((p) => ({
    ...p,
    year: p.year ?? 0,
    technologies: Array.isArray(p.technologies) ? p.technologies : [],
  }));
};

const AllProjects = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortKey, setSortKey] = useState("newest");

  const visible = useMemo(() => {
    const items = normalizeItems(projectsData);

    const filtered = items
      .filter((p) => matchesQuery(p, query))
      .filter((p) => passesFilter(p, filter));

    const sorter = SORTS[sortKey]?.fn ?? SORTS.newest.fn;
    return [...filtered].sort(sorter);
  }, [query, filter, sortKey]);

  return (
    <div className="main_container">
      <div className="row">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ArrowLeft to="/" linkText="Alessandro Branco" />
          <h1 className="title">All Projects</h1>
        </header>

        {/* Controls */}
        <section className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="w-full sm:max-w-sm">
              <span className="sr-only">Search projects</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects (SQL, python, datacamp, …)"
                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm text-white/80 placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-customYellow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f12]"
              />
            </label>

            <div className="flex items-center gap-2">
              <span className="text-sm text-white/50">Sort</span>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-customYellow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f12]"
                aria-label="Sort projects"
              >
                {Object.entries(SORTS).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={[
                  "px-3 py-1.5 rounded-full text-sm transition-all duration-200",
                  "border border-white/10 bg-white/5",
                  filter === f.id
                    ? "text-customBlack bg-customYellow border-transparent"
                    : "text-white/70 hover:text-white hover:border-white/25",
                ].join(" ")}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-sm text-white/50">
            Showing <span className="text-white/80">{visible.length}</span>{" "}
            project{visible.length === 1 ? "" : "s"}
          </p>
        </section>

        {/* Table */}
        <section className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 backdrop-blur">
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
                  Tools
                </th>
                <th className="hidden py-4 pr-6 text-sm font-semibold text-slate-200 sm:table-cell">
                  GitHub
                </th>
              </tr>
            </thead>

            <tbody>
              {visible.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-slate-300/10 last:border-none hover:bg-white/5 transition"
                >
                  <td className="py-4 pr-4 align-top text-sm text-slate-200">
                    {project.year || ""}
                  </td>

                  <td className="py-4 pr-4 align-top font-semibold text-slate-200">
                    <div className="sm:block">{project.projectName}</div>
                  </td>

                  <td className="hidden py-4 pr-4 align-top text-sm text-slate-200 lg:table-cell">
                    {project.madeAt || "—"}
                  </td>

                  <td className="hidden py-4 align-top lg:table-cell">
                    <TechIconsList technologies={project.technologies} />
                  </td>

                  <td className="hidden sm:table-cell align-top py-4 pr-4">
                    {project.repoUrl ? (
                      <LinkOut
                        to={project.repoUrl}
                        text="GitHub"
                        ariaLabel={`Open GitHub repo for: ${project.projectName}`}
                      />
                    ) : (
                      <span className="text-sm text-white/40">—</span>
                    )}
                  </td>
                </tr>
              ))}

              {!visible.length && (
                <tr>
                  <td className="py-6 text-sm text-white/60" colSpan={5}>
                    No projects match your search/filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default AllProjects;
