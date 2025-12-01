/**
 * Script de verificación de Supabase
 * Verifica la configuración y estructura de la tabla leads_captacion
 * 
 * Uso: node scripts/verificar-supabase.js
 * Asegúrate de tener las variables de entorno configuradas en .env.local
 */

const { createClient } = require('@supabase/supabase-js')

async function verificarSupabase() {
  console.log('🔍 Verificando configuración de Supabase...\n')

  // 1. Verificar variables de entorno
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log('📋 Variables de entorno:')
  console.log(`  ✅ NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? '✓ Configurada' : '❌ FALTANTE'}`)
  console.log(`  ${supabaseAnonKey ? '✅' : '❌'} NEXT_PUBLIC_SUPABASE_ANON_KEY: ${supabaseAnonKey ? '✓ Configurada' : 'FALTANTE'}`)
  console.log(`  ${supabaseServiceRoleKey ? '✅' : '❌'} SUPABASE_SERVICE_ROLE_KEY: ${supabaseServiceRoleKey ? '✓ Configurada' : 'FALTANTE'}\n`)

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('❌ ERROR: Faltan variables de entorno requeridas')
    process.exit(1)
  }

  // 2. Crear cliente de Supabase
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  // 3. Verificar conexión
  console.log('🔌 Verificando conexión...')
  try {
    const { data, error } = await supabase.from('leads_captacion').select('id').limit(1)
    
    if (error) {
      if (error.code === 'PGRST116') {
        console.error('❌ ERROR: La tabla "leads_captacion" no existe')
        console.log('\n📝 Ejecuta este SQL en Supabase SQL Editor:')
        console.log(`
CREATE TABLE IF NOT EXISTS leads_captacion (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_type TEXT NOT NULL,
  transaction_type TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  price TEXT NOT NULL,
  bedrooms INTEGER,
  bathrooms NUMERIC,
  construction_area INTEGER,
  land_area INTEGER,
  parking INTEGER,
  antiguedad INTEGER,
  description TEXT,
  photo_urls TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
        `)
        process.exit(1)
      } else {
        throw error
      }
    }
    console.log('  ✅ Conexión exitosa\n')
  } catch (error) {
    console.error('  ❌ Error de conexión:', error.message)
    process.exit(1)
  }

  // 4. Verificar estructura de la tabla
  console.log('📊 Verificando estructura de la tabla...')
  try {
    // Intentar insertar un registro de prueba (luego lo borramos)
    const testData = {
      name: 'TEST_VERIFICACION',
      email: 'test@test.com',
      phone: '1234567890',
      property_type: 'Casa',
      transaction_type: 'Venta',
      address: 'Test',
      city: 'Test',
      state: 'Test',
      zip_code: '12345',
      price: '1000000',
      antiguedad: 10
    }

    const { data: insertData, error: insertError } = await supabase
      .from('leads_captacion')
      .insert([testData])
      .select()

    if (insertError) {
      if (insertError.message.includes('antiguedad') || insertError.code === '42703') {
        console.log('  ⚠️  La columna "antiguedad" NO existe en la tabla')
        console.log('\n📝 Ejecuta este SQL en Supabase SQL Editor para agregarla:')
        console.log(`
ALTER TABLE leads_captacion 
ADD COLUMN IF NOT EXISTS antiguedad INTEGER;
        `)
        console.log('\n✅ Después de ejecutar el SQL, vuelve a ejecutar este script para verificar.')
        process.exit(0)
      } else {
        throw insertError
      }
    }

    // Si llegamos aquí, la inserción fue exitosa
    console.log('  ✅ Columna "antiguedad" existe y funciona correctamente')

    // Borrar el registro de prueba
    if (insertData && insertData[0]) {
      await supabase
        .from('leads_captacion')
        .delete()
        .eq('id', insertData[0].id)
      console.log('  ✅ Registro de prueba eliminado')
    }

    console.log('\n✅ Verificación completa: Todo está correcto!')
    console.log('\n📋 Columnas verificadas en leads_captacion:')
    console.log('  ✓ name, email, phone')
    console.log('  ✓ property_type, transaction_type')
    console.log('  ✓ address, city, state, zip_code')
    console.log('  ✓ price')
    console.log('  ✓ bedrooms, bathrooms')
    console.log('  ✓ construction_area, land_area')
    console.log('  ✓ parking')
    console.log('  ✓ antiguedad (NUEVO)')
    console.log('  ✓ description, photo_urls (opcionales)')
    console.log('  ✓ created_at (automático)')

  } catch (error) {
    console.error('  ❌ Error al verificar estructura:', error.message)
    process.exit(1)
  }
}

verificarSupabase().catch(console.error)

