import React from 'react';
import { Link } from 'react-router-dom';  
import fondo2 from '../assets/fondo2.png';  
import logo from '../assets/logo.png';  

function Months() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${fondo2})` }} 
    >
      {/* Logo con animación */}
      <header className="flex justify-center p-6 mb-6 sm:mb-8 animate-fadeIn">
        <Link to="/" className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="w-60 sm:w-80 h-auto"  
          />
        </Link>
      </header>

      {/* Título con animación */}
      <h1 className="text-green-700 text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 px-4 animate-fadeIn animate-delay-500ms">
        Selecciona un mes y conoce lo que está de temporada
      </h1>

      {/* Imagen de vegetales con animación */}
      <div className="w-full sm:w-1/2 mt-6 sm:mt-8 mb-6 animate-fadeIn animate-delay-1000ms">
        <img
          src="/vegetales.png" 
          alt="vegetales"
          className="w-1/2 sm:w-1/3 md:w-1/4 h-auto rounded-lg mx-auto"  
        />
      </div>

      {/* Lista de meses con animación */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 w-full px-4 sm:px-0">
        {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].map((month, index) => (
          <li 
            key={index} 
            className="bg-white border-2 border-orange-500 text-center py-4 px-6 rounded-lg shadow-md hover:bg-orange-500 transition-colors animate-slideUp animate-delay-1500ms"
          >
            <Link
              to={`/month/${month.toLowerCase()}`}
              className="block text-green-700 text-lg sm:text-xl font-semibold hover:text-white"  
            >
              {month}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Months;
