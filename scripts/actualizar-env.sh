#!/bin/bash

# Script para actualizar variables de EmailJS en .env.local

echo "📧 Configuración de EmailJS para Livoo Bienes Raíces"
echo ""
echo "💡 Si no tienes las credenciales, sigue: scripts/configurar-emailjs-paso-a-paso.md"
echo ""

read -p "Ingresa tu Service ID de EmailJS (ej: service_abc123): " SERVICE_ID
read -p "Ingresa tu Template ID de EmailJS (ej: template_xyz789): " TEMPLATE_ID
read -p "Ingresa tu Public Key de EmailJS (ej: user_abc123xyz): " PUBLIC_KEY

# Validar que no estén vacíos
if [ -z "$SERVICE_ID" ] || [ -z "$TEMPLATE_ID" ] || [ -z "$PUBLIC_KEY" ]; then
  echo ""
  echo "❌ Error: Todas las credenciales son requeridas"
  echo "📖 Sigue la guía: scripts/configurar-emailjs-paso-a-paso.md"
  exit 1
fi

# Actualizar .env.local
cd "$(dirname "$0")/.."

# Crear backup
cp .env.local .env.local.backup 2>/dev/null || true

# Actualizar variables
if grep -q "NEXT_PUBLIC_EMAILJS_SERVICE_ID" .env.local; then
  sed -i '' "s|NEXT_PUBLIC_EMAILJS_SERVICE_ID=.*|NEXT_PUBLIC_EMAILJS_SERVICE_ID=$SERVICE_ID|" .env.local
else
  echo "NEXT_PUBLIC_EMAILJS_SERVICE_ID=$SERVICE_ID" >> .env.local
fi

if grep -q "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID" .env.local; then
  sed -i '' "s|NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=.*|NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$TEMPLATE_ID|" .env.local
else
  echo "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$TEMPLATE_ID" >> .env.local
fi

if grep -q "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY" .env.local; then
  sed -i '' "s|NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=.*|NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$PUBLIC_KEY|" .env.local
else
  echo "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$PUBLIC_KEY" >> .env.local
fi

echo ""
echo "✅ Variables actualizadas en .env.local"
echo ""
echo "📋 Verificación:"
grep "NEXT_PUBLIC_EMAILJS" .env.local
echo ""
echo "🔍 Validando configuración..."
node scripts/validar-emailjs.js
echo ""
echo "🚀 Si todo está correcto, reinicia el servidor: npm run dev"

