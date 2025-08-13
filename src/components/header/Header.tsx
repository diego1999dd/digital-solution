import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import CepSearchModal from '../cep/CepSearchModal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between p-4 py-3 md:py-5">
        <Link to="/">
          <img src="/logo-nex.svg" alt="Logo da Nex" className="w-24 md:w-40" />
        </Link>

        <div className="hidden lg:flex">
          <Nav />
        </div>

        <div className="hidden items-center space-x-6 lg:flex">
          <CepSearchModal />

          <button className="hover:bg-accent/90 bg-accent px-6 py-3 font-kanit text-base text-background transition-colors md:px-10 md:py-5 md:text-lg">
            Get A Quote
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-50 overflow-y-auto bg-white lg:hidden">
          <Nav />
          <div className="border-t border-gray-200 p-4">
            <CepSearchModal />
            <button className="hover:bg-accent/90 mt-4 w-full bg-accent px-6 py-4 font-kanit text-base text-background transition-colors">
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
