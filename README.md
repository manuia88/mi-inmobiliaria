# 🏠 Sitio Inmobiliario - Next.js

Sitio web inmobiliario profesional construido con Next.js 14, React, TypeScript y Tailwind CSS.

## ✨ Características

- ✅ **Diseño Responsive** - Perfecto en móvil, tablet y desktop
- ✅ **Catálogo de Propiedades** - Con filtros avanzados
- ✅ **Páginas de Detalle** - Información completa de cada propiedad
- ✅ **Formularios** - Para vender propiedades y contacto
- ✅ **SEO Optimizado** - Meta tags y estructura correcta
- ✅ **Performance** - Carga rápida y optimizada
- ✅ **TypeScript** - Código type-safe
- ✅ **Tailwind CSS** - Estilos modernos y consistentes

## 🚀 Inicio Rápido

### Opción 1: Deployment en Vercel (Recomendado - MÁS FÁCIL)

**Paso 1:** Sube el código a GitHub
1. Ve a [github.com/new](https://github.com/new)
2. Crea un nuevo repositorio llamado `mi-inmobiliaria`
3. NO inicialices con README, .gitignore o licencia
4. Copia los comandos que te muestra GitHub

**Paso 2:** En tu computadora, abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mi-inmobiliaria.git
git push -u origin main
```

**Paso 3:** Deploy en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Click en "Sign Up" y regístrate con GitHub
3. Click en "Add New..." → "Project"
4. Selecciona tu repositorio `mi-inmobiliaria`
5. Click en "Deploy"

**¡Listo! Tu sitio estará en línea en 2 minutos** 🎉

URL: `https://tu-proyecto.vercel.app`

---

### Opción 2: Desarrollo Local (Para editar y probar)

**Requisitos:**
- Node.js 18+ ([descargar](https://nodejs.org/))
- Git ([descargar](https://git-scm.com/))

**Paso 1:** Instalar dependencias

```bash
npm install
```

**Paso 2:** Ejecutar en modo desarrollo

```bash
npm run dev
```

**Paso 3:** Abrir en navegador

```
http://localhost:3000
```

---

## 📁 Estructura del Proyecto

```
inmobiliaria-nextjs/
├── app/                      # Páginas y rutas
│   ├── page.tsx             # Página principal (Home)
│   ├── propiedades/         
│   │   ├── page.tsx         # Listado de propiedades
│   │   └── [id]/            
│   │       └── page.tsx     # Detalle de propiedad
│   ├── vender/              
│   │   └── page.tsx         # Formulario para vender
│   ├── contacto/            
│   │   └── page.tsx         # Página de contacto
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Estilos globales
│
├── components/              # Componentes reutilizables
│   ├── Header.tsx           # Navegación
│   ├── Footer.tsx           # Pie de página
│   └── PropertyCard.tsx     # Card de propiedad
│
├── data/                    # Datos
│   └── properties.ts        # Propiedades (base de datos temporal)
│
├── public/                  # Archivos estáticos
│
├── package.json             # Dependencias
├── tsconfig.json           # Configuración TypeScript
├── tailwind.config.js      # Configuración Tailwind
└── next.config.js          # Configuración Next.js
```

---

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#TU_COLOR',  // Color principal
    700: '#TU_COLOR',  // Color hover
  },
}
```

### Cambiar Logo

1. Edita `components/Header.tsx`
2. Reemplaza el texto "Mi Inmobiliaria" con:

```tsx
<Image 
  src="/logo.png" 
  alt="Logo" 
  width={180} 
  height={50} 
/>
```

3. Coloca tu logo en la carpeta `public/`

### Agregar/Editar Propiedades

Edita `data/properties.ts`:

```typescript
{
  id: '7',
  title: 'Tu Nueva Propiedad',
  price: 1500000,
  currency: 'MXN',
  type: 'Casa',
  transaction: 'Venta',
  // ... más campos
}
```

---

## 🌐 Conectar Dominio Personalizado

### En Vercel:

1. Ve a tu proyecto en Vercel
2. Click en "Settings" → "Domains"
3. Agrega tu dominio: `tuempresa.com`
4. Sigue las instrucciones DNS
5. Espera 24-48 horas para propagación

**Dominios recomendados:**
- [Namecheap](https://namecheap.com) - ~$10/año
- [Google Domains](https://domains.google) - ~$12/año
- [GoDaddy](https://godaddy.com) - ~$15/año

---

## 📧 Conectar Formularios (Email)

### Opción A: EmailJS (Gratis)

1. Regístrate en [emailjs.com](https://emailjs.com)
2. Crea un servicio de email
3. Obtén tu `Service ID`, `Template ID` y `Public Key`
4. Instala EmailJS:

```bash
npm install @emailjs/browser
```

5. En tu formulario agrega:

```typescript
import emailjs from '@emailjs/browser'

const sendEmail = (formData) => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
}
```

### Opción B: Formspree (Gratis hasta 50/mes)

1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. En tu código:

```tsx
<form action="https://formspree.io/f/TU_ID" method="POST">
  {/* campos */}
</form>
```

---

## 📊 Google Analytics

1. Crea una cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtén tu `Measurement ID` (formato: G-XXXXXXXXXX)
3. Instala el script en `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 📱 Botón de WhatsApp

Agrega este componente en `components/WhatsAppButton.tsx`:

```tsx
export default function WhatsAppButton() {
  const phoneNumber = "5213312345678" // Tu número con código de país
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      target="_blank"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  )
}
```

Importa en `app/layout.tsx`:

```tsx
import WhatsAppButton from '@/components/WhatsAppButton'

// Dentro del body:
<WhatsAppButton />
```

---

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Inicia servidor desarrollo

# Producción
npm run build        # Construye para producción
npm start            # Inicia servidor producción

# Linting
npm run lint         # Revisa errores de código
```

---

## 📝 Agregar Nuevas Páginas

### Crear Página "Nosotros"

1. Crea `app/nosotros/page.tsx`:

```tsx
export default function NosotrosPage() {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      {/* contenido */}
    </div>
  )
}
```

2. Agrega al menú en `components/Header.tsx`:

```tsx
{ name: 'Nosotros', href: '/nosotros' }
```

---

## 🗄️ Conectar Base de Datos

### Con Supabase (Gratis - Recomendado)

1. Crea cuenta en [supabase.com](https://supabase.com)
2. Crea nuevo proyecto
3. Instala cliente:

```bash
npm install @supabase/supabase-js
```

4. Crea `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'TU_SUPABASE_URL',
  'TU_SUPABASE_KEY'
)
```

5. Usa en tus páginas:

```typescript
const { data } = await supabase
  .from('properties')
  .select('*')
