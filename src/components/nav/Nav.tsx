import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex items-center space-x-12 text-lg text-background">
      <Link to="/" className="transition-colors hover:text-lime-400">
        <span className="border-b-2 border-accent pr-1">Home</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link
        to="/"
        className="font-medium transition-colors hover:text-lime-400"
      >
        About Us
      </Link>
      <Link to="/" className="transition-colors hover:text-lime-400">
        <span className="pr-1">Portfolio</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link to="/" className="transition-colors hover:text-lime-400">
        <span className="pr-1">Pages</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link to="/" className="transition-colors hover:text-lime-400">
        <span className="pr-1">Blog</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
    </nav>
  );
};

export default Nav;
