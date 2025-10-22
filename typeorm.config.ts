import { config } from 'dotenv';
import { DataSource } from 'typeorm';

// 👈 CORRECCIÓN CLAVE 1: Debes declarar la variable 'env' antes de usarla
const env = process.env.NODE_ENV || 'development'; 

config({
    override: true,
    path: `.env.${env}`, // <-- 'env' ya existe aquí
    debug: true,
});

export default new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    
    // CORRECCIÓN CLAVE 2: Proporcionar valor por defecto para el puerto
    port: +(process.env.PORT ?? 5432), 
    
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    
    entities: ['src/**/*.entity.ts'],
    
    migrations: ['src/database/migrations/*.ts'],
});