// src/components/SocialMedias.js

import React from 'react';
import socialMediaLinks from '../data/SocialMediaData';
import './styles/socialMedias.css';

const SocialMedias = () => {
  return (
    <div>
      {socialMediaLinks.map((link, index) => (
        <a key={index} href={link.url} title={link.label}>
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedias; // default export
