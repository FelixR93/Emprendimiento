import React from 'react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Smart Shield</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">
              Proveer soluciones de seguridad innovadoras y confiables que protejan lo que más valoras, 
              utilizando tecnología de vanguardia y un servicio excepcional.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
            <p className="text-gray-600">
              Ser líderes en el mercado de seguridad electrónica, reconocidos por nuestra excelencia 
              técnica, innovación constante y compromiso con la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
