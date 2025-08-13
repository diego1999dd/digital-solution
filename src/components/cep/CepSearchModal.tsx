import { useState, type FormEvent } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

const CepSearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<ViaCepResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);

    setCep('');
    setAddress(null);
    setError(null);
  };

  const handleCepSearch = async (event: FormEvent) => {
    event.preventDefault();
    const formattedCep = cep.replace(/\D/g, '');

    if (formattedCep.length !== 8) {
      setError('CEP inválido. Por favor, digite 8 números.');
      setAddress(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setAddress(null);

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${formattedCep}/json/`
      );
      const data: ViaCepResponse = await response.json();

      if (data.erro) {
        setError('CEP não encontrado. Tente novamente.');
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (err) {
      setError('Ocorreu um erro ao buscar o CEP. Verifique sua conexão.');
      setAddress(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex items-center justify-center border border-secondary px-6 py-6"
        aria-label="Buscar CEP"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 14.7188C16.0625 15.0729 16.0729 15.4271 15.7812 15.7812C15.6354 15.9271 15.4583 16 15.25 16C15.0625 16 14.875 15.9271 14.6875 15.7812L10.5 11.5938C9.375 12.5104 8.03125 12.9792 6.46875 13C4.63542 12.9583 3.11458 12.3229 1.90625 11.0938C0.677083 9.86458 0.0416667 8.33333 0 6.5C0.0416667 4.66667 0.666667 3.13542 1.875 1.90625C3.10417 0.677083 4.63542 0.0416667 6.46875 0C8.30208 0.0416667 9.83333 0.677083 11.0625 1.90625C12.2917 3.13542 12.9271 4.66667 12.9688 6.5C12.9479 8.04167 12.4792 9.38542 11.5625 10.5312L15.75 14.7188ZM1.5 6.5C1.54167 7.91667 2.03125 9.09375 2.96875 10.0312C3.90625 10.9688 5.08333 11.4583 6.5 11.5C7.91667 11.4583 9.09375 10.9688 10.0312 10.0312C10.9688 9.09375 11.4583 7.91667 11.5 6.5C11.4583 5.08333 10.9688 3.90625 10.0312 2.96875C9.09375 2.03125 7.91667 1.54167 6.5 1.5C5.08333 1.54167 3.90625 2.03125 2.96875 2.96875C2.03125 3.90625 1.54167 5.08333 1.5 6.5Z"
            fill="#797E88"
          />
        </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="relative w-full max-w-2xl rounded-lg bg-white p-6 font-sans text-background shadow-2xl md:p-8">
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-700"
              aria-label="Fechar modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Consultar Endereço por CEP
            </h2>

            <form
              onSubmit={handleCepSearch}
              className="mb-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite o CEP (ex: 01001-000)"
                className="flex-grow rounded-md border border-secondary px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center rounded-md bg-accent px-6 py-2 font-semibold text-background transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                ) : (
                  'Buscar'
                )}
              </button>
            </form>

            {error && <p className="mb-4 text-center text-red-500">{error}</p>}

            {address && (
              <div className="animate-fade-in grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-tertiary">
                    Logradouro
                  </label>
                  <input
                    type="text"
                    value={address.logradouro || ''}
                    disabled
                    className="mt-1 w-full cursor-not-allowed rounded-md border-secondary bg-gray-100 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tertiary">
                    Bairro
                  </label>
                  <input
                    type="text"
                    value={address.bairro || ''}
                    disabled
                    className="mt-1 w-full cursor-not-allowed rounded-md border-secondary bg-gray-100 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tertiary">
                    Complemento
                  </label>
                  <input
                    type="text"
                    value={address.complemento || ''}
                    disabled
                    className="mt-1 w-full cursor-not-allowed rounded-md border-secondary bg-gray-100 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tertiary">
                    Cidade
                  </label>
                  <input
                    type="text"
                    value={address.localidade || ''}
                    disabled
                    className="mt-1 w-full cursor-not-allowed rounded-md border-secondary bg-gray-100 p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tertiary">
                    Estado (UF)
                  </label>
                  <input
                    type="text"
                    value={address.uf || ''}
                    disabled
                    className="mt-1 w-full cursor-not-allowed rounded-md border-secondary bg-gray-100 p-2"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CepSearchModal;
