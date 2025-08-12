import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center space-x-12 text-background text-lg">
      <Link to="/home" className=" hover:text-lime-400 transition-colors ">
        <span className="border-b-2 border-accent pr-1">Home</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link
        to="/sobre"
        className="font-medium hover:text-lime-400 transition-colors"
      >
        About Us
      </Link>
      <Link to="/home" className=" hover:text-lime-400 transition-colors ">
        <span className="pr-1">Portfolio</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link to="/home" className=" hover:text-lime-400 transition-colors ">
        <span className="pr-1">Pages</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link to="/home" className=" hover:text-lime-400 transition-colors ">
        <span className="pr-1">Blog</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
    </nav>
  );
};

export default Nav;
