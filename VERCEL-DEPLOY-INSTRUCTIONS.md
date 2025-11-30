# 🚀 INSTRUCCIONES DETALLADAS: DEPLOYMENT EN VERCEL

## Guía Paso a Paso para Principiantes

Esta guía te llevará desde cero hasta tener tu sitio inmobiliario en línea en menos de 15 minutos.

---

## ✅ PREREQUISITOS

Antes de empezar, asegúrate de tener:

- [ ] **Cuenta de GitHub** (gratis) - [Crear aquí](https://github.com/signup)
- [ ] **Git instalado** en tu computadora - [Descargar aquí](https://git-scm.com/)
- [ ] **Cuenta de Vercel** (gratis) - [Crear aquí](https://vercel.com/signup)
- [ ] **Node.js instalado** (opcional, solo para desarrollo local) - [Descargar aquí](https://nodejs.org/)

---

## 📦 PASO 1: PREPARAR TU PROYECTO PARA GITHUB

### 1.1 Verificar que Git está instalado

Abre la terminal (Terminal en Mac, Git Bash en Windows) y ejecuta:

```bash
git --version
```

Si ves un número de versión (ej: `git version 2.39.0`), ¡estás listo! Si no, instala Git desde el enlace de arriba.

### 1.2 Configurar Git (solo la primera vez)

Si es la primera vez que usas Git, configura tu nombre y email:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### 1.3 Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. **Nombre del repositorio:** `mi-inmobiliaria`
3. **Descripción:** `Sitio web inmobiliario profesional con Next.js`
4. **IMPORTANTE:** NO marques ninguna casilla (README, .gitignore, license)
5. Haz clic en **"Create repository"** (botón verde)

### 1.4 Subir tu código a GitHub

**En Windows:**
- Abre "Git Bash" en la carpeta del proyecto
  - Click derecho en la carpeta → "Git Bash Here"

**En Mac/Linux:**
- Abre Terminal
- Navega a la carpeta del proyecto:
```bash
cd "/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web"
```

**Ejecuta estos comandos uno por uno:**

```bash
# 1. Inicializa Git en tu proyecto
git init

# 2. Agrega todos los archivos al staging
git add .

# 3. Crea el primer commit (guardado)
git commit -m "Initial commit: Sitio inmobiliario completo"

# 4. Renombra la rama principal a 'main'
git branch -M main

# 5. Conecta tu proyecto con GitHub
# ⚠️ IMPORTANTE: Reemplaza TU-USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git

# 6. Sube el código a GitHub
git push -u origin main
```

**Si te pide usuario y contraseña:**

- **Usuario:** Tu usuario de GitHub
- **Contraseña:** NO uses tu contraseña de GitHub. En su lugar, usa un **Personal Access Token**:
  1. Ve a https://github.com/settings/tokens
  2. Click en "Generate new token" → "Generate new token (classic)"
  3. Nombre: `Vercel Deployment`
  4. Selecciona el scope: `repo` (marca la casilla completa)
  5. Click en "Generate token"
  6. **COPIA EL TOKEN** (solo se muestra una vez)
  7. Úsalo como contraseña cuando Git te lo pida

### 1.5 Verificar que funcionó

1. Recarga la página de tu repositorio en GitHub
2. Deberías ver todos los archivos del proyecto
3. Si ves los archivos, ¡perfecto! Continúa al siguiente paso.

---

## 🚀 PASO 2: DEPLOY EN VERCEL

### 2.1 Crear cuenta en Vercel

1. Ve a https://vercel.com
2. Click en **"Sign Up"** (o "Log In" si ya tienes cuenta)
3. Selecciona **"Continue with GitHub"**
4. Autoriza Vercel para acceder a tus repositorios de GitHub
5. Completa el proceso de registro

### 2.2 Importar tu proyecto

1. En el dashboard de Vercel, click en **"Add New..."** → **"Project"**
2. Verás una lista de tus repositorios de GitHub
3. Busca `mi-inmobiliaria` en la lista
4. Click en **"Import"** al lado del repositorio

### 2.3 Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Next.js. La configuración debería verse así:

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build (o next build)
Output Directory: .next
Install Command: npm install
```

**Deja todo como está** - Vercel ya lo configuró correctamente.

### 2.4 Variables de Entorno (Opcional)

Por ahora, **no necesitas agregar variables de entorno**. Déjalo vacío.

### 2.5 Hacer el Deploy

1. Click en el botón **"Deploy"** (azul, abajo a la derecha)
2. Verás una animación de carga
3. El proceso toma aproximadamente **2-3 minutos**

### 2.6 ¡Tu sitio está en línea!

Cuando termine el deploy, verás:
- ✅ Un mensaje de éxito
- 🎉 Confeti (opcional)
- Una URL como: `https://mi-inmobiliaria-XXXXX.vercel.app`

**¡Felicidades! Tu sitio está EN LÍNEA y funcionando.**

---

## 🔄 PASO 3: ACTUALIZAR TU SITIO (Cuando hagas cambios)

Cada vez que quieras actualizar tu sitio:

```bash
# 1. Haz tus cambios en los archivos
# (Edita lo que necesites en tu editor de código)

# 2. Guarda los cambios en Git
git add .
git commit -m "Descripción de lo que cambiaste"

# 3. Sube los cambios a GitHub
git push

# 4. ¡Vercel detecta automáticamente los cambios!
# En 2-3 minutos verás los cambios en línea
```

**Nota:** Vercel detecta automáticamente cuando haces `git push` a GitHub y actualiza tu sitio automáticamente.

---

## 🌐 PASO 4: CONECTAR DOMINIO PERSONALIZADO (Opcional)

Si quieres usar tu propio dominio (ej: `tuempresa.com`):

### 4.1 Comprar un dominio

Compra un dominio en:
- [Namecheap](https://namecheap.com) - Recomendado, ~$10/año
- [GoDaddy](https://godaddy.com) - ~$15/año
- [Google Domains](https://domains.google) - ~$12/año

### 4.2 Agregar dominio en Vercel

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** (arriba)
3. Click en **"Domains"** (menú lateral izquierdo)
4. Click en **"Add"**
5. Escribe tu dominio: `tuempresa.com`
6. Click en **"Add"**

### 4.3 Configurar DNS

Vercel te mostrará los registros DNS que necesitas agregar. Ve al panel de tu registrador de dominio y agrega:

**Opción A (Recomendada) - Si quieres www:**
```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

**Opción B - Solo dominio raíz:**
```
Tipo: A
Nombre: @
Valor: 76.76.21.21
```

### 4.4 Esperar propagación

- Espera **24-48 horas** para que los cambios de DNS se propaguen
- Tu sitio estará disponible en: `https://tuempresa.com`

---

## 📊 MONITOREO Y ANALYTICS

### Ver estadísticas en Vercel

1. Ve a tu proyecto en Vercel
2. Click en **"Analytics"**
3. Ve visitas, performance, errores, etc.

### Agregar Google Analytics (Opcional)

1. Crea cuenta en https://analytics.google.com
2. Obtén tu `Measurement ID` (formato: G-XXXXXXXXXX)
3. Ve a Vercel → Settings → Environment Variables
4. Agrega:
   ```
   NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
   ```
5. Haz un nuevo deploy

---

## 💰 COSTOS

### Plan Gratuito de Vercel incluye:

- ✅ 100GB bandwidth/mes
- ✅ Deployments ilimitados
- ✅ SSL gratis (HTTPS)
- ✅ Previews de deployments
- ✅ Analytics básicos
- ✅ Soporte de comunidad

**Para el 99% de sitios inmobiliarios pequeños, el plan gratuito es suficiente.**

### Cuando crecer:

Si superas 100GB bandwidth (~50,000 visitas/mes), upgradea a:
- **Pro:** $20/mes - 1TB bandwidth
- Solo pagas si creces mucho

---

## 🐛 SOLUCIÓN DE PROBLEMAS COMUNES

### "Build failed" en Vercel

1. Ve a tu proyecto en Vercel
2. Click en el deployment que falló
3. Revisa los logs de error
4. Usualmente es error de sintaxis o dependencias faltantes
5. Corrígelo localmente y haz `git push` de nuevo

### "Cannot push to GitHub"

```bash
# Resetea la conexión:
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git
git push -u origin main --force
```

**⚠️ CUIDADO:** `--force` sobrescribe el historial. Solo úsalo si es necesario.

### "Imágenes no cargan"

Verifica `next.config.js`:
```javascript
images: {
  domains: ['images.unsplash.com', 'tu-dominio.com'],
}
```

Si agregas un nuevo dominio de imágenes, agrégalo aquí y haz push.

### "Error: Module not found"

```bash
# En tu proyecto local:
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

---

## 🎯 CHECKLIST FINAL

Después del deploy, verifica:

- [ ] Sitio carga correctamente en la URL de Vercel
- [ ] Todas las páginas funcionan (Inicio, Propiedades, Contacto, Vender)
- [ ] Se ve bien en móvil (abre en tu teléfono)
- [ ] Links de navegación funcionan
- [ ] Imágenes cargan correctamente
- [ ] Formularios se ven bien
- [ ] HTTPS activo (candado verde en el navegador)

---

## 📞 SOPORTE

### Recursos útiles:

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Discord:** https://vercel.com/discord
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Docs:** https://docs.github.com

### ¿Necesitas ayuda específica?

Si algo no funciona:
1. Revisa los logs en Vercel (click en el deployment)
2. Revisa la consola del navegador (F12)
3. Busca el error en Google con "next.js" + el mensaje de error
4. Pregunta en la comunidad de Vercel

---

## 🎉 ¡FELICIDADES!

Tu sitio inmobiliario está **EN LÍNEA** y **FUNCIONANDO**.

**Comparte tu URL:**
- Con amigos y familia
- En redes sociales
- Con clientes potenciales
- Pide feedback

**Recuerda:**
- Itera constantemente
- Agrega contenido regularmente
- Responde mensajes rápido
- Mantén el sitio actualizado

---

## 📝 COMANDOS ÚTILES DE GIT

```bash
# Ver estado actual
git status

# Ver historial de commits
git log

# Ver qué archivos cambiaron
git diff

# Deshacer cambios no guardados (CUIDADO)
git reset --hard HEAD

# Ver conexión con GitHub
git remote -v
```

---

**Última actualización:** Diciembre 2024

**¿Preguntas?** Revisa la documentación o pregunta en la comunidad de Vercel.

---

## 🚀 PRÓXIMOS PASOS SUGERIDOS

1. **Día 1-2:** Deploy básico (¡Ya lo tienes!)
2. **Día 3-7:** Agrega contenido real (propiedades, textos, imágenes)
3. **Semana 2:** Conecta dominio personalizado
4. **Semana 3:** Conecta formularios con email (EmailJS o Formspree)
5. **Mes 1:** Agrega Analytics y WhatsApp
6. **Mes 2+:** Features avanzados (base de datos, búsqueda IA, etc.)

---

**¡Éxito con tu proyecto inmobiliario! 🏠**

