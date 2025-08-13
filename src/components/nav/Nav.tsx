import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex flex-col items-start space-y-4 p-4 text-lg text-background lg:flex-row lg:items-center lg:space-x-12 lg:space-y-0 lg:p-0">
      <Link
        to="/"
        className="flex w-full items-center justify-between transition-colors hover:text-lime-400 lg:w-auto lg:justify-start"
      >
        <span className="border-b-2 border-accent pr-1">Home</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link
        to="/"
        className="flex w-full items-center justify-between font-medium transition-colors hover:text-lime-400 lg:w-auto lg:justify-start"
      >
        About Us
      </Link>
      <Link
        to="/"
        className="flex w-full items-center justify-between transition-colors hover:text-lime-400 lg:w-auto lg:justify-start"
      >
        <span className="pr-1">Portfolio</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link
        to="/"
        className="flex w-full items-center justify-between transition-colors hover:text-lime-400 lg:w-auto lg:justify-start"
      >
        <span className="pr-1">Pages</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
      <Link
        to="/"
        className="flex w-full items-center justify-between transition-colors hover:text-lime-400 lg:w-auto lg:justify-start"
      >
        <span className="pr-1">Blog</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-base" />
      </Link>
    </nav>
  );
};

export default Nav;
