// src/components/pages/SocialMedias.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMediaLinks from "../../data/SocialMediaData";
import { trackEvent } from "../../utils/analytics";
import "../styles/socialMedias.css";

export const SocialMedias = () => {
  const items = socialMediaLinks.filter((item) => item.priority === "primary");

  const handleClick = (item) => {
    const eventName =
      item.id === "resume_open"
        ? "resume_open"
        : item.id === "resume_download"
        ? "resume_download"
        : "social_click";

    trackEvent(eventName, {
      platform: item.id,                 // linkedin | github | resume_open | resume_download
      link_text: item.label,             // nicer than "label" inside GA4
      link_url: item.url,
      file_name: item.filename,
      page_location: window.location.href,
    });
  };

  return (
    <nav className="social_container" aria-label="Social links">
      {items.map((item) => {
        const isDownload = item.action === "download";

        return (
          <a
            key={item.id}
            href={item.url}
            className="social_icons"
            title={item.label}
            aria-label={item.label}
            target={isDownload ? undefined : "_blank"}
            rel={isDownload ? undefined : "noopener noreferrer"}
            download={isDownload ? item.filename : undefined}
            onClick={() => handleClick(item)}
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        );
      })}
    </nav>
  );
};
