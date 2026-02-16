// src/data/SocialMediaData.js
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePdf from "../assets/docs/Alessandro_Branco_Resume.pdf";

const socialMediaLinks = [
  { id: "linkedin", icon: faLinkedinIn, url: "https://www.linkedin.com/in/alessandro-branco/", label: "LinkedIn", priority: "primary" },
  { id: "github", icon: faGithub, url: "https://github.com/abranco0403", label: "GitHub", priority: "primary" },

  { id: "resume_open", icon: faFilePdf, url: resumePdf, label: "Resume (Open)", priority: "primary", action: "open", filename: "Alessandro_Branco_Resume.pdf" },
  { id: "resume_download", icon: faDownload, url: resumePdf, label: "Resume (Download)", priority: "primary", action: "download", filename: "Alessandro_Branco_Resume.pdf" },
];

export default socialMediaLinks;
