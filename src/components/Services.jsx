import React from "react";
import { Printer, Wrench, Zap, Monitor, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "ecf",
    title: "Assistência em ECFs",
    description:
      "Empresa credenciada pelo FISCO-GO. Experiência em manutenção e lacração de impressoras fiscais.",
    icon: <Printer className="w-12 h-12 text-led-light mb-4" />,
  },
  {
    id: "impressoras",
    title: "Manutenção de Impressoras",
    description:
      "Reparos especializados em impressoras matriciais, laser, térmicas e jato de tinta.",
    icon: <Wrench className="w-12 h-12 text-led-light mb-4" />,
  },
  {
    id: "nobreak",
    title: "Manutenção de No-Breaks",
    description:
      "Proteja seus equipamentos contra falhas de energia. Manutenção preventiva e corretiva.",
    icon: <Zap className="w-12 h-12 text-led-light mb-4" />,
  },
  {
    id: "automacao",
    title: "Software de Automação",
    description:
      "Parceria oficial Zanthus. Soluções robustas de PDV e Retaguarda com mais de 25 mil licenças.",
    icon: <Monitor className="w-12 h-12 text-led-light mb-4" />,
  },
  {
    id: "consultoria",
    title: "Consultoria de TI",
    description:
      "Profissionais experientes para liderar processos de mudança tecnológica.",
    icon: <Users className="w-12 h-12 text-led-light mb-4" />,
  },
  {
    id: "web",
    title: "Web Services",
    description:
      "Desenvolvimento e integração de aplicações Web e suporte a banco de dados.",
    icon: <Globe className="w-12 h-12 text-led-light mb-4" />,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-led-blue">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Clique nos serviços abaixo para ver mais detalhes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={`/servico/${service.id}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-led-light/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-led-light to-led-blue opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                <div className="text-led-blue mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-led-light transition-colors font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
