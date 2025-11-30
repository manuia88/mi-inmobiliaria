#!/usr/bin/env node

/**
 * Script para validar la configuración de EmailJS
 * Ejecuta: node scripts/validar-emailjs.js
 */

const fs = require('fs')
const path = require('path')

console.log('🔍 Validando configuración de EmailJS...\n')

// Leer .env.local
const envPath = path.join(process.cwd(), '.env.local')
let envContent = ''

try {
  envContent = fs.readFileSync(envPath, 'utf8')
} catch (error) {
  console.error('❌ No se encontró el archivo .env.local')
  process.exit(1)
}

// Extraer variables
const serviceId = envContent.match(/NEXT_PUBLIC_EMAILJS_SERVICE_ID=(.+)/)?.[1]?.trim()
const templateId = envContent.match(/NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=(.+)/)?.[1]?.trim()
const publicKey = envContent.match(/NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=(.+)/)?.[1]?.trim()

console.log('📋 Variables encontradas:\n')

// Validar Service ID
if (!serviceId || serviceId.includes('xxxxxx')) {
  console.log('❌ NEXT_PUBLIC_EMAILJS_SERVICE_ID: NO CONFIGURADO')
  console.log('   Debe ser algo como: service_abc123xyz\n')
} else {
  console.log(`✅ NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${serviceId}`)
  if (!serviceId.startsWith('service_')) {
    console.log('   ⚠️  Advertencia: Debería empezar con "service_"\n')
  } else {
    console.log('')
  }
}

// Validar Template ID
if (!templateId || templateId.includes('xxxxxx')) {
  console.log('❌ NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: NO CONFIGURADO')
  console.log('   Debe ser algo como: template_xyz789\n')
} else {
  console.log(`✅ NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${templateId}`)
  if (!templateId.startsWith('template_')) {
    console.log('   ⚠️  Advertencia: Debería empezar con "template_"\n')
  } else {
    console.log('')
  }
}

// Validar Public Key
if (!publicKey || publicKey.includes('xxxxxx')) {
  console.log('❌ NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: NO CONFIGURADO')
  console.log('   Debe ser algo como: user_abc123xyz\n')
} else {
  console.log(`✅ NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${publicKey.substring(0, 20)}...`)
  if (!publicKey.startsWith('user_')) {
    console.log('   ⚠️  Advertencia: Debería empezar con "user_"\n')
  } else {
    console.log('')
  }
}

// Resumen
const allConfigured = serviceId && !serviceId.includes('xxxxxx') &&
                     templateId && !templateId.includes('xxxxxx') &&
                     publicKey && !publicKey.includes('xxxxxx')

if (allConfigured) {
  console.log('✅ ¡EmailJS está configurado correctamente!')
  console.log('\n📝 Próximos pasos:')
  console.log('   1. Reinicia el servidor: npm run dev')
  console.log('   2. Ve a /contacto y prueba el formulario')
  console.log('   3. Verifica que recibas el email en manuel@livoo.io\n')
} else {
  console.log('❌ EmailJS NO está completamente configurado')
  console.log('\n📖 Sigue la guía: scripts/configurar-emailjs-paso-a-paso.md\n')
  process.exit(1)
}

