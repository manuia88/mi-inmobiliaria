# 📧 GUÍA RÁPIDA: Configurar EmailJS

## Paso 1: Crear cuenta en EmailJS

1. Ve a https://www.emailjs.com/
2. Click en "Sign Up" (es gratis)
3. Regístrate con tu email

## Paso 2: Crear un servicio de email

1. En el dashboard, ve a "Email Services"
2. Click en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. **Copia el Service ID** (ej: `service_abc123`)

## Paso 3: Crear una plantilla de email

1. Ve a "Email Templates"
2. Click en "Create New Template"
3. Nombre: `template_contacto`
4. Configura la plantilla con estas variables:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{phone}}` - Teléfono
   - `{{subject}}` - Asunto
   - `{{message}}` - Mensaje
   - `{{to_email}}` - Email destino (manuel@livoo.io)

5. **Asunto del email:** `Nuevo contacto de Livoo: {{subject}}`
6. **Contenido del email:**
```
De: {{from_name}} ({{from_email}})
Teléfono: {{phone}}
Asunto: {{subject}}

Mensaje:
{{message}}
```

7. **To Email:** `manuel@livoo.io` (o déjalo como `{{to_email}}` si quieres que sea dinámico)
8. Click en "Save"
9. **Copia el Template ID** (ej: `template_xyz789`)

## Paso 4: Obtener Public Key

1. Ve a "Account" → "General"
2. Busca "Public Key" o "User ID"
3. **Copia el Public Key** (ej: `user_abc123xyz`)

## Paso 5: Actualizar .env.local

Abre el archivo `.env.local` y reemplaza:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123  # ← Tu Service ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789  # ← Tu Template ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz  # ← Tu Public Key
```

## Paso 6: Probar

1. Reinicia el servidor: `npm run dev`
2. Ve a `/contacto`
3. Llena el formulario
4. Envía el mensaje
5. Verifica que recibas el email en manuel@livoo.io

---

**¿Problemas?** Revisa la consola del navegador (F12) para ver errores.

