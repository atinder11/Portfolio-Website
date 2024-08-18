import Social from "./Social";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-white mb-4 space-x-2">
          <span>Made with ❤️</span>
          <span>
            by{" "}
            <Link
              href="https://www.linkedin.com/in/atinder-kumar/"
              target="_blank"
              passHref
            >
              Atinder Kumar
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-center text-muted-foreground">
          Copyright &copy; Atinder Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
