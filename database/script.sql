-- Database: Tienda

-- DROP DATABASE "Tienda";

CREATE DATABASE "Tienda"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Ecuador.1252'
    LC_CTYPE = 'Spanish_Ecuador.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


CREATE TABLE cliente (
	cliente_id SERIAL PRIMARY KEY,
	cedula VARCHAR(10) NOT NULL UNIQUE,
	nombres VARCHAR (50) NOT NULL,
	apellidos VARCHAR(50) NOT NULL	
);