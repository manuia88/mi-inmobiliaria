# 🔑 OBTENER CREDENCIALES DE EMAILJS - PASO A PASO VISUAL

## 📸 GUÍA PASO A PASO CON CAPTURAS

### PASO 1: Crear Cuenta (2 minutos)

1. Ve a: **https://www.emailjs.com/**
2. Click en **"Sign Up"** (arriba a la derecha)
3. Regístrate con:
   - Email
   - Contraseña
   - O usa "Continue with Google"
4. Confirma tu email si es necesario

---

### PASO 2: Crear Servicio de Email (3 minutos)

1. **En el dashboard**, busca la sección **"Email Services"**
2. Click en **"Add New Service"** (botón verde)
3. Selecciona tu proveedor:
   - **Gmail** (recomendado si usas Gmail)
   - **Outlook** (si usas Outlook)
   - **Otro** (cualquier otro proveedor)
4. **Conecta tu cuenta:**
   - Sigue las instrucciones para autorizar EmailJS
   - Acepta los permisos
5. **Guarda el Service ID:**
   - Después de conectar, verás algo como: `service_abc123xyz`
   - **¡COPIA ESTE VALOR!** Lo necesitarás después

---

### PASO 3: Crear Plantilla de Email (5 minutos)

1. **Ve a "Email Templates"** (menú lateral)
2. Click en **"Create New Template"**
3. **Configura la plantilla:**

   **Nombre:** `template_contacto`

   **Asunto del Email:**
   ```
   Nuevo contacto de Livoo: {{subject}}
   ```

   **Contenido del Email:**
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

4. **Configura el destinatario:**
   - En el campo **"To Email"**, escribe: `manuel@livoo.io`
   - O déjalo como `{{to_email}}` si quieres que sea dinámico

5. **Click en "Save"** (arriba a la derecha)

6. **Copia el Template ID:**
   - Después de guardar, verás algo como: `template_xyz789`
   - **¡COPIA ESTE VALOR!**

---

### PASO 4: Obtener Public Key (1 minuto)

1. **Ve a "Account"** (menú superior derecho)
2. Click en **"General"**
3. Busca la sección **"API Keys"** o **"Public Key"**
4. **Copia el Public Key:**
   - Verás algo como: `user_abc123xyz789`
   - **¡COPIA ESTE VALOR!**

---

### PASO 5: Actualizar .env.local

Abre el archivo `.env.local` y reemplaza:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz  # ← Pega tu Service ID aquí
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789   # ← Pega tu Template ID aquí
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz789  # ← Pega tu Public Key aquí
```

**O ejecuta el script automático:**
```bash
./scripts/actualizar-env.sh
```

---

### PASO 6: Probar

1. Reinicia el servidor:
   ```bash
   npm run dev
   ```

2. Ve a: `http://localhost:3000/contacto`

3. Llena el formulario y envía

4. Verifica que recibas el email en `manuel@livoo.io`

---

## ✅ CHECKLIST

- [ ] Cuenta de EmailJS creada
- [ ] Servicio de email conectado
- [ ] Service ID copiado
- [ ] Plantilla `template_contacto` creada
- [ ] Template ID copiado
- [ ] Public Key copiado
- [ ] Variables actualizadas en `.env.local`
- [ ] Servidor reiniciado
- [ ] Formulario probado
- [ ] Email recibido en manuel@livoo.io

---

## 🆘 PROBLEMAS COMUNES

### "Invalid template"
- Verifica que el Template ID sea correcto
- Asegúrate de que la plantilla se llame `template_contacto` o usa el ID correcto

### "Invalid service"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo

### "Email not sent"
- Verifica que el servicio de email esté conectado correctamente
- Revisa que el email destino (`manuel@livoo.io`) esté configurado en la plantilla

---

**¿Necesitas ayuda?** Revisa la consola del navegador (F12) para ver errores específicos.

