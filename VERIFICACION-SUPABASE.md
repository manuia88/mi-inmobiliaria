# 🔍 Verificación de Supabase

## ✅ Checklist de Verificación

### 1. Variables de Entorno
- [x] `NEXT_PUBLIC_SUPABASE_URL` configurada
- [x] `NEXT_PUBLIC_SUPABASE_ANON_KEY` configurada  
- [x] `SUPABASE_SERVICE_ROLE_KEY` configurada (nueva clave regenerada)

### 2. Estructura de la Tabla `leads_captacion`

La tabla debe tener las siguientes columnas:

#### Campos Requeridos:
- ✅ `name` (TEXT)
- ✅ `email` (TEXT)
- ✅ `phone` (TEXT)
- ✅ `property_type` (TEXT)
- ✅ `transaction_type` (TEXT)
- ✅ `address` (TEXT)
- ✅ `city` (TEXT)
- ✅ `state` (TEXT)
- ✅ `zip_code` (TEXT)
- ✅ `price` (TEXT)

#### Campos Opcionales:
- ✅ `bedrooms` (INTEGER)
- ✅ `bathrooms` (NUMERIC)
- ✅ `construction_area` (INTEGER)
- ✅ `land_area` (INTEGER)
- ✅ `parking` (INTEGER)
- ⚠️ **`antiguedad` (INTEGER)** - **NUEVO - Verificar que exista**
- ✅ `description` (TEXT)
- ✅ `photo_urls` (TEXT[])

#### Campos Automáticos:
- ✅ `id` (UUID, PRIMARY KEY)
- ✅ `created_at` (TIMESTAMP WITH TIME ZONE)

---

## 🔧 Si falta la columna `antiguedad`

### Pasos para agregarla:

1. **Ve a tu dashboard de Supabase:**
   - https://supabase.com/dashboard
   - Selecciona tu proyecto: `grydfdsaepwzrzrthwqv`

2. **Abre el SQL Editor:**
   - Menú lateral → "SQL Editor"
   - Click en "New query"

3. **Ejecuta este SQL:**
   ```sql
   ALTER TABLE leads_captacion 
   ADD COLUMN IF NOT EXISTS antiguedad INTEGER;
   ```

4. **Verifica que se agregó:**
   ```sql
   SELECT column_name, data_type, is_nullable
   FROM information_schema.columns
   WHERE table_name = 'leads_captacion'
   ORDER BY ordinal_position;
   ```

---

## 📋 Script SQL Completo (si necesitas recrear la tabla)

Si por alguna razón necesitas recrear la tabla completa con la columna `antiguedad`:

```sql
-- Eliminar tabla existente (¡CUIDADO! Esto borra todos los datos)
-- DROP TABLE IF EXISTS leads_captacion;

-- Crear tabla con todas las columnas incluyendo antiguedad
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
  antiguedad INTEGER,
  description TEXT,
  photo_urls TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## ✅ Verificación Manual

Para verificar que todo funciona:

1. **Ejecuta el script de verificación:**
   ```bash
   node scripts/verificar-supabase-simple.js
   ```

2. **Prueba el formulario:**
   - Ve a `http://localhost:3000/vender`
   - Completa el formulario incluyendo "Años de construcción"
   - Envía el formulario
   - Verifica en Supabase que el registro se guardó con `antiguedad`

3. **Revisa en Supabase Dashboard:**
   - Table Editor → `leads_captacion`
   - Verifica que los nuevos registros tengan la columna `antiguedad` poblada

---

## 🚨 Problemas Comunes

### Error: "column 'antiguedad' does not exist"
**Solución:** Ejecuta el SQL para agregar la columna (ver arriba)

### Error: "Supabase no está configurado"
**Solución:** Verifica que `.env.local` tenga todas las variables configuradas

### Error: "permission denied"
**Solución:** Verifica que `SUPABASE_SERVICE_ROLE_KEY` sea la clave correcta y tenga permisos

---

## 📝 Archivos de Verificación

- `scripts/verificar-supabase-simple.js` - Script de verificación
- `scripts/agregar-columna-antiguedad.sql` - SQL para agregar la columna
- Este archivo (`VERIFICACION-SUPABASE.md`) - Documentación

