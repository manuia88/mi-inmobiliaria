-- Script SQL para agregar la columna 'antiguedad' a la tabla leads_captacion
-- Ejecuta este script en el SQL Editor de Supabase si la columna no existe

-- Verificar si la columna existe y agregarla si no existe
ALTER TABLE leads_captacion 
ADD COLUMN IF NOT EXISTS antiguedad INTEGER;

-- Verificar que la columna se agregó correctamente
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'leads_captacion'
ORDER BY ordinal_position;

