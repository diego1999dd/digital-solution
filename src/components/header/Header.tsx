import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import CepSearchModal from '../cep/CepSearchModal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative">
      <div className="container mx-auto flex items-center justify-between p-4 py-5">
        <Link to="/">
          <img src="/logo-nex.svg" alt="Logo da Nex" className="w-24 md:w-40" />
        </Link>

        <div className="hidden lg:flex">
          <Nav />
        </div>

        <div className="hidden items-center space-x-6 lg:flex">
          <CepSearchModal />

          <button className="bg-accent px-10 py-5 font-kanit text-lg text-background transition-colors hover:bg-accent">
            Get A Quote
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>
    {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
          <Nav />
          <div className="p-4">
            <CepSearchModal />
            <button className="mt-4 w-full bg-accent px-10 py-5 font-kanit text-lg text-background transition-colors hover:bg-accent">
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
