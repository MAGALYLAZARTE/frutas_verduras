import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import axios from 'axios';  
import fondo2 from '../assets/fondo2.png';
import logo from '../assets/logo.png';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  
  const [success, setSuccess] = useState('');  

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    setError('');
    setSuccess('');

    try {
     
      const response = await axios.post('http://localhost:3000/api/users', {
        name,
        email,
        password,
      });

      // Si la respuesta es exitosa
      setSuccess('Usuario registrado con éxito!');
      console.log('Respuesta del servidor:', response.data);

      // Redirigimos a la página de "months" después del registro exitoso
      navigate('/months');  

    } catch (err) {
      // Si ocurre un error
      setError('Hubo un error al registrar el usuario.');
      console.error('Error de registro:', err);
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-start" 
      style={{ backgroundImage: `url(${fondo2})` }}
    >
      {/* Logo - Envolvemos la imagen con Link */}
      <header className="flex justify-center p-4 bg-transparent">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-80 h-auto" />
        </Link>
      </header>

      {/* Formulario de Registro */}
      <div className="bg-green-700 bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-4 sm:mt-10">
        <h2 className="text-white text-3xl sm:text-4xl mb-6 text-center">Registrarse</h2>
        
        {/* Mostrar mensaje de éxito o error */}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="text-white">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Escribe tu nombre"
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="text-white">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Escribe tu correo electrónico"
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="text-white">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Escribe tu contraseña"
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg mt-4 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;