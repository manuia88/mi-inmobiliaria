'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, CheckCircle, Loader2 } from 'lucide-react'
import { sendContactEmail } from '@/lib/emailService'
import { insertContactLead } from '@/lib/supabase'
import ReCAPTCHAComponent from '@/components/ReCAPTCHA'

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null)
  }

  const handleRecaptchaError = () => {
    setRecaptchaToken(null)
    setError('Error al verificar reCAPTCHA. Por favor, intenta de nuevo.')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Verificar reCAPTCHA primero
    if (!recaptchaToken) {
      setError('Por favor, completa la verificación reCAPTCHA.')
      setLoading(false)
      return
    }

    // Validar reCAPTCHA en el servidor
    try {
      const recaptchaResponse = await fetch('/api/recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaToken }),
      })

      const recaptchaData = await recaptchaResponse.json()

      if (!recaptchaData.success) {
        setError(recaptchaData.error || 'Verificación de reCAPTCHA fallida. Por favor, intenta de nuevo.')
        setRecaptchaToken(null)
        setLoading(false)
        return
      }
    } catch (err) {
      console.error('Error al verificar reCAPTCHA:', err)
      setError('Error al verificar reCAPTCHA. Por favor, intenta de nuevo.')
      setRecaptchaToken(null)
      setLoading(false)
      return
    }

    const formData = new FormData(e.currentTarget)
    const formValues = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      // Enviar email con EmailJS
      const emailResult = await sendContactEmail(formValues)

      // Guardar en Supabase (si está configurado)
      await insertContactLead(formValues)

      if (emailResult.success) {
        setSubmitted(true)
        setRecaptchaToken(null)
        e.currentTarget.reset()
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(emailResult.message)
      }
    } catch (err) {
      console.error('Error al enviar formulario:', err)
      setError('Error al enviar el mensaje. Por favor, intenta de nuevo.')
    } finally {
      setLoading(false)
    }
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
                  <a href="tel:+525540646386" className="text-primary-600 hover:underline">
                    +52 55 4064 6386
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
                  <a href="mailto:manuel@livoo.io" className="text-primary-600 hover:underline">
                    manuel@livoo.io
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

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Juan Pérez"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="juan@ejemplo.com"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="input-field"
                    placeholder="+52 55 4064 6386"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select name="subject" required className="input-field" disabled={loading}>
                    <option value="">Selecciona un asunto</option>
                    <option value="Quiero comprar">Quiero comprar</option>
                    <option value="Quiero vender">Quiero vender</option>
                    <option value="Quiero rentar">Quiero rentar</option>
                    <option value="Información general">Información general</option>
                    <option value="Soporte">Soporte</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 mr-2"
                      disabled={loading}
                    />
                    <span className="text-sm text-gray-600">
                      Acepto el{' '}
                      <a 
                        href="/aviso-de-privacidad" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline"
                      >
                        Aviso de Privacidad
                      </a>
                      {' '}y el tratamiento de mis datos *
                    </span>
                  </label>
                </div>

                {/* reCAPTCHA */}
                <ReCAPTCHAComponent
                  onChange={handleRecaptchaChange}
                  onExpired={handleRecaptchaExpired}
                  onError={handleRecaptchaError}
                />

                <button 
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center"
                  disabled={loading || !recaptchaToken}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
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
