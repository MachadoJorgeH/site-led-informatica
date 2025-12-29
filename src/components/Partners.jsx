import React from 'react';
import { Award } from 'lucide-react';

const partners = [
  { name: 'Zanthus', color: 'text-red-600' },
  { name: 'Epson', color: 'text-blue-600' },
  { name: 'Bematech', color: 'text-blue-500' },
  { name: 'DigiSat', color: 'text-red-500' },
  { name: 'Daruma', color: 'text-orange-500' },
  { name: 'Elgin', color: 'text-blue-400' },
  { name: 'Zebra', color: 'text-black' },
  { name: 'Microsoft', color: 'text-blue-600' }
];

const Partners = () => {
  return (
    <section id="parceiros" className="py-16 bg-white border-t border-gray-100 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">
            Marcas e Parceiros Oficiais
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              
              <Award className={`w-12 h-12 mb-3 ${partner.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110`} />
              
              <span className={`text-xl font-bold ${partner.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                {partner.name}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;