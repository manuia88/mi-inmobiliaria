#!/bin/bash

# Script para configurar reCAPTCHA automáticamente

echo "🛡️  Configuración de Google reCAPTCHA para Livoo Bienes Raíces"
echo ""
echo "Este script te ayudará a configurar reCAPTCHA paso a paso."
echo ""

# Verificar si ya está configurado
if grep -q "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" .env.local && ! grep -q "NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxxxxx" .env.local; then
  echo "⚠️  reCAPTCHA ya está configurado en .env.local"
  read -p "¿Deseas actualizarlo? (s/n): " update
  if [ "$update" != "s" ] && [ "$update" != "S" ]; then
    echo "Operación cancelada."
    exit 0
  fi
fi

echo "📋 PASO 1: Crear reCAPTCHA en Google"
echo ""
echo "1. Ve a: https://www.google.com/recaptcha/admin/create"
echo "2. Inicia sesión con tu cuenta de Google"
echo "3. Completa el formulario:"
echo "   - Etiqueta: Livoo Bienes Raíces"
echo "   - Tipo: reCAPTCHA v2 → 'No soy un robot' (Checkbox)"
echo "   - Dominios: localhost (para desarrollo)"
echo "4. Click en 'Enviar'"
echo ""
read -p "Presiona Enter cuando hayas creado el reCAPTCHA..."

echo ""
echo "📋 PASO 2: Obtener las claves"
echo ""
echo "Después de crear, verás dos claves:"
echo "  - Clave del sitio (Site Key) - Pública"
echo "  - Clave secreta (Secret Key) - Privada"
echo ""

read -p "Ingresa tu Site Key (ej: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI): " SITE_KEY
read -p "Ingresa tu Secret Key (ej: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJv): " SECRET_KEY

if [ -z "$SITE_KEY" ] || [ -z "$SECRET_KEY" ]; then
  echo ""
  echo "❌ Error: Ambas claves son requeridas"
  exit 1
fi

# Actualizar .env.local
cd "$(dirname "$0")/.."

# Crear backup
cp .env.local .env.local.backup 2>/dev/null || true

# Actualizar variables
if grep -q "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" .env.local; then
  sed -i '' "s|NEXT_PUBLIC_RECAPTCHA_SITE_KEY=.*|NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$SITE_KEY|" .env.local
else
  echo "NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$SITE_KEY" >> .env.local
fi

if grep -q "RECAPTCHA_SECRET_KEY" .env.local; then
  sed -i '' "s|RECAPTCHA_SECRET_KEY=.*|RECAPTCHA_SECRET_KEY=$SECRET_KEY|" .env.local
else
  echo "RECAPTCHA_SECRET_KEY=$SECRET_KEY" >> .env.local
fi

echo ""
echo "✅ Variables actualizadas en .env.local"
echo ""
echo "📋 Verificación:"
grep "RECAPTCHA" .env.local
echo ""
echo "🚀 Reinicia el servidor: npm run dev"
echo ""
echo "💡 Nota: Asegúrate de agregar 'localhost' como dominio en Google reCAPTCHA"

