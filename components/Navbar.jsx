import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/projects", name: "Resume" },
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
