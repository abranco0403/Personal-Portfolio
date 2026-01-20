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
          className='socialMedias'
          key={index} href={link.url} 
          title={link.label}>
          <FontAwesomeIcon icon={link.icon}
        />
        </a>
      ))}
    </div>
  );
};
