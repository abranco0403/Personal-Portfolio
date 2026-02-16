// src/components/pages/Resume.jsx
import React from "react";
import { ArrowUp } from "../common/ArrowUp";
import resume from "../../assets/docs/Alessandro_Branco_Resume.pdf";

export const Resume = () => {
  return (
    <div className="md:px-6 mt-8">
      <ArrowUp
        href={resume}
        linkText="View Full Resume"
        ariaLabel="Open resume PDF in a new tab"
      />
    </div>
  );
};
