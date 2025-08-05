import { ArrowUp } from '../common/ArrowUp'; // Ensure this path is correct
import resume from '../../assets/docs/Alessandro_Branco_resume_data.pdf';

export const Resume = () => {
  const handleDownload = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className="md:px-6">
      <ArrowUp 
        onClick={handleDownload} 
        linkText="View Full Resume" 
      />
    </div>
  );
};
