"use client";
import { useState } from 'react';

interface FormData {
  nombre: string;
  correo: string;
  mensaje: string;
}

export default function EmailForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage('Email sent successfully!');
      } else {
        setErrorMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred.');
    } finally {
      setLoading(false);
      setFormData({
        nombre: '',
        correo: '',
        mensaje: '',
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 font-semibold">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="correo" className="block text-gray-700 font-semibold">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mensaje" className="block text-gray-700 font-semibold">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Escribe tu mensaje"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
      </form>
    </div>
  );
}
