# 🚀 CONFIGURACIÓN DE VERCEL PARA LIVOO

## ✅ ESTADO ACTUAL

### Código Implementado:
- ✅ Formulario `/vender` simplificado
- ✅ API route `/api/capture-lead` funcionando
- ✅ Cliente Supabase configurado
- ✅ Redirección a WhatsApp implementada
- ✅ Build exitoso

### Variables de Entorno Necesarias:

**En `.env.local` (Local - ✅ Ya configurado):**
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://grydfdsaepwzrzrthwqv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_t6rE8Uo2L3sZkL1tpVYcylUg_7fVnr3c26
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyeWRpZHNhZXB4Y3J6YmZ0dnF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDU0NzY1MiwiZXhwIjoyMDgwMTIzNjUyfQ.f7ca2ZgoqLmdcTOB8mJAwPyfqNWDYZoibzBmeig95ec

# EasyBroker
EASYBROKER_API_KEY=ctblnd43g6u7w06gj3wfi96wpfan2u

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Le8OB0sAAAAANAku8T3ju9-YsvrNQMbvOfz6BKI
RECAPTCHA_SECRET_KEY=6Le8OB0sAAAAAA2tMaEot3bWBvkakvGodTJ1CIU_

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_u4wi7qs
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_j4wqn4
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=3aNM9RwfJxc7WYV2o
```

---

## 📋 PASOS PARA CONFIGURAR VERCEL

### 1. Preparar el Repositorio

```bash
# Asegúrate de que todos los cambios estén commitados
git add .
git commit -m "Formulario simplificado con redirección a WhatsApp"
git push origin main
```

### 2. Conectar Proyecto a Vercel

1. Ve a: https://vercel.com
2. Inicia sesión o crea una cuenta
3. Click en "Add New Project"
4. Importa tu repositorio de GitHub
5. Configura el proyecto:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (raíz)
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `.next` (automático)

### 3. Agregar Variables de Entorno en Vercel

**⚠️ CRÍTICO:** Agrega TODAS estas variables antes de hacer deploy:

1. En el proyecto de Vercel, ve a: **Settings → Environment Variables**

2. Agrega cada variable una por una:

#### Supabase:
```
NEXT_PUBLIC_SUPABASE_URL
Valor: https://grydfdsaepwzrzrthwqv.supabase.co
Ambientes: Production, Preview, Development
```

```
NEXT_PUBLIC_SUPABASE_ANON_KEY
Valor: sb_publishable_t6rE8Uo2L3sZkL1tpVYcylUg_7fVnr3c26
Ambientes: Production, Preview, Development
```

```
SUPABASE_SERVICE_ROLE_KEY
Valor: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyeWRpZHNhZXB4Y3J6YmZ0dnF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDU0NzY1MiwiZXhwIjoyMDgwMTIzNjUyfQ.f7ca2ZgoqLmdcTOB8mJAwPyfqNWDYZoibzBmeig95ec
Ambientes: Production, Preview, Development
⚠️ IMPORTANTE: Esta es secreta, solo servidor
```

#### EasyBroker:
```
EASYBROKER_API_KEY
Valor: ctblnd43g6u7w06gj3wfi96wpfan2u
Ambientes: Production, Preview, Development
```

#### reCAPTCHA:
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY
Valor: 6Le8OB0sAAAAANAku8T3ju9-YsvrNQMbvOfz6BKI
Ambientes: Production, Preview, Development
```

```
RECAPTCHA_SECRET_KEY
Valor: 6Le8OB0sAAAAAA2tMaEot3bWBvkakvGodTJ1CIU_
Ambientes: Production, Preview, Development
```

#### EmailJS:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
Valor: service_u4wi7qs
Ambientes: Production, Preview, Development
```

```
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
Valor: template_j4wqn4
Ambientes: Production, Preview, Development
```

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Valor: 3aNM9RwfJxc7WYV2o
Ambientes: Production, Preview, Development
```

### 4. Hacer Deploy

1. Click en **"Deploy"**
2. Espera a que termine el build
3. Verifica que no haya errores

### 5. Conectar Dominio (Opcional)

Si quieres usar `livoo.io`:

1. Ve a: **Settings → Domains**
2. Agrega tu dominio: `livoo.io`
3. Sigue las instrucciones de DNS:
   - Agrega un registro `A` o `CNAME` según indique Vercel
   - Espera a que se propague (puede tardar hasta 24 horas)

---

## ✅ VERIFICACIÓN POST-DEPLOY

### 1. Probar el Formulario:
- Ve a: `https://tu-proyecto.vercel.app/vender`
- Llena el formulario
- Verifica que redirija a WhatsApp

### 2. Verificar Supabase:
- Ve a: https://supabase.com/dashboard
- Table Editor → `leads_captacion`
- Deberías ver los nuevos registros

### 3. Verificar Logs:
- En Vercel: **Deployments → [Último deploy] → Functions**
- Revisa que no haya errores en `/api/capture-lead`

---

## 🔧 TROUBLESHOOTING

### Error: "Supabase no está configurado"
- Verifica que las variables estén en Vercel
- Asegúrate de seleccionar todos los ambientes (Production, Preview, Development)
- Haz un nuevo deploy después de agregar variables

### Error: "Failed to fetch"
- Verifica que `SUPABASE_SERVICE_ROLE_KEY` esté configurada
- Revisa los logs de Vercel para más detalles

### Redirección a WhatsApp no funciona
- Verifica que el número sea: `5215540646386`
- Revisa la consola del navegador para errores

---

## 📝 CHECKLIST FINAL

- [ ] Código commitado y pusheado a GitHub
- [ ] Proyecto conectado a Vercel
- [ ] Todas las variables de entorno agregadas
- [ ] Deploy exitoso
- [ ] Formulario probado en producción
- [ ] Supabase recibiendo datos
- [ ] Redirección a WhatsApp funcionando

---

**¡Listo para poner Livoo en línea!** 🚀

