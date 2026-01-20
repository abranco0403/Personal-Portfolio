import React from 'react';
import socialMediaLinks from '../data/SocialMediaData';
import './styles/socialMedias.css';


export const socialMedias = () => {
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
