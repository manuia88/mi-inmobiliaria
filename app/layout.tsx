import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Livoo Bienes Raíces - El escenario fértil donde tus sueños echan raíces.',
  description: 'Miles de propiedades disponibles para comprar y rentar en las mejores ubicaciones',
  keywords: 'inmobiliaria, casas, departamentos, venta, renta, propiedades, Livoo, bienes raíces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
