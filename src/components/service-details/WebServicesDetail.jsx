import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Server, Database } from 'lucide-react';

const WebServicesDetail = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 block">
          <Link to="/" className="inline-flex items-center text-led-blue hover:text-led-light font-bold transition">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para Início
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold text-led-blue mb-12 border-b-4 border-led-light pb-4 inline-block">
          Web Services
        </h1>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <img 
                  src="http://ledinf.com.br/img/frontend/servicos/apache_web.jpg" 
                  alt="Apache HTTP Web Server" 
                  className="w-3/4 max-w-[250px] h-auto object-contain rounded-md"
                />
              </div>
              
              <div className="w-full md:w-2/3 text-gray-600 leading-relaxed space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Apache HTTP Web Server</h2>
                <p>
                  Apache Web Server é um servidor open-source HTTP desenvolvido e mantido pela Fundação Apache para ambos os sistemas operacionais Windows e Unix.
                </p>
                <p>
                  A LED Informática tem implantado servidores web Apache em ambos os sistemas operacionais Windows e Unix para a instalação do Sistema Zanthus. Roda estável em ambos os sistemas operacionais.
                </p>
                <p>
                  O objetivo maior desta concepção é facilitar a utilização do sistema, adaptando as atuais concepções de software que é a migração do sistema para a plataforma WEB-services.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-led-blue to-blue-800 rounded-lg p-6 text-white shadow-inner">
              <h3 className="font-bold border-b border-blue-400 pb-2 mb-4 inline-block">Termos Relacionados</h3>
              <div className="flex flex-wrap gap-4 font-medium">
                <span className="flex items-center"><Globe className="w-4 h-4 mr-2 text-led-light"/> Aplicações WEB</span>
                <span className="flex items-center"><Server className="w-4 h-4 mr-2 text-led-light"/> Windows Services</span>
                <span className="flex items-center"><Database className="w-4 h-4 mr-2 text-led-light"/> Integração entre Sistemas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-led-light">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Agilidade e Eficiência</h3>
              <p className="text-gray-600 leading-relaxed">
                Para as empresas, os Web services podem trazer agilidade para os processos e eficiência na comunicação entre cadeias de produção ou de logística. Toda e qualquer comunicação entre sistemas passa a ser dinâmica e segura.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 mt-1"><div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-led-blue font-bold">1</div></div>
                <div className="ml-4"><h4 className="text-lg font-bold text-gray-900">Concepção</h4><p className="text-gray-600">Entender, definir e descrever os requisitos do aplicativo.</p></div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1"><div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-led-blue font-bold">2</div></div>
                <div className="ml-4"><h4 className="text-lg font-bold text-gray-900">Treinamento</h4><p className="text-gray-600">Especificar o uso do sistema de maneira passível de entendimento.</p></div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1"><div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-led-blue font-bold">3</div></div>
                <div className="ml-4"><h4 className="text-lg font-bold text-gray-900">Implantação</h4><p className="text-gray-600">Instalação, configurações e parametrização dos periféricos.</p></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-led-blue mb-3">Metodologia</h3>
              <p className="text-sm text-gray-600 mb-4">
                Conheça cada detalhe que pertence a nossa metodologia e como ela pode ajudar a obter melhores resultados.
              </p>
              <Link to="/#contato" className="block w-full text-center bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white font-bold py-2 rounded shadow transition">
                Saiba mais
              </Link>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <p className="text-gray-700 font-medium">
                Separamos alguns de nossos melhores trabalhos de <strong className="text-led-blue">Software para automação</strong> para você!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebServicesDetail;