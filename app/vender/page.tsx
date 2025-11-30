'use client'

import { useState } from 'react'
import { Upload, CheckCircle, Loader2 } from 'lucide-react'
import { sendSellPropertyEmail } from '@/lib/emailService'
import { insertSellPropertyLead } from '@/lib/supabase'
import ReCAPTCHAComponent from '@/components/ReCAPTCHA'

export default function VenderPage() {
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
      property_type: formData.get('property_type') as string,
      transaction_type: formData.get('transaction_type') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zipCode: formData.get('zipCode') as string,
      price: formData.get('price') as string,
      bedrooms: formData.get('bedrooms') as string,
      bathrooms: formData.get('bathrooms') as string,
      constructionArea: formData.get('constructionArea') as string,
      landArea: formData.get('landArea') as string,
      parking: formData.get('parking') as string,
      description: formData.get('description') as string,
    }

    try {
      // Enviar email con EmailJS
      const emailResult = await sendSellPropertyEmail(formValues)

      // Guardar en Supabase (si está configurado)
      await insertSellPropertyLead({
        ...formValues,
        bedrooms: formValues.bedrooms ? parseInt(formValues.bedrooms) : undefined,
        bathrooms: formValues.bathrooms ? parseFloat(formValues.bathrooms) : undefined,
        construction_area: formValues.constructionArea ? parseInt(formValues.constructionArea) : undefined,
        land_area: formValues.landArea ? parseInt(formValues.landArea) : undefined,
        parking: formValues.parking ? parseInt(formValues.parking) : undefined,
        zip_code: formValues.zipCode,
      })

      if (emailResult.success) {
        setSubmitted(true)
        setRecaptchaToken(null)
        e.currentTarget.reset()
      } else {
        setError(emailResult.message)
      }
    } catch (err) {
      console.error('Error al enviar formulario:', err)
      setError('Error al enviar la solicitud. Por favor, intenta de nuevo.')
    } finally {
      setLoading(false)
    }
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
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información del Propietario */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Información del Propietario
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo *"
                  className="input-field"
                  required
                  disabled={loading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="input-field"
                  required
                  disabled={loading}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono *"
                  className="input-field"
                  required
                  disabled={loading}
                />
                <select name="relation" className="input-field" required disabled={loading}>
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
                <select name="property_type" className="input-field" required disabled={loading}>
                  <option value="">Tipo de propiedad *</option>
                  <option value="Casa">Casa</option>
                  <option value="Departamento">Departamento</option>
                  <option value="Terreno">Terreno</option>
                  <option value="Oficina">Oficina</option>
                  <option value="Local Comercial">Local Comercial</option>
                </select>
                <select name="transaction_type" className="input-field" required disabled={loading}>
                  <option value="">Tipo de transacción *</option>
                  <option value="Venta">Venta</option>
                  <option value="Renta">Renta</option>
                </select>
                <input
                  type="text"
                  name="address"
                  placeholder="Calle y número *"
                  className="input-field md:col-span-2"
                  required
                  disabled={loading}
                />
                <input
                  type="text"
                  name="colony"
                  placeholder="Colonia *"
                  className="input-field"
                  required
                  disabled={loading}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Ciudad *"
                  className="input-field"
                  required
                  disabled={loading}
                />
                <input
                  type="text"
                  name="state"
                  placeholder="Estado *"
                  className="input-field"
                  required
                  disabled={loading}
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Código Postal *"
                  className="input-field"
                  required
                  disabled={loading}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Precio esperado (MXN) *"
                  className="input-field md:col-span-2"
                  required
                  disabled={loading}
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
                  name="bedrooms"
                  placeholder="Recámaras"
                  className="input-field"
                  min="0"
                  disabled={loading}
                />
                <input
                  type="number"
                  name="bathrooms"
                  placeholder="Baños"
                  className="input-field"
                  min="0"
                  step="0.5"
                  disabled={loading}
                />
                <input
                  type="number"
                  name="constructionArea"
                  placeholder="m² construcción"
                  className="input-field"
                  min="0"
                  disabled={loading}
                />
                <input
                  type="number"
                  name="landArea"
                  placeholder="m² terreno"
                  className="input-field"
                  min="0"
                  disabled={loading}
                />
                <input
                  type="number"
                  name="parking"
                  placeholder="Estacionamientos"
                  className="input-field"
                  min="0"
                  disabled={loading}
                />
                <input
                  type="number"
                  name="yearBuilt"
                  placeholder="Año construcción"
                  className="input-field"
                  min="1900"
                  max={new Date().getFullYear()}
                  disabled={loading}
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
                name="description"
                rows={5}
                placeholder="Describe tu propiedad... (ubicación, características especiales, acabados, etc.)"
                className="input-field resize-none"
                disabled={loading}
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
                <input 
                  type="checkbox" 
                  className="mt-1 mr-2" 
                  required 
                  disabled={loading}
                />
                <span className="text-sm text-gray-600">
                  Acepto los términos y condiciones *
                </span>
              </label>
              <label className="flex items-start">
                <input 
                  type="checkbox" 
                  className="mt-1 mr-2" 
                  required 
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
                  {' '}*
                </span>
              </label>
              <label className="flex items-start">
                <input 
                  type="checkbox" 
                  className="mt-1 mr-2" 
                  disabled={loading}
                />
                <span className="text-sm text-gray-600">
                  Acepto recibir comunicaciones promocionales
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
              className="btn-primary w-full text-lg py-4 flex items-center justify-center"
              disabled={loading || !recaptchaToken}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Solicitud'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
