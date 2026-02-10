import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMediaLinks from "../../data/SocialMediaData";
import { trackEvent } from "../../utils/analytics";
import "../styles/socialMedias.css";

export const SocialMedias = () => {
  const items = useMemo(
    () => socialMediaLinks.filter((item) => item.priority === "primary"),
    []
  );

  const handleClick = (item) => {
    // Decide event name based on action
    const eventName =
      item.id === "resume_open"
        ? "resume_open"
        : item.id === "resume_download"
        ? "resume_download"
        : "social_click";

    trackEvent(eventName, {
      platform: item.id,
      label: item.label,
      url: item.url,
      file_name: item.filename,
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
          aria-label={item.label}
          target={item.action === "download" ? undefined : "_blank"}
          rel={item.action === "download" ? undefined : "noopener noreferrer"}
          download={item.action === "download" ? item.filename : undefined}
          onClick={() => handleClick(item)}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </nav>
  );
};
