import React from 'react';
import SocialMediaLinks from "../data/SocialMediaData";

export const SocialMedias = () => {
  return (
    <div>
      {socialMediaLinks.map((link, index) => (
        <a key={index} href={link.url} title={link.label}>
          <i className={`fab ${link.icon}`}></i>
        </a>
      ))}
    </div>
  );
};
