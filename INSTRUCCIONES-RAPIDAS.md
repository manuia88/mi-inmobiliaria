# ⚡ INSTRUCCIONES RÁPIDAS - CONECTAR CON GITHUB

## Opción 1: Automático (si me das tu usuario)

Si me das tu usuario de GitHub, ejecuto los comandos automáticamente.

## Opción 2: Manual (2 minutos)

### Paso 1: Crear repositorio en GitHub

1. Abre: https://github.com/new
2. Nombre: `mi-inmobiliaria`
3. Descripción: `Sitio web inmobiliario profesional con Next.js`
4. **NO marques ninguna casilla**
5. Click en "Create repository"

### Paso 2: Ejecutar estos comandos

Abre la terminal en esta carpeta y ejecuta:

```bash
cd "/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web"

# Reemplaza TU-USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git

git push -u origin main
```

### Paso 3: Si te pide contraseña

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token" → "Generate new token (classic)"
3. Nombre: `Vercel Deployment`
4. Marca la casilla `repo` (todos los permisos)
5. Click en "Generate token"
6. **COPIA EL TOKEN** (solo se muestra una vez)
7. Úsalo como contraseña cuando Git te lo pida

---

## Opción 3: Usar el script automático

Ejecuta:

```bash
cd "/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web"
./CONECTAR-GITHUB.sh
```

El script te pedirá tu usuario y hará todo automáticamente.

---

**¿Cuál prefieres?** Solo dime tu usuario de GitHub y lo hago todo automáticamente 🚀

