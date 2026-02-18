import React from "react";
import { Link } from "react-router-dom";

const isExternalUrl = (url = "") => /^https?:\/\//i.test(url);

const ArrowUpIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Arrow up-right */}
    <path d="M7 17L17 7" />
    <path d="M10 7h7v7" />
  </svg>
);

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
  const baseClass =
    "group inline-flex items-baseline gap-2 font-sans leading-[20px] capitalize " +
    "transition-colors duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-customYellow/60 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f12]";

  const combined = `${baseClass} ${className}`.trim();

  const content = (
    <>
      {/* underline only the text */}
      <span className="text-customYellow underline-offset-4 group-hover:underline">
        {linkText}
      </span>

      {/* ✅ Baseline-aligned icon, no absolute, no FA CSS, no ghosting */}
      <ArrowUpIcon
        className="
          text-customYellow
          inline-block
          w-[15px] h-[15px]
          translate-y-[1px]
          transform-gpu
          transition-transform duration-200
          will-change-transform
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </>
  );

  // Files/PDFs
  if (href) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        aria-label={ariaLabel || linkText}
        className={combined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // External URLs
  if (to && isExternalUrl(to)) {
    return (
      <a
        href={to}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        aria-label={ariaLabel || linkText}
        className={combined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // Internal route
  if (to) {
    return (
      <Link to={to} aria-label={ariaLabel || linkText} className={combined}>
        {content}
      </Link>
    );
  }

  // Button fallback
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || linkText}
      className={combined}
    >
      {content}
    </button>
  );
};
