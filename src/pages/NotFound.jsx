import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg mx-auto" data-aos="zoom-in">
        
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-6 rounded-full">
            <AlertTriangle className="w-16 h-16 text-led-blue" />
          </div>
        </div>

        <h1 className="font-heading text-6xl font-extrabold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          Ops! Parece que a página que você está tentando acessar não existe ou foi movida.
        </p>

        <Link 
          to="/" 
          className="btn-shine inline-flex items-center bg-led-blue hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Home className="w-5 h-5 mr-2" />
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;