import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Gerente, Supermercado Central",
    text: "A automação da Zanthus mudou a nossa frente de loja. O atendimento da LED é diferenciado, sempre resolvem rápido.",
  },
  {
    name: "Ana Paula",
    role: "Proprietária, Farmácia Vida",
    text: "Estávamos com problemas sérios de estoque. A consultoria e o sistema implantado organizaram tudo. Recomendo demais!",
  },
  {
    name: "Carlos Eduardo",
    role: "Diretor, Rede Pão Gostoso",
    text: "Parceria de anos. A estabilidade do sistema e o suporte técnico 24h nos dão a segurança que precisamos para crescer.",
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-led-blue">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A satisfação de quem confia na LED Informática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100 rotate-180" />
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10 italic">
                "{item.text}"
              </p>

              <div>
                <h3 className="font-bold text-gray-900 font-heading">{item.name}</h3>
                <span className="text-sm text-blue-600 font-medium">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;