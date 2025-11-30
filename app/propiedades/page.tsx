import PropertyCard from '@/components/PropertyCard'
import { properties } from '@/data/properties'
import { SlidersHorizontal } from 'lucide-react'

export default function PropiedadesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Todas las Propiedades</h1>
          <p className="text-gray-600 mt-2">Mostrando {properties.length} propiedades</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar de Filtros */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filtros</h2>
                <button className="text-primary-600 text-sm hover:underline">
                  Limpiar
                </button>
              </div>

              {/* Tipo de Transacción */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Tipo de Transacción</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="transaction" className="mr-2" />
                    <span>Venta</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="transaction" className="mr-2" />
                    <span>Renta</span>
                  </label>
                </div>
              </div>

              {/* Tipo de Propiedad */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Tipo de Propiedad</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Casa</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Departamento</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Terreno</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Oficina</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Local Comercial</span>
                  </label>
                </div>
              </div>

              {/* Rango de Precio */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Rango de Precio</h3>
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Precio mínimo"
                    className="input-field"
                  />
                  <input
                    type="number"
                    placeholder="Precio máximo"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Recámaras */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Recámaras</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, '5+'].map((num) => (
                    <button
                      key={num}
                      className="border border-gray-300 rounded-lg py-2 hover:border-primary-600 hover:bg-primary-50 transition"
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
                      className="border border-gray-300 rounded-lg py-2 hover:border-primary-600 hover:bg-primary-50 transition"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn-primary w-full">
                Aplicar Filtros
              </button>
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
                {properties.length} propiedades encontradas
              </span>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                <option>Más recientes</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
                <option>m²: Menor a Mayor</option>
                <option>m²: Mayor a Menor</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

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
