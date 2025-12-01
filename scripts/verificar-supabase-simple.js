/**
 * Script de verificación de Supabase (versión simplificada)
 * Verifica la configuración y estructura de la tabla leads_captacion
 */

const fs = require('fs')
const path = require('path')

// Cargar variables de entorno desde .env.local
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local')
  if (!fs.existsSync(envPath)) {
    console.error('❌ No se encontró .env.local')
    process.exit(1)
  }

  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...values] = trimmed.split('=')
      if (key && values.length) {
        const value = values.join('=').trim().replace(/^["']|["']$/g, '')
        process.env[key.trim()] = value
      }
    }
  })
}

loadEnv()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Verificación de Supabase\n')
console.log('📋 Variables de entorno:')
console.log(`  ${supabaseUrl ? '✅' : '❌'} NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? '✓ Configurada' : 'FALTANTE'}`)
console.log(`  ${supabaseAnonKey ? '✅' : '❌'} NEXT_PUBLIC_SUPABASE_ANON_KEY: ${supabaseAnonKey ? '✓ Configurada' : 'FALTANTE'}`)
console.log(`  ${supabaseServiceRoleKey ? '✅' : '❌'} SUPABASE_SERVICE_ROLE_KEY: ${supabaseServiceRoleKey ? '✓ Configurada' : 'FALTANTE'}\n`)

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('❌ ERROR: Faltan variables de entorno requeridas')
  process.exit(1)
}

console.log('📊 Verificación de estructura de tabla:\n')
console.log('La tabla "leads_captacion" debe tener las siguientes columnas:\n')
console.log('  ✅ Campos requeridos:')
console.log('    - name (TEXT)')
console.log('    - email (TEXT)')
console.log('    - phone (TEXT)')
console.log('    - property_type (TEXT)')
console.log('    - transaction_type (TEXT)')
console.log('    - address (TEXT)')
console.log('    - city (TEXT)')
console.log('    - state (TEXT)')
console.log('    - zip_code (TEXT)')
console.log('    - price (TEXT)')
console.log('\n  ✅ Campos opcionales:')
console.log('    - bedrooms (INTEGER)')
console.log('    - bathrooms (NUMERIC)')
console.log('    - construction_area (INTEGER)')
console.log('    - land_area (INTEGER)')
console.log('    - parking (INTEGER)')
console.log('    - antiguedad (INTEGER) ⚠️ NUEVO - Verificar que exista')
console.log('    - description (TEXT)')
console.log('    - photo_urls (TEXT[])')
console.log('\n  ✅ Campos automáticos:')
console.log('    - id (UUID)')
console.log('    - created_at (TIMESTAMP)')

console.log('\n📝 Para verificar/agregar la columna "antiguedad":')
console.log('   1. Ve a tu dashboard de Supabase')
console.log('   2. Abre "SQL Editor"')
console.log('   3. Ejecuta este SQL:')
console.log('\n   ALTER TABLE leads_captacion')
console.log('   ADD COLUMN IF NOT EXISTS antiguedad INTEGER;\n')

console.log('✅ Verificación de configuración completada')
console.log('⚠️  IMPORTANTE: Verifica manualmente en Supabase que la columna "antiguedad" existe')

