// src/components/ForMonths.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import fondo2 from '../assets/fondo2.png';
import Enero from '../component/Enero.jsx';

function ForMonths() {
  const [items, setItems] = useState([]); // Estado para almacenar los items
  const [error, setError] = useState(null); // Estado para manejar errores
  const [month, setMonth] = useState(''); // Estado para manejar el mes actual

  useEffect(() => {
    // Obtener los datos de la API cuando el componente se monta
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        setItems(response.data); // Almacena los datos en el estado
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        setMonth(currentMonth); // Establece el mes actual
      } catch (err) {
        setError('Error al cargar los datos. Inténtalo de nuevo más tarde.');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // Determina qué componente renderizar basado en el mes
  const renderMonthComponent = () => {
    switch (month) {
      case 'January':
        return <Enero items={items} />;
      // case 'February':
      //   return <Febrero items={items} />;
      // default:
        return <p className="text-white">No hay datos disponibles para este mes.</p>;
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${fondo2})` }}
    >
      <header className="flex flex-col items-center p-4 bg-transparent">
        <Link to="/months" className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-80 h-auto mb-4" />
        </Link>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center mb-6">
          Frutas y verduras de temporada
        </h1>

        {/* Mostrar mensaje de error si ocurre un problema */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Mostrar el componente del mes actual */}
        {renderMonthComponent()}
      </div>
    </div>
  );
}

export default ForMonths;
