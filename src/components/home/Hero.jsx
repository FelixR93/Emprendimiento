import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo';

function Hero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Seguridad inteligente</span>
              <span className="block text-blue-500">para el hogar y el negocio</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Soluciones avanzadas de vigilancia y seguridad con la última tecnología en equipos CCTV. No vendemos cámaras.... entregamos tranquilidad, confianza y tecnología que protege lo que más valoras.
            </p>
            <div className="mt-10 flex justify-center space-x-6">
              <Link
                to="/products"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Explorar productos
              </Link>
              <Link
                to="/support"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
              >
                Soporte Técnico
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1"></div>
          <div className="flex-1 w-full bg-gradient-to-t from-gray-800"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative py-8 flex justify-center">
            <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen bg-gray-800 opacity-50"></div>
            <div className="mx-auto text-base max-w-prose lg:max-w-none flex items-center justify-center">
              <div className="relative z-10 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <Logo className="h-12 w-12 text-blue-500" />
                  <span className="text-white text-2xl font-bold ml-3">Seguridad con Smart Shield</span>
                </div>
                <blockquote>
                  <p className="text-lg text-white font-medium">
                    "Con las cámaras Smart Shield instaladas, por fin me siento seguro en mis instalaciones, incluso cuando estoy fuera. Su atención al cliente es de primera."
                  </p>
                  <footer className="mt-3">
                    <p className="text-base text-gray-300">
                      — Maria Rodriguez, Propietario de pequeña empresa
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;