'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, CheckCircle } from 'lucide-react'

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-primary-100">
            Estamos aquí para ayudarte
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna Izquierda - Información */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              {/* Dirección */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Principal 123<br />
                    Col. Centro<br />
                    Ciudad, Estado, CP 12345
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                  <a href="tel:+523312345678" className="text-primary-600 hover:underline">
                    +52 33 1234 5678
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Lun - Vie: 9:00 AM - 7:00 PM<br />
                    Sáb: 10:00 AM - 3:00 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:contacto@miinmobiliaria.com" className="text-primary-600 hover:underline">
                    contacto@miinmobiliaria.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horarios de Atención</h3>
                  <p className="text-gray-600">
                    Lunes - Viernes: 9:00 AM - 7:00 PM<br />
                    Sábado: 10:00 AM - 3:00 PM<br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center text-white transition"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center text-white transition"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center text-white transition"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Ubicación</h3>
              <div className="bg-gray-300 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-600">
                  Mapa de Google Maps aquí
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-green-800">
                    ¡Mensaje enviado! Te contactaremos pronto.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="input-field"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    className="input-field"
                    placeholder="+52 33 1234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select required className="input-field">
                    <option value="">Selecciona un asunto</option>
                    <option>Quiero comprar</option>
                    <option>Quiero vender</option>
                    <option>Quiero rentar</option>
                    <option>Información general</option>
                    <option>Soporte</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      Acepto la política de privacidad y el tratamiento de mis datos *
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* FAQ Rápido */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Preguntas Frecuentes</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-900">¿Cobran comisión?</p>
                  <p className="text-gray-600">Nuestra comisión es competitiva y transparente.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">¿Cuánto tarda el proceso?</p>
                  <p className="text-gray-600">En promedio 30-60 días dependiendo del tipo de propiedad.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">¿Necesito documentos especiales?</p>
                  <p className="text-gray-600">Te asesoramos en todo el proceso de documentación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
