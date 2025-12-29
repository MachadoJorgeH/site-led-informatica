import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const AutomationDetail = () => {
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
          Software de Automação
        </h1>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12 border-l-8 border-led-blue">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <img 
                src="http://ledinf.com.br/img/frontend/servicos/aplicacao-pdv.jpg" 
                alt="Zanthus Frente de Loja" 
                className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Zanthus Frente de Loja</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                O ramo varejista possui um termômetro de análise comercial - o consumidor - que está ficando cada vez mais exigente. Isso leva o empresário a investir em qualidade, eficiência e soluções que garantam agilidade.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Juntamente com a parceria <strong>Zanthus/LED Informática</strong>, propomos uma integração eficiente entre o sistema de frente de loja com o sistema de retaguarda.
              </p>
              <h3 className="font-bold text-led-blue mt-4 mb-2">Características Principais:</h3>
              <p className="text-sm text-gray-600">
                Realiza todas as operações de interação com o cliente via WEB ou na loja (PDV). Flexível, configurável por parâmetros, contempla nota fiscal completa, crediário, troca de mercadorias e fidelização.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12 border-l-8 border-red-600">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Aplicativo Comercial - GG4</h2>
              <h3 className="text-lg font-bold text-red-600 mb-4">DigiSat Tecnologia</h3>
              
              <p className="text-gray-600 mb-4">
                Os produtos LED Informática são o resultado da combinação de tecnologia e inteligência com o objetivo da otimização de recursos. Modernidade e eficiência em automação comercial, adequado à legislação PAF-ECF.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Emissão de Cupom Fiscal (ECF)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Controle de Estoque Online</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Retaguarda com Faturamento</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Contas a receber e pagar</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> TEF Discado e Dedicado</li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> SPED Fiscal e Sintegra</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Balanças Checkout e Etiquetadoras</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Promoções e Fidelidade</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Controle de Permissões</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Proteção contra queda de energia</li>
                </ul>
              </div>
            </div>
             <div className="w-full md:w-1/3 order-1 md:order-2 flex items-center justify-center">
              <img 
                src="http://ledinf.com.br/img/frontend/servicos/digisat.png" 
                alt="Logo DigiSat" 
                className="w-full max-w-[250px] h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="bg-led-blue text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Metodologia de Implantação</h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-blue-100">
            Organizamos o processo em etapas bem definidas para garantir o funcionamento adequado do processo diário.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-led-light mb-2">1. Concepção</h3>
              <p className="text-sm">Entender, definir e descrever os requisitos do aplicativo para o seu negócio.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-led-light mb-2">2. Treinamento</h3>
              <p className="text-sm">Especificar o uso do sistema de maneira passível de entendimento e validação dos usuários.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-led-light mb-2">3. Implantação</h3>
              <p className="text-sm">Instalação nos computadores, check-out e parametrização dos periféricos.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AutomationDetail;