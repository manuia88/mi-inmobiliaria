import emailjs from '@emailjs/browser'

interface EmailParams {
  from_name: string
  from_email: string
  phone?: string
  message: string
  subject?: string
  property_title?: string
  property_id?: string
  [key: string]: string | undefined
}

export async function sendEmail(
  templateId: string,
  templateParams: EmailParams
): Promise<{ success: boolean; message: string }> {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Modo desarrollo: Si EmailJS no está configurado, simular éxito y mostrar datos
    if (!serviceId || !publicKey || serviceId.includes('xxxxxx') || publicKey.includes('xxxxxx')) {
      console.log('📧 [MODO DESARROLLO] EmailJS no configurado. Datos del formulario:')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('Template ID:', templateId)
      console.log('Datos:', templateParams)
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('💡 Para activar EmailJS, configura las variables en .env.local')
      console.log('📖 Guía: scripts/configurar-emailjs.md')
      
      // En desarrollo, simular éxito para que el usuario vea que funciona
      if (process.env.NODE_ENV === 'development') {
        return {
          success: true,
          message: 'Mensaje enviado correctamente. Te contactaremos pronto. (Modo desarrollo - EmailJS no configurado)',
        }
      }
      
      return {
        success: false,
        message: 'EmailJS no está configurado. Por favor, configura las variables de entorno.',
      }
    }

    // Enviar email con EmailJS
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    if (result.status === 200) {
      return {
        success: true,
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.',
      }
    } else {
      return {
        success: false,
        message: 'Error al enviar el mensaje. Por favor, intenta de nuevo.',
      }
    }
  } catch (error: any) {
    console.error('Error al enviar email:', error)
    
    // Mensajes de error más específicos
    if (error?.text?.includes('Invalid template')) {
      return {
        success: false,
        message: 'Error: Template ID inválido. Verifica NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
      }
    }
    
    if (error?.text?.includes('Invalid service')) {
      return {
        success: false,
        message: 'Error: Service ID inválido. Verifica NEXT_PUBLIC_EMAILJS_SERVICE_ID',
      }
    }
    
    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor, intenta de nuevo más tarde.',
    }
  }
}

// Función específica para formulario de contacto
export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}): Promise<{ success: boolean; message: string }> {
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contacto'

  return sendEmail(templateId, {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
    to_email: 'manuel@livoo.io',
  })
}

// Función específica para formulario de captación de propiedades
export async function sendPropertyLeadEmail(formData: {
  name: string
  email: string
  phone: string
  property_title: string
  property_id: string
  message?: string
}): Promise<{ success: boolean; message: string }> {
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contacto'

  return sendEmail(templateId, {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    property_title: formData.property_title,
    property_id: formData.property_id,
    message: formData.message || `Interesado en: ${formData.property_title}`,
    subject: `Interesado en propiedad: ${formData.property_title}`,
    to_email: 'manuel@livoo.io',
  })
}

// Función específica para formulario de vender propiedad
export async function sendSellPropertyEmail(formData: {
  name: string
  email: string
  phone: string
  property_type: string
  transaction_type: string
  address: string
  city: string
  state: string
  zipCode: string
  price: string
  bedrooms?: string
  bathrooms?: string
  constructionArea?: string
  landArea?: string
  parking?: string
  description?: string
}): Promise<{ success: boolean; message: string }> {
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contacto'

  return sendEmail(templateId, {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    subject: `Nueva propiedad para ${formData.transaction_type}: ${formData.property_type}`,
    message: `
      Tipo de Propiedad: ${formData.property_type}
      Tipo de Transacción: ${formData.transaction_type}
      Dirección: ${formData.address}, ${formData.city}, ${formData.state}, CP ${formData.zipCode}
      Precio Esperado: ${formData.price}
      Recámaras: ${formData.bedrooms || 'N/A'}
      Baños: ${formData.bathrooms || 'N/A'}
      Área Construcción: ${formData.constructionArea || 'N/A'} m²
      Área Terreno: ${formData.landArea || 'N/A'} m²
      Estacionamientos: ${formData.parking || 'N/A'}
      Descripción: ${formData.description || 'No proporcionada'}
    `,
    to_email: 'manuel@livoo.io',
  })
}

