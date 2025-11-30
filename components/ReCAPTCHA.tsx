'use client'

import { useRef, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface ReCAPTCHAProps {
  onChange: (token: string | null) => void
  onExpired?: () => void
  onError?: () => void
}

export default function ReCAPTCHAComponent({ onChange, onExpired, onError }: ReCAPTCHAProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  
  // Claves de prueba de Google (solo para desarrollo si no hay claves reales)
  const TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
  
  let siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  // Solo usar claves de prueba si no hay claves reales configuradas
  if ((!siteKey || siteKey.includes('xxxxxx')) && process.env.NODE_ENV === 'development') {
    siteKey = TEST_SITE_KEY
    console.log('🔧 Usando claves de prueba de Google reCAPTCHA para desarrollo')
  }

  useEffect(() => {
    // Resetear reCAPTCHA si no hay site key
    if (!siteKey || siteKey.includes('xxxxxx')) {
      console.warn('reCAPTCHA no está configurado. Configura NEXT_PUBLIC_RECAPTCHA_SITE_KEY en .env.local')
    }
  }, [siteKey])

  if (!siteKey || siteKey.includes('xxxxxx')) {
    // Modo desarrollo: mostrar placeholder si no está configurado
    return (
      <div className="bg-gray-100 border border-gray-300 rounded p-4 text-center text-sm text-gray-600">
        <p>⚠️ reCAPTCHA no configurado</p>
        <p className="text-xs mt-1">Configura NEXT_PUBLIC_RECAPTCHA_SITE_KEY en .env.local</p>
        <p className="text-xs mt-1">O usa: ./scripts/configurar-recaptcha.sh</p>
      </div>
    )
  }

  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={onChange}
        onExpired={onExpired}
        onError={onError}
        theme="light"
      />
    </div>
  )
}

