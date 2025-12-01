'use client'

import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { useMemo } from 'react'

interface GoogleMapProps {
  address?: string
  lat?: number
  lng?: number
}

export default function GoogleMapComponent({ address, lat, lng }: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  // Coordenadas por defecto (puedes cambiarlas)
  const defaultCenter = useMemo(() => ({
    lat: lat || 19.4326, // Ciudad de México por defecto
    lng: lng || -99.1332,
  }), [lat, lng])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey || '',
  })

  if (!apiKey || apiKey.includes('xxxxxx')) {
    // Modo desarrollo: mostrar placeholder si no está configurado
    return (
      <div className="bg-gray-300 rounded-xl h-64 flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-2">Mapa de Google Maps</p>
        <p className="text-xs text-gray-500 text-center px-4">
          Configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en .env.local
        </p>
        <p className="text-xs text-gray-500 text-center px-4 mt-2">
          O usa: ./scripts/configurar-google-maps.sh
        </p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
        <p className="text-gray-600">Cargando mapa...</p>
      </div>
    )
  }

  return (
    <GoogleMap
      zoom={15}
      center={defaultCenter}
      mapContainerClassName="w-full h-64 rounded-xl"
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      }}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  )
}

