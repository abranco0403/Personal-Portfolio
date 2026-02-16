import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const isExternalUrl = (url = "") => /^https?:\/\//i.test(url);

export const ArrowLeft = ({
  onClick,
  to,
  linkText,
  ariaLabel,
  className = "",
}) => {
  const baseClasses =
    "group inline-flex items-center gap-2 rounded-md " +
    "text-sm font-medium text-customYellow hover:text-customYellow/90 " +
    "transition-colors duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-customYellow/60 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f12]";

  const combined = `${baseClasses} ${className}`.trim();

  const content = (
    <>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
        aria-hidden="true"
      />
      <span className="underline-offset-4 group-hover:underline">{linkText}</span>
    </>
  );

  // Button (only if no "to")
  if (!to) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={combined}
        aria-label={ariaLabel || linkText}
      >
        {content}
      </button>
    );
  }

  // External URL
  if (isExternalUrl(to)) {
    return (
      <a
        href={to}
        className={combined}
        aria-label={ariaLabel || linkText}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  // Internal route
  return (
    <Link to={to} className={combined} aria-label={ariaLabel || linkText}>
      {content}
    </Link>
  );
};
