import dotenv from "dotenv";
import 'reflect-metadata';
import { DataSource } from "typeorm";
import * as migrations from './database/migrations/migrations';
import * as entities from './entity';
import { CustomLogger } from "./utils/CustomLogger";
dotenv.config();


export const AppDataSource = new DataSource({
  type: (process.env.DB_TYPE as "mysql" | "mariadb" | "postgres"),
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306", 10),
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "typeorm_project_orders",
  synchronize: false,
  // logging: true,
  logger: new CustomLogger(),
  entities: entities,
  migrations: migrations,
  subscribers: [],
  supportBigNumbers: true,
  cache: false,
});
