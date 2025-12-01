import { NextRequest, NextResponse } from 'next/server'
import { insertCaptacionLead } from '@/lib/supabase-server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar campos requeridos
    const requiredFields = ['name', 'email', 'phone', 'property_type', 'transaction_type', 'address', 'city', 'state', 'zipCode', 'price']
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Campo requerido faltante: ${field}` },
          { status: 400 }
        )
      }
    }

    // Preparar datos para Supabase
    const leadData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      property_type: body.property_type,
      transaction_type: body.transaction_type,
      address: body.address,
      city: body.city,
      state: body.state,
      zip_code: body.zipCode,
      price: body.price,
      bedrooms: body.bedrooms ? parseInt(body.bedrooms) : undefined,
      bathrooms: body.bathrooms ? parseFloat(body.bathrooms) : undefined,
      construction_area: body.constructionArea ? parseInt(body.constructionArea) : undefined,
      land_area: body.landArea ? parseInt(body.landArea) : undefined,
      parking: body.parking ? parseInt(body.parking) : undefined,
      antiguedad: body.antiguedad ? parseInt(body.antiguedad) : undefined,
    }

    // Guardar en Supabase
    const result = await insertCaptacionLead(leadData)

    if (!result.success) {
      console.error('Error al guardar lead:', result.error)
      return NextResponse.json(
        { success: false, error: result.error || 'Error al guardar los datos' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Lead guardado correctamente',
      data: result.data,
    })
  } catch (error: any) {
    console.error('Error en capture-lead:', error)
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

