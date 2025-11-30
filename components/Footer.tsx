import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mi Inmobiliaria</h3>
            <p className="text-gray-400 mb-4">
              Tu aliado en la búsqueda del hogar perfecto. Más de 10 años de experiencia en el mercado inmobiliario.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/propiedades" className="text-gray-400 hover:text-white transition">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/vender" className="text-gray-400 hover:text-white transition">
                  Vender Propiedad
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white transition">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Compra de Propiedades</li>
              <li className="text-gray-400">Venta de Propiedades</li>
              <li className="text-gray-400">Renta</li>
              <li className="text-gray-400">Asesoría Legal</li>
              <li className="text-gray-400">Tasación</li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Principal 123, Col. Centro, Ciudad, CP 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">+52 33 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">contacto@miinmobiliaria.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mi Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