```

---

## 🎯 Próximos Pasos

### Semana 1:
- [x] Deploy básico en Vercel
- [ ] Conectar dominio personalizado
- [ ] Configurar Analytics
- [ ] Agregar 10-20 propiedades reales

### Semana 2:
- [ ] Conectar formularios con email
- [ ] Agregar botón WhatsApp
- [ ] Optimizar imágenes
- [ ] Configurar SEO (meta tags)

### Mes 1:
- [ ] Conectar base de datos (Supabase)
- [ ] Sistema de administración
- [ ] Blog/Noticias
- [ ] Testimonios de clientes

### Mes 2+:
- [ ] Sistema de favoritos
- [ ] Comparador de propiedades
- [ ] Tours virtuales 360°
- [ ] Búsqueda con IA
- [ ] Calculadora de hipotecas
- [ ] Chat en vivo

---

## 💡 Tips de Edición

### Editar Texto

Todos los textos están en los archivos `.tsx`. Busca el texto que quieres cambiar y edítalo directamente.

### Cambiar Imágenes

Las imágenes actuales son placeholders de Unsplash. Reemplázalas con tus propias imágenes:

1. Sube tus imágenes a `public/images/`
2. Cambia las URLs en el código:

```tsx
// Antes:
src="https://images.unsplash.com/..."

// Después:
src="/images/mi-imagen.jpg"
```

### Agregar Secciones

Copia el patrón de las secciones existentes:

```tsx
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2>Tu Título</h2>
    {/* contenido */}
  </div>
</section>
```

---

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
npm install
```

### Puerto 3000 ocupado
```bash
# Usa otro puerto:
npm run dev -- -p 3001
```

### Errores de TypeScript
```bash
# Ignora errores temporalmente (no recomendado):
npm run build -- --no-lint
```

### Imágenes no cargan
Verifica que la URL esté correcta y el dominio esté en `next.config.js`:

```javascript
images: {
  domains: ['tudominio.com'],
}
```

---

## 📚 Recursos de Aprendizaje

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

## 🆘 Obtener Ayuda

### Si algo no funciona:

1. **Revisa la consola del navegador** (F12)
2. **Revisa la terminal** donde corre `npm run dev`
3. **Busca el error en Google** con "next.js" + el mensaje de error
4. **Pregunta en la comunidad**:
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
   - [Next.js Discord](https://nextjs.org/discord)

### Para preguntas específicas:

- **Dudas de código**: Dame el error específico y te ayudo
- **Personalización**: Dime qué quieres cambiar
- **Features nuevos**: Explícame qué necesitas

---

## 📄 Licencia

Este proyecto es de código abierto. Úsalo libremente para tu negocio inmobiliario.

---

## 🎉 ¡Éxito con tu Proyecto!

**Recuerda:**
- Empieza simple y ve agregando features
- Prueba todo en mobile y desktop
- Pide feedback a usuarios reales
- Itera y mejora constantemente

**¿Dudas o necesitas ayuda?** Solo pregunta, estoy aquí para ayudarte en cada paso 🚀

---

Made with ❤️ for tu negocio inmobiliario
