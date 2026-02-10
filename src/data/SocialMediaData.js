import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import resumePdf from "../assets/docs/Alessandro_Branco_Resume.pdf";

/**
 * Social links configuration
 * - Data only (no UI logic)
 * - Assets are imported so bundlers handle them safely
 */
const socialMediaLinks = [
  {
    id: "linkedin",
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/alessandro-branco/",
    label: "LinkedIn",
    priority: "primary",
    external: true,
  },
  {
    id: "github",
    icon: faGithub,
    url: "https://github.com/abranco0403",
    label: "GitHub",
    priority: "primary",
    external: true,
  },
  {
    id: "resume",
    icon: faFilePdf,
    url: resumePdf,
    label: "Resume (PDF)",
    priority: "primary",
    external: true, // still opens a new tab
  },
];

export default socialMediaLinks;
