'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export default function SearchForm() {
  const router = useRouter()
  const [transaction, setTransaction] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    const params = new URLSearchParams()
    if (transaction && transaction !== 'Tipo de Transacción') {
      params.set('transaction', transaction)
    }
    if (location) {
      params.set('location', location)
    }
    
    router.push(`/buscar?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-2xl p-6 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select 
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
          className="input-field"
        >
          <option>Tipo de Transacción</option>
          <option value="Venta">Comprar</option>
          <option value="Renta">Rentar</option>
        </select>
        
        <input
          type="text"
          placeholder="Ciudad, colonia o código postal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-field"
        />
        
        <button type="submit" className="btn-primary flex items-center justify-center">
          <Search className="h-5 w-5 mr-2" />
          Buscar
        </button>
      </div>
    </form>
  )
}

