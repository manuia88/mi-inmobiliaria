# 📧 CONFIGURAR EMAILJS - PASO A PASO COMPLETO

## ⚡ INICIO RÁPIDO (5 minutos)

### PASO 1: Crear Cuenta (1 minuto)
1. Ve a: **https://www.emailjs.com/**
2. Click en **"Sign Up"** (arriba derecha)
3. Regístrate con Google o email
4. Confirma tu email si es necesario

### PASO 2: Conectar Servicio de Email (2 minutos)
1. En el dashboard, click en **"Email Services"**
2. Click en **"Add New Service"**
3. Selecciona **"Gmail"** (o tu proveedor)
4. Autoriza EmailJS con tu cuenta
5. **COPIA el Service ID** (ej: `service_abc123`)

### PASO 3: Crear Plantilla (2 minutos)
1. Ve a **"Email Templates"**
2. Click en **"Create New Template"**
3. **Configura así:**

**Nombre:** `template_contacto`

**Asunto:**
```
Nuevo contacto de Livoo: {{subject}}
```

**Contenido:**
```
Has recibido un nuevo mensaje de contacto desde Livoo Bienes Raíces:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Livoo Bienes Raíces.
```

**To Email:** `manuel@livoo.io`

4. Click en **"Save"**
5. **COPIA el Template ID** (ej: `template_xyz789`)

### PASO 4: Obtener Public Key (30 segundos)
1. Ve a **"Account"** → **"General"**
2. Busca **"Public Key"** o **"User ID"**
3. **COPIA el Public Key** (ej: `user_abc123xyz`)

### PASO 5: Actualizar .env.local
Abre `.env.local` y reemplaza:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

### PASO 6: Probar
```bash
npm run dev
```
Ve a `/contacto` y envía un formulario. Deberías recibir el email.

---

## 🆘 ¿PROBLEMAS?

### "Invalid template"
- Verifica que el Template ID sea correcto
- Asegúrate de que la plantilla esté guardada

### "Invalid service"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté conectado

### No recibo emails
- Verifica que `manuel@livoo.io` esté en "To Email" de la plantilla
- Revisa la carpeta de spam
- Verifica que el servicio de email esté conectado correctamente

