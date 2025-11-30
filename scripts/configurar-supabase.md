# 🗄️ GUÍA RÁPIDA: Configurar Supabase

## Paso 1: Crear cuenta y proyecto en Supabase

1. Ve a https://supabase.com/
2. Click en "Start your project" (es gratis)
3. Regístrate con GitHub o email
4. Click en "New Project"
5. Completa:
   - **Name:** `livoo-bienes-raices`
   - **Database Password:** (guarda esta contraseña)
   - **Region:** Elige la más cercana
6. Click en "Create new project"
7. Espera 2-3 minutos mientras se crea

## Paso 2: Obtener credenciales

1. En tu proyecto, ve a "Settings" → "API"
2. **Copia la URL** (ej: `https://xxxxx.supabase.co`)
3. **Copia la anon/public key** (ej: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## Paso 3: Crear las tablas

1. Ve a "SQL Editor" en el menú lateral
2. Click en "New query"
3. Copia y pega este SQL:

```sql
-- Tabla para leads de contacto
CREATE TABLE IF NOT EXISTS leads_contacto (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para leads de propiedades
CREATE TABLE IF NOT EXISTS leads_propiedades (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_id TEXT NOT NULL,
  property_title TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para leads de captación (vender propiedad)
CREATE TABLE IF NOT EXISTS leads_captacion (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_type TEXT NOT NULL,
  transaction_type TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  price TEXT NOT NULL,
  bedrooms INTEGER,
  bathrooms NUMERIC,
  construction_area INTEGER,
  land_area INTEGER,
  parking INTEGER,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE leads_contacto ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads_propiedades ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads_captacion ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir inserción pública
CREATE POLICY "Allow public insert on leads_contacto"
ON leads_contacto FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public insert on leads_propiedades"
ON leads_propiedades FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public insert on leads_captacion"
ON leads_captacion FOR INSERT
TO anon
WITH CHECK (true);
```

4. Click en "Run" o presiona Ctrl+Enter
5. Deberías ver "Success. No rows returned"

## Paso 4: Actualizar .env.local

Abre el archivo `.env.local` y agrega:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co  # ← Tu URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  # ← Tu anon key
```

## Paso 5: Verificar

1. Reinicia el servidor: `npm run dev`
2. Envía un formulario de contacto
3. Ve a Supabase → "Table Editor" → `leads_contacto`
4. Deberías ver el nuevo registro

---

**¿Problemas?** Verifica que las políticas RLS estén activas y permitan inserción pública.

