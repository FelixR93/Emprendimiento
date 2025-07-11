import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("No se pudo cerrar sesión", error);
    }
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <img
                  src="/src/assets/images/ss.png"
                  alt="Logo"
                  className="h-32 w-32"
                />
                <span className="ml-4 text-xl font-bold text-blue-500">
                  Smart<span className="text-white">Shield</span>
                </span>
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </Link>
                <Link
                  to="/products"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Productos
                </Link>
                <Link
                  to="/support"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Soporte
                </Link>
                <a
                  href="#nosotros"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Sobre Nosotros
                </a>
                <a
                  href="/services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Servicios
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {currentUser ? (
                <div className="flex items-center">
                  <span className="text-gray-300 mr-4">
                    {currentUser.displayName || currentUser.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Link
                    to="/login"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  >
                    Acceso
                  </Link>
                  <Link
                    to="/register"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  >
                    Registrate
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/products"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Productos
            </Link>
            <Link
              to="/support"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Suporte
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            {currentUser ? (
              <div className="px-2 space-y-2">
                <div className="text-gray-300 px-3">
                  {currentUser.displayName || currentUser.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <div className="px-2 space-y-2">
                <Link
                  to="/login"
                  className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                >
                  Acceso
                </Link>
                <Link
                  to="/register"
                  className="block bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline mt-1"
                >
                  Registrate
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
