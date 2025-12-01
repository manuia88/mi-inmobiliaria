'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function VenderPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Obtener datos del formulario
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
      antiguedad: formData.get('antiguedad') as string,
    }

    try {
      // Paso 1: Guardar en Supabase
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      // Verificar si la respuesta es JSON válido
      let result
      try {
        result = await response.json()
      } catch (jsonError) {
        console.error('Error al parsear respuesta JSON:', jsonError)
        setError('Error al procesar la respuesta del servidor. Por favor, intenta de nuevo.')
        setLoading(false)
        return
      }

      if (!response.ok || !result.success) {
        setError(result.error || 'Error al guardar los datos. Por favor, intenta de nuevo.')
        setLoading(false)
        return
      }

      // Paso 2: Construir mensaje para WhatsApp
      const whatsappMessage = `¡Hola! Me interesa vender mi propiedad.

📋 *Información:*
• Nombre: ${formValues.name}
• Tipo: ${formValues.property_type}
• Transacción: ${formValues.transaction_type}
• Ubicación: ${formValues.address}, ${formValues.city}, ${formValues.state}
• Precio esperado: $${parseInt(formValues.price).toLocaleString('es-MX')} MXN
${formValues.bedrooms ? `• Recámaras: ${formValues.bedrooms}` : ''}
${formValues.bathrooms ? `• Baños: ${formValues.bathrooms}` : ''}
${formValues.constructionArea ? `• Construcción: ${formValues.constructionArea} m²` : ''}
${formValues.landArea ? `• Terreno: ${formValues.landArea} m²` : ''}
${formValues.antiguedad ? `• Antigüedad: ${formValues.antiguedad} años` : ''}

¿Podrían ayudarme con el proceso?`

      // Codificar mensaje para URL
      const encodedMessage = encodeURIComponent(whatsappMessage)

      // Redirigir a WhatsApp
      window.location.href = `https://wa.me/5215540646386?text=${encodedMessage}`
    } catch (err) {
      console.error('Error al enviar formulario:', err)
      setError('Error al enviar la solicitud. Por favor, intenta de nuevo.')
      setLoading(false)
    }
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
            <h3 className="text-xl font-semibold mb-2">Habla con nosotros</h3>
            <p className="text-gray-600">
              Te redirigiremos a WhatsApp para continuar el proceso
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
                Características de la Propiedad
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <input
                  type="number"
                  name="bedrooms"
                  placeholder="Recámaras *"
                  className="input-field text-sm"
                  min="0"
                  required
                  disabled={loading}
                />
                <input
                  type="number"
                  name="bathrooms"
                  placeholder="Baños *"
                  className="input-field text-sm"
                  min="0"
                  step="0.5"
                  required
                  disabled={loading}
                />
                <input
                  type="number"
                  name="parking"
                  placeholder="Estacionamientos *"
                  className="input-field text-sm"
                  min="0"
                  required
                  disabled={loading}
                />
                <input
                  type="number"
                  name="antiguedad"
                  placeholder="Antigüedad *"
                  className="input-field text-sm"
                  min="0"
                  required
                  disabled={loading}
                />
                <input
                  type="number"
                  name="constructionArea"
                  placeholder="m2 Construcción *"
                  className="input-field text-sm"
                  min="0"
                  required
                  disabled={loading}
                />
                <input
                  type="number"
                  name="landArea"
                  placeholder="m2 Terreno"
                  className="input-field text-sm"
                  min="0"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Términos y Aviso de Privacidad */}
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
            </div>

            <button 
              type="submit" 
              className="btn-primary w-full text-lg py-4 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Guardando...
                </>
              ) : (
                'Continuar en WhatsApp'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
