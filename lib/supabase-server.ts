import { createClient } from '@supabase/supabase-js'

// Cliente de servidor con SERVICE_ROLE_KEY - Solo para uso en API routes
// ⚠️ NUNCA exponer esta clave en el frontend
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://grydfdsaepwzrzrthwqv.supabase.co'
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyeWRpZHNhZXB4Y3J6YmZ0dnF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDU0NzY1MiwiZXhwIjoyMDgwMTIzNjUyfQ.f7ca2ZgoqLmdcTOB8mJAwPyfqNWDYZoibzBmeig95ec'

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('⚠️ Supabase SERVICE_ROLE_KEY no está configurado. Las operaciones de servidor no funcionarán.')
}

// Cliente con permisos completos (solo para uso en servidor)
export const supabaseServer = supabaseUrl && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null

// Función helper para subir archivos al bucket
export async function uploadFileToBucket(
  bucketName: string,
  filePath: string,
  file: File | Blob,
  contentType: string = 'image/jpeg'
): Promise<{ success: boolean; url?: string; error?: string }> {
  if (!supabaseServer) {
    return { success: false, error: 'Supabase no está configurado' }
  }

  try {
    const { data, error } = await supabaseServer.storage
      .from(bucketName)
      .upload(filePath, file, {
        contentType,
        upsert: false, // No sobrescribir si existe
      })

    if (error) {
      console.error('Error al subir archivo:', error)
      return { success: false, error: error.message }
    }

    // Obtener URL pública
    const { data: urlData } = supabaseServer.storage
      .from(bucketName)
      .getPublicUrl(data.path)

    return {
      success: true,
      url: urlData.publicUrl,
    }
  } catch (error: any) {
    console.error('Error al subir archivo:', error)
    return { success: false, error: error.message || 'Error desconocido' }
  }
}

// Función helper para insertar lead de captación
export async function insertCaptacionLead(leadData: {
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
  photo_urls?: string[]
}): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!supabaseServer) {
    return { success: false, error: 'Supabase no está configurado' }
  }

  try {
    const { data, error } = await supabaseServer
      .from('leads_captacion')
      .insert([leadData])
      .select()

    if (error) {
      console.error('Error al insertar lead:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error: any) {
    console.error('Error al insertar lead:', error)
    return { success: false, error: error.message || 'Error desconocido' }
  }
}

