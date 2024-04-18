import { Link } from 'react-router-dom';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// create footer header component

const FooterNavigation = () => {
  
  const navigationLinks = [
    { to: "/", text: "Home" },
    { to: "/portfolio", text: "Portfolio" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" }
  ];

  return (
    <div>
      <h4 className="footer_header">Navigations</h4>
      <ul className="mb-2.5">
        {navigationLinks.map((link, index) => (
          <FooterLink key={index} to={link.to} text={link.text} />
        ))}
      </ul>
    </div>
  );
}

const FooterContacts = () => (
  <div>
    <h4 className="footer_header">Contacts</h4>
    <FooterContactItem icon={faCompass} text="Torrance, California" />
    <FooterContactItem icon={faEnvelope} text="abranco.dev@gmail.com" />
    <Link className="footer_link_contact" to="/contact">Connect on LinkedIn</Link>
  </div>
);

const FooterSocialIcons = () => {
  // Define an array of social icons
  const socialIcons = [
    { icon: faLinkedinIn },
    { icon: faGithub },
    { icon: faCodepen }
  ];

  return (
    <div>
      <h4 className="footer_header">Follow me here</h4>
      <div className="flex gap-3">
        {/* Map through the array of social icons */}
        {socialIcons.map((socialIcon, index) => (
          <FooterSocialIcon key={index} icon={socialIcon.icon} />
        ))}
      </div>
    </div>
  );
};

const FooterLink = ({ to, text }) => (
  <Link className="footer_link" to={to}>{text}</Link>
);

const FooterContactItem = ({ icon, text }) => (
  <div>
    <p className="block text-[13px] leading-5">
      <FontAwesomeIcon icon={icon} />
      <span className="text-[13px] text-slate-300 leading-[20px] px-2">{text}</span>
    </p>
  </div>
);

const FooterSocialIcon = ({ icon }) => (
  <div className="social-icons">
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
  </div>
);

export const Footer = () => (
  <footer className="footer mt-[85px]">
    <div className="w-full max-w-[80rem] mx-auto">

      {/* MAIN FOOTER */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-[40px]">
        <div>
          <h4 className="pe-11 ">About me</h4>
          <p className="paragraph-small">Currently working at <Link className="accent-links">Dania 18 Californa</Link> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorem!</p>
          <Link to="/">Alessandro Branco</Link>
        </div>
        <FooterNavigation />
        <FooterContacts />
        <FooterSocialIcons />
      </div>

      {/* COPYRIGHT */}
      <div className="copyright-section">
        <div>
          <p className="paragraph-small">
            Made by <Link className="text-white" to='/'>Alessandro Branco</Link> | &copy; 2024 | All rights reserved.
          </p>
        </div>
        <div className="paragraph-small">
          Download <Link className="text-white">Resume</Link>
        </div>
      </div>
    </div>
  </footer>
);
