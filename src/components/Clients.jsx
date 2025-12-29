import React from "react";
import { Lock, User } from "lucide-react";

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div data-aos="fade-right">
            <h2 className="text-3xl font-extrabold text-led-blue mb-6">
              Área do Cliente
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Acompanhe através da nossa plataforma exclusiva o andamento de
              seus
              <strong> orçamentos, propostas, chamados técnicos</strong> e
              outras informações administrativas.
            </p>
            <p className="text-gray-600">
              Transparência e agilidade para você ter controle total sobre os
              serviços prestados pela LED Informática.
            </p>
          </div>

          <div 
            data-aos="fade-left"
            className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto w-full border border-gray-200 transform hover:shadow-2xl transition duration-500"
          >
            <div className="bg-gradient-to-r from-led-blue to-blue-900 p-6">
              <h3 className="text-white font-bold text-xl flex items-center">
                <Lock className="w-5 h-5 mr-3 text-led-light" />
                Acesso Clientes{" "}
                <span className="font-normal text-gray-300 ml-2 text-sm">
                  | HelpDesk
                </span>
              </h3>
            </div>

            <div className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Usuário / Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-led-light focus:border-led-light transition"
                      placeholder="Seu usuário"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-led-light focus:border-led-light transition"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-led-light hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-300 shadow-md transform hover:-translate-y-1 btn-shine"
                >
                  Entrar no Sistema
                </button>

                <div className="text-center text-sm">
                  <a href="#" className="text-led-light hover:underline">
                    Esqueceu sua senha?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;