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

export const properties: Property[] = [
  {
    id: '1',
    title: 'Casa Moderna en Residencial Los Álamos',
    price: 3850000,
    currency: 'MXN',
    type: 'Casa',
    transaction: 'Venta',
    location: {
      address: 'Calle Los Pinos 245',
      city: 'Guadalajara',
      state: 'Jalisco',
      zipCode: '44100'
    },
    features: {
      bedrooms: 3,
      bathrooms: 2.5,
      constructionArea: 180,
      landArea: 220,
      parking: 2,
      yearBuilt: 2020
    },
    amenities: ['Jardín', 'Alberca', 'Cocina Integral', 'Closets', 'Seguridad 24/7'],
    description: 'Hermosa casa moderna en excelente ubicación. Cuenta con amplios espacios, acabados de lujo y todas las comodidades para tu familia. Recámara principal con baño completo, sala-comedor integrados, cocina integral equipada y patio trasero con jardín.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ],
    status: 'Disponible',
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Departamento en Torre Ejecutiva Centro',
    price: 2500000,
    currency: 'MXN',
    type: 'Departamento',
    transaction: 'Venta',
    location: {
      address: 'Av. Revolución 890, Piso 15',
      city: 'Ciudad de México',
      state: 'CDMX',
      zipCode: '06030'
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      constructionArea: 95,
      parking: 1,
      yearBuilt: 2019
    },
    amenities: ['Gym', 'Elevador', 'Seguridad', 'Área de Lavandería', 'Roof Garden'],
    description: 'Moderno departamento en torre ejecutiva con vista panorámica. Excelente ubicación cercana a transporte público, comercios y centros de entretenimiento. Acabados contemporáneos y espacios funcionales.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    status: 'Disponible',
    featured: true,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Casa de Playa en Riviera Nayarit',
    price: 8500000,
    currency: 'MXN',
    type: 'Casa',
    transaction: 'Venta',
    location: {
      address: 'Blvd. Costero 1520',
      city: 'Nuevo Vallarta',
      state: 'Nayarit',
      zipCode: '63732'
    },
    features: {
      bedrooms: 4,
      bathrooms: 3.5,
      constructionArea: 280,
      landArea: 450,
      parking: 3,
      yearBuilt: 2021
    },
    amenities: ['Vista al Mar', 'Alberca Infinity', 'Terraza', 'Acceso Playa', 'Jardín', 'Cocina Gourmet'],
    description: 'Espectacular casa frente al mar con diseño contemporáneo. Amplios ventanales con vista al océano, alberca infinity, terraza perfecta para disfrutar atardeceres increíbles. Acceso directo a playa privada.',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'
    ],
    status: 'Disponible',
    featured: true,
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'Departamento Amueblado en Polanco',
    price: 35000,
    currency: 'MXN',
    type: 'Departamento',
    transaction: 'Renta',
    location: {
      address: 'Homero 1515, Piso 8',
      city: 'Ciudad de México',
      state: 'CDMX',
      zipCode: '11560'
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      constructionArea: 110,
      parking: 2,
      yearBuilt: 2018
    },
    amenities: ['Amueblado', 'Gym', 'Alberca', 'Seguridad', 'Pet Friendly', 'Elevador'],
    description: 'Elegante departamento completamente amueblado en la zona más exclusiva de Polanco. Cerca de restaurantes, centros comerciales y parques. Ideal para ejecutivos o familias pequeñas.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=800'
    ],
    status: 'Disponible',
    featured: false,
    createdAt: '2024-01-25'
  },
  {
    id: '5',
    title: 'Terreno Comercial sobre Avenida Principal',
    price: 12000000,
    currency: 'MXN',
    type: 'Terreno',
    transaction: 'Venta',
    location: {
      address: 'Av. López Mateos Norte 2340',
      city: 'Zapopan',
      state: 'Jalisco',
      zipCode: '45120'
    },
    features: {
      bedrooms: 0,
      bathrooms: 0,
      constructionArea: 0,
      landArea: 850,
      parking: 0
    },
    amenities: ['Uso Comercial', 'Esquina', 'Alta Plusvalía', 'Todos los Servicios'],
    description: 'Excelente terreno comercial en ubicación estratégica. Ideal para desarrollo de plaza comercial, corporativo o uso mixto. Todos los servicios disponibles, excelente acceso y alta circulación vehicular.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800'
    ],
    status: 'Disponible',
    featured: false,
    createdAt: '2024-01-18'
  },
  {
    id: '6',
    title: 'Casa en Fraccionamiento Privado',
    price: 4200000,
    currency: 'MXN',
    type: 'Casa',
    transaction: 'Venta',
    location: {
      address: 'Privada Los Sauces 78',
      city: 'Monterrey',
      state: 'Nuevo León',
      zipCode: '64000'
    },
    features: {
      bedrooms: 3,
      bathrooms: 2.5,
      constructionArea: 165,
      landArea: 200,
      parking: 2,
      yearBuilt: 2022
    },
    amenities: ['Casa Club', 'Alberca', 'Cancha Tenis', 'Seguridad 24/7', 'Áreas Verdes', 'Gym'],
    description: 'Hermosa casa en fraccionamiento privado con amenidades de primer nivel. Diseño moderno, acabados de calidad y espacios funcionales. Perfecta para familias que buscan tranquilidad y seguridad.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ],
    status: 'Disponible',
    featured: true,
    createdAt: '2024-01-22'
  }
]
