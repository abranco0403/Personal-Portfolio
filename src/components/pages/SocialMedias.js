import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMediaLinks from "../../data/SocialMediaData";
import { trackEvent } from "../../utils/analytics";
import "../styles/socialMedias.css";

export const SocialMedias = () => {
  // Show only primary links (LinkedIn, GitHub, Resume)
  const items = useMemo(
    () => socialMediaLinks.filter((item) => item.priority === "primary"),
    []
  );

  const handleClick = (item) => {
    trackEvent("social_click", {
      platform: item.id,          // linkedin | github | resume
      label: item.label,
      url: item.url,
      page_location: window.location.href,
    });
  };

  return (
    <nav className="social_container" aria-label="Social links">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="social_icons"
          title={item.label}
          aria-label={item.ariaLabel || item.label}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick(item)}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </nav>
  );
};
