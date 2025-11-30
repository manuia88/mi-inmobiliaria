# 📝 PASO A PASO: CONECTAR CON GITHUB

## ✅ Lo que ya está hecho:

- ✅ Repositorio Git inicializado
- ✅ Todos los archivos agregados
- ✅ Commit inicial creado
- ✅ Rama renombrada a `main`

## 🚀 SIGUIENTE PASO: Crear repositorio en GitHub

### Paso 1: Crear el repositorio en GitHub

1. **Abre tu navegador** y ve a: https://github.com/new

2. **Completa el formulario:**
   - **Repository name:** `mi-inmobiliaria`
   - **Description:** `Sitio web inmobiliario profesional con Next.js`
   - **Visibilidad:** Público o Privado (tú decides)
   - **⚠️ IMPORTANTE:** NO marques ninguna casilla:
     - ❌ NO marques "Add a README file"
     - ❌ NO marques "Add .gitignore"
     - ❌ NO marques "Choose a license"

3. **Click en el botón verde:** "Create repository"

4. **NO ejecutes los comandos que GitHub te muestra** (ya los hicimos)

### Paso 2: Conectar tu proyecto local con GitHub

**Después de crear el repositorio en GitHub**, ejecuta este comando en la terminal:

```bash
cd "/Users/manuelacosta/Desktop/Proyectos Cursor/Pagina Web"
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git
```

**⚠️ IMPORTANTE:** Reemplaza `TU-USUARIO` con tu usuario de GitHub.

**Para encontrar tu usuario:**
- Mira la URL de tu perfil en GitHub (ej: `https://github.com/manuacosta`)
- O mira la esquina superior derecha de GitHub cuando estés logueado

### Paso 3: Subir el código a GitHub

```bash
git push -u origin main
```

**Si te pide usuario y contraseña:**

- **Usuario:** Tu usuario de GitHub
- **Contraseña:** NO uses tu contraseña de GitHub. En su lugar:

#### Crear Personal Access Token:

1. Ve a: https://github.com/settings/tokens
2. Click en: **"Generate new token"** → **"Generate new token (classic)"**
3. **Nombre del token:** `Vercel Deployment`
4. **Expiración:** Elige una fecha (ej: 90 días o sin expiración)
5. **Selecciona scopes:** Marca la casilla **`repo`** (marca toda la sección)
6. Click en: **"Generate token"** (abajo)
7. **⚠️ COPIA EL TOKEN INMEDIATAMENTE** (solo se muestra una vez)
8. Úsalo como contraseña cuando Git te lo pida

### Paso 4: Verificar

1. Recarga la página de tu repositorio en GitHub
2. Deberías ver todos los archivos del proyecto
3. Si ves los archivos, ¡perfecto! Continúa al siguiente paso (Vercel)

---

## 🆘 Si algo sale mal:

### Error: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git
```

### Error: "Authentication failed"

- Verifica que estés usando el Personal Access Token (no tu contraseña)
- Asegúrate de que el token tenga permisos `repo`

### Error: "Repository not found"

- Verifica que el nombre del repositorio sea exactamente `mi-inmobiliaria`
- Verifica que tu usuario de GitHub sea correcto
- Asegúrate de haber creado el repositorio en GitHub primero

---

## ✅ Checklist:

- [ ] Repositorio creado en GitHub (nombre: `mi-inmobiliaria`)
- [ ] Repositorio conectado con `git remote add origin`
- [ ] Código subido con `git push -u origin main`
- [ ] Archivos visibles en GitHub

---

**Una vez completado, continúa con el deployment en Vercel siguiendo `VERCEL-DEPLOY-INSTRUCTIONS.md`**

