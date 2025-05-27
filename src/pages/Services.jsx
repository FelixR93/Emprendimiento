// src/pages/Services.jsx
import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/services.json')
      .then(response => response.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading services:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Soluciones profesionales para todas sus necesidades de seguridad
          </p>
        </div>

        {/* Hero Banner */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:px-12 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Soporte técnico especializado
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Nuestro equipo de técnicos certificados está listo para ayudarle con cualquier necesidad relacionada con sus sistemas de seguridad.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-6 rounded-md font-medium transition-colors"
              >
                Solicitar asistencia
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nuestro Proceso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consulta Inicial</h3>
              <p className="text-gray-600">
                Evaluamos sus necesidades específicas y realizamos un diagnóstico completo de su entorno para identificar los puntos vulnerables.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Propuesta Personalizada</h3>
              <p className="text-gray-600">
                Diseñamos una solución adaptada a sus necesidades específicas y presupuesto, seleccionando los equipos más adecuados.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instalación y Soporte</h3>
              <p className="text-gray-600">
                Nuestros técnicos realizan una instalación profesional y le brindan el soporte continuo que necesita para mantener su sistema funcionando perfectamente.
              </p>
            </div>
          </div>
        </div>        

        {/* Call to Action */}
        <div className="mt-20 bg-gray-900 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              ¿Listo para mejorar la seguridad de su hogar o negocio?
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos ayudarle a proteger lo que más importa.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-blue-600 text-white hover:bg-blue-700 py-3 px-6 rounded-md font-medium transition-colors"
              >
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;