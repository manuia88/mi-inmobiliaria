import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase no está configurado. Las variables de entorno SUPABASE_URL y SUPABASE_ANON_KEY son requeridas.')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Tipos para las tablas de leads
export interface ContactLead {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  created_at?: string
}

export interface PropertyLead {
  name: string
  email: string
  phone: string
  property_id: string
  property_title: string
  message?: string
  created_at?: string
}

export interface SellPropertyLead {
  name: string
  email: string
  phone: string
  property_type: string
  transaction_type: string
  address: string
  city: string
  state: string
  zip_code: string
  price: string
  bedrooms?: number
  bathrooms?: number
  construction_area?: number
  land_area?: number
  parking?: number
  description?: string
  created_at?: string
}

// Funciones para insertar leads en Supabase
export async function insertContactLead(lead: ContactLead) {
  if (!supabase) {
    console.warn('Supabase no está configurado. No se guardará el lead.')
    return { success: false, error: 'Supabase no configurado' }
  }

  try {
    const { data, error } = await supabase
      .from('leads_contacto')
      .insert([lead])
      .select()

    if (error) {
      console.error('Error al insertar lead de contacto:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error al insertar lead de contacto:', error)
    return { success: false, error: 'Error desconocido' }
  }
}

export async function insertPropertyLead(lead: PropertyLead) {
  if (!supabase) {
    console.warn('Supabase no está configurado. No se guardará el lead.')
    return { success: false, error: 'Supabase no configurado' }
  }

  try {
    const { data, error } = await supabase
      .from('leads_propiedades')
      .insert([lead])
      .select()

    if (error) {
      console.error('Error al insertar lead de propiedad:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error al insertar lead de propiedad:', error)
    return { success: false, error: 'Error desconocido' }
  }
}

export async function insertSellPropertyLead(lead: SellPropertyLead) {
  if (!supabase) {
    console.warn('Supabase no está configurado. No se guardará el lead.')
    return { success: false, error: 'Supabase no configurado' }
  }

  try {
    const { data, error } = await supabase
      .from('leads_captacion')
      .insert([lead])
      .select()

    if (error) {
      console.error('Error al insertar lead de captación:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error al insertar lead de captación:', error)
    return { success: false, error: 'Error desconocido' }
  }
}

