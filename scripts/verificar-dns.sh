#!/bin/bash

# Script para verificar la configuración DNS de livoo.io

echo "🔍 Verificando configuración DNS de livoo.io"
echo ""

DOMAIN="livoo.io"

echo "📋 Verificando registros DNS..."
echo ""

# Verificar registro A
echo "1️⃣ Registro A (IPv4):"
dig +short $DOMAIN A
echo ""

# Verificar CNAME de www
echo "2️⃣ CNAME de www:"
dig +short www.$DOMAIN CNAME
echo ""

# Verificar si apunta a Vercel
echo "3️⃣ Verificando si apunta a Vercel:"
A_RECORD=$(dig +short $DOMAIN A | head -1)
if [[ $A_RECORD == *"76.76"* ]] || [[ $A_RECORD == *"76.223"* ]]; then
  echo "✅ El dominio parece estar apuntando a Vercel"
else
  echo "⚠️  El dominio no parece estar apuntando a Vercel"
  echo "   IP encontrada: $A_RECORD"
  echo "   Vercel usa IPs que empiezan con 76.76.x.x o 76.223.x.x"
fi
echo ""

# Verificar SSL
echo "4️⃣ Verificando SSL:"
if curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN | grep -q "200\|301\|302"; then
  echo "✅ HTTPS está funcionando"
else
  echo "⚠️  HTTPS no está funcionando aún"
  echo "   Esto es normal si los DNS acaban de configurarse"
fi
echo ""

echo "💡 Si los DNS no están propagados, espera unos minutos y vuelve a ejecutar este script"
echo ""

