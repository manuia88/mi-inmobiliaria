import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Bed, Bath, Maximize, Car, MapPin } from 'lucide-react'

// Forzar dynamic rendering
export const dynamic = 'force-dynamic'
export const dynamicParams = true

interface Property {
  id: string
  title: string
  price: number
  currency: string
  type: string
  transaction: string
  location: {
    address: string
    city: string
    state: string
    zipCode: string
  }
  features: {
    bedrooms: number
    bathrooms: number
    constructionArea: number
    landArea: number
    parking: number
  }
  images: string[]
  description: string
  amenities: string[]
  status: string
  featured: boolean
  createdAt: string
}

async function getProperty(id: string): Promise<Property | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

    const response = await fetch(`${baseUrl}/api/properties`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    const properties: Property[] = data.properties || []

    return properties.find(p => p.id === id) || null
  } catch (error) {
    console.error('Error getting property:', error)
    return null
  }
}

export default async function PropertyDetailPage({
  params
}: {
  params: Promise<{ id: string }> | { id: string }
}) {
  const resolvedParams = await Promise.resolve(params)
  const property = await getProperty(resolvedParams.id)

  if (!property) {
    notFound()
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.location.address}, {property.location.city}</span>
          </div>
        </div>
      </div>

      {/* Galería */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Imagen principal */}
          <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
            {property.images && property.images.length > 0 ? (
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Sin imagen
              </div>
            )}
          </div>

          {/* Imágenes secundarias */}
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative h-44 bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${property.title} - ${index + 2}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Precio y características */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-3xl font-bold text-primary-600 mb-4">
            {formatPrice(property.price, property.currency)}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {property.features.bedrooms > 0 && (
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.features.bedrooms} Recámaras</span>
              </div>
            )}
            {property.features.bathrooms > 0 && (
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.features.bathrooms} Baños</span>
              </div>
            )}
            {property.features.constructionArea > 0 && (
              <div className="flex items-center">
                <Maximize className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.features.constructionArea} m²</span>
              </div>
            )}
            {property.features.parking > 0 && (
              <div className="flex items-center">
                <Car className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.features.parking} Estacionamientos</span>
              </div>
            )}
          </div>

          {property.description && (
            <div className="mt-6 pt-6 border-t">
              <h2 className="text-xl font-semibold mb-4">Descripción</h2>
              <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
