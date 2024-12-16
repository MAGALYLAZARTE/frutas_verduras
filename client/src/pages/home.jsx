import React, { useRef } from 'react';
import logo from '../assets/logo.png';
import fondo2 from '../assets/fondo2.png';
import Login from '../component/Login';

function Home() {
  const loginRef = useRef(null); 

  const scrollToLogin = () => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="font-sans bg-gray-100"
      style={{
        backgroundImage: `url(${fondo2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',  
        margin: 0,           
        padding: 0,         
      }}
    >
 
      <header className="flex justify-center p-4 bg-transparent animate-fadeIn">
        <img src={logo} alt="Logo" className="w-80 h-auto" />
      </header>

     
      <section className="flex flex-col md:flex-row justify-between items-center p-10 mt-10 mx-0 md:mx-0 animate-fadeIn animate-delay-500ms">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-700">
            ¿POR QUÉ COMER DE TEMPORADA?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Es importante favorecer el consumo de frutas y verduras locales y de temporada por su sabor, pero también para reducir nuestro impacto en el medio ambiente.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="/vegetales.png"
            alt="vegetales"
            className="w-full h-auto rounded-lg transform hover:scale-105 transition duration-500"
          />
        </div>
        
      
        <section className="flex justify-center mt-10">
          <button
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-200 transition duration-300 md:hidden animate-slideUp"
            onClick={scrollToLogin} 
          >
            Iniciar sesión
          </button>
        </section>
      </section>

      {/* Login Section */}
      <div ref={loginRef}>
        <Login />
      </div>
    </div>
  );
}

export default Home;
