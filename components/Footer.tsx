import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <h3 className="text-xl font-bold mb-4">Livoo Bienes Raíces</h3>
            <p className="text-gray-400 mb-4">
              El escenario fértil donde tus sueños echan raíces. Más de 10 años de experiencia en el mercado inmobiliario.
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
              <li>
                <Link href="/aviso-de-privacidad" className="text-gray-400 hover:text-white transition">
                  Aviso de Privacidad
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
                <a href="tel:+525540646386" className="text-gray-400 hover:text-white transition">+52 55 4064 6386</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:manuel@livoo.io" className="text-gray-400 hover:text-white transition">manuel@livoo.io</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-2 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Livoo Bienes Raíces. Todos los derechos reservados.</p>
            <div className="flex space-x-4">
              <Link href="/aviso-de-privacidad" className="hover:text-white transition">
                Aviso de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
