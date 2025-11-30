// Interfaz compartida para Property
export interface Property {
  id: string
  title: string
  price: number
  currency: string
  type: 'Casa' | 'Departamento' | 'Terreno' | 'Oficina' | 'Local Comercial'
  transaction: 'Venta' | 'Renta'
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
    landArea?: number
    parking: number
    yearBuilt?: number
  }
  amenities: string[]
  description: string
  images: string[]
  status: 'Disponible' | 'Vendido' | 'Rentado'
  featured: boolean
  createdAt: string
}

