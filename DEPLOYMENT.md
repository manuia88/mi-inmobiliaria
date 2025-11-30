# 🚀 GUÍA RÁPIDA DE DEPLOYMENT
## Tu sitio en línea en 10 minutos

---

## ✅ CHECKLIST ANTES DE EMPEZAR

Necesitas tener:
- [ ] Cuenta de GitHub (gratis) - [Crear aquí](https://github.com/signup)
- [ ] Git instalado en tu computadora - [Descargar aquí](https://git-scm.com/)
- [ ] Cuenta de Vercel (gratis) - [Crear aquí](https://vercel.com/signup)

---

## 📦 PASO 1: SUBIR CÓDIGO A GITHUB (5 min)

### 1.1 Crea un repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `mi-inmobiliaria`
3. Descripción: `Sitio web inmobiliario profesional`
4. **IMPORTANTE:** NO marques ninguna casilla (README, .gitignore, license)
5. Click en "Create repository"

### 1.2 Conecta tu código con GitHub

**En Windows:**
1. Abre "Git Bash" en la carpeta del proyecto
   - Click derecho en la carpeta → "Git Bash Here"

**En Mac/Linux:**
1. Abre Terminal
2. Navega a la carpeta: `cd ruta/a/inmobiliaria-nextjs`

**Ejecuta estos comandos** (uno por uno):

```bash
# 1. Inicializa Git
git init

# 2. Agrega todos los archivos
git add .

# 3. Primer commit
git commit -m "Initial commit: Sitio inmobiliario completo"

# 4. Renombra rama a main
git branch -M main

# 5. Conecta con GitHub (CAMBIA TU-USUARIO por tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git

# 6. Sube el código
git push -u origin main
```

**Si te pide usuario y contraseña:**
- Usuario: Tu usuario de GitHub
- Contraseña: Usa un [Personal Access Token](https://github.com/settings/tokens)
  - Genera uno nuevo si no tienes
  - Permisos necesarios: `repo` completo

✅ **Verifica:** Recarga tu repositorio en GitHub, deberías ver todos los archivos

---

## 🚀 PASO 2: DEPLOY EN VERCEL (3 min)

### 2.1 Conecta Vercel con GitHub

1. Ve a https://vercel.com
2. Click en "Sign Up" (o "Log In" si ya tienes cuenta)
3. Selecciona "Continue with GitHub"
4. Autoriza Vercel para acceder a tus repositorios

### 2.2 Importa tu proyecto

1. En Vercel, click en "Add New..." → "Project"
2. Busca `mi-inmobiliaria` en la lista
3. Click en "Import"

### 2.3 Configura el proyecto

**Configuración recomendada:**

```
Framework Preset: Next.js
Root Directory: ./
Build Command: (dejar por defecto)
Output Directory: (dejar por defecto)
Install Command: (dejar por defecto)
```

**Variables de Entorno:** (Opcional por ahora, puedes agregar después)
- Déjalo vacío por ahora
- Click en "Deploy"

### 2.4 ¡Espera el deploy!

- Verás una animación de carga
- Toma 2-3 minutos
- Cuando termine, verás confeti 🎉

✅ **Tu sitio está EN LÍNEA!**

URL: `https://mi-inmobiliaria-XXXXX.vercel.app`

---

## 🌐 PASO 3: CONECTAR DOMINIO PERSONALIZADO (Opcional)

### Si quieres usar tu propio dominio (ej: tuempresa.com)

1. **Compra un dominio** en:
   - [Namecheap](https://namecheap.com) - Recomendado, ~$10/año
   - [GoDaddy](https://godaddy.com) - ~$15/año
   - [Google Domains](https://domains.google) - ~$12/año

2. **En Vercel:**
   - Ve a tu proyecto
   - Click en "Settings" → "Domains"
   - Click en "Add"
   - Escribe tu dominio: `tuempresa.com`
   - Click en "Add"

3. **Configura DNS:**
   
   Vercel te mostrará los registros DNS. Ve al panel de tu registrador de dominio y agrega:

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

4. **Espera 24-48 horas** para que propague

✅ Tu sitio estará en: `https://tuempresa.com`

---

## 🔄 PASO 4: HACER CAMBIOS Y ACTUALIZAR (2 min)

Cuando quieras cambiar algo en tu sitio:

```bash
# 1. Haz tus cambios en los archivos
# Edita lo que necesites...

# 2. Guarda los cambios
git add .
git commit -m "Descripción de lo que cambiaste"

# 3. Sube a GitHub
git push

# 4. ¡Vercel lo detecta automáticamente y actualiza tu sitio!
# En 2-3 minutos verás los cambios en línea
```

---

## 📊 MONITOREO Y ANALYTICS

### Ver estadísticas en Vercel:

1. Ve a tu proyecto en Vercel
2. Click en "Analytics"
3. Ve visitas, performance, errores, etc.

### Agregar Google Analytics (Opcional):

1. Crea cuenta en https://analytics.google.com
2. Obtén tu `Measurement ID` (G-XXXXXXXXXX)
3. Ve a Vercel → Settings → Environment Variables
4. Agrega:
   ```
   NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
   ```

---

## 💰 COSTOS

### Plan Gratuito de Vercel incluye:

- ✅ 100GB bandwidth/mes
- ✅ Deployments ilimitados
- ✅ SSL gratis (HTTPS)
- ✅ Previews de deployments
- ✅ Analytics básicos
- ✅ Soporte de comunidad

**Para 99% de sitios inmobiliarios pequeños, el plan gratuito es suficiente.**

### Cuando crecer:

Si superas 100GB bandwidth (~50,000 visitas/mes), upgradea a:
- **Pro:** $20/mes - 1TB bandwidth
- Solo pagas si creces mucho

---

## 🎨 PERSONALIZACIÓN RÁPIDA

### Cambiar colores:

1. Edita `tailwind.config.js`
2. Cambia el color primary:
   ```javascript
   600: '#TU_COLOR_HEXADECIMAL'
   ```
3. Push a GitHub (ver Paso 4)

### Cambiar textos:

1. Busca el texto en los archivos `.tsx`
2. Edítalo directamente
3. Push a GitHub

### Agregar propiedades:

1. Edita `data/properties.ts`
2. Agrega nuevos objetos al array
3. Push a GitHub

---

## 🐛 SOLUCIÓN DE PROBLEMAS COMUNES

### "Build failed"

1. Revisa los logs en Vercel
2. Usualmente es error de sintaxis
3. Revisa el archivo que menciona el error
4. Corrígelo y haz push de nuevo

### "Cannot push to GitHub"

```bash
# Resetea la conexión:
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git
git push -u origin main --force
```

### "Imágenes no cargan"

Verifica `next.config.js`:
```javascript
images: {
  domains: ['images.unsplash.com', 'tu-dominio.com'],
}
```

---

## 📞 SOPORTE

### Recursos:

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Discord:** https://vercel.com/discord
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Docs:** https://docs.github.com

### ¿Necesitas ayuda específica?

Pregúntame:
- "El deploy falló con este error: [error]"
- "¿Cómo cambio [X] cosa?"
- "No puedo conectar mi dominio"
- "Mi sitio se ve raro en móvil"

---

## 🎯 CHECKLIST FINAL

Después del deploy, verifica:

- [ ] Sitio carga correctamente
- [ ] Todas las páginas funcionan
- [ ] Se ve bien en móvil
- [ ] Links de navegación funcionan
- [ ] Imágenes cargan
- [ ] Formularios se ven bien
- [ ] HTTPS activo (candado en navegador)

---

## 🚀 PRÓXIMOS PASOS

1. **Día 1-2:** Deploy básico (¡Ya lo tienes!)
2. **Día 3-7:** Agrega contenido real (propiedades, textos, imágenes)
3. **Semana 2:** Conecta dominio personalizado
4. **Semana 3:** Conecta formularios con email
5. **Mes 1:** Agrega Analytics y WhatsApp
6. **Mes 2+:** Features avanzados (base de datos, búsqueda IA, etc.)

---

## 💪 COMANDOS DE EMERGENCIA

Si algo sale muy mal:

```bash
# Ver estado actual
git status

# Ver historial de commits
git log

# Volver a commit anterior
git reset --hard HEAD~1

# Forzar push (CUIDADO)
git push --force

# Ver archivos ignorados
git check-ignore -v *
```

---

## 🎉 ¡FELICIDADES!

Tu sitio inmobiliario está EN LÍNEA y FUNCIONANDO.

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

**¿Preguntas?** Pregúntame lo que sea, estoy aquí para ayudarte 🚀

---

**URLs Útiles:**
- Tu Repo GitHub: `https://github.com/TU-USUARIO/mi-inmobiliaria`
- Tu Sitio Vercel: `https://mi-inmobiliaria-XXXXX.vercel.app`
- Panel Vercel: `https://vercel.com/dashboard`

---

**Última actualización:** Noviembre 2024
