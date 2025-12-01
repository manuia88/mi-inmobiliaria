import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Página no encontrada</h2>
          <p className="text-gray-600 mt-2">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center w-full"
          >
            <Home className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="flex gap-4 justify-center">
            <Link href="/propiedades" className="text-primary-600 hover:underline">
              Ver propiedades
            </Link>
            <Link href="/vender" className="text-primary-600 hover:underline">
              Vender propiedad
            </Link>
            <Link href="/contacto" className="text-primary-600 hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

