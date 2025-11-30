import Link from 'next/link'
import { Home, Shield, TrendingUp, Award } from 'lucide-react'
import PropertyCard from '@/components/PropertyCard'
import SearchForm from '@/components/SearchForm'
import { Property } from '@/types/property'

async function getFeaturedProperties(): Promise<Property[]> {
  try {
    // Construir URL base para el fetch
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NODE_ENV === 'production'
      ? 'https://mi-inmobiliaria.vercel.app' // Ajusta según tu URL de Vercel
      : 'http://localhost:3000'
    
    const response = await fetch(`${baseUrl}/api/properties`, {
      next: { revalidate: 3600 }, // Cache por 1 hora
    })

    if (!response.ok) {
      console.error('Error al obtener propiedades')
      return []
    }

    const data = await response.json()
    const properties: Property[] = data.properties || []
    
    // Filtrar propiedades destacadas
    return properties.filter(p => p.featured).slice(0, 3)
  } catch (error) {
    console.error('Error en getFeaturedProperties:', error)
    return []
  }
}

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties()

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            El escenario fértil donde tus sueños echan raíces
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Miles de propiedades disponibles en las mejores ubicaciones
          </p>

          {/* Buscador Simple */}
          <SearchForm />
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Propiedades Destacadas
            </h2>
            <p className="text-lg text-gray-600">
              Descubre nuestras mejores opciones disponibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/propiedades" className="btn-primary inline-block">
              Ver Todas las Propiedades
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-gray-600">
              Hacemos que encontrar tu hogar sea simple y seguro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proceso 100% Digital</h3>
              <p className="text-gray-600">
                Desde la búsqueda hasta la firma, todo en línea
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sin Complicaciones</h3>
              <p className="text-gray-600">
                Sin fiadores ni trámites complicados
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Asesoría Profesional</h3>
              <p className="text-gray-600">
                Expertos te acompañan en cada paso
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mejor Precio</h3>
              <p className="text-gray-600">
                Garantizamos las mejores ofertas del mercado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes una propiedad para vender?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Publicar tu propiedad es gratis y muy sencillo
          </p>
          <Link href="/vender" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-all inline-block">
            Publica tu Propiedad Gratis
          </Link>
        </div>
      </section>
    </div>
  )
}
