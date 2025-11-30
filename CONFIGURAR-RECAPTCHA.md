# 🛡️ CONFIGURAR GOOGLE RECAPTCHA

## ⚡ INICIO RÁPIDO (5 minutos)

### PASO 1: Crear reCAPTCHA en Google
1. Ve a: **https://www.google.com/recaptcha/admin/create**
2. Inicia sesión con tu cuenta de Google
3. Completa el formulario:
   - **Etiqueta:** Livoo Bienes Raíces
   - **Tipo de reCAPTCHA:** reCAPTCHA v2 → "No soy un robot" (Checkbox)
   - **Dominios:** Agrega tu dominio (ej: `localhost`, `tu-dominio.com`)
4. Acepta los términos
5. Click en **"Enviar"**

### PASO 2: Obtener las Claves
1. Después de crear, verás dos claves:
   - **Clave del sitio** (Site Key) - Esta es pública
   - **Clave secreta** (Secret Key) - Esta es privada
2. **COPIA ambas claves**

### PASO 3: Actualizar .env.local
Abre `.env.local` y reemplaza:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI  # ← Tu Site Key
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJv  # ← Tu Secret Key
```

### PASO 4: Probar
```bash
npm run dev
```
Ve a `/contacto` y prueba el formulario. Deberías ver el widget de reCAPTCHA.

---

## 📋 CHECKLIST

- [ ] Cuenta de Google reCAPTCHA creada
- [ ] Site Key copiado
- [ ] Secret Key copiado
- [ ] Variables actualizadas en `.env.local`
- [ ] Dominios configurados en Google reCAPTCHA
- [ ] Servidor reiniciado
- [ ] Formulario probado
- [ ] reCAPTCHA aparece en los formularios

---

## 🆘 PROBLEMAS COMUNES

### "reCAPTCHA no configurado"
- Verifica que las variables estén en `.env.local`
- Reinicia el servidor después de actualizar `.env.local`

### "Invalid site key"
- Verifica que el Site Key sea correcto
- Asegúrate de que el dominio esté agregado en Google reCAPTCHA

### "Verificación fallida"
- Verifica que el Secret Key sea correcto
- Revisa la consola del servidor para ver errores

### reCAPTCHA no aparece
- Verifica que `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` esté configurado
- Revisa la consola del navegador (F12) para errores

---

## 🔒 SEGURIDAD

- **NUNCA** expongas tu Secret Key en el frontend
- Solo `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` debe estar en el cliente
- `RECAPTCHA_SECRET_KEY` solo se usa en el servidor

---

## 📝 NOTAS

- Para desarrollo local, agrega `localhost` como dominio en Google reCAPTCHA
- Para producción, agrega tu dominio real (ej: `livoo.com`)
- Puedes usar las claves de prueba de Google para desarrollo (pero no funcionarán realmente)

---

**¡Listo! En 5 minutos tendrás reCAPTCHA configurado.** 🛡️

