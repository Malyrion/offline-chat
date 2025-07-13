import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntitySchema } from "../users/Data";
import {GroupEntitySchema } from "../groups/Data";
import { GroupMembersEntitySchema } from "../members/Data";

import 'dotenv/config';
import { MessagesEntitySchema } from "../messages/Data";

const getMigrations = ():string[] => {
        return [
            'src/migrations/**/*.ts',
        ];

}

export const createDataSource = (config:DataSourceOptions):DataSource => {
    return new DataSource(config)
}

export const databaseConfig: DataSourceOptions = {
    type: 'postgres',
    logging: true,
    synchronize: false,
    entities: [UserEntitySchema,GroupEntitySchema,GroupMembersEntitySchema,MessagesEntitySchema],
    migrations: getMigrations(),
    subscribers: [],
    replication: {
        master: {
            host: process.env.POSTGRES_HOST,
            port:  Number(process.env.POSTGRES_PORT) || 5432,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            ssl: false,
        },
        slaves: [],
    },
}

const AppDataSource = createDataSource(databaseConfig);

export {AppDataSource}