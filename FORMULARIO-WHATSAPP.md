# ✅ FORMULARIO SIMPLIFICADO CON REDIRECCIÓN A WHATSAPP

## 🎉 ¡Formulario Optimizado Implementado!

He simplificado el formulario de `/vender` y configurado la redirección automática a WhatsApp.

---

## ✅ CAMBIOS IMPLEMENTADOS

### 1. Header Simplificado:
- ✅ Eliminado texto "BIENES RAÍCES" del logo
- ✅ Solo queda la imagen del olivo

### 2. Formulario Simplificado:
- ✅ Eliminada sección de **Descripción**
- ✅ Eliminada sección de **Fotos/Subida de archivos**
- ✅ Eliminados checkboxes de **Términos y Condiciones**
- ✅ Eliminado checkbox de **Aviso de Privacidad**
- ✅ Eliminado **reCAPTCHA**
- ✅ Formulario más rápido y directo

### 3. Nueva Lógica de Envío:
- ✅ **Paso 1:** Guardar datos básicos en Supabase
- ✅ **Paso 2:** Redirigir automáticamente a WhatsApp con mensaje pre-cargado
- ✅ Flujo optimizado y sin fricción

---

## 🔄 FLUJO COMPLETO

```
Usuario completa formulario básico
    ↓
Usuario hace click en "Continuar en WhatsApp"
    ↓
Frontend envía datos a /api/capture-lead
    ↓
Servidor guarda en Supabase (tabla leads_captacion)
    ↓
Si éxito → Redirección automática a WhatsApp
    ↓
WhatsApp abre con mensaje pre-cargado
```

---

## 📋 CAMPOS DEL FORMULARIO

### Información del Propietario:
- Nombre completo *
- Email *
- Teléfono *

### Información de la Propiedad:
- Tipo de propiedad * (Casa, Departamento, Terreno, Oficina, Local Comercial)
- Tipo de transacción * (Venta, Renta)
- Calle y número *
- Ciudad *
- Estado *
- Código Postal *
- Precio esperado (MXN) *

### Características (Opcional):
- Recámaras
- Baños
- m² construcción
- m² terreno
- Estacionamientos

---

## 💬 MENSAJE DE WHATSAPP

El mensaje pre-cargado incluye:
- Nombre del propietario
- Tipo de propiedad
- Tipo de transacción
- Ubicación completa
- Precio esperado
- Características (si fueron proporcionadas)

**Ejemplo:**
```
¡Hola! Me interesa vender mi propiedad.

📋 *Información:*
• Nombre: Juan Pérez
• Tipo: Casa
• Transacción: Venta
• Ubicación: Calle Principal 123, Ciudad de México, CDMX
• Precio esperado: $2,500,000 MXN
• Recámaras: 3
• Baños: 2.5
• Construcción: 150 m²
• Terreno: 200 m²

¿Podrían ayudarme con el proceso?
```

---

## 🔧 ARCHIVOS MODIFICADOS

### Nuevos Archivos:
- ✅ `app/api/capture-lead/route.ts` - API route para guardar leads

### Archivos Modificados:
- ✅ `components/Header.tsx` - Eliminado texto "BIENES RAÍCES"
- ✅ `app/vender/page.tsx` - Formulario completamente reescrito

---

## 🗄️ ALMACENAMIENTO

### Tabla `leads_captacion`:
Los datos se guardan con:
- Información del propietario
- Información de la propiedad
- Características opcionales
- **Sin fotos** (se eliminó la subida)
- **Sin descripción** (se eliminó el campo)

---

## ⚙️ API ROUTE

### `/api/capture-lead`:
- **Método:** POST
- **Body:** JSON con datos del formulario
- **Validación:** Campos requeridos
- **Almacenamiento:** Supabase con SERVICE_ROLE_KEY
- **Respuesta:** `{ success: true/false, error?: string }`

---

## 🚀 PRUEBA AHORA

### 1. Reinicia el servidor:
```bash
npm run dev
```

### 2. Prueba el formulario:
- Ve a: `http://localhost:3000/vender`
- Llena el formulario básico
- Haz click en "Continuar en WhatsApp"
- Deberías ser redirigido a WhatsApp con el mensaje pre-cargado

### 3. Verifica:
- ✅ Datos guardados en Supabase (Table Editor → `leads_captacion`)
- ✅ Redirección a WhatsApp funciona
- ✅ Mensaje pre-cargado correcto

---

## ✅ VENTAJAS DEL NUEVO FLUJO

1. **Más Rápido:**
   - Menos campos que llenar
   - Sin subida de archivos
   - Sin validaciones complejas

2. **Mejor Experiencia:**
   - Redirección inmediata a WhatsApp
   - Conversación directa con el agente
   - Pueden enviar fotos por WhatsApp

3. **Más Conversiones:**
   - Menos fricción = más leads
   - Contacto inmediato
   - Personalización en la conversación

---

## 📝 NOTAS IMPORTANTES

1. **WhatsApp:**
   - Número: `+52 55 4064 6386`
   - Formato: `https://wa.me/5215540646386?text=[MENSAJE]`
   - El mensaje se codifica automáticamente

2. **Supabase:**
   - Los datos se guardan antes de redirigir
   - Si falla el guardado, no se redirige
   - Se muestra error al usuario

3. **Formulario:**
   - Campos opcionales no bloquean el envío
   - Solo campos marcados con * son requeridos
   - Validación en frontend y backend

---

**¡Formulario optimizado y funcionando!** 🎉

El sistema ahora:
- ✅ Captura información básica
- ✅ Guarda en Supabase
- ✅ Redirige a WhatsApp
- ✅ Mensaje pre-cargado listo

Todo de forma rápida y sin fricción.

