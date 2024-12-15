import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import fondo2 from '../assets/fondo2.png';
import Frutas from '../assets/frutas.png';

function ForMonths() {
  const { month } = useParams(); // Obtener el parámetro del mes desde la URL
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/frutas-y-verduras/${month}`);
        setData(response.data);
      } catch (err) {
        setError('No se pudieron cargar los datos. Inténtalo más tarde.');
      }
    };

    fetchData();
  }, [month]);

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${fondo2})` }}
    >
      <header className="flex flex-col items-center p-4 bg-transparent">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-80 h-auto mb-4" />
        </Link>
        <img src={Frutas} alt="Frutas" className="w-100 h-auto" />
      </header>

      <div className="flex-grow flex items-center justify-center">
        {error ? (
          <h2 className="text-red-500 text-xl">{error}</h2>
        ) : data ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-green-700 text-2xl font-semibold mb-4 capitalize">
              Frutas y Verduras de {month}
            </h2>

            <h3 className="text-orange-600 font-bold">Frutas:</h3>
            <ul className="list-disc ml-4 mb-4">
              {data.map((item, index) => (
                <li key={index}>{item.frutas_op}</li>
              ))}
            </ul>

            <h3 className="text-orange-600 font-bold">Verduras:</h3>
            <ul className="list-disc ml-4">
              {data.map((item, index) => (
                <li key={index}>{item.verduras_op}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h2 className="text-white text-xl">Cargando...</h2>
        )}
      </div>
    </div>
  );
}

export default ForMonths;
