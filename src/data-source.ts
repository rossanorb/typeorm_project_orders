import "reflect-metadata"
import { DataSource } from "typeorm"
import * as entities  from "./entity"
import * as migrations from "./database/migrations/migrations"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql.localhost.com",
    port: 3306,
    username: "root",
    password: "102030",
    database: "typeorm_project_orders",
    synchronize: false, //" Enable this feature only for specific proposals. Everything you do within the entities will be reflected here in real time
    logging: false,
    entities: entities,
    migrations: migrations,
    subscribers: [],
})
