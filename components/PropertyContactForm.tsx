'use client'

import { useState } from 'react'
import { Phone, MessageSquare, Loader2, CheckCircle } from 'lucide-react'
import { sendPropertyLeadEmail } from '@/lib/emailService'
import { insertPropertyLead } from '@/lib/supabase'
import ReCAPTCHAComponent from '@/components/ReCAPTCHA'

interface PropertyContactFormProps {
  propertyId: string
  propertyTitle: string
}

export default function PropertyContactForm({ propertyId, propertyTitle }: PropertyContactFormProps) {
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
      message: formData.get('message') as string,
    }

    try {
      // Enviar email con EmailJS
      const emailResult = await sendPropertyLeadEmail({
        ...formValues,
        property_id: propertyId,
        property_title: propertyTitle,
      })

      // Guardar en Supabase (si está configurado)
      await insertPropertyLead({
        ...formValues,
        property_id: propertyId,
        property_title: propertyTitle,
      })

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
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <h3 className="text-xl font-semibold mb-6">Contacta al Agente</h3>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
          <p className="text-green-800 text-sm">
            ¡Mensaje enviado! Te contactaremos pronto.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            className="input-field"
            required
            disabled={loading}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            required
            disabled={loading}
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            className="input-field"
            required
            disabled={loading}
          />
        </div>
        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="Mensaje (opcional)"
            className="input-field resize-none"
            defaultValue={`Hola, estoy interesado en ${propertyTitle}`}
            disabled={loading}
          />
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

      <div className="mt-6 pt-6 border-t space-y-3">
        <a 
          href="tel:+525540646386"
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all"
        >
          <Phone className="h-5 w-5" />
          Llamar Ahora
        </a>
        <a 
          href="https://wa.me/5215540646386"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all"
        >
          <MessageSquare className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

