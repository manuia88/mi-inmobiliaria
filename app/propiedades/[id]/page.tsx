import Image from 'next/image'
import { notFound } from 'next/navigation'
import { properties } from '@/data/properties'
import { Bed, Bath, Maximize, Car, MapPin, Calendar, Home as HomeIcon, Phone, Mail, MessageSquare } from 'lucide-react'
import PropertyCard from '@/components/PropertyCard'

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id)

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

  const similarProperties = properties
    .filter(p => p.id !== property.id && p.type === property.type)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Galería de Imágenes */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Imagen Principal */}
            <div className="relative h-96 lg:h-[600px] rounded-xl overflow-hidden">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Grid de Imágenes Secundarias */}
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-44 lg:h-[290px] rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${property.title} - imagen ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Izquierda - Info de la Propiedad */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Inicio</span>
                <span>›</span>
                <span>Propiedades</span>
                <span>›</span>
                <span>{property.location.city}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.transaction}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {property.status}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {property.title}
              </h1>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
              </div>

              <div className="text-3xl font-bold text-primary-600">
                {formatPrice(property.price, property.currency)}
                {property.transaction === 'Renta' && (
                  <span className="text-lg text-gray-500 font-normal">/mes</span>
                )}
              </div>
            </div>

            {/* Características Principales */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Características Principales</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.features.bedrooms > 0 && (
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="h-8 w-8 text-primary-600 mb-2" />
                    <span className="text-2xl font-bold">{property.features.bedrooms}</span>
                    <span className="text-sm text-gray-600">Recámaras</span>
                  </div>
                )}
                {property.features.bathrooms > 0 && (
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="h-8 w-8 text-primary-600 mb-2" />
                    <span className="text-2xl font-bold">{property.features.bathrooms}</span>
                    <span className="text-sm text-gray-600">Baños</span>
                  </div>
                )}
                {property.features.constructionArea > 0 && (
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Maximize className="h-8 w-8 text-primary-600 mb-2" />
                    <span className="text-2xl font-bold">{property.features.constructionArea}</span>
                    <span className="text-sm text-gray-600">m² construidos</span>
                  </div>
                )}
                {property.features.parking > 0 && (
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Car className="h-8 w-8 text-primary-600 mb-2" />
                    <span className="text-2xl font-bold">{property.features.parking}</span>
                    <span className="text-sm text-gray-600">Estacionamientos</span>
                  </div>
                )}
              </div>
            </div>

            {/* Descripción */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Descripción</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenidades */}
            {property.amenities.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Amenidades</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detalles Adicionales */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Detalles Adicionales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Tipo de Propiedad:</span>
                  <span className="font-medium">{property.type}</span>
                </div>
                {property.features.landArea && (
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Superficie Terreno:</span>
                    <span className="font-medium">{property.features.landArea} m²</span>
                  </div>
                )}
                {property.features.yearBuilt && (
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-gray-600">Año de Construcción:</span>
                    <span className="font-medium">{property.features.yearBuilt}</span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Código Postal:</span>
                  <span className="font-medium">{property.location.zipCode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Formulario de Contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Contacta al Agente</h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="input-field"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="input-field"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Mensaje (opcional)"
                    className="input-field resize-none"
                    defaultValue={`Hola, estoy interesado en ${property.title}`}
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Enviar Mensaje
                </button>
              </form>

              <div className="mt-6 pt-6 border-t space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all">
                  <Phone className="h-5 w-5" />
                  Llamar Ahora
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all">
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Propiedades Similares */}
        {similarProperties.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Propiedades Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
