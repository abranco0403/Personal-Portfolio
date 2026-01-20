// src/components/SocialMedias.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialMediaLinks from '../data/SocialMediaData';
import './styles/socialMedias.css';

export const SocialMedias = () => {
  return (
    <div>
      {socialMediaLinks.map((link, index) => (
        <a 
          key={index} 
          className="socialMedias" 
          href={link.url} 
          aria-label={`Visit my ${link.label}`}  {/* Use a more descriptive label */}
          target="_blank" 
          rel="noopener noreferrer"  {/* Security best practice for external links */}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};
