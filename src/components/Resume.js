import { ArrowUp } from './common/ArrowUp'; // Adjust the path based on your file structure
import resume from '../assets/resume.pdf';

export const Resume = () => {
  const handleDownload = () => {
    window.open(resume, '_blank');
  };

  return (
    <div>
      <ArrowUp 
        onClick={handleDownload} 
        linkText='View Full Resume' 
      />
    </div>
  );
};


