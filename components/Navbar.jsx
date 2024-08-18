import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  {
    path: "https://drive.google.com/file/d/17UiEStTuWhKYBQaJVi8qLDYx9lcnreyM/view?usp=sharing",
    name: "Resume",
    external: true, // Flag to identify external links
  },
  { path: "/contact", name: "contact" },
];

const Navbar = ({
  containerStyles,
  linkStyles,
  activeLinkStyles,
  underLineStyles,
}) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`relative capitalize ${linkStyles}`}
          target={link.external ? "_blank" : "_self"}
          rel={link.external ? "noopener noreferrer" : ""}
        >
          {link.name}
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underLineStyles}`}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
