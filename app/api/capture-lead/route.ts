import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validar campos básicos
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Por ahora, solo logear (sin Supabase)
    console.log('📧 Lead recibido:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      property_type: body.property_type,
    })

    // Siempre retornar éxito
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('❌ Error en /api/capture-lead:', error)
    return NextResponse.json(
      { success: false, error: 'Error al procesar' },
      { status: 500 }
    )
  }
}
