# ⚡ CONFIGURAR EMAILJS AHORA - GUÍA RÁPIDA

## 🎯 OBJETIVO
Configurar EmailJS para que los formularios envíen emails a `manuel@livoo.io`

---

## 📋 PASOS (5 minutos)

### 1️⃣ Crear Cuenta en EmailJS
- Ve a: **https://www.emailjs.com/**
- Click en **"Sign Up"**
- Regístrate (puedes usar Google)

### 2️⃣ Conectar tu Email
- En el dashboard, click **"Email Services"**
- Click **"Add New Service"**
- Selecciona **"Gmail"** (o tu proveedor)
- Autoriza EmailJS
- **COPIA el Service ID** (ej: `service_abc123`)

### 3️⃣ Crear Plantilla
- Click en **"Email Templates"**
- Click **"Create New Template"**
- Nombre: `template_contacto`
- **Copia el contenido de:** `scripts/plantilla-emailjs.txt`
- To Email: `manuel@livoo.io`
- Click **"Save"**
- **COPIA el Template ID** (ej: `template_xyz789`)

### 4️⃣ Obtener Public Key
- Ve a **"Account"** → **"General"**
- Busca **"Public Key"**
- **COPIA el Public Key** (ej: `user_abc123xyz`)

### 5️⃣ Actualizar Variables
**Opción A - Script Automático:**
```bash
./scripts/actualizar-env.sh
```

**Opción B - Manual:**
Abre `.env.local` y reemplaza:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

### 6️⃣ Validar
```bash
node scripts/validar-emailjs.js
```

### 7️⃣ Probar
```bash
npm run dev
```
Ve a `http://localhost:3000/contacto` y envía un formulario.

---

## ✅ CHECKLIST

- [ ] Cuenta de EmailJS creada
- [ ] Servicio de email conectado
- [ ] Service ID copiado
- [ ] Plantilla creada con el contenido de `scripts/plantilla-emailjs.txt`
- [ ] Template ID copiado
- [ ] Public Key copiado
- [ ] Variables actualizadas en `.env.local`
- [ ] Validación exitosa (`node scripts/validar-emailjs.js`)
- [ ] Servidor reiniciado
- [ ] Formulario probado
- [ ] Email recibido en manuel@livoo.io

---

## 🆘 AYUDA

### Guías Detalladas:
- **Paso a paso completo:** `scripts/configurar-emailjs-paso-a-paso.md`
- **Plantilla lista:** `scripts/plantilla-emailjs.txt`
- **Validar configuración:** `node scripts/validar-emailjs.js`

### Problemas Comunes:
- **"Invalid template"** → Verifica el Template ID
- **"Invalid service"** → Verifica el Service ID
- **No recibo emails** → Verifica que `manuel@livoo.io` esté en "To Email"

---

**¡Listo! En 5 minutos tendrás EmailJS configurado.** ⚡

