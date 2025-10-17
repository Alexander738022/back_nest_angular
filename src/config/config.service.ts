import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';
import * as path from 'path'; // 👈 Importamos 'path' para construir rutas robustas

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production'

    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../../.env.development'
      const existsPath = fs.existsSync(envFilePath)

      if (!existsPath) {
        console.log('.env.development no existe DEVELOPMENT')
        process.exit(0) // resalto en rojo
      } else {
        this.envConfig = parse(fs.readFileSync(envFilePath))
      }
    } else {
      const envFilePath = __dirname + '/../../.env.production'
      const existsPath = fs.existsSync(envFilePath)

      if (!existsPath) {
        console.log('.env.production no existe PRODUCTION')
        process.exit(0) // resalto en rojo
      } else {
        this.envConfig = parse(fs.readFileSync(envFilePath))
      }
    }
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}