import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/kitten.jpeg';
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
    <div className="w-full max-w-[80rem] mx-auto">
      <div className="flex wrap flex-col lg:flex-row">
        {/* HEADER - TITLE */}
        <div className="pt-[64px] px-[38px]">
          <h1 className="w-3/4 text-[38px] font-semibold leading-[44px] mb-[18px] color-[#111111]">
            Hello, I'm Alessandro.<br/>
            front-End Developer<br/>
            At <span className="text-orange"><Link className="underline">Memoreez</Link></span>.
          </h1>
          <p className="w-full text-[15px] leading-[24px] mb-4 text-[#777777]">
            Currently, I'm leading the Gaming Video Discovery & 
            Tournaments team at Facebook Gaming. Our mission is to 
            "empower people to build community through friendly competition 
            and shared love of gaming."
            <span>Alessandro</span>
          </p>
          <div className="flex justify-between items-center mb-[75px]">
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
        <div className="relative">
          <img src={heroImg} alt="Kitten Hero" className="object-cover w-full h-full" />
          <div className="text-white flex gap-3 absolute bottom-0 right-0 pe-6 pb-6">
            <FooterSocialIcons />
          </div>
        </div>
      </div>
    </div>
  )
}
