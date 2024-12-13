import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null); // Para manejar errores del servidor
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo no válido";
    }
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        setErrors({});
        setServerError(null);

        // Realizar la solicitud de login con Axios
        const response = await axios.post("http://localhost:3000/api/login", {
          email: formData.email,
          password: formData.password,
        });

        console.log("Respuesta del servidor:", response.data);

        // Redirigir a /months después del login exitoso
        navigate("/months");
      } catch (error) {
        // console.error("Error del servidor :", error);
        if (error.response) {
          setServerError(error.response.data.error || "Error en el servidor");
        } else {
          setServerError("Error de red. Inténtalo de nuevo.");
        }
      }
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-[#E8F5D4] flex items-center justify-center bg-[url('/path/to/your/background-pattern.svg')] bg-cover">
      <div className="p-8 max-w-sm w-full bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#FF7212]">
          Iniciar sesión
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Correo */}
          <div>
            <label className="block text-[#FF7212] text-lg font-medium mb-1">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-full text-lg focus:outline-none ${
                errors.email ? "border-[#FF7212]" : "border-gray-300"
              }`}
              placeholder=""
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-[#FF7212] text-lg font-medium mb-1">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-full text-lg focus:outline-none ${
                errors.password ? "border-[#FF7212]" : "border-gray-300"
              }`}
              placeholder=""
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          {/* Mostrar error del servidor */}
          {serverError && (
            <div className="text-red-500 text-sm text-center">
              {serverError}
            </div>
          )}

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FF7212] text-white text-lg font-semibold rounded-full hover:bg-opacity-90 focus:outline-none"
          >
            Enviar
          </button>
        </form>

        {/* Enlace de registro */}
        <p className="mt-4 text-center text-green-700 text-lg">
          ¿Eres nuevo aquí?{" "}
          <span
            className="underline cursor-pointer"
            onClick={handleSignupRedirect}
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
