import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const isExternalUrl = (url = "") => /^https?:\/\//i.test(url);

export const ArrowUp = ({
  to,
  href,
  onClick,
  linkText,
  ariaLabel,
  className = "",
  target,
  rel,
}) => {
  const content = (
    <>
      <span className="text-customYellow group-hover:underline transition duration-200">
        {linkText}
      </span>
      <span className="relative ml-2">
        <FontAwesomeIcon
          className="text-customYellow absolute bottom-0 left-0 rotate-45 group-hover:-translate-y-1/2 group-hover:translate-x-1/2 transition duration-300"
          icon={faArrowUp}
        />
      </span>
    </>
  );

  const baseClass =
    "group inline-flex items-center font-sans leading-[20px] capitalize transition duration-300";

  // ✅ PDFs / files should use <a href>, not <Link>
  if (href) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        aria-label={ariaLabel}
        className={`${baseClass} ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // ✅ External URLs should use <a>
  if (to && isExternalUrl(to)) {
    return (
      <a
        href={to}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        aria-label={ariaLabel}
        className={`${baseClass} ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // ✅ Internal routes use <Link>
  if (to) {
    return (
      <Link
        to={to}
        aria-label={ariaLabel}
        className={`${baseClass} ${className}`}
      >
        {content}
      </Link>
    );
  }

  // ✅ Fallback button (rare)
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseClass} ${className}`}
    >
      {content}
    </button>
  );
};
