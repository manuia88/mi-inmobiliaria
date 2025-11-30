# ⚡ INICIO RÁPIDO - LIVOO BIENES RAÍCES

## 🎯 ¿QUÉ ESTÁ LISTO?

✅ **Re-branding completo a Livoo Bienes Raíces**
✅ **Logo integrado** (livoo_sin_fondo.png)
✅ **Colores verde olivo aplicados**
✅ **Integración EasyBroker funcionando** (50 propiedades en tiempo real)
✅ **EmailJS instalado y listo**
✅ **Supabase instalado y listo**
✅ **Formularios integrados**

---

## 🚀 PARA QUE FUNCIONEN LOS FORMULARIOS

### Opción 1: Configurar EmailJS (15 minutos)

**Sigue estos pasos:**

1. **Crea cuenta en EmailJS:**
   - Ve a https://www.emailjs.com/
   - Regístrate (es gratis)

2. **Crea un servicio:**
   - Dashboard → "Email Services" → "Add New Service"
   - Conecta tu email (Gmail, Outlook, etc.)
   - **Copia el Service ID**

3. **Crea una plantilla:**
   - "Email Templates" → "Create New Template"
   - Nombre: `template_contacto`
   - Variables a usar: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
   - To Email: `manuel@livoo.io`
   - **Copia el Template ID**

4. **Obtén tu Public Key:**
   - "Account" → "General" → "Public Key"
   - **Copia el Public Key**

5. **Actualiza .env.local:**
   - Abre el archivo `.env.local`
   - Reemplaza los valores `xxxxxx` con tus credenciales reales

**O usa el script automático:**
```bash
./scripts/actualizar-env.sh
```

---

## 📋 GUÍAS DETALLADAS

- **EmailJS:** `scripts/configurar-emailjs.md`
- **Supabase:** `scripts/configurar-supabase.md`
- **Configuración completa:** `CONFIGURACION-LIVOO.md`

---

## ✅ VERIFICACIÓN RÁPIDA

### ¿El logo aparece?
- Abre `http://localhost:3000`
- Deberías ver el logo de Livoo en la parte superior

### ¿Las propiedades cargan?
- Ve a `/propiedades`
- Deberías ver propiedades de EasyBroker

### ¿Los formularios funcionan?
- Ve a `/contacto`
- Llena el formulario
- Si EmailJS está configurado, recibirás un email

---

## 🎨 IDENTIDAD VISUAL

- **Marca:** Livoo Bienes Raíces
- **Color:** Verde Olivo (#4A674A)
- **Filosofía:** "El escenario fértil donde tus sueños echan raíces"
- **Contacto:** +52 55 4064 6386 | manuel@livoo.io

---

**¡Todo está listo! Solo falta configurar EmailJS para que los formularios envíen emails.** 📧

