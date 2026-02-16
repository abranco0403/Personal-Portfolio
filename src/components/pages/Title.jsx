// src/components/pages/Title.jsx
import { useEffect, useState } from "react";
import { titleContent } from "../../data/TitleContent";
import "../styles/title.css";

export const Title = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);

    checkIsMobile(); // set initial value on mount
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const content = isMobile ? titleContent.mobile : titleContent.desktop;

  return (
    <header>
      {/* Your name stays constant */}
      <h1 className="title_name">Alessandro Branco</h1>

      {/* Role + focus (new structure) */}
      <h2 className="title_description">{content.header}</h2>
      <h3 className="title_subheader">{content.subheader}</h3>

      {/* Value statement */}
      <p className="title_paragraph">{content.paragraph}</p>
    </header>
  );
};
