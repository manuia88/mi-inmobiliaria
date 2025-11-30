# 🏡 CONFIGURACIÓN COMPLETA - LIVOO BIENES RAÍCES

## ✅ RE-BRANDING COMPLETADO

### Cambios Realizados:

1. **Logo y Marca:**
   - ✅ Logo actualizado: `livoo_sin_fondo.png` en Header
   - ✅ Texto "BIENES RAÍCES" agregado junto al logo
   - ✅ Marca "Livoo Bienes Raíces" en Footer y metadata

2. **Colores:**
   - ✅ Paleta verde olivo aplicada (#4A674A como color principal)
   - ✅ Tonos del 50 al 900 configurados en `tailwind.config.js`

3. **Contenido:**
   - ✅ Hero: "El escenario fértil donde tus sueños echan raíces"
   - ✅ Metadata actualizada
   - ✅ Teléfono: +52 55 4064 6386
   - ✅ Email: manuel@livoo.io

4. **Contacto:**
   - ✅ Botones "Llamar Ahora" y "WhatsApp" actualizados
   - ✅ Enlaces funcionales: `tel:+525540646386` y `https://wa.me/5215540646386`

---

## ✅ INTEGRACIÓN EASYBROKER

### Estado:
- ✅ Route Handler creado: `app/api/properties/route.ts`
- ✅ API Key configurada en `.env.local`
- ✅ Páginas actualizadas para usar la API
- ✅ Mapeo de datos funcionando correctamente

### Variables de Entorno:
```env
EASYBROKER_API_KEY="ctblnd43g6u7w06gj3wfi96wpfan2u"
```

---

## ✅ INTEGRACIÓN EMAILJS

### Estado:
- ✅ Librería instalada: `@emailjs/browser`
- ✅ Servicio creado: `lib/emailService.ts`
- ✅ Formularios actualizados:
  - ✅ Formulario de contacto (`app/contacto/page.tsx`)
  - ✅ Formulario de captación de propiedades (`components/PropertyContactForm.tsx`)
  - ✅ Formulario de vender propiedad (`app/vender/page.tsx`)

### Variables de Entorno Requeridas:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contacto
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xxxxxx
```

### ⚠️ IMPORTANTE:
**Debes reemplazar los valores `xxxxxx` con tus credenciales reales de EmailJS:**

1. Ve a https://dashboard.emailjs.com
2. Obtén tu `Service ID`, `Template ID` y `Public Key`
3. Actualiza el archivo `.env.local` con los valores reales

---

## ✅ INTEGRACIÓN SUPABASE (Opcional)

### Estado:
- ✅ Librería instalada: `@supabase/supabase-js`
- ✅ Cliente creado: `lib/supabase.ts`
- ✅ Funciones de almacenamiento creadas:
  - `insertContactLead()` - Para formulario de contacto
  - `insertPropertyLead()` - Para leads de propiedades
  - `insertSellPropertyLead()` - Para formulario de vender

### Variables de Entorno (Opcional):
```env
NEXT_PUBLIC_SUPABASE_URL=[Tu URL de Supabase]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[Tu clave ANON]
```

### Configuración de Tablas en Supabase:

Si decides usar Supabase, crea estas tablas:

**1. Tabla `leads_contacto`:**
```sql
CREATE TABLE leads_contacto (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**2. Tabla `leads_propiedades`:**
```sql
CREATE TABLE leads_propiedades (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_id TEXT NOT NULL,
  property_title TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**3. Tabla `leads_captacion`:**
```sql
CREATE TABLE leads_captacion (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_type TEXT NOT NULL,
  transaction_type TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  price TEXT NOT NULL,
  bedrooms INTEGER,
  bathrooms NUMERIC,
  construction_area INTEGER,
  land_area INTEGER,
  parking INTEGER,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 📋 CHECKLIST DE CONFIGURACIÓN

### Antes de hacer deploy:

- [ ] Logo `livoo_sin_fondo.png` está en `public/`
- [ ] Variables de EmailJS configuradas en `.env.local` con valores reales
- [ ] (Opcional) Variables de Supabase configuradas si quieres usar base de datos
- [ ] Tablas de Supabase creadas (si usas Supabase)
- [ ] Plantilla de EmailJS configurada para enviar a `manuel@livoo.io`

### En Vercel:

1. Ve a Settings → Environment Variables
2. Agrega todas las variables de `.env.local`:
   - `EASYBROKER_API_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - (Opcional) `NEXT_PUBLIC_SUPABASE_URL`
   - (Opcional) `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 🚀 FUNCIONALIDADES IMPLEMENTADAS

### ✅ Formularios Funcionales:
1. **Formulario de Contacto** (`/contacto`)
   - Envía email a manuel@livoo.io
   - Guarda lead en Supabase (si está configurado)
   - Muestra mensaje de éxito/error

2. **Formulario de Captación** (Detalle de propiedad)
   - Envía email con información de la propiedad
   - Guarda lead en Supabase
   - Incluye ID y título de la propiedad

3. **Formulario de Vender** (`/vender`)
   - Envía email con todos los datos de la propiedad
   - Guarda lead completo en Supabase
   - Formulario completo con validación

### ✅ Integración EasyBroker:
- Propiedades obtenidas en tiempo real
- Cache de 1 hora
- Mapeo automático de datos
- Manejo de errores

---

## 📝 PRÓXIMOS PASOS

1. **Configurar EmailJS:**
   - Obtener credenciales reales
   - Crear plantilla de email
   - Configurar destino: manuel@livoo.io

2. **Configurar Supabase (Opcional):**
   - Crear proyecto en Supabase
   - Crear las tablas necesarias
   - Obtener URL y ANON KEY

3. **Deploy:**
   - Hacer push a GitHub
   - Configurar variables en Vercel
   - Verificar que todo funcione

---

## 🎨 IDENTIDAD VISUAL

- **Color Principal:** #4A674A (Verde Olivo)
- **Logo:** livoo_sin_fondo.png
- **Filosofía:** "El escenario fértil donde tus sueños echan raíces"
- **Contacto:** +52 55 4064 6386 | manuel@livoo.io

---

**¡Todo está listo para Livoo Bienes Raíces! 🏡**

