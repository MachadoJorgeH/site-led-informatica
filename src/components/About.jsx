import React from "react";
import { CheckCircle } from "lucide-react";

const stats = [
  { label: "Anos de Mercado", value: "+20" },
  { label: "Clientes Atendidos", value: "+1.5k" },
  { label: "Sistemas Implantados", value: "100%" },
  { label: "Suporte Técnico", value: "24/7" },
];

const About = () => {
  return (
    <section id="empresa" className="py-20 bg-white bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-gray-100 pb-12"
          data-aos="fade-up"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-led-blue mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="relative" data-aos="fade-right">
            <img
              src="./foto-empresa.jpg" 
              alt="Equipe LED Informática"
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-led-blue text-white p-6 rounded-lg hidden md:block shadow-lg">
              <p className="font-bold text-4xl">20+</p>
              <p className="text-sm uppercase tracking-wide">Anos de Mercado</p>
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-led-light font-bold uppercase tracking-wide mb-2">
              Quem Somos
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Parceiros estratégicos para o crescimento do seu negócio
            </h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A <strong>LED Informática</strong> não é apenas uma empresa de
              software. Somos uma empresa de assistência técnica presente no
              mercado há 20 anos, prestando serviços relacionados à Automação
              Comercial e desenvolvendo diversos tipos de soluções customizadas
              para o seu negócio.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tornar nossos clientes mais competitivos e melhores através de
              resultados de serviços de qualidade em Tecnologias da informação.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="text-led-light w-6 h-6 mr-3" />
                <span>Suporte técnico ágil e humanizado</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="text-led-light w-6 h-6 mr-3" />
                <span>Sistemas homologados e seguros</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="text-led-light w-6 h-6 mr-3" />
                <span>Consultoria especializada em varejo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;