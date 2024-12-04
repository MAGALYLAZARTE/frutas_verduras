// src/pages/ForMonths.jsx

import React from 'react';
import logo from '../assets/logo.png';  
import fondo2 from '../assets/fondo2.png';  

function ForMonths() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${fondo2})` }}  
    >
          {/* Logo */}
      <header className="flex justify-center p-4 bg-transparent">
        <img src={logo} alt="Logo" className="w-80 h-auto" />
      </header>

      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-white text-xl md:text-3xl font-semibold text-center p-4">
          Aquí irán las frutas y verduras de cada mes que cargarás desde la base de datos.
        </h1>
      </div>
    </div>
  );
}

export default ForMonths;
