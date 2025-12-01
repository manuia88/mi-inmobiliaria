# 📋 PENDIENTES - ESTADO Y SOLUCIÓN

## 🎯 RESUMEN DE PENDIENTES

Tienes 4 pendientes por completar:
1. ✅ **EmailJS** - Configurar credenciales
2. ✅ **Supabase** - Configurar (opcional)
3. ✅ **Dominio livoo.io** - Conectar con Vercel
4. ❓ **Google Fotos** - Necesito más información

---

## 1️⃣ EMAILJS

### Estado Actual:
- ✅ Código implementado
- ✅ Librería instalada
- ⚠️ Falta configurar credenciales

### Qué Hacer (15 minutos):

1. **Crear cuenta en EmailJS:**
   - Ve a: https://www.emailjs.com/
   - Regístrate (es gratis)

2. **Crear servicio:**
   - Dashboard → "Email Services" → "Add New Service"
   - Conecta tu email (Gmail, Outlook, etc.)
   - **Copia el Service ID**

3. **Crear plantilla:**
   - "Email Templates" → "Create New Template"
   - Nombre: `template_contacto`
   - Usa el contenido de: `scripts/plantilla-emailjs.txt`
   - To Email: `manuel@livoo.io`
   - **Copia el Template ID**

4. **Obtener Public Key:**
   - "Account" → "General" → "Public Key"
   - **Copia el Public Key**

5. **Actualizar .env.local:**
   ```bash
   ./scripts/actualizar-env.sh
   ```
   O manualmente edita `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz
   ```

6. **Agregar en Vercel:**
   - Settings → Environment Variables
   - Agrega las 3 variables de EmailJS

**Guía completa:** `CONFIGURAR-EMAILJS-AHORA.md`

---

## 2️⃣ SUPABASE (Opcional)

### Estado Actual:
- ✅ Código implementado
- ✅ Librería instalada
- ⚠️ Falta configurar (opcional, solo si quieres base de datos)

### Qué Hacer (20 minutos):

1. **Crear cuenta en Supabase:**
   - Ve a: https://supabase.com/
   - Regístrate (es gratis)
   - Crea un nuevo proyecto

2. **Obtener credenciales:**
   - Settings → API
   - **Copia la URL** (ej: `https://xxxxx.supabase.co`)
   - **Copia la anon/public key**

3. **Crear tablas:**
   - Ve a SQL Editor
   - Ejecuta el SQL de: `scripts/configurar-supabase.md`
   - Esto crea las tablas: `leads_contacto`, `leads_propiedades`, `leads_captacion`

4. **Actualizar .env.local:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

5. **Agregar en Vercel:**
   - Settings → Environment Variables
   - Agrega las 2 variables de Supabase

**Guía completa:** `scripts/configurar-supabase.md`

**Nota:** Supabase es opcional. Si no lo configuras, los formularios seguirán funcionando (solo no se guardarán en base de datos).

---

## 3️⃣ DOMINIO livoo.io

### Estado Actual:
- ✅ Código listo
- ⚠️ Falta conectar con Vercel
- ⚠️ Error SSL actual

### Qué Hacer (30 minutos + espera DNS):

1. **Desplegar en Vercel (si no lo has hecho):**
   - Ve a: https://vercel.com/
   - Importa tu repositorio de GitHub
   - Deploy automático

2. **Agregar variables de entorno en Vercel:**
   - Settings → Environment Variables
   - Agrega TODAS las variables:
     - `EASYBROKER_API_KEY`
     - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
     - `RECAPTCHA_SECRET_KEY`
     - `NEXT_PUBLIC_EMAILJS_*` (cuando las tengas)
     - `NEXT_PUBLIC_SUPABASE_*` (si usas Supabase)

3. **Agregar dominio:**
   - Settings → Domains
   - Agrega: `livoo.io`
   - Vercel te dará los registros DNS

4. **Configurar DNS en tu proveedor:**
   - Ve a donde compraste el dominio
   - Agrega los registros que Vercel te dio
   - Guarda los cambios

5. **Esperar propagación:**
   - 5 minutos a 48 horas
   - SSL se configurará automáticamente

6. **Verificar:**
   ```bash
   ./scripts/verificar-dns.sh
   ```

**Guía completa:** `CONECTAR-DOMINIO-VERCEL.md`

---

## 4️⃣ GOOGLE MAPS

### Estado Actual:
- ✅ Código implementado
- ✅ Componente creado (`components/GoogleMap.tsx`)
- ✅ Integrado en página de contacto
- ⚠️ Falta configurar API Key

### Qué Hacer (10 minutos):

1. **Crear API Key en Google Cloud:**
   - Ve a: https://console.cloud.google.com/
   - Crea proyecto o selecciona existente
   - Habilita "Maps JavaScript API"
   - Crea API Key

2. **Configurar restricciones:**
   - HTTP referrers: `localhost:3000/*`, `livoo.io/*`
   - Restringir a "Maps JavaScript API" solamente

3. **Actualizar .env.local:**
   ```bash
   ./scripts/configurar-google-maps.sh
   ```
   O manualmente:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC...tu_api_key
   ```

4. **Agregar en Vercel:**
   - Settings → Environment Variables
   - Agrega: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

**Guía completa:** `CONFIGURAR-GOOGLE-MAPS.md`

**Nota:** Google Maps tiene $200 USD de crédito gratis por mes (suficiente para la mayoría de sitios).

---

## 📊 PRIORIDAD RECOMENDADA

### Orden sugerido:

1. **EmailJS** (15 min) - Para que funcionen los formularios
2. **Dominio livoo.io** (30 min + espera) - Para que el sitio esté en línea
3. **Supabase** (20 min) - Opcional, para base de datos
4. **Google Fotos** - Depende de qué necesites

---

## ✅ CHECKLIST COMPLETO

### EmailJS:
- [ ] Cuenta creada en EmailJS
- [ ] Servicio configurado
- [ ] Plantilla creada
- [ ] Credenciales en `.env.local`
- [ ] Credenciales en Vercel
- [ ] Formularios probados

### Supabase (Opcional):
- [ ] Cuenta creada en Supabase
- [ ] Proyecto creado
- [ ] Tablas creadas
- [ ] Credenciales en `.env.local`
- [ ] Credenciales en Vercel
- [ ] Funcionando

### Dominio livoo.io:
- [ ] Proyecto en Vercel
- [ ] Variables de entorno en Vercel
- [ ] Dominio agregado en Vercel
- [ ] DNS configurados
- [ ] DNS propagados
- [ ] SSL funcionando
- [ ] Sitio accesible en https://livoo.io

### Google Fotos:
- [ ] Especificar qué se necesita
- [ ] Implementar

---

## 🚀 EMPEZAR AHORA

### Opción 1: EmailJS (Más rápido)
```bash
# Sigue la guía
cat CONFIGURAR-EMAILJS-AHORA.md
```

### Opción 2: Dominio (Más importante)
```bash
# Sigue la guía
cat CONECTAR-DOMINIO-VERCEL.md
```

### Opción 3: Supabase (Opcional)
```bash
# Sigue la guía
cat scripts/configurar-supabase.md
```

---

**¿Con cuál quieres empezar?** Puedo ayudarte paso a paso con cualquiera de ellos. 🚀

