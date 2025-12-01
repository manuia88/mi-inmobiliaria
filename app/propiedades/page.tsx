'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PropertyCard from '@/components/PropertyCard'
import { Property } from '@/types/property'
import { SlidersHorizontal } from 'lucide-react'

export default function PropiedadesPage() {
  const router = useRouter()
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [transaction, setTransaction] = useState<string>('')
  const [propertyType, setPropertyType] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState<string>('')
  const [maxPrice, setMaxPrice] = useState<string>('')
  const [bedrooms, setBedrooms] = useState<string>('')
  const [bathrooms, setBathrooms] = useState<string>('')
  const [parking, setParking] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('recent')

  useEffect(() => {
    async function loadProperties() {
      try {
        const response = await fetch('/api/properties')
        if (response.ok) {
          const data = await response.json()
          setProperties(data.properties || [])
          setFilteredProperties(data.properties || [])
        }
      } catch (error) {
        console.error('Error al cargar propiedades:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProperties()
  }, [])

  useEffect(() => {
    let filtered = [...properties]

    if (transaction) {
      filtered = filtered.filter(p => 
        p.transaction.toLowerCase() === transaction.toLowerCase()
      )
    }

    if (propertyType.length > 0) {
      filtered = filtered.filter(p => propertyType.includes(p.type))
    }

    if (minPrice) {
      const min = parseFloat(minPrice)
      filtered = filtered.filter(p => p.price >= min)
    }
    if (maxPrice) {
      const max = parseFloat(maxPrice)
      filtered = filtered.filter(p => p.price <= max)
    }

    if (bedrooms) {
      const beds = bedrooms === '4+' ? 4 : parseInt(bedrooms)
      filtered = filtered.filter(p => p.features.bedrooms >= beds)
    }

    if (bathrooms) {
      const baths = bathrooms === '3+' ? 3 : parseInt(bathrooms)
      filtered = filtered.filter(p => p.features.bathrooms >= baths)
    }

    if (parking) {
      const parkingSpaces = parking === '3+' ? 3 : parseInt(parking)
      filtered = filtered.filter(p => p.features.parking >= parkingSpaces)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'size-asc':
          return (a.features.constructionArea || 0) - (b.features.constructionArea || 0)
        case 'size-desc':
          return (b.features.constructionArea || 0) - (a.features.constructionArea || 0)
        case 'recent':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
    })

    setFilteredProperties(filtered)
  }, [properties, transaction, propertyType, minPrice, maxPrice, bedrooms, bathrooms, parking, sortBy])

  const handlePropertyTypeChange = (type: string) => {
    setPropertyType(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const clearFilters = () => {
    setTransaction('')
    setPropertyType([])
    setMinPrice('')
    setMaxPrice('')
    setBedrooms('')
    setBathrooms('')
    setParking('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando propiedades...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Todas las Propiedades</h1>
          <p className="text-gray-600 mt-2">Mostrando {filteredProperties.length} propiedades</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar de Filtros */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filtros</h2>
                <button 
                  onClick={clearFilters}
                  className="text-primary-600 text-sm hover:underline"
                >
                  Limpiar
                </button>
              </div>

              {/* Tipo de Transacción */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Tipo de Transacción</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="transaction" 
                      value="Venta"
                      checked={transaction === 'Venta'}
                      onChange={(e) => setTransaction(transaction === 'Venta' ? '' : e.target.value)}
                      className="mr-2" 
                    />
                    <span>Venta</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="transaction" 
                      value="Renta"
                      checked={transaction === 'Renta'}
                      onChange={(e) => setTransaction(transaction === 'Renta' ? '' : e.target.value)}
                      className="mr-2" 
                    />
                    <span>Renta</span>
                  </label>
                </div>
              </div>

              {/* Tipo de Propiedad */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Tipo de Propiedad</h3>
                <div className="space-y-2">
                  {['Casa', 'Departamento'].map((type) => (
                    <label key={type} className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={propertyType.includes(type)}
                        onChange={() => handlePropertyTypeChange(type)}
                        className="mr-2" 
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rango de Precio */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Rango de Precio</h3>
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Precio mínimo"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="input-field"
                  />
                  <input
                    type="number"
                    placeholder="Precio máximo"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>

              {/* Recámaras */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Recámaras</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, '4+'].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBedrooms(bedrooms === String(num) ? '' : String(num))}
                      className={`border rounded-lg py-2 transition font-medium ${
                        bedrooms === String(num)
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Baños */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Baños</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, '3+'].map((num) => (
                    <button
                      key={num}
                      onClick={() => setBathrooms(bathrooms === String(num) ? '' : String(num))}
                      className={`border rounded-lg py-2 transition font-medium ${
                        bathrooms === String(num)
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estacionamientos */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Estacionamientos</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, '3+'].map((num) => (
                    <button
                      key={num}
                      onClick={() => setParking(parking === String(num) ? '' : String(num))}
                      className={`border rounded-lg py-2 transition font-medium ${
                        parking === String(num)
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Botón de Filtros Móvil */}
          <div className="lg:hidden mb-4">
            <button className="btn-secondary w-full flex items-center justify-center">
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filtros
            </button>
          </div>

          {/* Grid de Propiedades */}
          <div className="lg:col-span-3">
            {/* Barra de Ordenamiento */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex justify-between items-center">
              <span className="text-gray-600">
                {filteredProperties.length} propiedades encontradas
              </span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              >
                <option value="recent">Más recientes</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="size-asc">m²: Menor a Mayor</option>
                <option value="size-desc">m²: Mayor a Menor</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No se encontraron propiedades
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar tus filtros de búsqueda
                </p>
                <button 
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Limpiar Filtros
                </button>
              </div>
            )}

            {/* Paginación */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Anterior
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Siguiente
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
