import { NextRequest, NextResponse } from 'next/server'
import { uploadFileToBucket, insertCaptacionLead } from '@/lib/supabase-server'
import { sendSellPropertyEmail } from '@/lib/emailService'

// Tamaño máximo de archivo: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export async function POST(request: NextRequest) {
  try {
    // Verificar reCAPTCHA primero
    const formData = await request.formData()
    const recaptchaToken = formData.get('recaptchaToken') as string

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: 'Token de reCAPTCHA no proporcionado' },
        { status: 400 }
      )
    }

    // Validar reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success) {
      return NextResponse.json(
        { success: false, error: 'Verificación de reCAPTCHA fallida' },
        { status: 400 }
      )
    }

    // Extraer datos del formulario
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const property_type = formData.get('property_type') as string
    const transaction_type = formData.get('transaction_type') as string
    const address = formData.get('address') as string
    const city = formData.get('city') as string
    const state = formData.get('state') as string
    const zipCode = formData.get('zipCode') as string
    const price = formData.get('price') as string
    const bedrooms = formData.get('bedrooms') as string
    const bathrooms = formData.get('bathrooms') as string
    const constructionArea = formData.get('constructionArea') as string
    const landArea = formData.get('landArea') as string
    const parking = formData.get('parking') as string
    const description = formData.get('description') as string

    // Validar campos requeridos
    if (!name || !email || !phone || !property_type || !transaction_type || !address || !city || !state || !zipCode || !price) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Procesar fotos
    const photoFiles: File[] = []
    const photoUrls: string[] = []

    // Obtener todas las fotos del formulario
    const photos = formData.getAll('photos') as File[]
    
    for (const photo of photos) {
      if (photo && photo.size > 0) {
        // Validar tipo
        if (!ALLOWED_TYPES.includes(photo.type)) {
          continue // Saltar archivos no permitidos
        }

        // Validar tamaño
        if (photo.size > MAX_FILE_SIZE) {
          continue // Saltar archivos muy grandes
        }

        photoFiles.push(photo)
      }
    }

    // Subir fotos a Supabase Storage
    if (photoFiles.length > 0) {
      const timestamp = Date.now()
      
      for (let i = 0; i < photoFiles.length; i++) {
        const file = photoFiles[i]
        const fileExtension = file.name.split('.').pop() || 'jpg'
        const fileName = `${timestamp}-${i + 1}.${fileExtension}`
        const filePath = `${email.replace('@', '_at_')}/${fileName}`

        const uploadResult = await uploadFileToBucket(
          'livoo-captacion',
          filePath,
          file,
          file.type
        )

        if (uploadResult.success && uploadResult.url) {
          photoUrls.push(uploadResult.url)
        }
      }
    }

    // Preparar datos para Supabase
    const leadData = {
      name,
      email,
      phone,
      property_type,
      transaction_type,
      address,
      city,
      state,
      zip_code: zipCode,
      price,
      bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
      bathrooms: bathrooms ? parseFloat(bathrooms) : undefined,
      construction_area: constructionArea ? parseInt(constructionArea) : undefined,
      land_area: landArea ? parseInt(landArea) : undefined,
      parking: parking ? parseInt(parking) : undefined,
      description: description || undefined,
      photo_urls: photoUrls.length > 0 ? photoUrls : undefined,
    }

    // Enviar email con EmailJS
    const emailResult = await sendSellPropertyEmail({
      name,
      email,
      phone,
      property_type,
      transaction_type,
      address,
      city,
      state,
      zipCode,
      price,
      bedrooms,
      bathrooms,
      constructionArea,
      landArea,
      parking,
      description,
    })

    // Guardar en Supabase (incluso si el email falla)
    const supabaseResult = await insertCaptacionLead(leadData)

    if (!supabaseResult.success) {
      console.error('Error al guardar en Supabase:', supabaseResult.error)
      // Si el email funcionó pero Supabase falló, aún devolvemos éxito
      if (emailResult.success) {
        return NextResponse.json({
          success: true,
          message: 'Formulario enviado. Email enviado correctamente, pero hubo un error al guardar en la base de datos.',
          warning: 'Los datos no se guardaron en la base de datos',
        })
      }
    }

    // Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: 'Formulario enviado correctamente. Te contactaremos pronto.',
      data: {
        emailSent: emailResult.success,
        savedToDatabase: supabaseResult.success,
        photosUploaded: photoUrls.length,
      },
    })
  } catch (error: any) {
    console.error('Error en el handler de captación:', error)
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

