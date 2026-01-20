import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMediaLinks from "../../data/SocialMediaData";
import "../styles/socialMedias.css";

export const SocialMedias = () => {
  return (
    <div className="social_container">
      {socialMediaLinks.map(({ url, label, icon }) => (
        <a
          className="social_icons"
          key={label}
          href={url}
          title={label}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {typeof icon === "string" ? (
            <img src={icon} alt={label} className="social_icon_image" />
          ) : (
            <FontAwesomeIcon icon={icon} />
          )}
        </a>
      ))}
    </div>
  );
};
