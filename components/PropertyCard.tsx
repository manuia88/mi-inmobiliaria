import Link from 'next/link'
import Image from 'next/image'
import { Bed, Bath, Maximize, Car, MapPin } from 'lucide-react'
import { Property } from '@/types/property'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Link href={`/propiedades/${property.id}`}>
      <div className="card overflow-hidden group cursor-pointer">
        {/* Imagen */}
        <div className="relative h-64 overflow-hidden bg-gray-200">
          {property.images && property.images.length > 0 && property.images[0] ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
              <span>Sin imagen</span>
            </div>
          )}
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {property.transaction}
            </span>
            {property.featured && (
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Destacado
              </span>
            )}
          </div>
        </div>

        {/* Contenido */}
        <div className="p-5">
          {/* Precio */}
          <div className="text-2xl font-bold text-primary-600 mb-2">
            {formatPrice(property.price, property.currency)}
            {property.transaction === 'Renta' && (
              <span className="text-sm text-gray-500 font-normal">/mes</span>
            )}
          </div>

          {/* Título */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {property.title}
          </h3>

          {/* Ubicación */}
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">
              {property.location.city}, {property.location.state}
            </span>
          </div>

          {/* Características */}
          <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-200">
            {property.features.bedrooms > 0 && (
              <div className="flex flex-col items-center text-gray-700">
                <Bed className="h-6 w-6 mb-1 text-primary-600" />
                <span className="text-base font-semibold">{property.features.bedrooms}</span>
              </div>
            )}
            {property.features.bathrooms > 0 && (
              <div className="flex flex-col items-center text-gray-700">
                <Bath className="h-6 w-6 mb-1 text-primary-600" />
                <span className="text-base font-semibold">{property.features.bathrooms}</span>
              </div>
            )}
            {property.features.constructionArea > 0 && (
              <div className="flex flex-col items-center text-gray-700">
                <Maximize className="h-6 w-6 mb-1 text-primary-600" />
                <span className="text-base font-semibold">{property.features.constructionArea}m²</span>
              </div>
            )}
            {property.features.parking > 0 && (
              <div className="flex flex-col items-center text-gray-700">
                <Car className="h-6 w-6 mb-1 text-primary-600" />
                <span className="text-base font-semibold">{property.features.parking}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
