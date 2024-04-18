import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/kitten.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterSocialIcons = () => {
  // Define an array of social icons
  const socialIcons = [
    { icon: faLinkedinIn },
    { icon: faGithub },
    { icon: faCodepen }
  ];

  return (
    <div>
      <div className="flex gap-3">
        {/* Map through the array of social icons */}
        {socialIcons.map((socialIcon, index) => (
          <FooterSocialIcon key={index} icon={socialIcon.icon} />
        ))}
      </div>
    </div>
  );
};

const FooterSocialIcon = ({ icon }) => (
  <div className="social-icons">
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
  </div>
);

export const Home = () => {
  return (
    <div className="w-screen max-w-[100rem] h-screen mx-auto">
      <div className="h-screen flex wrap flex-col lg:flex-row lg:justify-center lg:items-center">
        {/* HEADER - TITLE */}
        <div className="w-full mt-[80px] px-[38px] lg:w-1/2">
          <h1 className="w-3/4 font-sans text-[38px] leading-[44px] font-semibold uppercase pt-[32px] md:text-[38px] mb-[18px] color-[#111111] md:pt-[64px] lg:text-[44px] lg:leading-[52px] lg:w-full">
            Hello, I'm Alessandro.<br/>
            Nice to meet you!<br/>
          </h1>
          <p className="w-full text-[15px] leading-[24px] mb-4 text-[#777777]">
          I'm currently at Atlassian on the Growth team as a Director of Product Design (IC), 
          leading various types of strategic growth design work across the company
  
          </p>
          <div className="flex justify-between items-center mb-[60px]">
            <div className="flex flex-row items-center">
              <FontAwesomeIcon icon={faCompass} />
              <div className="ps-4">
                <p className="text-[12px] leading-[16px] text-[#777777]">currently in</p>
                <p className="text-[16px] leading-[20px] text-[#111111]">Torrance, California</p>
              </div>
            </div>
            <p className="text-[13px] uppercase leading-[16px] text-[#777777] lg:hidden">Email: <Link className="text-[#111111] underline font-semibold">abranco.dev@gmail.com</Link></p>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img src={heroImg} alt="Kitten Hero" className="sm:mb-[85px] object-cover w-full h-[600px] md:h-screen lg:mb-0" />
          <div className="text-white flex gap-3 absolute bottom-0 right-0 pe-6 pb-6">
            <FooterSocialIcons />
          </div>
        </div>
      </div>
    </div>
  )
}
