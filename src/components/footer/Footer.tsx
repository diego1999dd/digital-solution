import social from '@/assets/social.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <nav className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:mb-0">
            <a href="#" className="text-sm font-semibold">
              About Company
            </a>
            <a href="#" className="text-sm font-semibold">
              Our Careers
            </a>
            <a href="#" className="text-sm font-semibold">
              Services
            </a>
            <a href="#" className="text-sm font-semibold">
              Contact
            </a>
          </nav>

          <div className="flex gap-6">
            <a href="#" className="text-base font-semibold">
              Privacy Policy
            </a>
            <a href="#" className="text-base font-semibold">
              Terms & Conditions
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex items-center justify-between">
          <img src={social} alt="Ícones de redes sociais" />

          <div>
            <p className="text-sm">
              Copyright &copy; {currentYear} Nex. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
