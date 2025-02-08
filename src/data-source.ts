import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { migrations } from "./database/migrations/migrations"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "172.17.0.1",
    port: 3306,
    username: "root",
    password: "102030",
    database: "typeorm_project_orders",
    synchronize: false, //" Enable this feature only for specific proposals. Everything you do within the entities will be reflected here in real time
    logging: false,
    entities: [User],
    migrations: migrations,
    subscribers: [],
})
