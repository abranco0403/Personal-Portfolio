import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen, faKaggle } from '@fortawesome/free-brands-svg-icons';
import './styles/socialMedias.css';

const socialMediaLinks = [
  { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/alessandro-branco/', label: 'Visit my LinkedIn profile to connect with me' },
  { icon: faGithub, url: 'https://github.com/abranco0403', label: 'Explore my projects on GitHub' },
  { icon: faCodepen, url: 'https://codepen.io/alsbranco', label: 'Check out my front-end work on CodePen' },
  { icon: faKaggle, url: 'https://www.kaggle.com/', label: 'Visit my Kaggle profile for data analyst projects' }
];

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
