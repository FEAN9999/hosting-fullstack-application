import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
import * as dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.dbPort,

  dialect: "postgres",
  storage: ":memory:",
});
