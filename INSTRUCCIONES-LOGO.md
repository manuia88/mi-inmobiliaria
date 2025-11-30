# 📸 INSTRUCCIONES: Agregar Logo MoEasy

## ⚠️ ESTADO ACTUAL

**El logo `moeasy_logo.webp` NO se encuentra en la carpeta `public/`**

La carpeta `public/` está vacía actualmente.

---

## ✅ SOLUCIÓN: Agregar el Logo

### Opción 1: Si ya tienes el archivo del logo

1. **Localiza el archivo** `moeasy_logo.webp` en tu computadora
2. **Copia el archivo** a la carpeta `public/` del proyecto:
   - Ruta completa: `/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web/public/`
3. **Asegúrate** de que el nombre del archivo sea exactamente: `moeasy_logo.webp`

### Opción 2: Si el logo está en otra ubicación

Si el logo está en otra carpeta (por ejemplo, en Downloads o Desktop):

**En Mac:**
1. Abre Finder
2. Navega a: `/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web/public/`
3. Arrastra el archivo `moeasy_logo.webp` a esa carpeta

**O desde Terminal:**
```bash
# Reemplaza RUTA_AL_LOGO con la ruta donde está tu logo
cp RUTA_AL_LOGO/moeasy_logo.webp "/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web/public/"
```

### Opción 3: Si el logo tiene otro nombre o formato

Si el logo tiene otro nombre (ej: `logo.png`, `moeasy.png`, etc.):

1. **Renómbralo** a `moeasy_logo.webp`
2. **O actualiza** el código en `components/Header.tsx` línea 25:
   ```tsx
   src="/TU_NOMBRE_DE_ARCHIVO.webp"
   ```

---

## 🔍 VERIFICACIÓN

Después de agregar el logo, ejecuta este comando para verificar:

```bash
cd "/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web"
ls -lh public/moeasy_logo.webp
```

Si ves información del archivo, ¡está correctamente ubicado!

---

## 🚀 PRUEBA

1. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Abre en el navegador:**
   ```
   http://localhost:3000
   ```

3. **Verifica** que el logo aparezca en la parte superior izquierda del sitio

---

## 📝 NOTAS IMPORTANTES

- El archivo debe estar en la carpeta `public/` (no en `public/images/` u otra subcarpeta)
- El nombre debe ser exactamente `moeasy_logo.webp` (respetando mayúsculas/minúsculas)
- El formato `.webp` es recomendado, pero también funcionan `.png`, `.jpg`, `.svg`
- Si usas otro formato, actualiza la extensión en `components/Header.tsx`

---

## ❓ ¿DÓNDE ESTÁ TU LOGO?

Si no sabes dónde está el logo, busca en:
- Carpeta de Descargas (Downloads)
- Escritorio (Desktop)
- Documentos
- O pregunta a quien te proporcionó el logo

---

**Una vez que agregues el logo, el sitio estará completamente funcional con la identidad visual de MoEasy! 🎨**

