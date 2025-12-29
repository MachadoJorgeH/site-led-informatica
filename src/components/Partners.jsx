import React from 'react';

const partners = [
  { name: 'Zanthus', logo: './zanthus_logo.jpg' },
  { name: 'Epson', logo: './epson_logo.png' },
  { name: 'Bematech', logo: './bematech_logo.png' },
  { name: 'Elgin', logo: './elgin_logo.png' }
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group flex items-center justify-center p-4 transition-all duration-500 w-full h-32"
            >
              <img 
                src={partner.logo} 
                alt={`Parceiro ${partner.name}`}
                className="max-h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;