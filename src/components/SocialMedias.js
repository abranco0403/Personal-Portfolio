import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen, faKaggle } from '@fortawesome/free-brands-svg-icons';
import './styles/socialMedias.css';

const socialMediaLinks = [
  { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/alessandro-branco/' },
  { icon: faGithub, url: 'https://github.com/abranco0403' },
  { icon: faCodepen, url: 'https://codepen.io/alsbranco' },
  { icon: faKaggle, url: 'https://www.kaggle.com/' }
];

export const SocialMedias = () => {
  return (
    <nav className="flex">
      <ul className="flex space-x-4">
        {socialMediaLinks.map((socialMedia, index) => (
          <li key={index}>
            <Link to={socialMedia.url} target="_blank" rel="noopener noreferrer" className="social_icons">
              <FontAwesomeIcon icon={socialMedia.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
