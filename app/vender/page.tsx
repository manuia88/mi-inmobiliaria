'use client'

import { useState } from 'react'
import { Upload, CheckCircle } from 'lucide-react'

export default function VenderPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Solicitud Enviada!
          </h2>
          <p className="text-gray-600 mb-6">
            Hemos recibido la información de tu propiedad. Te contactaremos en menos de 24 horas.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary"
          >
            Registrar Otra Propiedad
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div 
        className="bg-primary-600 text-white py-16"
        style={{
          backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.9), rgba(29, 78, 216, 0.9)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vende tu propiedad con nosotros
          </h1>
          <p className="text-xl text-primary-100">
            Proceso rápido, seguro y sin complicaciones
          </p>
        </div>
      </div>

      {/* Proceso */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proceso en 3 Pasos</h2>
          <p className="text-gray-600">Es simple y rápido</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Registra tu propiedad</h3>
            <p className="text-gray-600">
              Completa el formulario con los detalles de tu inmueble
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Recibe ofertas</h3>
            <p className="text-gray-600">
              Te contactamos con compradores interesados
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Cierra la venta</h3>
            <p className="text-gray-600">
              Te acompañamos en todo el proceso legal
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Registra tu Propiedad - Es Gratis</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información del Propietario */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Información del Propietario
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo *"
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="input-field"
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono *"
                  className="input-field"
                  required
                />
                <select className="input-field" required>
                  <option value="">Relación con la propiedad *</option>
                  <option>Propietario</option>
                  <option>Familiar</option>
                  <option>Agente</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            {/* Información de la Propiedad */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Información de la Propiedad
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="input-field" required>
                  <option value="">Tipo de propiedad *</option>
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Terreno</option>
                  <option>Oficina</option>
                  <option>Local Comercial</option>
                </select>
                <select className="input-field" required>
                  <option value="">Tipo de transacción *</option>
                  <option>Venta</option>
                  <option>Renta</option>
                </select>
                <input
                  type="text"
                  placeholder="Calle y número *"
                  className="input-field md:col-span-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Colonia *"
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  placeholder="Ciudad *"
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  placeholder="Estado *"
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  placeholder="Código Postal *"
                  className="input-field"
                  required
                />
                <input
                  type="number"
                  placeholder="Precio esperado (MXN) *"
                  className="input-field md:col-span-2"
                  required
                />
              </div>
            </div>

            {/* Características */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Características
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <input
                  type="number"
                  placeholder="Recámaras"
                  className="input-field"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="Baños"
                  className="input-field"
                  min="0"
                  step="0.5"
                />
                <input
                  type="number"
                  placeholder="m² construcción"
                  className="input-field"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="m² terreno"
                  className="input-field"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="Estacionamientos"
                  className="input-field"
                  min="0"
                />
                <input
                  type="number"
                  placeholder="Año construcción"
                  className="input-field"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>
            </div>

            {/* Amenidades */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Amenidades
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Jardín', 'Alberca', 'Gym', 'Seguridad 24/7', 'Elevador', 'Estacionamiento Visitas', 'Cocina Integral', 'Closets', 'Terraza', 'Balcón', 'Cuarto Servicio', 'Bodega'].map((amenity) => (
                  <label key={amenity} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Descripción
              </h3>
              <textarea
                rows={5}
                placeholder="Describe tu propiedad... (ubicación, características especiales, acabados, etc.)"
                className="input-field resize-none"
              />
            </div>

            {/* Fotos */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Fotos
              </h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-600 transition cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Arrastra tus fotos aquí o haz click para seleccionar
                </p>
                <p className="text-sm text-gray-500">
                  Sube hasta 20 fotos (JPG, PNG)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            {/* Términos */}
            <div className="space-y-2">
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" required />
                <span className="text-sm text-gray-600">
                  Acepto los términos y condiciones *
                </span>
              </label>
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" required />
                <span className="text-sm text-gray-600">
                  Acepto la política de privacidad *
                </span>
              </label>
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span className="text-sm text-gray-600">
                  Acepto recibir comunicaciones promocionales
                </span>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-4">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
