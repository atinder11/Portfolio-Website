"use client";

import { RiLinkedinFill, RiGithubFill, RiMailFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/atinder-kumar/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/atinder11",
    name: <RiGithubFill />,
  },
  {
    path: "mailto:atinderk71@gmail.com",
    name: <RiMailFill />,
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
          <div className={iconsStyles}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Social;
