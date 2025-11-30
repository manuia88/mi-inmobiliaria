#!/bin/bash
echo "🔍 Verificando logo MoEasy..."
echo ""

if [ -f "public/moeasy_logo.webp" ]; then
    echo "✅ Logo encontrado!"
    echo "📁 Ubicación: public/moeasy_logo.webp"
    echo "📊 Tamaño: $(du -h public/moeasy_logo.webp | cut -f1)"
    echo "📋 Tipo: $(file public/moeasy_logo.webp | cut -d: -f2)"
    echo ""
    echo "✅ Todo está correcto!"
else
    echo "❌ Logo NO encontrado"
    echo ""
    echo "📋 Instrucciones:"
    echo "1. Coloca el archivo 'moeasy_logo.webp' en la carpeta 'public/'"
    echo "2. Ejecuta este script de nuevo para verificar"
    echo ""
    echo "📁 Ruta completa:"
    echo "$(pwd)/public/moeasy_logo.webp"
fi
