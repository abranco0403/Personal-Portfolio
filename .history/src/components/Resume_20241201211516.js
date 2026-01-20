import { ArrowUp } from './common/ArrowUp'; // Adjust the path based on your file structure
import resume from '../assets/Alessandro_Branco_resume.pdf';

export const Resume = () => {
  const handleDownload = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className='md:px-6'>
      <ArrowUp 
        onClick={handleDownload} 
        linkText='View Full Resume' 
      />
    </div>
  );
};


