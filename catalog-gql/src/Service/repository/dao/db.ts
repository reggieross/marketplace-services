
import { ENV } from "../../../env";
import { IMain, IDatabase } from "pg-promise";
import * as pgPromise from "pg-promise";

const pgp: IMain = pgPromise({
  // Initialization Options
});

const config = {
  user: ENV.POSTGRES_DATABASE_USER,
  password: ENV.POSTGRES_DATABASE_PW,
  host: ENV.POSTGRES_DATABASE_HOST,
  port: 5432,
  database: ENV.DB_NAME,
};

let db: IDatabase<any>;

export const getDB = (): IDatabase<any> => {
  if (!db) {
    db =  pgp(`postgres://${ENV.POSTGRES_DATABASE_USER}:${ENV.POSTGRES_DATABASE_PW}@${ENV.POSTGRES_DATABASE_HOST}/${ENV.DB_NAME}`);
  }
  return db
};
