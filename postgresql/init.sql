-- init.sql

-- Crear la tabla nombres
CREATE TABLE nombres (
    id_nombres SERIAL PRIMARY KEY,
    pr_nombre VARCHAR(255) NOT NULL
);
