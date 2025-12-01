import { NextResponse } from 'next/server'

// Interfaz para la respuesta de EasyBroker
interface EasyBrokerProperty {
  public_id: string
  title: string
  property_type: string
  location: {
    name: string
    city?: string
    state?: string
    zip_code?: string
  }
  operations: Array<{
    type: string
    amount: number
    currency: string
    formatted_amount: string
  }>
  bedrooms?: number
  bathrooms?: number
  construction_size?: number
  lot_size?: number
  parking_spaces?: number
  year?: number
  description?: string
  images?: Array<{
    url: string
  }>
  status?: string
  is_featured?: boolean
  created_at?: string
}

// Interfaz para el formato del frontend
import { Property } from '@/types/property'

// Re-exportar para compatibilidad
export type { Property }

// Función auxiliar para mapear propiedades de EasyBroker al formato del frontend
function mapProperty(ebProperty: EasyBrokerProperty): Property {
  // Determinar tipo de transacción (Venta o Renta)
  const operation = ebProperty.operations?.[0]
  const transaction = operation?.type === 'sale' ? 'Venta' : 'Renta'
  const price = operation?.amount || 0
  const currency = operation?.currency || 'MXN'

  // Mapear tipo de propiedad
  const propertyTypeMap: Record<string, 'Casa' | 'Departamento' | 'Terreno' | 'Oficina' | 'Local Comercial'> = {
    house: 'Casa',
    apartment: 'Departamento',
    land: 'Terreno',
    office: 'Oficina',
    commercial: 'Local Comercial',
  }
  const type = propertyTypeMap[ebProperty.property_type?.toLowerCase()] || 'Casa'

  // Mapear estado
  const statusMap: Record<string, 'Disponible' | 'Vendido' | 'Rentado'> = {
    published: 'Disponible',
    sold: 'Vendido',
    rented: 'Rentado',
  }
  const statusKey = ebProperty.status?.toLowerCase() || 'published'
  const status = statusMap[statusKey] || 'Disponible'

  // Extraer imágenes
  const images = ebProperty.images?.map(img => img.url) || []

  // Extraer amenidades (si vienen en la API, de lo contrario array vacío)
  const amenities: string[] = []

  return {
    id: ebProperty.public_id,
    title: ebProperty.title || 'Propiedad sin título',
    price,
    currency,
    type,
    transaction,
    location: {
      address: ebProperty.location?.name || '',
      city: ebProperty.location?.city || '',
      state: ebProperty.location?.state || '',
      zipCode: ebProperty.location?.zip_code || '',
    },
    features: {
      bedrooms: ebProperty.bedrooms || 0,
      bathrooms: ebProperty.bathrooms || 0,
      constructionArea: ebProperty.construction_size || 0,
      landArea: ebProperty.lot_size,
      parking: ebProperty.parking_spaces || 0,
      yearBuilt: ebProperty.year,
    },
    amenities,
    description: ebProperty.description || '',
    images,
    status,
    featured: ebProperty.is_featured || false,
    createdAt: ebProperty.created_at || new Date().toISOString().split('T')[0],
  }
}

export async function GET() {
  try {
    const apiKey = process.env.EASYBROKER_API_KEY

    // Si no hay API key, retornar array vacío para no fallar el build
    if (!apiKey) {
      console.warn('EASYBROKER_API_KEY no está configurada. Retornando propiedades vacías.')
      return NextResponse.json({ properties: [] })
    }

    // Hacer fetch a la API de EasyBroker con filtro de publicación
    // publication_status=published asegura que solo se muestren propiedades activas
    const response = await fetch(
      'https://api.easybroker.com/v1/properties?limit=50&publication_status=published',
      {
        headers: {
          'X-Authorization': apiKey,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 }, // Cache por 1 hora
      }
    )

    if (!response.ok) {
      console.error('Error al obtener propiedades de EasyBroker:', response.statusText)
      // Retornar array vacío en lugar de error para no fallar el build
      return NextResponse.json({ properties: [] })
    }

    const data = await response.json()

    // Mapear las propiedades al formato del frontend
    const properties = (data.content || []).map(mapProperty)

    return NextResponse.json({ properties })
  } catch (error) {
    console.error('Error en el Route Handler:', error)
    // Retornar array vacío en lugar de error para no fallar el build
    return NextResponse.json({ properties: [] })
  }
}

