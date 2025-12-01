# 🗺️ CONFIGURAR GOOGLE MAPS

## ⚡ INICIO RÁPIDO (10 minutos)

### PASO 1: Crear API Key en Google Cloud

1. Ve a: **https://console.cloud.google.com/**
2. Inicia sesión con tu cuenta de Google
3. Crea un proyecto nuevo o selecciona uno existente
4. Ve a **"APIs & Services"** → **"Library"**
5. Busca **"Maps JavaScript API"**
6. Click en **"Enable"** (habilitar)
7. Ve a **"APIs & Services"** → **"Credentials"**
8. Click en **"Create Credentials"** → **"API Key"**
9. **Copia la API Key** generada

### PASO 2: Configurar Restricciones (Recomendado)

1. Click en la API Key que acabas de crear
2. En **"Application restrictions"**, selecciona **"HTTP referrers"**
3. Agrega estos referrers:
   ```
   localhost:3000/*
   livoo.io/*
   *.livoo.io/*
   ```
4. En **"API restrictions"**, selecciona **"Restrict key"**
5. Selecciona solo **"Maps JavaScript API"**
6. Click en **"Save"**

### PASO 3: Actualizar .env.local

**Opción A - Script Automático:**
```bash
./scripts/configurar-google-maps.sh
```

**Opción B - Manual:**
Abre `.env.local` y agrega:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC...tu_api_key_aqui
```

### PASO 4: Agregar en Vercel

Cuando hagas deploy:
1. Ve a Settings → Environment Variables
2. Agrega: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
3. Valor: Tu API Key

### PASO 5: Probar

```bash
npm run dev
```
Ve a `/contacto` y deberías ver el mapa funcionando.

---

## 💰 COSTOS

### Plan Gratuito de Google Maps:
- **$200 USD de crédito gratis** por mes
- Esto cubre aproximadamente **28,000 cargas de mapa** por mes
- Para la mayoría de sitios, es suficiente

### Después del crédito:
- $7 USD por cada 1,000 cargas adicionales
- Solo pagas si superas el crédito gratuito

---

## 📋 CHECKLIST

- [ ] Cuenta de Google Cloud creada
- [ ] Proyecto creado
- [ ] Maps JavaScript API habilitada
- [ ] API Key creada
- [ ] Restricciones configuradas
- [ ] API Key en `.env.local`
- [ ] API Key en Vercel (cuando hagas deploy)
- [ ] Mapa funcionando en `/contacto`

---

## 🆘 PROBLEMAS COMUNES

### "This page can't load Google Maps correctly"
- Verifica que la API Key sea correcta
- Verifica que "Maps JavaScript API" esté habilitada
- Verifica que las restricciones permitan tu dominio

### Mapa no aparece
- Verifica que `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` esté configurado
- Revisa la consola del navegador (F12) para errores
- Reinicia el servidor después de agregar la variable

---

**¡Listo! En 10 minutos tendrás Google Maps funcionando.** 🗺️

