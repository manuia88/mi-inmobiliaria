#!/bin/bash

# Script para subir el código a GitHub después de crear el repositorio
# Ejecuta este script DESPUÉS de crear el repositorio en GitHub

echo "🚀 Subiendo código a GitHub..."
echo ""

# Verificar que el remote está configurado
if ! git remote get-url origin &>/dev/null; then
    echo "❌ Error: El repositorio no está conectado con GitHub"
    echo "Ejecuta primero: git remote add origin https://github.com/manuia88/mi-inmobiliaria.git"
    exit 1
fi

echo "📡 Repositorio conectado: https://github.com/manuia88/mi-inmobiliaria"
echo ""
echo "📤 Subiendo código..."
echo "⚠️  Si te pide contraseña, usa un Personal Access Token (no tu contraseña de GitHub)"
echo "   Obtén tu token en: https://github.com/settings/tokens"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Éxito! Tu código está en GitHub"
    echo "🔗 Verifica en: https://github.com/manuia88/mi-inmobiliaria"
else
    echo ""
    echo "❌ Error al subir. Verifica:"
    echo "   1. Que el repositorio existe en GitHub"
    echo "   2. Que tienes permisos"
    echo "   3. Que usas un Personal Access Token como contraseña"
fi

