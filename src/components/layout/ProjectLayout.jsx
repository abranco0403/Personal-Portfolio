import React from "react";
import { ArrowLeft } from "../common/ArrowLeft";
import { ArrowUp } from "../common/ArrowUp";

export const ProjectLayout = ({
  title,
  context,
  tools = [],
  repoUrl,
  children,
}) => {
  return (
    <main className="w-full min-h-screen px-6 pt-12 pb-20 md:px-16 bg-gradient-to-r from-customBlue to-customBlack">
      {/* Header */}
      <header className="flex flex-col gap-4 max-w-5xl">
        <ArrowLeft to="/" linkText="Back to Home" />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h1>
            {context && (
              <p className="mt-2 text-sm md:text-base text-white/65 max-w-3xl">
                {context}
              </p>
            )}
          </div>

          {repoUrl && (
            <ArrowUp
              to={repoUrl}
              icon="github"
              ariaLabel={`Open GitHub repository for ${title}`}
              className="hover:scale-105 transition-transform"
            />
          )}
        </div>

        {tools.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <section className="mt-10 max-w-5xl">{children}</section>

      {/* Footer nav */}
      <div className="mt-12">
        <ArrowUp
          to="/AllProjects"
          linkText="View Full Project Archive"
          className="font-semibold"
        />
      </div>
    </main>
  );
};
