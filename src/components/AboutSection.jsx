import React from "react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Sobre <span className="text-blue-600">Smart Shield</span>
          </h2>
          <div className="mt-3 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            En Smart Shield nos especializamos en proporcionar soluciones de
            seguridad de alta calidad para hogares y negocios.
          </p>
        </div>

        <div className="space-y-6 text-gray-600 text-justify max-w-4xl mx-auto mb-16">
          <p>
            Ofrecemos una amplia gama de equipos CCTV, cámaras de seguridad y
            sistemas de alarma, respaldados por un servicio técnico profesional
            y personalizado.
          </p>
          <p>
            Nuestro compromiso es brindar tranquilidad a nuestros clientes
            mediante tecnología de vanguardia y un servicio excepcional.
            Trabajamos con las mejores marcas del mercado y contamos con
            técnicos altamente capacitados para garantizar instalaciones
            perfectas y un soporte continuo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md transition hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2 border-blue-100">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Proveer soluciones de seguridad innovadoras y confiables que
              protejan lo que más valoras, utilizando tecnología de vanguardia y
              un servicio excepcional.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md transition hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2 border-blue-100">
              Nuestra Visión
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ser líderes en el mercado de seguridad electrónica, reconocidos
              por nuestra excelencia técnica, innovación constante y compromiso
              con la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
