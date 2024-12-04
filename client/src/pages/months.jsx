import React from 'react';
import { Link } from 'react-router-dom';
import fondo2 from '../assets/fondo2.png';  // Ruta al fondo
import logo from '../assets/logo.png';  // Ruta al logo
// import Footer from '../components/Footer';  // Componente Footer

function Months() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-between"
      style={{ backgroundImage: `url(${fondo2})` }}  // Fondo de la página
    >
      {/* Logo */}
      <header className="flex justify-center p-6">
        <img
          src={logo}
          alt="Logo"
          className="w-80 h-auto mb-8"
        />
      </header>

      {/* Título */}
      <h1 className="text-white text-3xl md:text-4xl font-semibold text-center px-4 mb-6">
        SELECCIONA UN MES Y CONOCE LO QUE ESTÁ DE TEMPORADA
      </h1>

      {/* Lista de meses */}
      <ul className="space-y-4 mb-10">
        {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].map((month, index) => (
          <li key={index} className="text-xl text-white text-center">
            <Link
              to={`/month/${month.toLowerCase()}`}
              className="hover:text-green-400 transition-colors"
            >
              {month}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Months;
