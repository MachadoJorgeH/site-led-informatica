import React, { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logoLed from "../assets/images/logo_led_informatica.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e, targetId) => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="cursor-pointer"
            >
              <img
                src={logoLed}
                alt="LED Informática"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link
                  to="/#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="text-gray-700 hover:text-led-light font-medium transition duration-300"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/#empresa"
                  onClick={(e) => handleNavClick(e, "#empresa")}
                  className="text-gray-700 hover:text-led-light font-medium transition duration-300"
                >
                  A Empresa
                </Link>
              </li>
              <li>
                <Link
                  to="/#servicos"
                  onClick={(e) => handleNavClick(e, "#servicos")}
                  className="text-gray-700 hover:text-led-light font-medium transition duration-300"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/#downloads"
                  onClick={(e) => handleNavClick(e, "#downloads")}
                  className="text-gray-700 hover:text-led-light font-medium transition duration-300"
                >
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  to="/#parceiros"
                  onClick={(e) => handleNavClick(e, "#parceiros")}
                  className="text-gray-700 hover:text-led-light font-medium transition duration-300"
                >
                  Parceiros
                </Link>
              </li>
              <li>
                <Link
                  to="/#clientes"
                  onClick={(e) => handleNavClick(e, "#clientes")}
                  className="flex items-center text-led-blue border border-led-blue px-4 py-2 rounded-md font-bold hover:bg-led-blue hover:text-white transition duration-300"
                >
                  <User className="w-4 h-4 mr-2" />
                  Área do Cliente
                </Link>
              </li>
              <li>
                <Link
                  to="/#contato"
                  onClick={(e) => handleNavClick(e, "#contato")}
                  className="bg-led-light text-white px-5 py-2 rounded-md font-bold hover:bg-blue-700 transition duration-300 shadow-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen
                  ? "Fechar menu de navegação"
                  : "Abrir menu de navegação"
              }
              title={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="text-gray-700 hover:text-led-blue focus:outline-none transition-transform duration-300"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col items-center py-8 space-y-6 animate-fade-in-down">
          <Link
            to="/#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl text-gray-700 hover:text-led-light font-medium"
          >
            Início
          </Link>
          <Link
            to="/#empresa"
            onClick={(e) => handleNavClick(e, "#empresa")}
            className="text-xl text-gray-700 hover:text-led-light font-medium"
          >
            A Empresa
          </Link>
          <Link
            to="/#servicos"
            onClick={(e) => handleNavClick(e, "#servicos")}
            className="text-xl text-gray-700 hover:text-led-light font-medium"
          >
            Serviços
          </Link>
          <Link
            to="/#downloads"
            onClick={(e) => handleNavClick(e, "#downloads")}
            className="text-xl text-gray-700 hover:text-led-light font-medium"
          >
            Downloads
          </Link>
          <Link
            to="/#parceiros"
            onClick={(e) => handleNavClick(e, "#parceiros")}
            className="text-xl text-gray-700 hover:text-led-light font-medium"
          >
            Parceiros
          </Link>

          <hr className="w-1/2 border-gray-200" />

          <Link
            to="/#clientes"
            onClick={(e) => handleNavClick(e, "#clientes")}
            className="flex items-center text-led-blue border border-led-blue px-6 py-3 rounded-md font-bold hover:bg-led-blue hover:text-white transition duration-300 w-3/4 justify-center"
          >
            <User className="w-5 h-5 mr-2" />
            Área do Cliente
          </Link>

          <Link
            to="/#contato"
            onClick={(e) => handleNavClick(e, "#contato")}
            className="bg-led-light text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition duration-300 shadow-sm w-3/4 text-center"
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
