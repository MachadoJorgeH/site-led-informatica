import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-32 min-h-[90vh] flex items-center justify-center text-white text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="Tecnologia Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1
          data-aos="fade-up"
          className="font-heading text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Automação e Tecnologia <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300">
            para sua Empresa
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light"
        >
          Transforme a gestão do seu negócio com as soluções da LED Informática.
          Sistemas de PDV, Consultoria e Suporte Especializado com mais de 20
          anos de mercado.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="btn-shine bg-led-light hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Fale Conosco
          </a>
          <a
            href="#servicos"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-led-blue text-white px-8 py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] md:h-[120px]"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="absolute bottom-16 md:bottom-24 left-0 w-full flex justify-center animate-bounce z-20">
        <a
          href="#empresa"
          className="text-white opacity-80 hover:opacity-100 transition cursor-pointer"
        >
          <ChevronDown className="w-12 h-12 drop-shadow-md" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
