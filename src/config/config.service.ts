import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';
import * as path from 'path'; // 👈 Importamos 'path' para construir rutas robustas

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    // 1. Determina el entorno (development por defecto)
    const env = process.env.NODE_ENV || 'development';
    
    // 2. Construye la ruta al archivo .env de forma dinámica y robusta
    // Usamos path.join para evitar problemas con barras en distintos sistemas operativos
    const envFilePath = `${__dirname}/../../../.env.${env}`;
    
    // 3. Verifica si el archivo existe (CORRECCIÓN: Definimos existsPath aquí)
    const existsPath = fs.existsSync(envFilePath); 
    
    console.log("*********", envFilePath);

    if (!existsPath) {
      // Si no existe, muestra el mensaje de error y sale
      console.log(`.env.${env} no existe (${env.toUpperCase()})`);
      process.exit(0); // resalto en rojo
    } 
    
    // 4. Si existe, lo lee y parsea
    this.envConfig = parse(fs.readFileSync(envFilePath));
  } // <--- Cierre correcto del constructor

  get(key: string): string {
    return this.envConfig[key];
  }
} // <--- Cierre de la clase