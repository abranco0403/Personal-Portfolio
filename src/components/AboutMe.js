import React from 'react';
import { aboutMeContent } from '../data/aboutMeContent';
import './styles/about.css';

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="about_container">
        <h2 className='uppercase text-sm mb-6 lg:hidden'>About</h2>
        {aboutMeContent.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};


