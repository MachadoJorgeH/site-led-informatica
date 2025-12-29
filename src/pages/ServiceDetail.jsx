import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Importando os componentes refatorados
import AutomationDetail from '../components/service-details/AutomationDetail';
import WebServicesDetail from '../components/service-details/WebServicesDetail';

const ServiceDetail = () => {
  const { id } = useParams();

  // Mapeamento simples: ID -> Componente
  const serviceComponents = {
    'automacao': <AutomationDetail />,
    'web': <WebServicesDetail />,
  };

  // Se o ID existir no mapa, renderiza o componente específico
  if (serviceComponents[id]) {
    return serviceComponents[id];
  }

  // Caso contrário (ex: ecf, impressoras), mostra a tela padrão "Em construção"
  return (
    <div className="pt-32 pb-20 text-center min-h-screen px-4">
       <Link to="/" className="inline-flex items-center text-led-blue hover:text-led-light font-bold mb-8 transition">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para Início
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 block">Detalhes do Serviço</h1>
      <p className="text-gray-600 mt-4">Conteúdo em desenvolvimento para este serviço.</p>
    </div>
  );
};

export default ServiceDetail;