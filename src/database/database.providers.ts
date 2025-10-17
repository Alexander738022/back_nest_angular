import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource = new DataSource({ // Se corrige a 'DataSource' importado
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'Sailpbj6621',
                database: 'back_nest_angularAV',
                // Se añaden estas propiedades esenciales para que TypeORM funcione:
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true, 
            });
            return dataSource.initialize();
        },
    },
];