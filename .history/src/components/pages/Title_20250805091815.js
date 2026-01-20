// src/components/pages/Title.jsx
import { useEffect, useState } from 'react';
import { titleContent } from '../../data/TitleContent';
import '../styles/title.css';

export const Title = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = isMobile ? titleContent.mobile : titleContent.desktop;

  return (
    <header>
      <h1 className="title_name">Alessandro Branco</h1>
      <h2 className="title_description">{content.description}</h2>
      <p className="title_paragraph">{content.paragraph}</p>
    </header>
  );
};
