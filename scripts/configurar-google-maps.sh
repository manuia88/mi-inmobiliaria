#!/bin/bash

# Script para configurar Google Maps API

echo "🗺️  Configuración de Google Maps API para Livoo Bienes Raíces"
echo ""
echo "Este script te ayudará a obtener tu API Key de Google Maps."
echo ""

# Verificar si ya está configurado
if grep -q "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" .env.local && ! grep -q "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxxxxx" .env.local; then
  echo "⚠️  Google Maps API Key ya está configurado en .env.local"
  read -p "¿Deseas actualizarlo? (s/n): " update
  if [ "$update" != "s" ] && [ "$update" != "S" ]; then
    echo "Operación cancelada."
    exit 0
  fi
fi

echo "📋 PASO 1: Crear API Key en Google Cloud"
echo ""
echo "1. Ve a: https://console.cloud.google.com/"
echo "2. Crea un proyecto nuevo o selecciona uno existente"
echo "3. Ve a 'APIs & Services' → 'Library'"
echo "4. Busca 'Maps JavaScript API' y habilítala"
echo "5. Ve a 'APIs & Services' → 'Credentials'"
echo "6. Click en 'Create Credentials' → 'API Key'"
echo "7. Copia la API Key generada"
echo ""
read -p "Presiona Enter cuando tengas tu API Key..."

echo ""
echo "📋 PASO 2: Configurar restricciones (Recomendado)"
echo ""
echo "1. Click en la API Key que acabas de crear"
echo "2. En 'Application restrictions', selecciona 'HTTP referrers'"
echo "3. Agrega estos referrers:"
echo "   - localhost:3000/*"
echo "   - livoo.io/*"
echo "   - *.livoo.io/*"
echo "4. En 'API restrictions', selecciona 'Restrict key'"
echo "5. Selecciona solo 'Maps JavaScript API'"
echo "6. Click en 'Save'"
echo ""
read -p "Presiona Enter cuando hayas configurado las restricciones..."

echo ""
read -p "Ingresa tu Google Maps API Key: " API_KEY

if [ -z "$API_KEY" ]; then
  echo ""
  echo "❌ Error: La API Key es requerida"
  exit 1
fi

# Actualizar .env.local
cd "$(dirname "$0")/.."

# Crear backup
cp .env.local .env.local.backup 2>/dev/null || true

# Actualizar variable
if grep -q "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" .env.local; then
  sed -i '' "s|NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=.*|NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$API_KEY|" .env.local
else
  echo "" >> .env.local
  echo "# Google Maps API Configuration" >> .env.local
  echo "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$API_KEY" >> .env.local
fi

echo ""
echo "✅ API Key actualizada en .env.local"
echo ""
echo "📋 Verificación:"
grep "GOOGLE_MAPS" .env.local
echo ""
echo "🚀 Reinicia el servidor: npm run dev"
echo ""
echo "💡 IMPORTANTE: Agrega esta variable también en Vercel cuando hagas deploy"

