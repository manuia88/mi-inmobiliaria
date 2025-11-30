#!/bin/bash

# Script para conectar el proyecto con GitHub
# Ejecuta este script después de crear el repositorio en GitHub

echo "🚀 Conectando proyecto con GitHub..."
echo ""

# Solicitar usuario de GitHub
read -p "Ingresa tu usuario de GitHub: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Error: Debes ingresar tu usuario de GitHub"
    exit 1
fi

# Conectar con GitHub
echo ""
echo "📡 Conectando con GitHub..."
git remote add origin https://github.com/$GITHUB_USER/mi-inmobiliaria.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USER/mi-inmobiliaria.git

echo "✅ Repositorio conectado: https://github.com/$GITHUB_USER/mi-inmobiliaria"
echo ""
echo "📤 Subiendo código a GitHub..."
echo "⚠️  Si te pide contraseña, usa un Personal Access Token (no tu contraseña de GitHub)"
echo ""

git push -u origin main

echo ""
echo "✅ ¡Listo! Verifica en: https://github.com/$GITHUB_USER/mi-inmobiliaria"

