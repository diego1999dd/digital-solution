import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import CepSearchModal from '../cep/CepSearchModal';
// 1. Importe o novo componente aqui

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-4 py-5">
        <Link to="/">
          <img src="/logo-nex.svg" alt="Logo da Nex" className="w-24 md:w-40" />
        </Link>

        <Nav />

        <div className="flex items-center space-x-6">
          <CepSearchModal />

          <button className="bg-accent px-10 py-5 font-kanit text-lg text-background transition-colors hover:bg-accent">
            Get A Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
