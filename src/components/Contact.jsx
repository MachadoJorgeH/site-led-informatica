import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-led-blue">
            Entre em Contato
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos prontos para atender sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="bg-led-blue text-white p-10 flex flex-col justify-between" data-aos="fade-right">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Fale Conosco</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-led-light mt-1" />
                  <span>Rua 121, 140 - Sala 01, Setor Sul<br/>Goiânia - GO</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-led-light" />
                  <span>(62) 3520-2800</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-led-light" />
                  <span>ledinf@terra.com.br</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 rounded-lg overflow-hidden h-64 shadow-lg border-2 border-blue-400">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238779.7997327361!2d-49.40057864353456!3d-16.69707252277873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6bd57d8085b%3A0x24866e9210080351!2sGoi%C3%A2nia%20-%20State%20of%20Goi%C3%A1s!5e0!3m2!1sen!2sbr!4v1709580000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="p-10" data-aos="fade-left">
            <h3 className="font-heading text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input type="text" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-led-light focus:border-led-light outline-none transition" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="tel" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-led-light focus:border-led-light outline-none transition" placeholder="(62) 99999-9999" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-led-light focus:border-led-light outline-none transition" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea rows="4" className="w-full border-gray-300 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-led-light focus:border-led-light outline-none transition" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full bg-led-blue hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-shine">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;