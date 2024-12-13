// src/components/Enero.jsx
import React from 'react';

const Enero = ({ items }) => {
  const eneroItems = items.filter(item => item.month === 'Enero');

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-white text-2xl font-semibold mb-4">Frutas y Verduras de Enero</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {eneroItems.length > 0 ? (
          eneroItems.map(item => (
            <div key={item.id} className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
              <h3 className="text-green-700 text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-700">{item.type}</p>
            </div>
          ))
        ) : (
          <p className="text-white">No hay frutas o verduras para este mes.</p>
        )}
      </div>
    </div>
  );
};

export default Enero;
