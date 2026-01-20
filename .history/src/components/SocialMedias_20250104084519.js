import React from 'react';
import SocialMediaLinks from "../data/SocialMediaData";

export const SocialMedias = () => {
  return (
    <nav className="flex -mt-8 md:mt-0">
      <ul className="flex space-x-4">
        {socialMediaLinks.map((socialMedia) => (
          <li key={socialMedia.url}>
            <a
              href={socialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social_icons"
              aria-label={socialMedia.label}
            >
              <FontAwesomeIcon icon={socialMedia.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

import socialMediaLinks from './data/socialMediaLinks'; // Adjust the path as necessary

exporconst MyComponent = () => {
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

export default MyComponent;
