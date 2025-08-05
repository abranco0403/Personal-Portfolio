import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';

const AnimatedNavLink = ({ to, label, isActive, onClick }) => {
  return (
    <div className="group transition-all duration-500">
      <ScrollLink
        className={`p-2 relative cursor-pointer flex items-center ${isActive ? 'active' : ''}`}
        to={to}
        spy={true}
        smooth={true}
        offset={-70} // Adjusted offset to match the scroll detection
        duration={500}
        onClick={onClick}
      >
        <span
          className={`inline-block h-[2px] w-8 bg-white bg-opacity-55 mr-4 transition-all duration-500 group-hover:w-16 group-hover:bg-opacity-100 ${isActive ? 'w-16 bg-opacity-100' : ''}`}
        ></span>
        <span
          className={`text-white text-opacity-55 transition-all duration-500 group-hover:text-opacity-100 ${isActive ? 'text-opacity-100' : ''}`}
        >
          {label}
        </span>
      </ScrollLink>
    </div>
  );
};

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about'); // Set "about" as the default active link

  useEffect(() => {
    // Initialize scroll spy
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['about', 'experience', 'projects'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100; // Adjust this value as needed
          if (scrollPosition >= offsetTop) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active link

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <header className='pt-16'>
      <nav className='hidden my-4 md:flex md:flex-col'>
        {sections.map(section => (
          <AnimatedNavLink
            key={section.id}
            to={section.id}
            label={section.label}
            isActive={activeLink === section.id}
            onClick={() => handleLinkClick(section.id)}
          />
        ))}
      </nav>
    </header>
  );
}