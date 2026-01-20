import {
  faLinkedinIn,
  faGithub,
  faCodepen,
  faKaggle
} from "@fortawesome/free-brands-svg-icons";

import leetcodeLogo from "../assets/leetcodeLogo.png";

const socialMediaLinks = [
  {
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/alessandro-branco/",
    label: "Visit my LinkedIn profile to connect with me"
  },
  {
    icon: faGithub,
    url: "https://github.com/abranco0403",
    label: "Explore my projects on GitHub"
  },
  {
    icon: leetcodeLogo, // image icon supported
    url: "https://leetcode.com/u/abranco/",
    label: "View my coding practice and solutions on LeetCode"
  },
  {
    icon: faKaggle,
    url: "https://www.kaggle.com/",
    label: "Visit my Kaggle profile for data analyst projects"
  },
  {
    icon: faCodepen,
    url: "https://codepen.io/alsbranco",
    label: "Check out my front-end work on CodePen"
  }
];

export default socialMediaLinks;
