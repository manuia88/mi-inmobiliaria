import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Token de reCAPTCHA no proporcionado' },
        { status: 400 }
      )
    }

    // Clave secreta de prueba de Google (solo para desarrollo si no hay clave real)
    const TEST_SECRET_KEY = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJv'
    
    let secretKey = process.env.RECAPTCHA_SECRET_KEY

    // Solo usar clave de prueba si no hay clave real configurada
    if ((!secretKey || secretKey.includes('xxxxxx')) && process.env.NODE_ENV === 'development') {
      secretKey = TEST_SECRET_KEY
      console.log('🔧 Usando clave secreta de prueba de Google reCAPTCHA para desarrollo')
    }

    if (!secretKey || secretKey.includes('xxxxxx')) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA no está configurado en el servidor' },
        { status: 500 }
      )
    }

    // Verificar el token con Google reCAPTCHA
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify'
    const response = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()

    if (data.success) {
      // Para reCAPTCHA v3, también verificar el score (debe ser > 0.5)
      if (data.score !== undefined) {
        if (data.score < 0.5) {
          return NextResponse.json(
            { success: false, error: 'Score de reCAPTCHA muy bajo. Intenta de nuevo.' },
            { status: 400 }
          )
        }
      }

      return NextResponse.json({ 
        success: true, 
        score: data.score 
      })
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Verificación de reCAPTCHA fallida',
          'error-codes': data['error-codes']
        },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error)
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

