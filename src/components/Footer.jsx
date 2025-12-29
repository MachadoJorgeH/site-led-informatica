import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-led-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              LED <span className="text-led-light">Informática</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Há mais de 20 anos oferecendo as melhores soluções em automação
              comercial e tecnologia para transformar o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-led-light transition">
                <Instagram />
              </a>
              <a href="#" className="hover:text-led-light transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-led-light transition">
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2 inline-block">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-led-light transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#empresa" className="hover:text-led-light transition">
                  A Empresa
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-led-light transition">
                  Serviços e Soluções
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-led-light transition">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2 inline-block">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-led-light mr-3 mt-1" />
                <span>
                  Rua 121, 140 - Sala 01, Setor Sul
                  <br />
                  Goiânia - GO, 74085-480
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-led-light mr-3" />
                <span>(62) 3520-2800</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-led-light mr-3" />
                <span>ledinf@terra.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} LED Informática. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
