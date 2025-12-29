import React from "react";
import { Download, FileText, HardDrive, Settings, Box } from "lucide-react";

const utilities = [
  {
    name: "DP-20 Plus 6.0 Bematech",
    details: "28 Abril 2018 (1.0.0) - Windows 32 bits",
    description: "Aplicativo compatível com Windows 32 bits para comunição com impressoras de Cheque DP-20.",
    size: "2 MB",
  },
  {
    name: "EPmfd III Epson",
    details: "15 Setembro 2015 (4.4.0) - Win 32/64 bits",
    description:
      "Aplicativo compatível com Windows 32/64 bits destinado ao cliente final e integradores com funções de: Verificação de status da impressora fiscal, com ferramentas para cancelamento de cupom fiscal aberto e impressão de redução Z pendente.",
    size: "4.5 MB",
  },
  {
    name: "Bematech DFI2.zip",
    details: "Ambiente DOS",
    description:
      "Usa comunicação direta em ambiente DOS. Não necessita de nenhum Driver.",
    size: "124 Kb",
  },
  {
    name: "Bematech WINMFD2Setup.zip",
    details: "Captura de MFD",
    description:
      "Utilitário desenvolvido para a captura de informações da MFD (Memória de Fita Detalhe) permitindo a visualização da segunda via, em formato txt, rtf e mdb. Disponível para os modelos: MP-2000TH FI, MP-6000TH FI, MP-2100 TH FI, MP-7000 TH FI, MP-3000 TH FI e MP-4000 TH FI.",
    size: "4.2 MB",
  },
  {
    name: "Bematech BemaToolsPro.rar",
    details: "Ferramenta Completa",
    description:
      "Aplicativo disponibilizado pela Bematech ao usuário de ECF para acessos a memórias fiscais. Gera arquivos a partir do 'download' da MFD (SPED, Tipo E e Tipo 60), testes de impressão, horário de verão, guilhotina e cadastros de parâmetros.",
    size: "10.4 MB",
  },
];

const drivers = [
  { brand: "Epson", description: "Arquivos e drivers fiscais" },
  { brand: "Bematech", description: "Impressoras fiscais e não fiscais" },
  { brand: "Daruma", description: "Drivers e manuais completos" },
];

const Downloads = () => {
  return (
    <section id="downloads" className="py-20 bg-white overflow-hidden bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-down"
            className="text-3xl md:text-4xl font-extrabold text-led-blue"
          >
            Central de Downloads
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Disponibilizamos aqui algumas de nossas ferramentas de trabalho para
            que nossos clientes juntamente com seus colaboradores possam
            usufruir destas facilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <h3 
              data-aos="fade-right"
              className="text-2xl font-bold text-gray-800 flex items-center border-b pb-4"
            >
              <Settings className="w-6 h-6 mr-2 text-led-light" />
              Utilitários e Ferramentas
            </h3>

            <div className="space-y-4">
              {utilities.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-md transition duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center group"
                >
                  <div className="mb-4 sm:mb-0">
                    <h4 className="text-lg font-bold text-led-blue group-hover:text-led-light transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block mb-2 mt-1">
                      {item.details}
                    </span>
                    <p className="text-sm text-gray-600 max-w-lg">
                      {item.description}
                    </p>
                  </div>
                  <button className="flex items-center bg-white border border-led-light text-led-light hover:bg-led-light hover:text-white px-4 py-2 rounded font-medium transition text-sm whitespace-nowrap shadow-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar ({item.size})
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            
            <div data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center border-b pb-4 mb-6">
                <HardDrive className="w-6 h-6 mr-2 text-led-light" />
                Drivers Oficiais
              </h3>
              <div className="space-y-4">
                {drivers.map((driver, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:border-led-light transition cursor-pointer flex items-center justify-between group transform hover:-translate-y-1 duration-300"
                  >
                    <div className="flex items-center">
                      <Box className="w-10 h-10 text-gray-400 group-hover:text-led-light transition mr-3" />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {driver.brand}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {driver.description}
                        </p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-300 group-hover:text-led-light" />
                  </div>
                ))}
              </div>
            </div>

            <div 
              data-aos="zoom-in" 
              data-aos-delay="400"
              className="bg-led-blue text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FileText className="w-6 h-6 mr-2" />
                Documentos Fiscais
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Acesse a área de documentos disponibilizados pela Secretaria da
                Fazenda para regularização de ECF.
              </p>
              <button className="w-full bg-led-light hover:bg-blue-600 text-white py-2 rounded font-bold transition shadow-md">
                Acessar Documentação
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Downloads;