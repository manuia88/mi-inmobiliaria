# 🌐 CONECTAR DOMINIO livoo.io CON VERCEL

## 🎯 OBJETIVO

Conectar tu dominio `livoo.io` con Vercel para que tu sitio funcione con HTTPS y sin errores SSL.

---

## 📋 PASO 1: PREPARAR EL PROYECTO EN VERCEL

### 1.1. Hacer Push a GitHub (si no lo has hecho)

```bash
# Asegúrate de estar en el directorio del proyecto
cd "/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web"

# Verifica el estado
git status

# Si hay cambios, haz commit
git add .
git commit -m "Preparar para deploy en Vercel"

# Push a GitHub
git push origin main
```

### 1.2. Conectar Proyecto en Vercel

1. Ve a: **https://vercel.com/**
2. Inicia sesión (o crea cuenta con GitHub)
3. Click en **"Add New Project"**
4. Importa tu repositorio de GitHub
5. Configura el proyecto:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (raíz)
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `.next` (automático)
6. Click en **"Deploy"**

---

## 📋 PASO 2: CONFIGURAR VARIABLES DE ENTORNO EN VERCEL

### 2.1. Agregar Variables

1. En tu proyecto de Vercel, ve a **"Settings"** → **"Environment Variables"**
2. Agrega estas variables (una por una):

**EasyBroker:**
```
EASYBROKER_API_KEY=ctblnd43g6u7w06gj3wfi96wpfan2u
```

**EmailJS (cuando las tengas):**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contacto
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xxxxxx
```

**reCAPTCHA:**
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Le8OB0sAAAAANAku8T3ju9-YsvrNQMbvOfz6BKI
RECAPTCHA_SECRET_KEY=6Le8OB0sAAAAAA2tMaEot3bWBvkakvGodTJ1CIU_
```

**Supabase (si lo usas):**
```
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
```

3. Selecciona **"Production"**, **"Preview"** y **"Development"** para cada variable
4. Click en **"Save"**

### 2.2. Redesplegar

Después de agregar las variables, ve a **"Deployments"** y haz click en los tres puntos (⋯) del último deployment → **"Redeploy"**

---

## 📋 PASO 3: CONECTAR DOMINIO livoo.io

### 3.1. Agregar Dominio en Vercel

1. En tu proyecto de Vercel, ve a **"Settings"** → **"Domains"**
2. En el campo de texto, escribe: `livoo.io`
3. Click en **"Add"**
4. Vercel te mostrará las instrucciones de DNS

### 3.2. Configurar DNS en tu Proveedor de Dominio

Vercel te dará registros DNS específicos. Necesitas agregarlos en tu proveedor de dominio (ej: Namecheap, GoDaddy, Google Domains, etc.).

**Ejemplo de registros que Vercel te dará:**

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

**Pasos generales:**

1. Ve a tu proveedor de dominio (donde compraste `livoo.io`)
2. Busca la sección de **"DNS"** o **"Name Servers"**
3. Agrega los registros que Vercel te proporcionó
4. Guarda los cambios

**Nota:** Los cambios DNS pueden tardar de 5 minutos a 48 horas en propagarse.

---

## 📋 PASO 4: CONFIGURAR SSL/HTTPS

### 4.1. SSL Automático en Vercel

Vercel configura SSL automáticamente cuando conectas un dominio. Solo necesitas:

1. Esperar a que los DNS se propaguen
2. Vercel detectará el dominio y configurará SSL automáticamente
3. Esto puede tardar unos minutos después de que los DNS estén activos

### 4.2. Verificar SSL

Una vez configurado, deberías ver:
- 🔒 Candado verde en la barra de direcciones
- URL: `https://livoo.io` (con HTTPS)

---

## 📋 PASO 5: VERIFICAR CONFIGURACIÓN

### 5.1. Verificar DNS

Puedes verificar si los DNS están propagados:

```bash
# Verificar registro A
dig livoo.io A

# Verificar CNAME de www
dig www.livoo.io CNAME
```

O usa herramientas online:
- https://dnschecker.org/
- https://www.whatsmydns.net/

### 5.2. Verificar SSL

- Ve a: https://www.ssllabs.com/ssltest/
- Ingresa: `livoo.io`
- Verifica que tenga calificación A o superior

---

## 📋 PASO 6: ACTUALIZAR CONFIGURACIÓN DE RECAPTCHA

### 6.1. Agregar Dominio en Google reCAPTCHA

1. Ve a: **https://www.google.com/recaptcha/admin**
2. Selecciona tu reCAPTCHA
3. Click en **"Settings"** (⚙️)
4. En **"Domains"**, agrega:
   - `livoo.io`
   - `www.livoo.io`
5. Click en **"Save"**

---

## 🆘 PROBLEMAS COMUNES

### Error: "ERR_SSL_PROTOCOL_ERROR"

**Causa:** El dominio no está conectado correctamente o SSL no está configurado.

**Solución:**
1. Verifica que los DNS estén configurados correctamente
2. Espera a que se propaguen (puede tardar hasta 48 horas)
3. Verifica en Vercel que el dominio esté "Valid" (verde)

### Error: "Domain not found"

**Causa:** Los DNS no están propagados o están mal configurados.

**Solución:**
1. Verifica los registros DNS en tu proveedor
2. Usa herramientas de verificación DNS
3. Espera más tiempo para la propagación

### Error: "Invalid SSL Certificate"

**Causa:** SSL aún no está configurado por Vercel.

**Solución:**
1. Espera unos minutos después de que los DNS estén activos
2. Vercel configurará SSL automáticamente
3. Si después de 1 hora no funciona, contacta a Vercel

---

## ✅ CHECKLIST FINAL

- [ ] Proyecto desplegado en Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Dominio `livoo.io` agregado en Vercel
- [ ] DNS configurados en proveedor de dominio
- [ ] DNS propagados (verificado con herramientas)
- [ ] SSL configurado automáticamente por Vercel
- [ ] Dominio agregado en Google reCAPTCHA
- [ ] Sitio accesible en `https://livoo.io`
- [ ] Sin errores SSL

---

## 📝 NOTAS IMPORTANTES

1. **Propagación DNS:** Puede tardar de 5 minutos a 48 horas
2. **SSL Automático:** Vercel lo configura automáticamente, no necesitas hacer nada
3. **www vs sin www:** Vercel maneja ambos automáticamente
4. **Redesplegar:** Después de agregar variables de entorno, redesplega el proyecto

---

## 🚀 DESPUÉS DE CONECTAR

Una vez que todo esté configurado:

1. **Prueba el sitio:** `https://livoo.io`
2. **Prueba los formularios:** `https://livoo.io/contacto`
3. **Verifica reCAPTCHA:** Debe funcionar correctamente
4. **Verifica propiedades:** Deben cargar desde EasyBroker

---

**¡Con estos pasos tendrás tu dominio conectado y funcionando con HTTPS!** 🌐🔒

